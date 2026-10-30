// ============================================================================
// Mid-Ticket / PG1 / Inbound tabs data pipeline: "Phone Team Sales Report 2026" Schedule tab +
// Aloware call-log CSVs -> asr_closer_dashboard.html on GitHub -> Vercel auto-deploy.
// Mirrors claudeRefreshAndPublish.gs's publish mechanism (same repo, same Git Data API push), but
// reads from a DIFFERENT spreadsheet and a Drive folder of CSVs instead of the Sched tab, and
// writes a NEW const (PHONE_RAW) into the dashboard -- it does not touch RAW_SCHED/TREND_*,
// which stay owned by claudeRefreshAndPublish.gs. Per explicit instruction, this pipeline is
// scoped ONLY to the Mid-Ticket/PG1/Inbound tabs; it must never be wired into Setter or Closer.
//
// ONE-TIME SETUP (full instructions at the bottom of this file):
//   1. Open the "Phone Team Sales Report 2026" spreadsheet's Apps Script editor (Extensions >
//      Apps Script) -- this is a SEPARATE Apps Script project from "ASR - No Show"'s, bound to
//      this different spreadsheet.
//   2. Paste this whole file in as a new script file.
//   3. Add a GITHUB_PAT script property (same token used for claudeRefreshAndPublish.gs works --
//      it's scoped to the same pg-dashboard repo -- or generate a fresh one the same way).
//   4. Add an hourly (or however-often-makes-sense) time-driven trigger for phoneRefreshAndPublish.
//   5. Run phoneRefreshAndPublish once manually to test; check Executions and the GitHub repo for
//      a new commit.
// ============================================================================

var PHONE_GITHUB_OWNER = 'markdeguzman-png';
var PHONE_GITHUB_REPO = 'pg-dashboard';
var PHONE_GITHUB_BRANCH = 'main';
var PHONE_DASHBOARD_PATH = 'asr_closer_dashboard.html';
var PHONE_RAW_URL = 'https://raw.githubusercontent.com/' + PHONE_GITHUB_OWNER + '/' +
  PHONE_GITHUB_REPO + '/' + PHONE_GITHUB_BRANCH + '/' + PHONE_DASHBOARD_PATH;

// The "Phone Team Sales Report 2026" spreadsheet and its Schedule tab.
var PHONE_SHEET_ID = '15Hgi2w-JUpwQQEYDJVYdwX5PhwMOi6rW-63WxNry2zQ';
var SCHEDULE_TAB_NAME = 'Schedule';

// Aloware call logs are organized as one subfolder per calendar month ("01-01-2026", "02-01-2026",
// ... "MM-01-YYYY") under this root -- discovered 2026-10-31 after a user report that Connected
// Calls looked wrong for the whole year; the pipeline had only ever been pointed at the October
// subfolder. Total volume across Jan-Oct 2026 is ~1.1GB (Jan-May are single ~105-131MB monthly
// files; Jun onward are ~4 weekly files/month) -- far too much to download and parse in one Apps
// Script run (6-minute execution ceiling), so this is handled as an incremental backfill: see
// buildConnectedByNameDate_() below.
var ALOWARE_ROOT_FOLDER_ID = '1nR7-OTb_MJ6jYf3xpEWLKtBco2a1ok85';
// Folder-name pattern for a real month folder to process: "MM-01-YYYY". Catches a stray
// differently-dated folder (e.g. a "10-01-2025" left over from the prior year) without needing it
// hand-excluded.
var ALOWARE_MONTH_FOLDER_RE = /^(0[1-9]|1[0-2])-01-(\d{4})$/;
// Once a past (non-current) month's folder has been fully aggregated, its result is cached
// permanently in this Drive file (JSON, stored in the Aloware root) so it's never re-downloaded --
// only the current month is re-read every run, since it's the only one still gaining files.
var ALOWARE_CACHE_FILENAME = 'phoneConnectedCallsCache.json';
// How many not-yet-cached past months to backfill in a single run. Kept low to stay well inside
// the execution time limit; raise it once Executions shows how long one month actually takes.
var ALOWARE_BACKFILL_MONTHS_PER_RUN = 1;

