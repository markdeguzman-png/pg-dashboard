// ============================================================================
// Fully automatic pipeline: Sched tab -> asr_closer_dashboard.html on GitHub -> Vercel auto-deploy.
// Runs entirely inside the "ASR - No Show" Apps Script project (same place the existing
// claudeExportSchedSnapshot function lives) -- no Claude session, no scheduled task, no human
// approval needed once set up. This REPLACES the need for Claude to pull/rebuild/push by hand.
//
// ONE-TIME SETUP (see full instructions at the bottom of this file):
//   1. Paste this whole file into the Apps Script editor as a new script file (or append to the
//      existing one).
//   2. Create a GitHub fine-grained Personal Access Token scoped to just the markdeguzman-png/
//      pg-dashboard repo, with "Contents: Read and write" permission.
//   3. In the Apps Script editor: Project Settings (gear icon) -> Script Properties -> add a
//      property named GITHUB_PAT with that token as the value.
//   4. In Triggers (clock icon): either edit the existing hourly trigger to call
//      claudeRefreshAndPublish instead of claudeExportSchedSnapshot, or add a new hourly
//      trigger for claudeRefreshAndPublish and delete/disable the old one (this function already
//      does everything the old one did, plus the GitHub publish -- running both is redundant).
// ============================================================================

var GITHUB_OWNER = 'markdeguzman-png';
var GITHUB_REPO = 'pg-dashboard';
var GITHUB_BRANCH = 'main';
var DASHBOARD_PATH = 'asr_closer_dashboard.html';
var RAW_URL = 'https://raw.githubusercontent.com/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/' +
  GITHUB_BRANCH + '/' + DASHBOARD_PATH;

// Column names as they appear in the Sched tab's header row (row 1). Verified against the live
// sheet's own SUMIFS formulas -- see project_asr_closer_dashboard.md in Claude's memory for the
// full history/rationale if these ever need to change.
var NUM_COLS = ['Sets','IB_set','OB_set','Appointments','IB_Appt','OB_Appt',
  'Warm_set','IB_warm_set','OB_warm_set','Show','IB_Show','OB_Show',
  'ASR_eligible_calls','ASR_IB_Calls','ASR_OB_Calls',
  'Upfront_Revenue','IB_Revenue','OB_Revenue','Closed Deal',
  'IB_calls','OB_call',
  'Advisor_appt','Advisor_show_den','Advisor_show','Advisor_closed_deal',
  'Closer_upfront_Revenue','Closer_Products_sold','Closer_Clubs','Closer_PG1','RS1',
  'calls_ivr1_asr','calls_ivr2_asr','calls_ivr3_asr','calls_ivr4_asr',
  'sets_ivr1','sets_ivr2','sets_ivr3','sets_ivr4'];

function claudeRefreshAndPublish() {
  var values = fetchSchedValues_();
  writeSchedSnapshot_(values); // keep the raw-snapshot sheet too, as a debug/audit trail

  var rawRows = extractRawSched_(values);
  if (!rawRows.length) { Logger.log('No active rows extracted; aborting.'); return; }
  var agg = aggregate_(rawRows);

  var nowIso = new Date().toISOString();
  var htmlResp = UrlFetchApp.fetch(RAW_URL, { muteHttpExceptions: true });
  if (htmlResp.getResponseCode() !== 200) {
    throw new Error('Could not fetch current dashboard HTML from GitHub: ' + htmlResp.getResponseCode());
  }
  var result = spliceHtml_(htmlResp.getContentText(), rawRows, agg, nowIso);
  if (result === null) { Logger.log('No change in underlying data; skipping publish.'); return; }

  // Only remember this digest as "already published" once the GitHub push actually succeeds --
  // if publishToGitHub_ throws, the next run must still see this as unpublished and retry it,
  // not silently skip it forever because the digest looked unchanged.
  publishToGitHub_(result.content, agg);
  PropertiesService.getScriptProperties().setProperty('LAST_DATA_DIGEST', result.digest);
}

