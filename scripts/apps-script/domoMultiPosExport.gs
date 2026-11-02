// ============================================================================
// PGZ Multi POS Transactions export: Domo (the "PGZ | Abbreviated Multi POS
// Transactions" card's underlying DataSet) -> Google Drive, one CSV per month.
// Entirely independent of phoneScheduleRefresh.gs / claudeRefreshAndPublish.gs --
// different data source (Domo, not Sheets/Drive-CSV/Hubstaff), different
// destination (Drive folders, not the dashboard HTML), no shared state with
// either of those pipelines.
//
// ONE-TIME SETUP:
//   1. script.google.com -> New project. This does NOT need to be bound to any
//      spreadsheet -- it only talks to Domo's API and Google Drive.
//   2. Paste this whole file in.
//   3. Domo API credentials: Settings -> Script Properties (gear icon -> Project
//      Settings -> Script Properties -> Add script property), add:
//        Property: DOMO_CLIENT_ID      Value: <your Domo Client ID>
//        Property: DOMO_CLIENT_SECRET  Value: <your Domo Client Secret>
//      (Client ID + Secret from Domo Admin -> Authentication -> Client
//      Management, or wherever your instance's Developer Portal client was
//      created -- the OAuth2 client_credentials pair, not a username/password.)
//   4. Run domoRefreshAndPublish once manually (function dropdown -> Run).
//      Authorize the scopes it asks for (UrlFetch to api.domo.com, Drive) when
//      prompted. Check Executions for a "Domo: datasets matching ..." log line
//      -- if it says "found 1", the dataset auto-detected correctly and the
//      run proceeds; if it says "found 0" or "found 2+", the Execution log
//      lists every candidate it saw so you can tell Claude which one is right,
//      or set a DOMO_DATASET_ID script property directly to skip the search
//      entirely (see domoFindDatasetId_ below).
//   5. Check your Google Drive (My Drive root) for a new "PGZ Multi POS
//      Transactions" folder with month subfolders (2026-06, 2026-07, ...)
//      each containing one CSV.
//   6. Clock icon (Triggers) -> Add Trigger: function domoRefreshAndPublish,
//      event source "Time-driven", type "Hour timer".
//
// ---- How the backfill/refresh split works ----
// Every past (non-current) month's CSV, once written, is treated as final and
// never re-queried -- same "a given period's data is finalized once captured"
// convention phoneScheduleRefresh.gs's Aloware pipeline uses. Up to
// DOMO_BACKFILL_MONTHS_PER_RUN not-yet-written past months are backfilled per
// run, oldest first, so the full June-2026-onward history fills in gradually
// across a few scheduled runs without risking a single run timing out. The
// CURRENT month is always re-queried and its CSV fully overwritten every run,
// since it's the only one still gaining transactions.
// ============================================================================

var DOMO_API_BASE = 'https://api.domo.com';
var DOMO_SCOPE = 'data';
// Search substring for the underlying DataSet's own name -- NOT the Domo page/
// card title ("PGZ | Abbreviated Multi POS Transactions" is a dashboard page
// label; the DataSet it's built on very likely has a different, plainer name).
// domoFindDatasetId_() logs every match it finds, so if this substring turns
// out wrong (0 or 2+ matches), the Execution log shows the real candidates.
var DOMO_DATASET_NAME_LIKE = 'Multi POS Transactions';

var DRIVE_ROOT_FOLDER_NAME = 'PGZ Multi POS Transactions';
var EXTRACT_START_MONTH = '2026-06'; // YYYY-MM, inclusive
var DOMO_BACKFILL_MONTHS_PER_RUN = 3;

