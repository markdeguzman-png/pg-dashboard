// ============================================================================
// Mid-Ticket / PG1 / Inbound tabs data pipeline: "Phone Team Sales Report 2026" Schedule tab +
// Aloware call-log CSVs -> pg_dashboard.html on GitHub -> Vercel auto-deploy.
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
var PHONE_DASHBOARD_PATH = 'pg_dashboard.html'; // renamed 2026-11-03 from asr_closer_dashboard.html
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
// Per user (2026-10-31): a given week's export file is written once and doesn't change again --
// new data only ever shows up as a brand-new file (weekly, on Mondays, covering the prior week).
// So caching is per FILE ID, not per month: once a file has been aggregated, it's cached
// permanently and never re-downloaded, with no "current month is special" exception needed --
// whatever file is newest just hasn't been cached yet, and gets picked up the same way backlog
// does. Stored in this Drive file (JSON) in the Aloware root.
var ALOWARE_CACHE_FILENAME = 'phoneConnectedCallsCache.json';
// How many not-yet-cached files to process in a single run, newest-created first (so a fresh
// Monday export gets priority over older backlog, keeping the live dashboard's most recent weeks
// current while history fills in behind it). Kept low to stay well inside the execution time
// limit -- raise it once Executions shows how long one file actually takes.
var ALOWARE_NEW_FILES_PER_RUN = 2;

// Current LOB values (Schedule tab's own "Current LOB" column) that feed each of the 3 new tabs.
// NOTE: this is "Inbound" here, not "Inbound Team" -- that's the label this specific source uses;
// it's a different string than RAW_SCHED/Aloware's "Inbound Team" and the two must not be conflated.
var TARGET_LOBS = ['Mid-Ticket', 'PG1', 'Inbound'];

// A call counts as "Connected" when its Talk Time is at least this many seconds.
var CONNECTED_CALL_MIN_SECONDS = 90;