// Current LOB values (Schedule tab's own "Current LOB" column) that feed each of the 3 new tabs.
// NOTE: this is "Inbound" here, not "Inbound Team" -- that's the label this specific source uses;
// it's a different string than RAW_SCHED/Aloware's "Inbound Team" and the two must not be conflated.
var TARGET_LOBS = ['Mid-Ticket', 'PG1', 'Inbound'];

// A call counts as "Connected" when its Talk Time is at least this many seconds.
var CONNECTED_CALL_MIN_SECONDS = 90;

function phoneRefreshAndPublish() {
  var scheduleValues = SpreadsheetApp.openById(PHONE_SHEET_ID).getSheetByName(SCHEDULE_TAB_NAME).getDataRange().getValues();
  var scheduleRows = extractScheduleRows_(scheduleValues);
  if (!scheduleRows.length) { Logger.log('No active Schedule rows extracted; aborting.'); return; }

  var connectedByNameDate = buildConnectedByNameDate_();

  var rawRows = buildPhoneRaw_(scheduleRows, connectedByNameDate);
  if (!rawRows.length) { Logger.log('No rows produced; aborting.'); return; }

  var nowIso = new Date().toISOString();
  var htmlResp = UrlFetchApp.fetch(PHONE_RAW_URL, { muteHttpExceptions: true });
  if (htmlResp.getResponseCode() !== 200) {
    throw new Error('Could not fetch current dashboard HTML from GitHub: ' + htmlResp.getResponseCode());
  }
  var result = splicePhoneHtml_(htmlResp.getContentText(), rawRows, nowIso);
  if (result === null) { Logger.log('No change in underlying Phone/Aloware data; skipping publish.'); return; }

  publishPhoneToGitHub_(result.content, rawRows);
  PropertiesService.getScriptProperties().setProperty('PHONE_LAST_DATA_DIGEST', result.digest);
}

// ---- Schedule tab extraction ----
function phoneColIdx_(headers, name) {
  var i = headers.indexOf(name);
  if (i === -1) throw new Error('Missing expected Schedule column: ' + name);
  return i;
}

function phoneToNum_(v) {
  if (v === undefined || v === null || v === '') return 0;
  var n = parseFloat(String(v).replace(/,/g, '').replace(/\$/g, ''));
  return isNaN(n) ? 0 : n;
}

function phoneRound2_(x) { return Math.round(x * 100) / 100; }

// Schedule's Date column comes back from getValues() as a native Date object (not the "M/D/YYYY"
// text string Sched's Sheets-API pull returns), so this reads actual date fields instead of
// string-splitting like Sched's isoDate_() does.
function phoneIsoDate_(v) {
  if (!v) return null;
  if (Object.prototype.toString.call(v) === '[object Date]') {
    return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  var s = String(v).trim();
  var parts = s.split('/');
  if (parts.length === 3) {
    var m = ('0' + parts[0]).slice(-2), d = ('0' + parts[1]).slice(-2), y = parts[2];
    return y + '-' + m + '-' + d;
  }
  return null;
}

// One row per (Name, Date) -- skips rows with no Name/Date, or whose Current LOB isn't one of the
// 3 we care about, or whose relevant numeric fields are all zero (matches zero-sum rows don't
// change any sum, so dropping them keeps the extracted set lean without losing any real signal).
// Carries Current Team too, so the dashboard's Team filter can actually narrow this data (not just
// offer options that silently do nothing).
function extractScheduleRows_(values) {
  var headers = values[0];
  var idx = {};
  ['Name', 'Date', 'Current LOB', 'Current Team', 'Clubs', 'PG1', 'Upfront_Revenue', 'closed_deals', 'PG1 Trial', 'PG1 Upfront'].forEach(function (h) {
    idx[h] = phoneColIdx_(headers, h);
  });
  var rows = [];
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    var name = row[idx['Name']];
    if (!name) continue;
    var lob = row[idx['Current LOB']];
    if (TARGET_LOBS.indexOf(lob) === -1) continue;
    var dateStr = phoneIsoDate_(row[idx['Date']]);
    if (!dateStr) continue;
    var team = row[idx['Current Team']] || '(No Team)';
    var clubs = phoneToNum_(row[idx['Clubs']]);
    var pg1 = phoneToNum_(row[idx['PG1']]);
    var upfrontRevenue = phoneToNum_(row[idx['Upfront_Revenue']]);
    var closedDeals = phoneToNum_(row[idx['closed_deals']]);
    var pg1Trial = phoneToNum_(row[idx['PG1 Trial']]);
    var pg1Upfront = phoneToNum_(row[idx['PG1 Upfront']]);
    if (!clubs && !pg1 && !upfrontRevenue && !closedDeals && !pg1Trial && !pg1Upfront) continue;
    rows.push({
      name: String(name).trim(), date: dateStr, lob: lob, team: String(team).trim(),
      clubs: clubs, pg1: pg1, upfrontRevenue: phoneRound2_(upfrontRevenue), closedDeals: closedDeals,
      pg1Trial: pg1Trial, pg1Upfront: pg1Upfront
    });
  }
  return rows;
}