function domoRefreshAndPublish() {
  var authHeader = domoAuthHeader_();
  var datasetId = domoFindDatasetId_(authHeader);
  var rootFolder = domoGetOrCreateFolder_(DriveApp.getRootFolder(), DRIVE_ROOT_FOLDER_NAME);

  var currentMonth = Utilities.formatDate(new Date(), 'America/New_York', 'yyyy-MM');

  var allMonths = domoListMonthsBetween_(EXTRACT_START_MONTH, currentMonth);
  var pastMonths = allMonths.filter(function (m) { return m !== currentMonth; });

  var backfilled = 0;
  pastMonths.forEach(function (monthStr) {
    if (backfilled >= DOMO_BACKFILL_MONTHS_PER_RUN) return;
    var monthFolder = domoGetOrCreateFolder_(rootFolder, monthStr);
    var fileName = 'PGZ Multi POS Transactions - ' + monthStr + '.csv';
    if (monthFolder.getFilesByName(fileName).hasNext()) return; // already finalized, never re-queried
    Logger.log('Domo: backfilling ' + monthStr + '...');
    var result = domoQueryMonth_(authHeader, datasetId, monthStr);
    domoWriteCsv_(monthFolder, fileName, result);
    Logger.log('Domo: backfilled ' + monthStr + ' -- ' + result.rows.length + ' rows.');
    backfilled++;
  });

  var currentFolder = domoGetOrCreateFolder_(rootFolder, currentMonth);
  var currentFileName = 'PGZ Multi POS Transactions - ' + currentMonth + '.csv';
  var currentResult = domoQueryMonth_(authHeader, datasetId, currentMonth);
  domoWriteCsv_(currentFolder, currentFileName, currentResult);
  Logger.log('Domo: refreshed current month ' + currentMonth + ' -- ' + currentResult.rows.length + ' rows.');
}

// ---- Auth ----
function domoAuthHeader_() {
  var clientId = PropertiesService.getScriptProperties().getProperty('DOMO_CLIENT_ID');
  var clientSecret = PropertiesService.getScriptProperties().getProperty('DOMO_CLIENT_SECRET');
  if (!clientId || !clientSecret) throw new Error('DOMO_CLIENT_ID / DOMO_CLIENT_SECRET script properties not set -- see setup instructions at the top of this file.');
  var url = DOMO_API_BASE + '/oauth/token?grant_type=client_credentials&scope=' + DOMO_SCOPE;
  var resp = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Basic ' + Utilities.base64Encode(clientId + ':' + clientSecret) },
    muteHttpExceptions: true
  });
  if (resp.getResponseCode() !== 200) throw new Error('Domo auth failed (' + resp.getResponseCode() + '): ' + resp.getContentText());
  var token = JSON.parse(resp.getContentText()).access_token;
  return 'Bearer ' + token;
}

// ---- DataSet discovery (self-discovering, like phoneScheduleRefresh.gs's Hubstaff org lookup) ----
// A DOMO_DATASET_ID script property, if set manually, always wins and skips the search entirely --
// useful if the name search can't narrow to exactly one match, or just to pin it explicitly.
function domoFindDatasetId_(authHeader) {
  var manualId = PropertiesService.getScriptProperties().getProperty('DOMO_DATASET_ID');
  if (manualId) return manualId;

  var url = DOMO_API_BASE + '/v1/datasets?nameLike=' + encodeURIComponent(DOMO_DATASET_NAME_LIKE) + '&limit=50';
  var resp = UrlFetchApp.fetch(url, { headers: { Authorization: authHeader }, muteHttpExceptions: true });
  if (resp.getResponseCode() !== 200) throw new Error('Domo list datasets failed (' + resp.getResponseCode() + '): ' + resp.getContentText());
  var list = JSON.parse(resp.getContentText());
  Logger.log('Domo: datasets matching "' + DOMO_DATASET_NAME_LIKE + '" (found ' + list.length + '): '
    + JSON.stringify(list.map(function (d) { return { id: d.id, name: d.name, rows: d.rows }; })));
  if (list.length !== 1) {
    throw new Error('Expected exactly 1 Domo DataSet matching "' + DOMO_DATASET_NAME_LIKE + '", found ' + list.length
      + ' -- check the Execution log for the full candidate list, then either narrow DOMO_DATASET_NAME_LIKE or set '
      + 'a DOMO_DATASET_ID script property directly to the right id to skip this search.');
  }
  // Cached as a script property going forward -- same property a manual override would use, so
  // once this search succeeds once, every later run (and a manual override, if ever needed) behaves
  // identically.
  PropertiesService.getScriptProperties().setProperty('DOMO_DATASET_ID', list[0].id);
  Logger.log('Domo: using DataSet "' + list[0].name + '" (' + list[0].id + '), cached for future runs.');
  return list[0].id;
}