function phoneRefreshAndPublish() {
  var ss = SpreadsheetApp.openById(PHONE_SHEET_ID);
  var scheduleValues = ss.getSheetByName(SCHEDULE_TAB_NAME).getDataRange().getValues();
  var scheduleRows = extractScheduleRows_(scheduleValues);
  if (!scheduleRows.length) { Logger.log('No active Schedule rows extracted; aborting.'); return; }

  // Read once, used by BOTH the Hubstaff alias fallback below and the Domo Contribution Profit
  // join further down -- a "names_lookup" read failure degrades both gracefully (each still works
  // off Schedule's own Name column) rather than failing the whole publish.
  var domoAliasKeysByName = {};
  try {
    domoAliasKeysByName = buildDomoAliasKeysByName_(ss);
  } catch (e) {
    Logger.log('names_lookup read failed (non-fatal, Hubstaff/Domo alias matching both fall back to Name-column-only): ' + e);
  }

  var connectedByNameDate = buildConnectedByNameDate_();

  // Hubstaff is optional and additive -- if HUBSTAFF_TOKEN isn't set yet, or the API call fails for
  // any reason, Scheduled_Hrs still gets published (it comes straight from Schedule) and Tracked
  // Hours just comes back empty (0 everywhere) rather than breaking the whole Schedule/Aloware
  // publish that already works today. Cost was dropped (2026-11-03): team_payments has zero
  // user_id overlap with this roster at all -- confirmed by comparing every sampled payment
  // detail's user_id against the roster's own Hubstaff ids, not a single match -- meaning these
  // reps simply aren't paid through Hubstaff's payroll feature, not a bug to keep chasing.
  var trackedHoursByNameDate = {};
  try {
    if (PropertiesService.getScriptProperties().getProperty('HUBSTAFF_TOKEN')) {
      var orgId = hubstaffFetchOrgId_();
      var allMembers = hubstaffFetchMembers_(orgId);
      var memberNameSet = {};
      allMembers.forEach(function (m) { memberNameSet[phoneNormalizeName_(m.name)] = true; });
      // Best-effort cross-system reuse of the SAME "names_lookup" aliases the Domo Contribution
      // Profit join uses (added 2026-11-04): if a rep's current hubstaffKey (Hubstaff Name override,
      // else Schedule's own Name) doesn't match any real fetched member, try each names_lookup
      // Domo_name alias for them too -- a nickname/legal-name alias that resolves a Domo mismatch
      // (e.g. "Jobelle Diaz" for "Belle Diaz") is quite likely the SAME account name Hubstaff uses,
      // since it's probably the person's actual name. Every candidate is checked against the real
      // fetched member list before being used, never guessed blindly, and an already-working match
      // is never touched.
      refineHubstaffKeysWithDomoAliases_(scheduleRows, memberNameSet, domoAliasKeysByName);

      // Keyed by hubstaffKey (now possibly alias-refined above) so a manually-entered override, or
      // a resolved names_lookup alias, actually changes which Hubstaff member this roster matches
      // to, not just cosmetic Schedule display text.
      var scheduleNames = {};
      scheduleRows.forEach(function (r) { scheduleNames[r.hubstaffKey] = true; });
      var ourMembers = allMembers.filter(function (m) { return scheduleNames[phoneNormalizeName_(m.name)]; });
      // Diagnostic logging while this integration is still being verified -- cheap (a handful of
      // Logger.log calls), and tells us immediately whether a 0-everywhere result is a
      // name-matching miss (ourMembers.length === 0) or something downstream.
      Logger.log('Hubstaff: ' + allMembers.length + ' org members fetched, ' + ourMembers.length + ' matched the Schedule roster.');
      if (allMembers.length && !ourMembers.length) {
        Logger.log('Hubstaff member names (sample, for comparing against Schedule): ' + JSON.stringify(allMembers.slice(0, 10).map(function(m){return m.name;})));
        Logger.log('Schedule names (sample): ' + JSON.stringify(Object.keys(scheduleNames).slice(0, 10)));
      }
      var minDate = scheduleRows.reduce(function (m, r) { return r.date < m ? r.date : m; }, scheduleRows[0].date);
      var maxDate = scheduleRows.reduce(function (m, r) { return r.date > m ? r.date : m; }, scheduleRows[0].date);
      trackedHoursByNameDate = hubstaffFetchTrackedHoursByNameDate_(orgId, ourMembers, minDate, maxDate);
      Logger.log('Hubstaff: tracked-hours lookup has ' + Object.keys(trackedHoursByNameDate).length + ' (name, date) entries for window ' + minDate + ' to ' + maxDate + '.');

      // Per-rep diagnostic: who's still coming up empty, and why. "Never matched" means no
      // Hubstaff member's name (normalized) equals this rep's hubstaffKey at all, even after the
      // Hubstaff Name override and names_lookup alias attempts above -- fixable by adding a
      // names_lookup row for them (if their Domo alias IS their Hubstaff name too) or a "Hubstaff
      // Name" column value (if Hubstaff uses yet another, different spelling). "Matched but zero
      // activity" means a Hubstaff member WAS found, but Hubstaff has no tracked time for them in
      // this whole window -- that's not a naming problem, likely means they don't use Hubstaff
      // time tracking (or use it under a project/account this token can't see).
      var ourMemberKeys = {};
      ourMembers.forEach(function (m) { ourMemberKeys[phoneNormalizeName_(m.name)] = true; });
      var keyToDisplayName = {};
      scheduleRows.forEach(function (r) { if (!keyToDisplayName[r.hubstaffKey]) keyToDisplayName[r.hubstaffKey] = r.name; });
      var trackedKeys = Object.keys(trackedHoursByNameDate).map(function (k) { return k.split('|')[0]; });
      var neverMatched = [], matchedNoActivity = [];
      Object.keys(keyToDisplayName).forEach(function (key) {
        if (!ourMemberKeys[key]) { neverMatched.push(keyToDisplayName[key]); return; }
        if (trackedKeys.indexOf(key) === -1) matchedNoActivity.push(keyToDisplayName[key]);
      });
      Logger.log('Hubstaff: ' + neverMatched.length + ' Schedule reps never matched a Hubstaff member (add a "Hubstaff Name" column value for these to fix): ' + JSON.stringify(neverMatched));
      Logger.log('Hubstaff: ' + matchedNoActivity.length + ' reps matched a Hubstaff member but have zero tracked time in this window (likely don\'t use Hubstaff tracking, not a naming issue): ' + JSON.stringify(matchedNoActivity));
    } else {
      Logger.log('HUBSTAFF_TOKEN not set -- skipping Tracked Hours this run (Scheduled_Hrs still publishes).');
    }
  } catch (e) {
    Logger.log('Hubstaff fetch failed (non-fatal, Tracked Hours stays 0 this run): ' + e);
  }

  // Domo Contribution Profit is optional and additive, same pattern as Hubstaff above -- if the
  // Drive folder domoMultiPosExport.gs writes to doesn't exist yet (or anything else goes wrong
  // reading it), the 4 Contribution Profit columns just stay 0 rather than breaking the publish.
  // domoAliasKeysByName was already read above (shared with the Hubstaff block).
  var contribProfitByNameDateGroup = {};
  try {
    contribProfitByNameDateGroup = domoReadContributionProfitByNameDateGroup_();
  } catch (e) {
    Logger.log('Domo Contribution Profit read failed (non-fatal, those columns stay 0 this run): ' + e);
  }

  var rawRows = buildPhoneRaw_(scheduleRows, connectedByNameDate, trackedHoursByNameDate, contribProfitByNameDateGroup, domoAliasKeysByName);
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
// Like phoneColIdx_ but doesn't throw when the column is missing -- for columns that are allowed
// to not exist yet, like the optional "Hubstaff Name" override below.
function phoneOptionalColIdx_(headers, name) {
  return headers.indexOf(name);
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
  ['Name', 'Date', 'Current LOB', 'Current Team', 'Clubs', 'PG1', 'Upfront_Revenue', 'closed_deals', 'PG1 Trial', 'PG1 Upfront', 'Scheduled_Hrs'].forEach(function (h) {
    idx[h] = phoneColIdx_(headers, h);
  });
  // Optional override: if a "Hubstaff Name" column exists and a row has a value in it, that value
  // (not the Name column) is what gets matched against Hubstaff -- added 2026-11-03 after automatic
  // first+last matching missed some real reps (e.g. "Belle Diaz") with no obvious naming pattern to
  // generalize from, the way the earlier Amie/Kim Paolo/Alice cases did. Filling this in for just
  // the exceptions (found via the "Hubstaff: unmatched/no-activity roster names" log line) is more
  // reliable than guessing at another normalization rule blind.
  var hubstaffNameIdx = phoneOptionalColIdx_(headers, 'Hubstaff Name');
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
    var scheduledHrs = phoneToNum_(row[idx['Scheduled_Hrs']]);
    // A shift with scheduled hours but zero sales activity still has to be kept -- Scheduled_Hrs
    // is itself a real sum now (Hubstaff integration), not just a tiebreaker for the sales metrics.
    if (!clubs && !pg1 && !upfrontRevenue && !closedDeals && !pg1Trial && !pg1Upfront && !scheduledHrs) continue;
    var trimmedName = String(name).trim();
    var hubstaffOverride = hubstaffNameIdx > -1 ? String(row[hubstaffNameIdx] || '').trim() : '';
    rows.push({
      name: trimmedName, date: dateStr, lob: lob, team: String(team).trim(),
      clubs: clubs, pg1: pg1, upfrontRevenue: phoneRound2_(upfrontRevenue), closedDeals: closedDeals,
      pg1Trial: pg1Trial, pg1Upfront: pg1Upfront, scheduledHrs: scheduledHrs,
      hubstaffKey: phoneNormalizeName_(hubstaffOverride || trimmedName)
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

// Reads ONE Aloware CSV file and returns its Connected Calls aggregate ('normalizedName|date' ->
// count). A file that fails to load or parse (oversized blob, unexpected format, ...) throws, so
// the caller can record it as a cached failure instead of retrying it forever -- the largest
// single-month files (Jan-May, ~105-131MB each) are close to Apps Script's practical blob-size
// ceiling, so this needs to degrade predictably rather than silently.
function computeConnectedCallsForFile_(file) {
  var out = {};
  var csvText = file.getBlob().getDataAsString();
  var rows = Utilities.parseCsv(csvText);
  if (!rows.length) return out;
  var headers = rows[0];
  var startedIdx = headers.indexOf('Started At');
  var lineIdx = headers.indexOf('Line Name');
  var userIdx = headers.indexOf('User Name');
  var talkIdx = headers.indexOf('Talk Time');
  if (startedIdx === -1 || talkIdx === -1) return out; // unexpected format
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var started = row[startedIdx];
    if (!started) continue;
    var seconds = talkTimeToSeconds_(row[talkIdx]);
    if (seconds < CONNECTED_CALL_MIN_SECONDS) continue;
    var dateStr = String(started).trim().slice(0, 10); // "YYYY-MM-DD HH:MM:SS" -> date part
    // User Name first, Line Name only as a fallback -- confirmed 2026-10-31 by spot-checking
    // Inbound's raw CSVs: a call routed through a queue (inbound/IVR, or a warm transfer) carries
    // a generic Line Name like "IVR" or "Warm Transfer from ASR", not the agent, while User Name
    // reliably holds whichever rep actually took the call. Line Name only directly names the agent
    // on a straight outbound-dialer call, where it already agrees with User Name anyway. Preferring
    // Line Name (the old order) silently keyed most of Inbound's real connected calls under "ivr",
    // which never matches any Schedule rep, so they vanished from the join instead of just being
    // misattributed -- this is why Inbound's Connected Calls looked near-zero.
    var rawName = userIdx > -1 && row[userIdx] ? String(row[userIdx]).trim()
      : (lineIdx > -1 ? cleanLineName_(row[lineIdx]) : '');
    if (!rawName) continue;
    var key = phoneNormalizeName_(rawName) + '|' + dateStr;
    out[key] = (out[key] || 0) + 1;
  }
  return out;
}

// Every Aloware CSV across every "MM-01-YYYY" month subfolder under the root (ALOWARE_MONTH_FOLDER_RE
// excludes anything that doesn't match that exact pattern, e.g. a stray differently-dated folder,
// without needing it hand-listed), sorted newest-created first -- a fresh Monday export should be
// picked up before older backlog, not after it.
function listAlowareFiles_() {
  var out = [];
  var folders = DriveApp.getFolderById(ALOWARE_ROOT_FOLDER_ID).getFolders();
  while (folders.hasNext()) {
    var folder = folders.next();
    if (!ALOWARE_MONTH_FOLDER_RE.test(folder.getName())) continue;
    var files = folder.getFiles();
    while (files.hasNext()) {
      var f = files.next();
      out.push({ id: f.getId(), name: f.getName(), file: f, created: f.getDateCreated().getTime() });
    }
  }
  out.sort(function (a, b) { return b.created - a.created; });
  return out;
}

// ---- Persistent cross-run cache, one entry per Aloware FILE ----
// Per user (2026-10-31): once a week's file is written it never changes again, so the right cache
// key is the file, not the month it lives in -- no "current month" special case needed (the
// CURRENT week's file does sometimes get wholesale-replaced under a brand-new file ID mid-week --
// its old ID's cache entry just goes unused once the old file is gone from Drive, and the new ID
// is picked up as a new file like any other). Stored as a small JSON file in the Aloware root (not
// Script Properties, whose 9KB/property and 500KB/project caps are too small once many files'
// worth of per-name-per-day counts pile up).
// Shape: { "version": ALOWARE_CACHE_VERSION,
//          "files": { "<fileId>": {"status":"ok","agg":{"normalizedName|date":count,...}}
//                                | {"status":"failed","error":"..."} } }.
// ALOWARE_CACHE_VERSION: bump this whenever a change would make every past entry's `agg` wrong
// (e.g. the name-extraction fix below) -- loadAlowareCache_() discards a cache written under an
// older version instead of trusting stale aggregates, forcing a full, automatic reprocess.
var ALOWARE_CACHE_VERSION = 3;
function findOrCreateCacheFile_() {
  var root = DriveApp.getFolderById(ALOWARE_ROOT_FOLDER_ID);
  var existing = root.getFilesByName(ALOWARE_CACHE_FILENAME);
  if (existing.hasNext()) return existing.next();
  return root.createFile(ALOWARE_CACHE_FILENAME, JSON.stringify({ version: ALOWARE_CACHE_VERSION, files: {} }), MimeType.PLAIN_TEXT);
}
function loadAlowareCache_() {
  var file = findOrCreateCacheFile_();
  try {
    var parsed = JSON.parse(file.getBlob().getDataAsString());
    if (parsed && parsed.files && parsed.version === ALOWARE_CACHE_VERSION) return { file: file, data: parsed };
    if (parsed && parsed.version !== ALOWARE_CACHE_VERSION) {
      Logger.log('Aloware cache was written under version ' + parsed.version + ', now ' + ALOWARE_CACHE_VERSION + ' -- discarding and reprocessing from scratch.');
    }
  } catch (e) {
    Logger.log('Aloware cache file unreadable/corrupt, starting fresh: ' + e);
  }
  return { file: file, data: { version: ALOWARE_CACHE_VERSION, files: {} } };
}
function saveAlowareCache_(cacheFile, data) {
  cacheFile.setContent(JSON.stringify(data));
}

// Orchestrates the full Connected Calls aggregate: every Aloware file already cached (success or
// failure) is reused/skipped without re-downloading; up to ALOWARE_NEW_FILES_PER_RUN not-yet-seen
// files are processed this run, newest-created first, then cached permanently -- so a fresh Monday
// export is current within one run, while the ~1.1GB January-onward backlog fills in gradually,
// newest-to-oldest, across subsequent scheduled runs without risking a single run timing out.
function buildConnectedByNameDate_() {
  var files = listAlowareFiles_();
  if (!files.length) { Logger.log('No Aloware files found under root ' + ALOWARE_ROOT_FOLDER_ID + '.'); return {}; }

  var cache = loadAlowareCache_();
  var cacheDirty = false;
  var processed = 0;
  var combined = {};

  files.forEach(function (f) {
    var entry = cache.data.files[f.id];
    if (!entry) {
      if (processed >= ALOWARE_NEW_FILES_PER_RUN) return; // not cached yet, no slot left this run -- next run picks it up
      Logger.log('Processing new Aloware file "' + f.name + '"...');
      try {
        entry = { status: 'ok', agg: computeConnectedCallsForFile_(f.file) };
      } catch (e) {
        entry = { status: 'failed', error: String(e) };
        Logger.log('Skipping Aloware file "' + f.name + '" (failed to process): ' + e);
      }
      cache.data.files[f.id] = entry;
      cacheDirty = true;
      processed++;
    }
    if (entry.status === 'ok') {
      for (var key in entry.agg) combined[key] = (combined[key] || 0) + entry.agg[key];
    }
  });

  if (cacheDirty) saveAlowareCache_(cache.file, cache.data);
  return combined;
}

// Schedule's Name column sometimes carries a middle name/initial that Aloware's Line Name/User
// Name drops entirely -- and inconsistently so, not just abbreviated to an initial: Schedule "Amie
// B. Montederamos" vs Aloware "Amie Montederamos" (initial dropped), "Kim Paolo B. Planas" vs
// "Kim Paolo Planas" (just the initial dropped, "Paolo" kept), but also Schedule "Alice Cher
// Valmonte" vs Aloware "Alice Valmonte" (the whole middle name "Cher" dropped, not abbreviated) --
// confirmed by spot-checking Aloware's raw CSVs (2026-10-31, 2026-11-02). Whether Aloware keeps,
// abbreviates, or drops a middle name isn't predictable from Schedule's side, so rather than
// guessing at which pattern applies, this matches on first + last token only, discarding
// everything in between -- verified against the live ~48-person Mid-Ticket/PG1/Inbound roster to
// have zero (first, last) collisions, so this can't silently merge two different real reps. If the
// roster ever grows to include two different people sharing a first and last name, this would need
// to fall back to also keying on team/LOB to disambiguate.
function phoneNormalizeName_(name) {
  var tokens = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (tokens.length <= 2) return tokens.join(' ').toLowerCase();
  return (tokens[0] + ' ' + tokens[tokens.length - 1]).toLowerCase();
}

// ---- Hubstaff: Scheduled vs Tracked hours (Mid-Ticket/PG1/Inbound reps only) ----
// Org access token (hsoat_...) created in the Hubstaff web app under Settings -> Organization ->
// API tokens; sent directly as a bearer, no token exchange or refresh needed (unlike a Personal
// Access Token). Stored as a script property, same pattern as GITHUB_PAT.
var HUBSTAFF_API_BASE = 'https://api.hubstaff.com';
function hubstaffAuthHeaders_() {
  var token = PropertiesService.getScriptProperties().getProperty('HUBSTAFF_TOKEN');
  if (!token) throw new Error('HUBSTAFF_TOKEN script property not set -- see setup instructions at the bottom of this file.');
  return { Authorization: 'Bearer ' + token };
}
// Hubstaff's exact response envelope key (e.g. "members" vs "daily_activities") isn't something
// this script can verify without live API access, so instead of hardcoding a guessed key, this
// just takes whichever top-level property IS an array -- works regardless of the wrapper name, as
// long as the response has exactly one array in it (true for every list endpoint used here).
function hubstaffFirstArray_(obj) {
  for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && Array.isArray(obj[k])) return obj[k]; }
  return [];
}
// Generic page_start_id/page_limit pager: re-requests with the last record's own "id" as the next
// page_start_id, stops once a page comes back shorter than the requested limit. Schema-agnostic --
// doesn't depend on knowing the exact pagination envelope Hubstaff wraps around page_limit results.
function hubstaffPaginatedFetch_(path, extraQuery) {
  var out = [];
  var startId = null;
  var limit = 200;
  for (var guard = 0; guard < 200; guard++) { // hard safety cap on page count, not expected to ever bind
    var url = HUBSTAFF_API_BASE + path + (path.indexOf('?') === -1 ? '?' : '&') + 'page_limit=' + limit
      + (startId ? '&page_start_id=' + startId : '') + (extraQuery || '');
    var resp = UrlFetchApp.fetch(url, { headers: hubstaffAuthHeaders_(), muteHttpExceptions: true });
    if (resp.getResponseCode() === 429) {
      var rlHeaders = resp.getHeaders();
      var retryAfterSec = parseInt(rlHeaders['Retry-After'] || rlHeaders['retry-after'] || '5', 10) || 5;
      Logger.log('Hubstaff ' + path + ': rate-limited (429), waiting ' + retryAfterSec + 's and retrying once.');
      Utilities.sleep(Math.min(retryAfterSec, 60) * 1000);
      resp = UrlFetchApp.fetch(url, { headers: hubstaffAuthHeaders_(), muteHttpExceptions: true });
    }
    if (resp.getResponseCode() !== 200) throw new Error('Hubstaff ' + path + ' failed (' + resp.getResponseCode() + '): ' + resp.getContentText());
    var page = hubstaffFirstArray_(JSON.parse(resp.getContentText()));
    out = out.concat(page);
    if (page.length < limit) break;
    // Not every list endpoint's records necessarily carry a usable top-level "id" -- members use
    // "user_id" instead (confirmed 2026-11-02), and aggregated daily-activity rows might have
    // neither. If the cursor can't actually advance, stop here rather than silently re-requesting
    // the same page or sending page_start_id=undefined.
    var last = page[page.length - 1];
    var nextId = last.id || last.user_id;
    if (!nextId || nextId === startId) {
      Logger.log('Hubstaff ' + path + ': pagination cursor did not advance past id ' + nextId + ' -- stopping (results from this call may be incomplete).');
      break;
    }
    startId = nextId;
  }
  return out;
}
function hubstaffFetchOrgId_() {
  var orgs = hubstaffPaginatedFetch_('/v2/organizations', '');
  if (!orgs.length) throw new Error('No Hubstaff organizations found for this token.');
  return orgs[0].id;
}
// {id, name} per member. Confirmed 2026-11-02 the Members endpoint itself never returns a name --
// not under top-level first_name/last_name/name, not under a nested "profile" object even with
// &include_profile=true (two separate live-log-confirmed attempts, both empty). A member record's
// identity field is "user_id" (it has no "id" at all), and GET /v2/users/{user_id} -- a dedicated
// endpoint, not gated by the Members list's own quirks -- confirmed via the docs to return plain
// top-level name/first_name/last_name fields. So this resolves each member's name with one
// GET /v2/users/{user_id} call per member rather than fighting the Members endpoint further.
// ~100-150 sequential small calls adds some time but stays well inside the execution budget
// (Schedule's 15k-row read and the Aloware file processing already dominate a run's time).
// Docs: 120 requests/minute by default, "heavier endpoints... have lower limits" -- a 429 is
// retried once after sleeping Retry-After seconds (capped at 60s so one bad response can't hang
// the run). A fixed 500ms between calls keeps this loop's own rate at <=120/min, leaving headroom
// in the same rolling window for this run's handful of other Hubstaff calls (organizations,
// members, activities/daily, team_payments); the 429 handling is the real backstop if the account's
// actual limit turns out lower than documented.
function hubstaffFetchUserName_(userId) {
  var url = HUBSTAFF_API_BASE + '/v2/users/' + userId;
  var resp = UrlFetchApp.fetch(url, { headers: hubstaffAuthHeaders_(), muteHttpExceptions: true });
  if (resp.getResponseCode() === 429) {
    var headers = resp.getHeaders();
    var retryAfter = parseInt(headers['Retry-After'] || headers['retry-after'] || '5', 10) || 5;
    Utilities.sleep(Math.min(retryAfter, 60) * 1000);
    resp = UrlFetchApp.fetch(url, { headers: hubstaffAuthHeaders_(), muteHttpExceptions: true });
  }
  Utilities.sleep(500);
  if (resp.getResponseCode() !== 200) return '';
  var body = JSON.parse(resp.getContentText());
  var u = body.user || body; // unwrap a {"user": {...}} envelope if present, else assume the body IS the user
  var first = u.first_name || '';
  var last = u.last_name || '';
  return (first || last) ? (first + ' ' + last).trim() : String(u.name || '').trim();
}
function hubstaffFetchMembers_(orgId) {
  var members = hubstaffPaginatedFetch_('/v2/organizations/' + orgId + '/members', '');
  var out = [];
  var loggedSample = false;
  members.forEach(function (m) {
    try {
      var name = hubstaffFetchUserName_(m.user_id);
      if (!loggedSample) { Logger.log('Hubstaff: first users/{id} lookup -- user_id ' + m.user_id + ' -> name "' + name + '".'); loggedSample = true; }
      out.push({ id: m.user_id, name: name });
    } catch (e) {
      Logger.log('Hubstaff: users/' + m.user_id + ' lookup failed, skipping that member: ' + e);
    }
  });
  return out;
}
// Daily tracked time (seconds -> hours) for just the Hubstaff members whose normalized name
// matches someone in our own Mid-Ticket/PG1/Inbound Schedule roster -- not the whole org -- keyed
// 'normalizedName|date' so it joins into buildPhoneRaw_ the same way Aloware's Connected Calls do.
// Chunked into <=31-day windows (the API's own limit per call) across [minDate, maxDate].
function hubstaffFetchTrackedHoursByNameDate_(orgId, members, minDate, maxDate) {
  var idToName = {};
  members.forEach(function (m) { idToName[m.id] = m.name; });
  var userIds = members.map(function (m) { return m.id; });
  if (!userIds.length) return {};
  var userIdsParam = userIds.map(function (id) { return '&user_ids[]=' + id; }).join('');

  var out = {};
  var cursor = new Date(minDate + 'T00:00:00Z');
  var end = new Date(maxDate + 'T00:00:00Z');
  while (cursor <= end) {
    var windowEnd = new Date(cursor.getTime());
    windowEnd.setUTCDate(windowEnd.getUTCDate() + 30); // 31-day inclusive window
    if (windowEnd > end) windowEnd = end;
    var startStr = Utilities.formatDate(cursor, 'UTC', 'yyyy-MM-dd');
    var stopStr = Utilities.formatDate(windowEnd, 'UTC', 'yyyy-MM-dd');
    var rows = hubstaffPaginatedFetch_('/v2/organizations/' + orgId + '/activities/daily',
      '&date[start]=' + startStr + '&date[stop]=' + stopStr + userIdsParam);
    if (rows.length) {
      Logger.log('Hubstaff activities/daily ' + startStr + '..' + stopStr + ': ' + rows.length + ' rows, sample: ' + JSON.stringify(rows.slice(0, 2)));
    } else {
      Logger.log('Hubstaff activities/daily ' + startStr + '..' + stopStr + ': 0 rows returned.');
    }
    rows.forEach(function (r) {
      var name = idToName[r.user_id];
      if (!name || !r.date) return;
      var key = phoneNormalizeName_(name) + '|' + String(r.date).slice(0, 10);
      var hrs = (Number(r.tracked) || 0) / 3600;
      out[key] = (out[key] || 0) + hrs;
    });
    cursor = new Date(windowEnd.getTime());
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return out;
}
// Mutates each row's hubstaffKey IN PLACE when it currently matches no real Hubstaff member but a
// names_lookup Domo_name alias for that person does -- see the call site's comment above for why
// this cross-system reuse is reasonable (not guessed: every candidate is checked against
// memberNameSet, the REAL fetched member list, before being used). Never touches a row whose
// current key already resolves.
function refineHubstaffKeysWithDomoAliases_(scheduleRows, memberNameSet, domoAliasKeysByName) {
  var refinedCount = 0;
  scheduleRows.forEach(function (r) {
    if (memberNameSet[r.hubstaffKey]) return; // already resolves to a real member, leave alone
    var aliases = domoAliasKeysByName[r.name];
    if (!aliases) return;
    for (var i = 0; i < aliases.length; i++) {
      if (memberNameSet[aliases[i]]) { r.hubstaffKey = aliases[i]; refinedCount++; return; }
    }
  });
  if (refinedCount) Logger.log('Hubstaff: ' + refinedCount + ' Schedule row(s) matched via a names_lookup Domo_name alias instead of their Name/Hubstaff Name column.');
}
// One row per (Name, Date) -- the same granularity RAW_SCHED uses for Setter/Closer, so the
// dashboard's existing matchesTeamFilter()/matchesAgentFilter() pattern (and arbitrary
// Date-Range sums) work on this data exactly the same way, instead of pre-aggregating away the
// per-person detail Team/Agent filtering actually needs.
function buildPhoneRaw_(scheduleRows, connectedByNameDate, trackedHoursByNameDate, contribProfitByNameDateGroup, domoAliasKeysByName) {
  return scheduleRows.map(function (r) {
    // Connected Calls (Aloware) is keyed off Schedule's own Name, normalized -- unaffected by a
    // "Hubstaff Name" override, which only exists to steer Hubstaff matching specifically. Tracked
    // Hours (Hubstaff) uses r.hubstaffKey instead -- the override when present, else the same
    // normalized Name -- so filling in an override actually changes which Hubstaff data joins in.
    // r.name itself (not normalized) is still what's written into the row either way.
    var connected = connectedByNameDate[phoneNormalizeName_(r.name) + '|' + r.date] || 0;
    var hubstaffNormKey = r.hubstaffKey + '|' + r.date;
    var trackedHrs = trackedHoursByNameDate ? phoneRound2_(trackedHoursByNameDate[hubstaffNormKey] || 0) : 0;
    // Contribution Profit AND Net Revenue (Domo) both sum across EVERY normalized alias the
    // "names_lookup" tab lists for this exact Schedule Name (see buildDomoAliasKeysByName_ below)
    // -- not a single swap like Hubstaff's override, because Domo's own sourceTitle data has been
    // seen using more than one spelling for the same real person within the same month (confirmed
    // 2026-11-03: Belle Diaz $3,588 vs Jobelle Diaz $174,769, same person). The Name column's own
    // normalized form is always included even if the lookup tab has no row for this person (or that
    // tab is missing), so neither figure silently drops to 0 for someone not yet in the lookup tab.
    var cpMap = (contribProfitByNameDateGroup && contribProfitByNameDateGroup.cp) || {};
    var netMap = (contribProfitByNameDateGroup && contribProfitByNameDateGroup.net) || {};
    var primaryNorm = phoneNormalizeName_(r.name);
    var aliasKeys = (domoAliasKeysByName && domoAliasKeysByName[r.name]) ? domoAliasKeysByName[r.name].slice() : [];
    if (aliasKeys.indexOf(primaryNorm) === -1) aliasKeys.push(primaryNorm);
    var sumAcrossAliases = function (map, group) {
      var total = 0;
      aliasKeys.forEach(function (key) { total += map[key + '|' + r.date + '|' + group] || 0; });
      return total;
    };
    var cpPG1 = phoneRound2_(sumAcrossAliases(cpMap, 'pg1'));
    var cpPhysical = phoneRound2_(sumAcrossAliases(cpMap, 'physical'));
    var cpDigitalOther = phoneRound2_(sumAcrossAliases(cpMap, 'digitalOther'));
    var cpSupplements = phoneRound2_(sumAcrossAliases(cpMap, 'supplements'));
    // Net Revenue is published as a single combined total (not split by product group like
    // Contribution Profit) -- High Ticket stays excluded since domoClassifyGroup_ never assigns it
    // one of the 4 groups summed here, same as Contribution Profit.
    var netRevenue = phoneRound2_(['pg1', 'physical', 'digitalOther', 'supplements']
      .reduce(function (sum, group) { return sum + sumAcrossAliases(netMap, group); }, 0));
    return [r.name, r.team, r.lob, r.date, r.clubs, r.pg1, r.upfrontRevenue, r.closedDeals, r.pg1Trial, r.pg1Upfront, connected, r.scheduledHrs, trackedHrs, cpPG1, cpPhysical, cpDigitalOther, cpSupplements, netRevenue];
  });
}

// ---- Domo Contribution Profit Rollup (written by domoMultiPosExport.gs, a separate Apps Script
// project, into the same Drive) ----
// That script owns all Domo auth/querying/classification (PG1 / Physical / Digital - Other /
// Supplements -- High Ticket is explicitly out of scope, 2026-11-03) and writes small pre-aggregated
// per-(rep, date, group) CSVs to "PGZ Multi POS Transactions/Contribution Profit Rollup/*.csv" in
// Drive. This just reads them and joins onto the Schedule roster by name, the same way Aloware's
// Connected Calls does -- kept in a separate script so Domo credentials only have to live in ONE
// Apps Script project, not duplicated into this one. These files are tiny (pre-aggregated, not raw
// transactions), so unlike Aloware there's no need for a persistent cross-run cache -- every run
// just reads whatever month files currently exist.
var DOMO_CP_ROOT_FOLDER_NAME = 'PGZ Multi POS Transactions';
var DOMO_CP_SUBFOLDER_NAME = 'Contribution Profit Rollup';
// Returns { cp: {...}, net: {...} }, both keyed 'normalizedName|date|group' -> amount. `net` is Net
// Revenue (Gross - Refunded only, added 2026-11-04) -- a separate, simpler figure from Contribution
// Profit, not a component of it. A rollup CSV written before 2026-11-04 won't have a 'netRevenue'
// column yet -- that's not an error, its rows just contribute 0 to `net` (contributionProfit still
// reads fine from the same file) until domoForceRewriteRollupWithNetRevenue upgrades it, same
// backfill-on-demand pattern as the archival export's Contribution Profit column.
function domoReadContributionProfitByNameDateGroup_() {
  var cp = {}, net = {}; // 'normalizedName|date|group' -> amount
  var rootIt = DriveApp.getRootFolder().getFoldersByName(DOMO_CP_ROOT_FOLDER_NAME);
  if (!rootIt.hasNext()) {
    Logger.log('Domo Contribution Profit: "' + DOMO_CP_ROOT_FOLDER_NAME + '" folder not found in Drive -- skipping (those columns stay 0 this run).');
    return { cp: cp, net: net };
  }
  var subIt = rootIt.next().getFoldersByName(DOMO_CP_SUBFOLDER_NAME);
  if (!subIt.hasNext()) {
    Logger.log('Domo Contribution Profit: "' + DOMO_CP_SUBFOLDER_NAME + '" subfolder not found yet -- skipping (needs domoMultiPosExport.gs to have run at least once).');
    return { cp: cp, net: net };
  }
  var files = subIt.next().getFiles();
  var fileCount = 0, rowCount = 0, filesWithoutNet = 0;
  while (files.hasNext()) {
    var f = files.next();
    fileCount++;
    var rows = Utilities.parseCsv(f.getBlob().getDataAsString());
    if (!rows.length) continue;
    var headers = rows[0];
    var dateIdx = headers.indexOf('date'), nameIdx = headers.indexOf('sourceTitle'),
      groupIdx = headers.indexOf('group'), cpIdx = headers.indexOf('contributionProfit'),
      netIdx = headers.indexOf('netRevenue');
    if (dateIdx === -1 || nameIdx === -1 || groupIdx === -1 || cpIdx === -1) {
      Logger.log('Domo Contribution Profit: unexpected CSV format in "' + f.getName() + '", skipping that file.');
      continue;
    }
    if (netIdx === -1) filesWithoutNet++;
    for (var i = 1; i < rows.length; i++) {
      var r = rows[i];
      var name = r[nameIdx];
      if (!name) continue;
      var key = phoneNormalizeName_(name) + '|' + r[dateIdx] + '|' + r[groupIdx];
      cp[key] = (cp[key] || 0) + (Number(r[cpIdx]) || 0);
      if (netIdx > -1) net[key] = (net[key] || 0) + (Number(r[netIdx]) || 0);
      rowCount++;
    }
  }
  Logger.log('Domo Contribution Profit: read ' + rowCount + ' (rep, date, group) rows from ' + fileCount + ' rollup file(s)'
    + (filesWithoutNet ? ' (' + filesWithoutNet + ' file(s) predate Net Revenue -- run domoForceRewriteRollupWithNetRevenue to backfill)' : '') + '.');
  return { cp: cp, net: net };
}

// ---- Domo name aliases (user-maintained "names_lookup" tab in the same spreadsheet) ----
// Added 2026-11-03 after confirming, via direct cross-reference against real Domo data, that
// Domo's sourceTitle sometimes uses a different spelling/nickname than the Schedule tab's own Name
// column for the same real person -- and sometimes BOTH spellings carry real money within the same
// month (e.g. Belle Diaz $3,588 vs Jobelle Diaz $174,769), so a single Hubstaff-Name-style
// swap/override isn't enough here; every accepted spelling needs to be summed.
// This tab is USER-MAINTAINED, not Claude-guessed: two columns, "Sched_name" and "Domo_name", one
// row per accepted Domo spelling for that Schedule Name -- a person can have multiple rows (their
// own exact name as one row, plus one row per alias). Missing entirely, or missing a given person,
// is fine -- buildPhoneRaw_ always falls back to the Name column's own normalized form regardless,
// so Contribution Profit never silently drops to 0 just because someone isn't in this tab yet.
var NAMES_LOOKUP_TAB_NAME = 'names_lookup';
function buildDomoAliasKeysByName_(ss) {
  var sheet = ss.getSheetByName(NAMES_LOOKUP_TAB_NAME);
  if (!sheet) {
    Logger.log('Domo Contribution Profit: "' + NAMES_LOOKUP_TAB_NAME + '" tab not found -- alias matching skipped, falls back to Name-column-only.');
    return {};
  }
  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return {};
  var headers = values[0];
  var schedIdx = headers.indexOf('Sched_name'), domoIdx = headers.indexOf('Domo_name');
  if (schedIdx === -1 || domoIdx === -1) {
    Logger.log('Domo Contribution Profit: "' + NAMES_LOOKUP_TAB_NAME + '" tab missing expected "Sched_name"/"Domo_name" headers -- alias matching skipped.');
    return {};
  }
  var map = {}; // exact Schedule Name string -> [normalizedDomoAlias, ...]
  var rowCount = 0;
  for (var i = 1; i < values.length; i++) {
    var schedName = String(values[i][schedIdx] || '').trim();
    var domoName = String(values[i][domoIdx] || '').trim();
    if (!schedName || !domoName) continue;
    var key = phoneNormalizeName_(domoName);
    if (!map[schedName]) map[schedName] = [];
    if (map[schedName].indexOf(key) === -1) { map[schedName].push(key); rowCount++; }
  }
  Logger.log('Domo Contribution Profit: loaded ' + rowCount + ' alias row(s) for ' + Object.keys(map).length + ' Schedule name(s) from "' + NAMES_LOOKUP_TAB_NAME + '".');
  return map;
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
  // pg1Trial, pg1Upfront, connectedCalls, scheduledHrs, trackedHrs, cpPG1, cpPhysical,
  // cpDigitalOther, cpSupplements, netRevenue]. One row per (Name, Date) -- same granularity as
  // RAW_SCHED, so Team/Agent/Date-Range filtering work the same way -- feeds the Mid-Ticket/PG1/
  // Inbound tabs ONLY (Setter/Closer must never read this). cpPG1/cpPhysical/cpDigitalOther/
  // cpSupplements are Contribution Profit (Domo POS data, via domoMultiPosExport.gs -> Drive ->
  // this script), grouped by product -- High Ticket is deliberately excluded, not one of the 4.
  // netRevenue (added 2026-11-04) is a separate, simpler Domo figure -- Gross - Refunded ONLY,
  // published as one combined total rather than split by product group.
  var constDecl = '// Mid-Ticket/PG1/Inbound tabs ONLY -- one row per (Name, Date) from the\n' +
    '// "Phone Team Sales Report 2026" Schedule tab + Aloware call logs + Hubstaff + Domo Contribution Profit/Net Revenue (phoneRefreshAndPublish.gs).\n' +
    '// Row shape: [name, team, lob, date, clubs, pg1, upfrontRevenue, closedDeals, pg1Trial, pg1Upfront, connectedCalls, scheduledHrs, trackedHrs, cpPG1, cpPhysical, cpDigitalOther, cpSupplements, netRevenue].\n' +
    '// Refreshed ' + nowIso + '. Never read by Setter/Closer code.\n' +
    'const PHONE_RAW = ' + rawJs + ';';

  // Matches the const declaration AND every "//"-prefixed comment line directly above it (any
  // number of them) -- not just the declaration alone. Without this, every successful publish was
  // leaving the PREVIOUS run's 4-line comment block in place and stacking a fresh one on top of
  // it, since the old regex only ever replaced the "const PHONE_RAW = [...]" line itself; that
  // stale commentary has been accumulating, uncapped, since this pipeline's very first publish.
  var out = phoneReplaceOnce_(html, /(?:\/\/[^\n]*\n)*const PHONE_RAW = \[.*?\];/s, constDecl, true);
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
// 4b. Hubstaff (optional -- Scheduled_Hrs still publishes without it, Tracked Hours just stays 0):
//     Hubstaff web app -> Settings -> Organization -> Security & log in -> API access tokens ->
//     Create token, assign it to an owner/manager (needs full visibility, not a restricted member),
//     expiration "Never" is simplest. Copy the hsoat_... secret (shown once), then add it here as
//     another script property:
//       Property: HUBSTAFF_TOKEN
//       Value:    hsoat_...
//     No org ID needed -- hubstaffFetchOrgId_() looks it up from the token itself.
// 5. Clock icon (Triggers) -> Add Trigger: function phoneRefreshAndPublish, event source
//    "Time-driven", type "Hour timer", every hour (or whatever cadence makes sense once you see
//    how big a single run is / how often Aloware adds new weekly files).
// 6. Test it: select phoneRefreshAndPublish from the function dropdown, click Run. Authorize the
//    new scopes it asks for (Spreadsheets, Drive, UrlFetch to github.com AND api.hubstaff.com if
//    HUBSTAFF_TOKEN is set) when prompted. This first run reads ALL ~15,685 Schedule rows and
//    processes ALOWARE_NEW_FILES_PER_RUN (default 2) Aloware files, newest-created first -- watch
//    Executions (the play-button-with-a-clock icon) for how long it actually takes and whether it
//    completes within the execution time limit; if it times out, lower ALOWARE_NEW_FILES_PER_RUN
//    (or tell Claude) so each run's chunk is smaller. If HUBSTAFF_TOKEN is set, also check
//    Executions for "Hubstaff: X org members fetched, Y matched the Schedule roster." -- if Y is 0,
//    share the "Hubstaff raw member sample ..." log line with Claude so the name-field mapping can
//    be corrected for your account's response shape.
// 6b. Fixing individual reps whose Tracked Hours stays 0: every run logs "Hubstaff: N Schedule
//     reps never matched a Hubstaff member" with the list of names -- but first, every run ALSO
//     automatically tries each person's "names_lookup" Domo_name alias(es) against the real
//     Hubstaff member list before giving up (added 2026-11-04 -- see refineHubstaffKeysWithDomoAliases_
//     above and the "Hubstaff: N Schedule row(s) matched via a names_lookup Domo_name alias" log
//     line), since a Domo alias is often the person's actual/legal name, which Hubstaff tends to
//     use too. So check that log line and the names_lookup tab FIRST -- if the person already has
//     a names_lookup row and it still didn't resolve, or they have no names_lookup row at all, THEN
//     add a "Hubstaff Name" column to the Schedule tab (any column name exactly "Hubstaff Name" --
//     the script looks it up by header, works whichever position it's in) and put that rep's actual
//     Hubstaff display name in it, on any row(s) for them -- the script reads whichever value it
//     finds, doesn't need every row filled in. That value is what gets matched to Hubstaff instead
//     of the Name column, for that rep only. A SEPARATE log line, "Hubstaff: N reps matched a
//     Hubstaff member but have zero tracked time in this window", is a different situation -- an
//     override won't help there; it means that rep genuinely isn't tracking time in Hubstaff.
// 7. Check https://github.com/markdeguzman-png/pg-dashboard for a new commit adding a
//    PHONE_RAW const to pg_dashboard.html. Vercel auto-deploys from that push.
//
// ---- Aloware backfill: how it works ----
// Aloware call logs live one subfolder per month under ALOWARE_ROOT_FOLDER_ID
// ("01-01-2026", "02-01-2026", ... "10-01-2026", ~1.1GB total across Jan-Oct) -- far too much to
// re-download every run. A given file, once written, never changes again (a new week's data only
// ever shows up as a brand-new file, on Mondays) -- so caching is per FILE, not per month. Each
// scheduled run: reuses every file already cached in the "phoneConnectedCallsCache.json" file this
// script maintains in the Aloware root folder, and processes at most ALOWARE_NEW_FILES_PER_RUN
// not-yet-cached files, newest-created first, then caches them permanently (success or failure).
// That ordering means a fresh Monday export is picked up on the very next run regardless of how
// much older backlog is still unprocessed, while the ~1.1GB January-onward backlog fills in behind
// it, newest-to-oldest, across subsequent runs. With the default of 2/run and an hourly trigger,
// the full backlog finishes within about a day of the updated script going live, with no manual
// action needed beyond pasting it in. Check Executions' logs for "Processing new Aloware file ..."
// lines to watch progress, or raise ALOWARE_NEW_FILES_PER_RUN if a run's Execution time shows
// headroom to go faster. If a file is too large for this script to load (the largest single-month
// files, Jan-May, are ~105-131MB each), it's cached as a failure and never retried -- check
// Executions for "Skipping Aloware file ... (failed to process)" lines; if that happens, that
// month may need to be re-exported from Aloware as smaller weekly files instead of one big monthly
// file (matching how June onward is already split), after which deleting that one entry from
// phoneConnectedCallsCache.json (in the Aloware root folder) lets it be retried.
//
// This pipeline is intentionally independent of claudeRefreshAndPublish.gs -- different
// spreadsheet, different Drive source, different const in the dashboard (PHONE_RAW vs
// RAW_SCHED/TREND_*). Running both triggers hourly is fine; they never touch each other's data.
//
// ---- Domo Contribution Profit: no setup needed in THIS project ----
// cpPG1/cpPhysical/cpDigitalOther/cpSupplements come from a SEPARATE Apps Script project
// (domoMultiPosExport.gs, standalone, holds its own DOMO_CLIENT_ID/SECRET) that writes small CSVs
// to "PGZ Multi POS Transactions/Contribution Profit Rollup/" in the same Google account's Drive.
// This script just reads them (domoReadContributionProfitByNameDateGroup_) -- no extra script
// property or permission setup needed here beyond the Drive scope already granted for Aloware.
// Optional/additive like Hubstaff: if that folder doesn't exist yet (domoMultiPosExport.gs hasn't
// run), those 4 columns just stay 0 rather than breaking this publish.
//
// Fixing reps whose Contribution Profit looks too low: maintained via a "names_lookup" tab in this
// SAME spreadsheet (added by the user 2026-11-03, not generated by this script) -- two columns,
// "Sched_name" and "Domo_name", one row per accepted Domo sourceTitle spelling for that Schedule
// Name (a person can have more than one row: their own exact name plus one row per alias). This
// tab is user-maintained going forward -- add a row there for any rep whose Contribution Profit
// looks too low, no code change needed. See buildDomoAliasKeysByName_ above for exactly how it's
// read; missing the tab entirely, or missing a given person, is fine -- Contribution Profit always
// still sums under that person's plain Name-column spelling regardless.
// ============================================================================