// ---- Aloware call-log folder (treated as one source: every CSV currently in it, every run) ----
// Line Name carries per-line suffixes ("Belle Diaz BF1", "...BF1_deleted_1792700876") that don't
// appear in Schedule's plain Name column -- stripped here before matching.
function cleanLineName_(name) {
  return String(name || '')
    .replace(/_deleted_\d+\s*$/, '')
    .replace(/\s*BF\d+\s*$/, '')
    .trim();
}

function talkTimeToSeconds_(hms) {
  var parts = String(hms || '0:0:0').split(':');
  if (parts.length !== 3) return 0;
  var h = parseInt(parts[0], 10) || 0, m = parseInt(parts[1], 10) || 0, s = parseInt(parts[2], 10) || 0;
  return h * 3600 + m * 60 + s;
}

// Reads every CSV in ONE Aloware month-folder and returns its Connected Calls aggregate directly
// ('normalizedName|date' -> count) -- folded into a single pass (no intermediate raw-row array)
// so a 100MB+ single-file month doesn't also need its own parsed copy held in memory afterward.
// A file that fails to load or parse (oversized blob, unexpected format, ...) is logged and
// skipped rather than failing the whole run -- the largest months here (Jan-May, ~105-131MB each)
// are close to Apps Script's practical blob-size ceiling, so this needs to degrade gracefully.
function computeConnectedCallsForFolder_(folderId) {
  var out = {};
  var files = DriveApp.getFolderById(folderId).getFiles();
  while (files.hasNext()) {
    var file = files.next();
    try {
      var csvText = file.getBlob().getDataAsString();
      var rows = Utilities.parseCsv(csvText);
      if (!rows.length) continue;
      var headers = rows[0];
      var startedIdx = headers.indexOf('Started At');
      var lineIdx = headers.indexOf('Line Name');
      var userIdx = headers.indexOf('User Name');
      var talkIdx = headers.indexOf('Talk Time');
      if (startedIdx === -1 || talkIdx === -1) continue; // unexpected format; skip this file
      for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var started = row[startedIdx];
        if (!started) continue;
        var seconds = talkTimeToSeconds_(row[talkIdx]);
        if (seconds < CONNECTED_CALL_MIN_SECONDS) continue;
        var dateStr = String(started).trim().slice(0, 10); // "YYYY-MM-DD HH:MM:SS" -> date part
        var rawName = lineIdx > -1 && row[lineIdx] ? cleanLineName_(row[lineIdx])
          : (userIdx > -1 ? String(row[userIdx] || '').trim() : '');
        if (!rawName) continue;
        var key = phoneNormalizeName_(rawName) + '|' + dateStr;
        out[key] = (out[key] || 0) + 1;
      }
    } catch (e) {
      Logger.log('Skipping Aloware file "' + file.getName() + '" (folder ' + folderId + '): ' + e);
    }
  }
  return out;
}