// ---- Query construction ----
// Filters (per explicit instruction, 2026-11-03): sourceTitle not blank (excludes orders not
// attributed to a rep); ProductName excludes anything shipping- or VIP-Experience-related;
// orderType = NEW_SALE OR billingCycleNumber = 2 (first renewal only, not every recurring charge);
// scoped to one calendar month at a time via dateCreated. SELECT * (not a hand-picked column list)
// so every column Domo has -- including the fee/refund/chargeback ones not itemized here -- lands
// in the export; this is an archival pull, not a curated dashboard feed.
function domoQueryMonth_(authHeader, datasetId, monthStr) {
  var monthStart = monthStr + '-01';
  var nextMonthStart = domoAddMonths_(monthStr, 1) + '-01';
  var sql = "SELECT * FROM table" +
    " WHERE sourceTitle IS NOT NULL AND sourceTitle <> ''" +
    " AND LOWER(ProductName) NOT LIKE '%shipping%' AND LOWER(ProductName) NOT LIKE '%vip experience%'" +
    " AND (orderType = 'NEW_SALE' OR billingCycleNumber = 2)" +
    " AND dateCreated >= '" + monthStart + "' AND dateCreated < '" + nextMonthStart + "'";
  return domoExecuteQuery_(authHeader, datasetId, sql);
}

function domoExecuteQuery_(authHeader, datasetId, sql) {
  var resp = UrlFetchApp.fetch(DOMO_API_BASE + '/v1/datasets/query/execute/' + datasetId, {
    method: 'post', headers: { Authorization: authHeader }, contentType: 'application/json',
    payload: JSON.stringify({ sql: sql }), muteHttpExceptions: true
  });
  if (resp.getResponseCode() !== 200) throw new Error('Domo query failed (' + resp.getResponseCode() + '): ' + resp.getContentText());
  var body = JSON.parse(resp.getContentText());
  return { columns: body.columns || [], rows: body.rows || [] };
}

// ---- CSV + Drive ----
function domoCsvField_(v) {
  if (v === null || v === undefined) return '';
  var s = String(v);
  if (/[",\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
  return s;
}
function domoCsvRow_(arr) { return arr.map(domoCsvField_).join(','); }

function domoWriteCsv_(folder, fileName, result) {
  var lines = [domoCsvRow_(result.columns)];
  result.rows.forEach(function (r) { lines.push(domoCsvRow_(r)); });
  var content = lines.join('\n');
  var existing = folder.getFilesByName(fileName);
  if (existing.hasNext()) {
    var first = existing.next();
    first.setContent(content);
    while (existing.hasNext()) existing.next().setTrashed(true); // clean up any accidental duplicates
  } else {
    folder.createFile(fileName, content, MimeType.CSV);
  }
}

function domoGetOrCreateFolder_(parent, name) {
  var it = parent.getFoldersByName(name);
  if (it.hasNext()) return it.next();
  return parent.createFolder(name);
}

// ---- Month utilities ----
function domoAddMonths_(monthStr, n) {
  var parts = monthStr.split('-');
  var d = new Date(Date.UTC(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1 + n, 1));
  return Utilities.formatDate(d, 'UTC', 'yyyy-MM');
}
function domoListMonthsBetween_(startMonth, endMonthInclusive) {
  var out = [];
  var cur = startMonth;
  for (var guard = 0; guard < 240 && cur <= endMonthInclusive; guard++) { // 20-year safety cap
    out.push(cur);
    cur = domoAddMonths_(cur, 1);
  }
  return out;
}