// ---- Sheets API pull (same retry-with-backoff as the original claudeExportSchedSnapshot) ----
function fetchSchedValues_() {
  var sourceId = '1pcsC28bwL0_5S0oa65LHXHJTRgNFT4rO-bqpszvDmD8';
  var range = 'Sched!A1:CI8500';
  var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sourceId +
    '/values/' + encodeURIComponent(range) + '?valueRenderOption=FORMATTED_VALUE';
  var token = ScriptApp.getOAuthToken();
  var resp;
  var maxAttempts = 4;
  for (var attempt = 1; attempt <= maxAttempts; attempt++) {
    resp = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + token }, muteHttpExceptions: true });
    var code = resp.getResponseCode();
    if (code === 200) break;
    if ((code >= 500 || code === 429) && attempt < maxAttempts) {
      Utilities.sleep(attempt * 5000);
      continue;
    }
    throw new Error('Sheets API error ' + code + ' after ' + attempt + ' attempt(s): ' + resp.getContentText());
  }
  var json = JSON.parse(resp.getContentText());
  var data = json.values;
  if (!data || !data.length) throw new Error('No data returned from Sheets API');
  var width = 0;
  for (var i = 0; i < data.length; i++) width = Math.max(width, data[i].length);
  for (var i = 0; i < data.length; i++) while (data[i].length < width) data[i].push('');
  return data;
}

function writeSchedSnapshot_(data) {
  var width = data[0].length;
  var targetName = 'Sched_Snapshot';
  var files = DriveApp.getFilesByName(targetName);
  var targetSS = files.hasNext() ? SpreadsheetApp.open(files.next()) : SpreadsheetApp.create(targetName);
  var targetSheet = targetSS.getSheets()[0];
  targetSheet.clearContents();
  targetSheet.getRange(1, 1, data.length, width).setValues(data);
}

// ---- Extraction: Sched rows -> RAW_SCHED format (header-name lookup, not hardcoded columns) ----
function colIdx_(headers, name) {
  var i = headers.indexOf(name);
  if (i === -1) throw new Error('Missing expected Sched column: ' + name);
  return i;
}

function toNum_(v) {
  if (v === undefined || v === null || v === '') return 0;
  var n = parseFloat(String(v).replace(/,/g, ''));
  return isNaN(n) ? 0 : n;
}

function round2_(x) { return Math.round(x * 100) / 100; }

function isoDate_(mdy) {
  var parts = String(mdy).split('/');
  if (parts.length !== 3) return null;
  var m = ('0' + parts[0]).slice(-2), d = ('0' + parts[1]).slice(-2), y = parts[2];
  return y + '-' + m + '-' + d;
}

function extractRawSched_(values) {
  var headers = values[0];
  var idx = {};
  ['Name', 'Current Team', 'Team', 'Current LOB', 'LOB', 'Date'].concat(NUM_COLS).forEach(function (h) {
    idx[h] = colIdx_(headers, h);
  });
  var rows = [];
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    var name = row[idx['Name']];
    if (!name) continue;
    var sum = 0;
    for (var c = 0; c < NUM_COLS.length; c++) sum += toNum_(row[idx[NUM_COLS[c]]]);
    if (sum === 0) continue;
    var dateStr = isoDate_(row[idx['Date']]);
    if (!dateStr) continue;
    var team = row[idx['Current Team']] || row[idx['Team']];
    var lob = row[idx['Current LOB']] || row[idx['LOB']];
    rows.push([
      name, team, lob, dateStr,
      toNum_(row[idx['Sets']]), toNum_(row[idx['IB_set']]), toNum_(row[idx['OB_set']]),
      toNum_(row[idx['Appointments']]), toNum_(row[idx['IB_Appt']]), toNum_(row[idx['OB_Appt']]),
      toNum_(row[idx['Warm_set']]), toNum_(row[idx['IB_warm_set']]), toNum_(row[idx['OB_warm_set']]),
      toNum_(row[idx['Show']]), toNum_(row[idx['IB_Show']]), toNum_(row[idx['OB_Show']]),
      toNum_(row[idx['ASR_eligible_calls']]), toNum_(row[idx['ASR_IB_Calls']]), toNum_(row[idx['ASR_OB_Calls']]),
      round2_(toNum_(row[idx['Upfront_Revenue']])), round2_(toNum_(row[idx['IB_Revenue']])), round2_(toNum_(row[idx['OB_Revenue']])),
      toNum_(row[idx['Closed Deal']]), toNum_(row[idx['IB_calls']]), toNum_(row[idx['OB_call']]),
      toNum_(row[idx['Advisor_appt']]), toNum_(row[idx['Advisor_show']]), toNum_(row[idx['Advisor_closed_deal']]),
      round2_(toNum_(row[idx['Closer_upfront_Revenue']])), toNum_(row[idx['Closer_Products_sold']]),
      toNum_(row[idx['Closer_Clubs']]), toNum_(row[idx['Closer_PG1']]),
      toNum_(row[idx['calls_ivr1_asr']]), toNum_(row[idx['calls_ivr2_asr']]), toNum_(row[idx['calls_ivr3_asr']]), toNum_(row[idx['calls_ivr4_asr']]),
      toNum_(row[idx['sets_ivr1']]), toNum_(row[idx['sets_ivr2']]), toNum_(row[idx['sets_ivr3']]), toNum_(row[idx['sets_ivr4']]),
      toNum_(row[idx['Advisor_show_den']]), toNum_(row[idx['RS1']])
    ]);
  }
  return rows;
}