// All real "MM-01-YYYY" month subfolders under the Aloware root, sorted chronologically --
// ALOWARE_MONTH_FOLDER_RE excludes anything that doesn't match that exact pattern (e.g. a stray
// differently-dated folder) without needing it hand-listed.
function listAlowareMonthFolders_() {
  var out = [];
  var folders = DriveApp.getFolderById(ALOWARE_ROOT_FOLDER_ID).getFolders();
  while (folders.hasNext()) {
    var f = folders.next();
    var m = ALOWARE_MONTH_FOLDER_RE.exec(f.getName());
    if (!m) continue;
    out.push({ id: f.getId(), name: f.getName(), monthNum: parseInt(m[1], 10), year: parseInt(m[2], 10) });
  }
  out.sort(function (a, b) { return (a.year - b.year) || (a.monthNum - b.monthNum); });
  return out;
}

// ---- Persistent cross-run cache for already-fully-processed (non-current) months ----
// Stored as a small JSON file in the Aloware root itself, not Script Properties (whose 9KB/property
// and 500KB/project caps are too small once several months' worth of per-name-per-day counts pile
// up). Shape: { "months": { "MM-01-YYYY": { "normalizedName|date": count, ... }, ... } }.
function findOrCreateCacheFile_() {
  var root = DriveApp.getFolderById(ALOWARE_ROOT_FOLDER_ID);
  var existing = root.getFilesByName(ALOWARE_CACHE_FILENAME);
  if (existing.hasNext()) return existing.next();
  return root.createFile(ALOWARE_CACHE_FILENAME, JSON.stringify({ months: {} }), MimeType.PLAIN_TEXT);
}
function loadAlowareCache_() {
  var file = findOrCreateCacheFile_();
  try {
    var parsed = JSON.parse(file.getBlob().getDataAsString());
    if (parsed && parsed.months) return { file: file, data: parsed };
  } catch (e) {
    Logger.log('Aloware cache file unreadable/corrupt, starting fresh: ' + e);
  }
  return { file: file, data: { months: {} } };
}
function saveAlowareCache_(cacheFile, data) {
  cacheFile.setContent(JSON.stringify(data));
}

// Orchestrates the full Connected Calls aggregate across every Aloware month: reuses whatever
// past months are already cached, always recomputes the CURRENT month fresh (its files are still
// being added weekly), and backfills at most ALOWARE_BACKFILL_MONTHS_PER_RUN not-yet-cached past
// months per run -- oldest first -- so working through the ~1.1GB January-onward backlog happens
// gradually across several scheduled runs instead of risking a single run timing out. Once every
// past month is cached, steady state is just: current month + a cache read, every run.
function buildConnectedByNameDate_() {
  var monthFolders = listAlowareMonthFolders_();
  if (!monthFolders.length) { Logger.log('No Aloware month folders found under root ' + ALOWARE_ROOT_FOLDER_ID + '.'); return {}; }

  var now = new Date();
  var currentMonthName = Utilities.formatDate(now, Session.getScriptTimeZone(), 'MM-01-yyyy');

  var cache = loadAlowareCache_();
  var cacheDirty = false;
  var backfilled = 0;
  var combined = {};

  monthFolders.forEach(function (mf) {
    var isCurrent = mf.name === currentMonthName;
    var monthAgg;
    if (isCurrent) {
      monthAgg = computeConnectedCallsForFolder_(mf.id);
      // Never cache the current month -- it's incomplete until the month ends.
    } else if (cache.data.months[mf.name]) {
      monthAgg = cache.data.months[mf.name];
    } else if (backfilled < ALOWARE_BACKFILL_MONTHS_PER_RUN) {
      Logger.log('Backfilling Aloware month ' + mf.name + '...');
      monthAgg = computeConnectedCallsForFolder_(mf.id);
      cache.data.months[mf.name] = monthAgg;
      cacheDirty = true;
      backfilled++;
    } else {
      monthAgg = null; // not cached yet, not this run's backfill slot -- picked up on a future run
    }
    if (monthAgg) {
      for (var key in monthAgg) combined[key] = (combined[key] || 0) + monthAgg[key];
    }
  });

  if (cacheDirty) saveAlowareCache_(cache.file, cache.data);
  return combined;
}

// Schedule's Name column sometimes carries a middle initial Aloware's Line Name/User Name doesn't
// (e.g. Schedule "Amie B. Montederamos" vs Aloware "Amie Montederamos", "Kim Paolo B. Planas" vs
// "Kim Paolo Planas") -- confirmed 2026-10-31 by spot-checking Aloware's raw CSVs: those reps had
// real >=90s calls under the shorter name every day, but the exact-string join silently matched
// zero of them, flooring Connected Calls (and therefore Close Rate) at 0 all month. Dropping a
// single-letter middle token (an initial, with or without a trailing period) before joining fixes
// this without needing a hand-maintained alias list, and is a no-op for every name that doesn't
// have one. First and last tokens are never dropped, so a genuinely single-letter first/last name
// survives untouched.
function phoneNormalizeName_(name) {
  var tokens = String(name || '').trim().split(/\s+/);
  if (tokens.length <= 2) return tokens.join(' ').toLowerCase();
  var kept = tokens.filter(function (tok, i) {
    if (i === 0 || i === tokens.length - 1) return true;
    return !/^[A-Za-z]\.?$/.test(tok);
  });
  return kept.join(' ').toLowerCase();
}

// One row per (Name, Date) -- the same granularity RAW_SCHED uses for Setter/Closer, so the
// dashboard's existing matchesTeamFilter()/matchesAgentFilter() pattern (and arbitrary
// Date-Range sums) work on this data exactly the same way, instead of pre-aggregating away the
// per-person detail Team/Agent filtering actually needs.
function buildPhoneRaw_(scheduleRows, connectedByNameDate) {
  return scheduleRows.map(function (r) {
    // Connected Calls resolved by Schedule's Name, normalized the same way Aloware's side was
    // keyed above -- see phoneNormalizeName_'s comment for why this is needed. r.name itself (not
    // normalized) is still what's written into the row -- only the lookup key is normalized.
    var connected = connectedByNameDate[phoneNormalizeName_(r.name) + '|' + r.date] || 0;
    return [r.name, r.team, r.lob, r.date, r.clubs, r.pg1, r.upfrontRevenue, r.closedDeals, r.pg1Trial, r.pg1Upfront, connected];
  });
}

// ---- Splice PHONE_RAW into the dashboard HTML (own const, never touches RAW_SCHED/TREND_*) ----
function phoneMd5Hex_(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, s)
    .map(function (b) { var v = (b < 0 ? b + 256 : b).toString(16); return v.length === 1 ? '0' + v : v; })
    .join('');
}

function phoneReplaceOnce_(str, regex, replacement, insertFallback) {
  var found = false;
  var result = str.replace(regex, function () { found = true; return replacement; });
  if (found) return result;
  if (!insertFallback) throw new Error('Splice target not found for pattern: ' + regex);
  // First run: PHONE_RAW doesn't exist yet in the dashboard HTML -- insert it right before the
  // inlined-data end marker instead of failing.
  return str.replace('// ===== end inlined data =====', replacement + '\n// ===== end inlined data =====');
}

function splicePhoneHtml_(html, rawRows, nowIso) {
  var rawJs = JSON.stringify(rawRows);
  var digest = phoneMd5Hex_(rawJs);
  if (PropertiesService.getScriptProperties().getProperty('PHONE_LAST_DATA_DIGEST') === digest) return null;

  // PHONE_RAW row shape: [name, team, lob, date, clubs, pg1, upfrontRevenue, closedDeals,
  // pg1Trial, pg1Upfront, connectedCalls]. One row per (Name, Date) -- same granularity as
  // RAW_SCHED, so Team/Agent/Date-Range filtering work the same way -- feeds the Mid-Ticket/PG1/
  // Inbound tabs ONLY (Setter/Closer must never read this).
  var constDecl = '// Mid-Ticket/PG1/Inbound tabs ONLY -- one row per (Name, Date) from the\n' +
    '// "Phone Team Sales Report 2026" Schedule tab + Aloware call logs (phoneRefreshAndPublish.gs).\n' +
    '// Row shape: [name, team, lob, date, clubs, pg1, upfrontRevenue, closedDeals, pg1Trial, pg1Upfront, connectedCalls].\n' +
    '// Refreshed ' + nowIso + '. Never read by Setter/Closer code.\n' +
    'const PHONE_RAW = ' + rawJs + ';';

  var out = phoneReplaceOnce_(html, /const PHONE_RAW = \[.*?\];/s, constDecl, true);
  // Keep the dashboard's global "Data updated" banner honest for this pipeline too -- it was
  // previously only ever touched by claudeRefreshAndPublish.gs's spliceHtml_, so a Phone-only
  // refresh (Sched pipeline not having run) left the banner showing a stale, unrelated timestamp.
  out = phoneReplaceOnce_(out, /const DATA_UPDATED_AT_ISO = "[^"]*";/, 'const DATA_UPDATED_AT_ISO = "' + nowIso + '";', false);
  return { content: out, digest: digest };
}