// ---- Aggregation: company-wide Daily/Weekly(Monday-start)/Monthly, repMetrics26 formulas ----
function weekBeginning_(dateStr) {
  var d = new Date(dateStr + 'T00:00:00Z');
  var dow = d.getUTCDay(); // 0=Sun..6=Sat, matches the dashboard's own weekBeginningOf()
  d.setUTCDate(d.getUTCDate() - (dow === 0 ? 6 : dow - 1));
  return d.toISOString().slice(0, 10);
}

function blankSums_() {
  return { sets: 0, ibSets: 0, obSets: 0, appt: 0, ibAppt: 0, obAppt: 0, warmSet: 0, ibWarmSet: 0, obWarmSet: 0,
    show: 0, ibShow: 0, obShow: 0, calls90s: 0, ibCalls90s: 0, obCalls90s: 0, revenue: 0, ibRevenue: 0, obRevenue: 0,
    closedDeal: 0, ibCalls: 0, obCalls: 0 };
}

function addRow_(o, r) {
  o.sets += r[4]; o.ibSets += r[5]; o.obSets += r[6];
  o.appt += r[7]; o.ibAppt += r[8]; o.obAppt += r[9];
  o.warmSet += r[10]; o.ibWarmSet += r[11]; o.obWarmSet += r[12];
  o.show += r[13]; o.ibShow += r[14]; o.obShow += r[15];
  o.calls90s += r[16]; o.ibCalls90s += r[17]; o.obCalls90s += r[18];
  o.revenue += r[19]; o.ibRevenue += r[20]; o.obRevenue += r[21];
  o.closedDeal += r[22]; o.ibCalls += r[23]; o.obCalls += r[24];
}

function pct_(a, b) { return b ? round2_(a / b * 100) : 0; }

function repMetrics26_(o) {
  return [
    o.sets, o.ibSets, o.obSets, o.appt,
    pct_(o.warmSet, o.sets), pct_(o.ibWarmSet, o.ibSets), pct_(o.obWarmSet, o.obSets),
    pct_(o.show, o.appt), pct_(o.ibShow, o.ibAppt), pct_(o.obShow, o.obAppt),
    o.show, o.ibShow, o.obShow,
    pct_(o.sets, o.calls90s), pct_(o.ibSets, o.ibCalls90s), pct_(o.obSets, o.obCalls90s),
    round2_(o.revenue), round2_(o.ibRevenue), round2_(o.obRevenue),
    o.closedDeal, o.calls90s, o.ibCalls90s, o.obCalls90s,
    o.ibCalls, o.obCalls,
    pct_(o.calls90s, o.ibCalls + o.obCalls)
  ];
}

function aggregate_(rows) {
  var daily = {}, weekly = {}, monthly = {};
  rows.forEach(function (r) {
    var date = r[3], wb = weekBeginning_(date), mo = date.slice(0, 7);
    if (!daily[date]) daily[date] = blankSums_();
    if (!weekly[wb]) weekly[wb] = blankSums_();
    if (!monthly[mo]) monthly[mo] = blankSums_();
    addRow_(daily[date], r); addRow_(weekly[wb], r); addRow_(monthly[mo], r);
  });
  function emit(obj) {
    return Object.keys(obj).sort().map(function (k) { return [k].concat(repMetrics26_(obj[k])); });
  }
  return { daily: emit(daily), weekly: emit(weekly), monthly: emit(monthly) };
}

// ---- Splice into the dashboard HTML (mirrors scripts/refresh_asr_dashboard.py's logic) ----
function replaceOnce_(str, regex, replacement) {
  var found = false;
  var result = str.replace(regex, function () { found = true; return replacement; });
  if (!found) throw new Error('Splice target not found for pattern: ' + regex);
  return result;
}

function wrapComment_(text, width) {
  var words = text.split(' ');
  var lines = [], cur = '';
  words.forEach(function (w) {
    if ((cur + ' ' + w).trim().length > width) { lines.push(cur.trim()); cur = w; }
    else { cur = (cur + ' ' + w).trim(); }
  });
  if (cur) lines.push(cur.trim());
  return lines.map(function (l) { return '// ' + l; }).join('\n');
}

function md5Hex_(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, s)
    .map(function (b) { var v = (b < 0 ? b + 256 : b).toString(16); return v.length === 1 ? '0' + v : v; })
    .join('');
}

function spliceHtml_(html, rawRows, agg, nowIso) {
  var rawJs = JSON.stringify(rawRows);
  var dailyJs = JSON.stringify(agg.daily);
  var weeklyJs = JSON.stringify(agg.weekly);
  var monthlyJs = JSON.stringify(agg.monthly);

  // Skip publishing if the underlying data hasn't actually changed since the last successful
  // publish -- avoids an empty-diff commit (and a pointless Vercel redeploy) every single hour.
  var digest = md5Hex_(rawJs + dailyJs + weeklyJs + monthlyJs);
  if (PropertiesService.getScriptProperties().getProperty('LAST_DATA_DIGEST') === digest) return null;

  var out = html;
  out = replaceOnce_(out, /const RAW_SCHED = \[.*?\];/s, 'const RAW_SCHED = ' + rawJs + ';');
  out = replaceOnce_(out, /const TREND_DAILY = rowsToObjs\('date', \[.*?\], TREND_FIELDS\);/s,
    "const TREND_DAILY = rowsToObjs('date', " + dailyJs + ", TREND_FIELDS);");
  out = replaceOnce_(out, /const TREND_WEEKLY = rowsToObjs\('weekBeginning', \[.*?\], TREND_FIELDS\);/s,
    "const TREND_WEEKLY = rowsToObjs('weekBeginning', " + weeklyJs + ", TREND_FIELDS);");
  out = replaceOnce_(out, /const TREND_MONTHLY = rowsToObjs\('month', \[.*?\], TREND_FIELDS\);/s,
    "const TREND_MONTHLY = rowsToObjs('month', " + monthlyJs + ", TREND_FIELDS);");
  out = replaceOnce_(out, /const DATA_UPDATED_AT_ISO = "[^"]*";/, 'const DATA_UPDATED_AT_ISO = "' + nowIso + '";');

  var lastDaily = agg.daily[agg.daily.length - 1];
  var commentText = 'Company-wide Daily/Weekly/Monthly refreshed from a ' + nowIso +
    ' Sched pull (automated Apps Script publish -- pushes straight to GitHub, no human/Claude ' +
    'step in the loop). Latest day with data: ' + lastDaily[0] + ' (' + lastDaily[1] + ' Sets so ' +
    'far). The most recent ~week is still provisional and will keep narrowing as Sched backfills ' +
    'further.';
  out = out.replace(/(?:^\/\/[^\n]*\n)+(?=const TREND_MONTHLY = rowsToObjs)/m, wrapComment_(commentText, 96) + '\n');

  return { content: out, digest: digest };
}