// ---- Publish straight to GitHub via the Git Data API (same mechanism as claudeRefreshAndPublish.gs) ----
function publishPhoneToGitHub_(newContent, rawRows) {
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_PAT');
  if (!token) throw new Error('GITHUB_PAT script property not set -- see setup instructions at the top of this file.');
  var apiBase = 'https://api.github.com/repos/' + PHONE_GITHUB_OWNER + '/' + PHONE_GITHUB_REPO;
  var authHeaders = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  var refResp = UrlFetchApp.fetch(apiBase + '/git/ref/heads/' + PHONE_GITHUB_BRANCH, { headers: authHeaders, muteHttpExceptions: true });
  if (refResp.getResponseCode() !== 200) throw new Error('git/ref failed: ' + refResp.getContentText());
  var latestCommitSha = JSON.parse(refResp.getContentText()).object.sha;

  var commitResp = UrlFetchApp.fetch(apiBase + '/git/commits/' + latestCommitSha, { headers: authHeaders, muteHttpExceptions: true });
  if (commitResp.getResponseCode() !== 200) throw new Error('git/commits get failed: ' + commitResp.getContentText());
  var baseTreeSha = JSON.parse(commitResp.getContentText()).tree.sha;

  var blobResp = UrlFetchApp.fetch(apiBase + '/git/blobs', {
    method: 'post', headers: authHeaders, contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ content: Utilities.base64Encode(newContent, Utilities.Charset.UTF_8), encoding: 'base64' })
  });
  if (blobResp.getResponseCode() !== 201) throw new Error('git/blobs failed: ' + blobResp.getContentText());
  var blobSha = JSON.parse(blobResp.getContentText()).sha;

  var treeResp = UrlFetchApp.fetch(apiBase + '/git/trees', {
    method: 'post', headers: authHeaders, contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ base_tree: baseTreeSha, tree: [{ path: PHONE_DASHBOARD_PATH, mode: '100644', type: 'blob', sha: blobSha }] })
  });
  if (treeResp.getResponseCode() !== 201) throw new Error('git/trees failed: ' + treeResp.getContentText());
  var newTreeSha = JSON.parse(treeResp.getContentText()).sha;

  // rawRows is in Schedule's own sheet-row order, not sorted by date -- scan for the actual latest
  // date rather than assuming the last array entry is the most recent.
  var latestDate = rawRows.reduce(function (max, r) { return r[3] > max ? r[3] : max; }, rawRows[0][3]);
  var msg = 'Refresh Mid-Ticket/PG1/Inbound data (automated Apps Script publish)\n\n' +
    rawRows.length + ' (Name, Date) rows. Latest date: ' + latestDate + '.';
  var newCommitResp = UrlFetchApp.fetch(apiBase + '/git/commits', {
    method: 'post', headers: authHeaders, contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ message: msg, tree: newTreeSha, parents: [latestCommitSha] })
  });
  if (newCommitResp.getResponseCode() !== 201) throw new Error('git/commits create failed: ' + newCommitResp.getContentText());
  var newCommitSha = JSON.parse(newCommitResp.getContentText()).sha;

  var updateRefResp = UrlFetchApp.fetch(apiBase + '/git/refs/heads/' + PHONE_GITHUB_BRANCH, {
    method: 'patch', headers: authHeaders, contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ sha: newCommitSha, force: false })
  });
  if (updateRefResp.getResponseCode() !== 200) throw new Error('git/refs update failed: ' + updateRefResp.getContentText());

  Logger.log('Published commit ' + newCommitSha + ' -- ' + rawRows.length + ' rows, latest date ' + latestDate + '.');
}