// ---- Publish straight to GitHub via the Git Data API (handles files >1MB, unlike Contents API) ----
function publishToGitHub_(newContent, agg) {
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_PAT');
  if (!token) throw new Error('GITHUB_PAT script property not set -- see setup instructions at the top of this file.');
  var apiBase = 'https://api.github.com/repos/' + GITHUB_OWNER + '/' + GITHUB_REPO;
  var authHeaders = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  var refResp = UrlFetchApp.fetch(apiBase + '/git/ref/heads/' + GITHUB_BRANCH, { headers: authHeaders, muteHttpExceptions: true });
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
    payload: JSON.stringify({ base_tree: baseTreeSha, tree: [{ path: DASHBOARD_PATH, mode: '100644', type: 'blob', sha: blobSha }] })
  });
  if (treeResp.getResponseCode() !== 201) throw new Error('git/trees failed: ' + treeResp.getContentText());
  var newTreeSha = JSON.parse(treeResp.getContentText()).sha;

  var lastDaily = agg.daily[agg.daily.length - 1];
  var msg = 'Refresh data (automated Apps Script publish)\n\nLatest day: ' + lastDaily[0] + ' (' + lastDaily[1] + ' Sets so far).';
  var newCommitResp = UrlFetchApp.fetch(apiBase + '/git/commits', {
    method: 'post', headers: authHeaders, contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ message: msg, tree: newTreeSha, parents: [latestCommitSha] })
  });
  if (newCommitResp.getResponseCode() !== 201) throw new Error('git/commits create failed: ' + newCommitResp.getContentText());
  var newCommitSha = JSON.parse(newCommitResp.getContentText()).sha;

  var updateRefResp = UrlFetchApp.fetch(apiBase + '/git/refs/heads/' + GITHUB_BRANCH, {
    method: 'patch', headers: authHeaders, contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ sha: newCommitSha, force: false })
  });
  if (updateRefResp.getResponseCode() !== 200) throw new Error('git/refs update failed: ' + updateRefResp.getContentText());

  Logger.log('Published commit ' + newCommitSha + ' -- latest day ' + lastDaily[0] + ', ' + lastDaily[1] + ' Sets.');
}

// ============================================================================
// SETUP INSTRUCTIONS
//
// 1. Open the "ASR - No Show" Apps Script project (Extensions > Apps Script from the source
//    sheet, or script.google.com and find it in your recent projects).
// 2. Add this whole file as a new script file (File > New > Script file, name it e.g.
//    "RefreshAndPublish"), or paste it into an existing one -- doesn't matter which, Apps Script
//    treats all .gs files in a project as one shared scope.
// 3. Create a GitHub token the script can push with:
//      - Go to https://github.com/settings/personal-access-tokens/new (fine-grained tokens)
//      - Resource owner: markdeguzman-png
//      - Repository access: "Only select repositories" -> pg-dashboard
//      - Permissions: Repository permissions -> Contents -> Read and write
//      - Generate, copy the token (starts with github_pat_...)
// 4. Back in the Apps Script editor: click the gear icon (Project Settings) in the left sidebar,
//    scroll to "Script Properties", click "Add script property":
//      Property: GITHUB_PAT
//      Value:    <paste the token>
// 5. Click the clock icon (Triggers) in the left sidebar. Find the existing hourly trigger for
//    claudeExportSchedSnapshot and either:
//      (a) edit it (pencil icon) and change the function dropdown to claudeRefreshAndPublish, or
//      (b) delete it and add a new trigger: function claudeRefreshAndPublish, event source
//          "Time-driven", type "Hour timer", every hour.
//    Only ONE of these two functions should be on a trigger going forward -- claudeRefreshAndPublish
//    already does everything claudeExportSchedSnapshot did (writes Sched_Snapshot) plus the new
//    GitHub publish step, so leaving both on triggers would just do duplicate work every hour.
// 6. Test it: in the Apps Script editor, select claudeRefreshAndPublish from the function
//    dropdown at the top and click Run. Authorize the new scopes it asks for (github.com network
//    access via UrlFetchApp) if prompted. Check Executions (the icon that looks like a play
//    button with a clock) for success, and check https://github.com/markdeguzman-png/pg-dashboard
//    for a new commit. Vercel will auto-deploy from that push within seconds, same as it always
//    has for commits pushed from this session.
//
// After this is confirmed working, tell Claude so it can disable the Claude-side scheduled task
// (asr-closer-dashboard-hourly-refresh) -- it becomes redundant and would otherwise occasionally
// race with this one to push.
// ============================================================================