// ============================================================================
// SETUP INSTRUCTIONS
//
// 1. Open the "Phone Team Sales Report 2026" spreadsheet (the one at
//    docs.google.com/spreadsheets/d/15Hgi2w-JUpwQQEYDJVYdwX5PhwMOi6rW-63WxNry2zQ), then
//    Extensions > Apps Script. This creates/opens a Apps Script project bound to THIS
//    spreadsheet -- separate from the "ASR - No Show" project claudeRefreshAndPublish.gs lives in.
// 2. Add this whole file as a new script file (File > New > Script file, name it e.g.
//    "PhoneScheduleRefresh").
// 3. GitHub token: reuse the same fine-grained PAT already set up for claudeRefreshAndPublish.gs
//    (it's scoped to this same pg-dashboard repo with Contents: Read and write, so it works here
//    too) -- or generate a fresh one the same way if you'd rather keep them separate:
//      - https://github.com/settings/personal-access-tokens/new
//      - Resource owner: markdeguzman-png: Repository access: "Only select repositories" -> pg-dashboard
//      - Permissions: Repository permissions -> Contents -> Read and write
// 4. In THIS Apps Script project's editor: gear icon (Project Settings) -> Script Properties ->
//    Add script property:
//      Property: GITHUB_PAT
//      Value:    <the token>
// 5. Clock icon (Triggers) -> Add Trigger: function phoneRefreshAndPublish, event source
//    "Time-driven", type "Hour timer", every hour (or whatever cadence makes sense once you see
//    how big a single run is / how often Aloware adds new weekly files).
// 6. Test it: select phoneRefreshAndPublish from the function dropdown, click Run. Authorize the
//    new scopes it asks for (Spreadsheets, Drive, UrlFetch to github.com) when prompted. This
//    first run reads ALL ~15,685 Schedule rows, the CURRENT month's Aloware CSVs, and backfills
//    ALOWARE_BACKFILL_MONTHS_PER_RUN (default 1) of the still-uncached past months -- watch
//    Executions (the play-button-with-a-clock icon) for how long it actually takes and whether it
//    completes within the execution time limit; if it times out, lower
//    ALOWARE_BACKFILL_MONTHS_PER_RUN (or tell Claude) so each run's chunk is smaller.
// 7. Check https://github.com/markdeguzman-png/pg-dashboard for a new commit adding a
//    PHONE_RAW const to asr_closer_dashboard.html. Vercel auto-deploys from that push.
//
// ---- Aloware backfill: how it works ----
// Aloware call logs live one subfolder per month under ALOWARE_ROOT_FOLDER_ID
// ("01-01-2026", "02-01-2026", ... "10-01-2026", ~1.1GB total across Jan-Oct) -- far too much to
// re-download every run. Each scheduled run: (a) always re-reads the CURRENT month fresh, since
// it's still gaining files, (b) reuses every PAST month already cached in the
// "phoneConnectedCallsCache.json" file this script maintains in the Aloware root folder, and
// (c) backfills at most ALOWARE_BACKFILL_MONTHS_PER_RUN not-yet-cached past months, oldest first,
// then caches them permanently. With the default of 1/run and an hourly trigger, the full
// Jan-Oct backlog finishes backfilling within about a day of the updated script going live, with
// no manual action needed beyond pasting it in. Check Executions' logs for "Backfilling Aloware
// month ..." lines to watch progress, or raise ALOWARE_BACKFILL_MONTHS_PER_RUN if a run's
// Execution time shows headroom to go faster. If a file is too large for this script to load (the
// largest single months, Jan-May, are ~105-131MB each), it's logged and skipped rather than
// failing the whole run -- check Executions for "Skipping Aloware file ..." lines; if that happens,
// that month may need to be re-exported from Aloware as smaller weekly files instead of one big
// monthly file (matching how June onward is already split).
//
// This pipeline is intentionally independent of claudeRefreshAndPublish.gs -- different
// spreadsheet, different Drive source, different const in the dashboard (PHONE_RAW vs
// RAW_SCHED/TREND_*). Running both triggers hourly is fine; they never touch each other's data.
// ============================================================================
