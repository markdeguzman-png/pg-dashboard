// ============================================================================
// PGZ Multi POS Transactions export: Domo (the "PGZ | Abbreviated Multi POS
// Transactions" card's underlying DataSet) -> Google Drive, one CSV per month.
// Runs independently of phoneScheduleRefresh.gs / claudeRefreshAndPublish.gs --
// different data source (Domo, not Sheets/Drive-CSV/Hubstaff), different
// destination (Drive folders, not the dashboard HTML directly). As of 2026-11-03
// it also publishes a second, small rollup (Contribution Profit by rep/day/
// product group -- see domoPublishContributionProfitRollup_ below) that
// phoneScheduleRefresh.gs DOES read from Drive and join onto the Mid-Ticket/
// PG1/Inbound tabs -- that's the only point of contact between this script and
// the dashboard; everything else here stays Domo-credential-only.
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
//      each containing one CSV (now with a per-row "Contribution Profit"
//      column appended -- see domoAppendContributionProfitColumn_'s scope
//      caveat below before summing it), plus a "Contribution Profit Rollup"
//      subfolder with its own small per-month CSVs (date, sourceTitle, group,
//      contributionProfit) -- that second folder is what
//      phoneScheduleRefresh.gs reads to populate the dashboard.
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
    domoAppendContributionProfitColumn_(result);
    domoWriteCsv_(monthFolder, fileName, result);
    Logger.log('Domo: backfilled ' + monthStr + ' -- ' + result.rows.length + ' rows.');
    backfilled++;
  });

  var currentFolder = domoGetOrCreateFolder_(rootFolder, currentMonth);
  var currentFileName = 'PGZ Multi POS Transactions - ' + currentMonth + '.csv';
  var currentResult = domoQueryMonth_(authHeader, datasetId, currentMonth);
  domoAppendContributionProfitColumn_(currentResult);
  domoWriteCsv_(currentFolder, currentFileName, currentResult);
  Logger.log('Domo: refreshed current month ' + currentMonth + ' -- ' + currentResult.rows.length + ' rows.');

  domoPublishContributionProfitRollup_(authHeader, datasetId, rootFolder, allMonths, currentMonth);
}

// One-off: upgrades already-finalized PAST months' archival CSVs to carry the per-row
// Contribution Profit column (domoAppendContributionProfitColumn_ above). Those files were written
// before that column existed, and under domoRefreshAndPublish's normal "finalized, never
// re-queried" rule they'd never get it -- current-month files already pick it up automatically on
// every refresh, so this only ever has work to do on past months. Run manually (function dropdown
// -> domoForceRewriteArchiveWithContributionProfit -> Run) as many times as it takes to clear the
// backlog: it processes up to DOMO_BACKFILL_MONTHS_PER_RUN not-yet-upgraded months per call (same
// cap domoRefreshAndPublish's own backfill uses, to stay inside the execution time limit) and is
// safe to re-run -- it checks each file's own header first and skips any month that already has the
// column, so it can't double-append or accidentally touch a month twice. Once every past month is
// upgraded it logs that and does nothing further; domoRefreshAndPublish's regular behavior is
// completely unaffected by this function either way.
function domoForceRewriteArchiveWithContributionProfit() {
  var authHeader = domoAuthHeader_();
  var datasetId = domoFindDatasetId_(authHeader);
  var rootFolder = domoGetOrCreateFolder_(DriveApp.getRootFolder(), DRIVE_ROOT_FOLDER_NAME);
  var currentMonth = Utilities.formatDate(new Date(), 'America/New_York', 'yyyy-MM');
  var pastMonths = domoListMonthsBetween_(EXTRACT_START_MONTH, currentMonth)
    .filter(function (m) { return m !== currentMonth; });

  var upgraded = 0;
  pastMonths.forEach(function (monthStr) {
    if (upgraded >= DOMO_BACKFILL_MONTHS_PER_RUN) return;
    var monthFolder = domoGetOrCreateFolder_(rootFolder, monthStr);
    var fileName = 'PGZ Multi POS Transactions - ' + monthStr + '.csv';
    var existingIt = monthFolder.getFilesByName(fileName);
    if (existingIt.hasNext()) {
      var text = existingIt.next().getBlob().getDataAsString();
      var headerEnd = text.indexOf('\n');
      var header = headerEnd > -1 ? text.slice(0, headerEnd) : text;
      if (header.indexOf('Contribution Profit') !== -1) return; // already upgraded, skip
    }
    Logger.log('Domo: force-rewriting ' + monthStr + ' to add the Contribution Profit column...');
    var result = domoQueryMonth_(authHeader, datasetId, monthStr);
    domoAppendContributionProfitColumn_(result);
    domoWriteCsv_(monthFolder, fileName, result);
    Logger.log('Domo: force-rewrote ' + monthStr + ' -- ' + result.rows.length + ' rows.');
    upgraded++;
  });
  if (!upgraded) Logger.log('Domo: every past month already has the Contribution Profit column -- nothing left to do, this function can be ignored/deleted now.');
}

// Appends a per-ROW 'Contribution Profit' column to the archival export, mutating result in place
// -- same formula as the dashboard rollup below (Gross - Total COGS - Merchant Fees (Gross), net of
// Refunded/Chargedback and their own merchant-fee reversals), just applied per-transaction instead
// of pre-aggregated by rep/day/group. Added 2026-11-03 per explicit request ("add a column based
// just like the gross profit"), alongside the rollup rather than instead of it.
//
// IMPORTANT SCOPE CAVEAT: this column reflects the archival export's OWN query scope --
// domoQueryMonth_'s WHERE clause excludes shipping/VIP Experience ProductNames and restricts to
// orderType=NEW_SALE OR billingCycleNumber=2 (first sale or first renewal only, the convention this
// export was originally built with) -- so SUMMING this column across many rows will UNDERSTATE true
// total profit (it misses 3rd+ renewal cycles and VIP Experience sales that the dashboard's own
// Contribution Profit rollup deliberately does/doesn't include differently -- see
// domoPublishContributionProfitRollup_ below, which uses a separately-scoped query for exactly this
// reason). Fine for spot-checking an individual transaction's profit in this file; not a substitute
// for the dashboard's numbers if you're ever cross-totaling.
function domoAppendContributionProfitColumn_(result) {
  var idx = {};
  result.columns.forEach(function (c, i) { idx[c] = i; });
  var need = ['Gross', 'Total COGS', 'Merchant Fees (Gross)', 'Refunded', 'Merchant Fees (Refunds)', 'Chargedback', 'Merchant Fees (Chargebacks)'];
  var missing = need.filter(function (c) { return !(c in idx); });
  if (missing.length) {
    Logger.log('Domo: skipping per-row Contribution Profit column -- missing expected column(s): ' + missing.join(', '));
    return;
  }
  var num = function (row, c) { var v = row[idx[c]]; return (v === '' || v === null || v === undefined) ? 0 : (Number(v) || 0); };
  result.rows.forEach(function (row) {
    var profit = num(row, 'Gross') - num(row, 'Total COGS') - num(row, 'Merchant Fees (Gross)')
      - num(row, 'Refunded') - num(row, 'Merchant Fees (Refunds)')
      - num(row, 'Chargedback') - num(row, 'Merchant Fees (Chargebacks)');
    row.push(Math.round(profit * 100) / 100);
  });
  result.columns.push('Contribution Profit');
}

// ============================================================================
// Contribution Profit Rollup: PG1 / Physical / Digital - Other / Supplements, per rep per day.
// Also carries Net Revenue (added 2026-11-04) -- a separate, simpler figure (Gross - Refunded
// ONLY, see domoBuildContributionProfitRollupRows_ below), NOT a component of Contribution Profit.
// Feeds pg_dashboard.html's Mid-Ticket/PG1/Inbound Metric tabs via phoneScheduleRefresh.gs,
// which reads these small CSVs from Drive and joins them onto the Schedule roster by name -- same
// split as the Aloware integration (this script owns Domo auth/querying; phoneScheduleRefresh.gs
// owns the roster join), decided 2026-11-03 so Domo credentials only need to live in ONE Apps
// Script project.
//
// "Gross Profit" appears in this card's own column-filter list but is NOT a real dataset column --
// SELECT * never returns it (confirmed 2026-11-03). It's a CARD-level Beast Mode calculation, and
// this Domo account has no Data Center access to read its exact formula. Per explicit instruction,
// this computes an equivalent from raw columns SELECT * DOES return: Gross - Total COGS - Merchant
// Fees (Gross), net of Refunded/Chargedback principal AND their own Merchant Fees (Refunds)/
// (Chargebacks) reversal amounts. All 7 of those columns are summed independently per (rep, day,
// group) rather than assumed to live on the same row -- confirmed live 2026-11-03 that a SALE row
// carries Gross/Total COGS/Merchant Fees (Gross) while a REFUND or CB (chargeback) row is a
// SEPARATE line with Refunded/Chargedback + its own Merchant Fees column populated instead, Gross/
// COGS blank on that row. No orderType/billingCycleNumber restriction here (unlike the archival
// export above) -- Contribution Profit should reflect every realized dollar in the period,
// including 3rd+ renewal cycles, not just first-sale/first-renewal.
//
// Grouping (per explicit instruction, 2026-11-03): ProductName containing "PG1" -> pg1, checked
// FIRST -- PG1 is sold under Offer Type=Digital alongside several unrelated coaching programs
// (Kinetic Movement Method, Senior Swing Distance Program, 300 Distance System, Pain-Free Distance
// System, VIP Coaching, Scratch Club, Performance Golf Platform -- confirmed live by filtering
// Offer Type=Digital and reading ProductName), so Offer Type alone can't isolate it. Then Offer
// Type=Physical -> physical; Offer Type=Supplements -> supplements; Offer Type=Digital (non-PG1)
// -> digitalOther. High Ticket (Offer Type=High Ticket, overwhelmingly "VIP Experience" products,
// which the archival export above deliberately excludes) is explicitly OUT of scope for this
// project (2026-11-03) -- any row that doesn't match one of the 4 groups is just not summed into
// any bucket, not an error condition.
// ============================================================================
var DOMO_CP_SUBFOLDER_NAME = 'Contribution Profit Rollup';

function domoClassifyGroup_(productName, offerType) {
  var pn = String(productName || '').toUpperCase();
  if (pn.indexOf('PG1') !== -1) return 'pg1';
  var ot = String(offerType || '').trim();
  if (ot === 'Physical') return 'physical';
  if (ot === 'Supplements') return 'supplements';
  if (ot === 'Digital') return 'digitalOther';
  return null; // High Ticket / Affiliate - not set / blank -- not included in this project
}

// Column names with spaces/parens are double-quoted (Domo's Query API is ANSI-SQL-style) -- if this
// ever errors with a parse failure, the Execution log shows the exact SQL and Domo's error text, so
// check whether this account's engine wants backticks instead and tell Claude.
function domoQueryContributionProfitMonth_(authHeader, datasetId, monthStr) {
  var monthStart = monthStr + '-01';
  var nextMonthStart = domoAddMonths_(monthStr, 1) + '-01';
  var sql = 'SELECT sourceTitle, dateCreated, ProductName, "Offer Type", Gross, "Total COGS",' +
    ' "Merchant Fees (Gross)", Refunded, "Merchant Fees (Refunds)", Chargedback, "Merchant Fees (Chargebacks)"' +
    ' FROM table' +
    " WHERE sourceTitle IS NOT NULL AND sourceTitle <> ''" +
    " AND LOWER(ProductName) NOT LIKE '%shipping%'" +
    " AND dateCreated >= '" + monthStart + "' AND dateCreated < '" + nextMonthStart + "'";
  return domoExecuteQuery_(authHeader, datasetId, sql);
}

// Aggregates one month's query result into 'sourceTitle|date|group' -> {cp, net}, then flattens to
// CSV rows [date, sourceTitle, group, contributionProfit, netRevenue]. netRevenue = Gross - Refunded
// ONLY (added 2026-11-04, per explicit instruction) -- a simpler, separate figure from
// Contribution Profit, not a component of it. Confirmed via direct inspection of real export data
// that Refunded is always stored as a POSITIVE magnitude (never negative), and that Gross is blank
// on the refund's own row (refunds are logged as a separate transaction line, not a modification of
// the original sale row) -- so this sums Gross and Refunded independently per row, same as the
// Contribution Profit formula below already does, rather than assuming they coexist on one row.
function domoBuildContributionProfitRollupRows_(result) {
  var idx = {};
  result.columns.forEach(function (c, i) { idx[c] = i; });
  var need = ['sourceTitle', 'dateCreated', 'ProductName', 'Offer Type', 'Gross', 'Total COGS',
    'Merchant Fees (Gross)', 'Refunded', 'Merchant Fees (Refunds)', 'Chargedback', 'Merchant Fees (Chargebacks)'];
  need.forEach(function (c) {
    if (!(c in idx)) throw new Error('Contribution Profit query missing expected column "' + c + '" -- Domo\'s column set may have changed.');
  });

  var sums = {}; // 'sourceTitle|date|group' -> {cp: amount, net: amount}
  result.rows.forEach(function (row) {
    var sourceTitle = String(row[idx['sourceTitle']] || '').trim();
    if (!sourceTitle) return;
    var dateStr = String(row[idx['dateCreated']] || '').slice(0, 10);
    if (!dateStr) return;
    var group = domoClassifyGroup_(row[idx['ProductName']], row[idx['Offer Type']]);
    if (!group) return;
    var num = function (c) { var v = row[idx[c]]; return (v === '' || v === null || v === undefined) ? 0 : (Number(v) || 0); };
    var gross = num('Gross'), refunded = num('Refunded');
    var cpDelta = gross - num('Total COGS') - num('Merchant Fees (Gross)')
      - refunded - num('Merchant Fees (Refunds)')
      - num('Chargedback') - num('Merchant Fees (Chargebacks)');
    var netDelta = gross - refunded;
    var key = sourceTitle + '|' + dateStr + '|' + group;
    if (!sums[key]) sums[key] = { cp: 0, net: 0 };
    sums[key].cp += cpDelta;
    sums[key].net += netDelta;
  });

  var out = [];
  Object.keys(sums).forEach(function (key) {
    var parts = key.split('|');
    out.push([parts[1], parts[0], parts[2], Math.round(sums[key].cp * 100) / 100, Math.round(sums[key].net * 100) / 100]); // [date, sourceTitle, group, contributionProfit, netRevenue]
  });
  return out;
}

function domoWriteContributionProfitCsv_(folder, fileName, rows) {
  var lines = [domoCsvRow_(['date', 'sourceTitle', 'group', 'contributionProfit', 'netRevenue'])];
  rows.forEach(function (r) { lines.push(domoCsvRow_(r)); });
  var content = lines.join('\n');
  var existing = folder.getFilesByName(fileName);
  if (existing.hasNext()) {
    var first = existing.next();
    first.setContent(content);
    while (existing.hasNext()) existing.next().setTrashed(true);
  } else {
    folder.createFile(fileName, content, MimeType.CSV);
  }
}

// Same backfill/current-month split as the archival export above (past months finalized once
// written and never re-queried; current month always refreshed), but with its OWN independent
// DOMO_BACKFILL_MONTHS_PER_RUN counter -- this query is much narrower (11 columns vs SELECT *'s
// 288) and the aggregation is cheap in-memory work, so running it alongside the archival export in
// the same execution is fine.
function domoPublishContributionProfitRollup_(authHeader, datasetId, rootFolder, allMonths, currentMonth) {
  var cpRoot = domoGetOrCreateFolder_(rootFolder, DOMO_CP_SUBFOLDER_NAME);
  var pastMonths = allMonths.filter(function (m) { return m !== currentMonth; });

  var backfilled = 0;
  pastMonths.forEach(function (monthStr) {
    if (backfilled >= DOMO_BACKFILL_MONTHS_PER_RUN) return;
    var fileName = 'Contribution Profit Rollup - ' + monthStr + '.csv';
    if (cpRoot.getFilesByName(fileName).hasNext()) return; // already finalized
    Logger.log('Domo Contribution Profit: backfilling ' + monthStr + '...');
    var result = domoQueryContributionProfitMonth_(authHeader, datasetId, monthStr);
    var rows = domoBuildContributionProfitRollupRows_(result);
    domoWriteContributionProfitCsv_(cpRoot, fileName, rows);
    Logger.log('Domo Contribution Profit: backfilled ' + monthStr + ' -- ' + rows.length + ' (rep, date, group) rows from ' + result.rows.length + ' transaction lines.');
    backfilled++;
  });

  var currentResult = domoQueryContributionProfitMonth_(authHeader, datasetId, currentMonth);
  var currentRows = domoBuildContributionProfitRollupRows_(currentResult);
  domoWriteContributionProfitCsv_(cpRoot, 'Contribution Profit Rollup - ' + currentMonth + '.csv', currentRows);
  Logger.log('Domo Contribution Profit: refreshed current month ' + currentMonth + ' -- ' + currentRows.length + ' (rep, date, group) rows from ' + currentResult.rows.length + ' transaction lines.');
}

// One-off: upgrades already-finalized PAST months' rollup CSVs to carry the netRevenue column
// (added 2026-11-04 -- domoBuildContributionProfitRollupRows_ above). Those files were written
// before that column existed, and domoPublishContributionProfitRollup_'s normal "already finalized,
// never re-queried" rule would never touch them again -- the current month always picks it up
// automatically on every refresh, so this only ever has work to do on past months. Run manually
// (function dropdown -> domoForceRewriteRollupWithNetRevenue -> Run) as many times as it takes to
// clear the backlog: processes up to DOMO_BACKFILL_MONTHS_PER_RUN not-yet-upgraded months per call
// (same cap the regular backfill uses) and is safe to re-run -- it checks each file's own header
// first and skips any month that already has the column. Mirrors
// domoForceRewriteArchiveWithContributionProfit's pattern exactly, just for the rollup instead of
// the archival export.
function domoForceRewriteRollupWithNetRevenue() {
  var authHeader = domoAuthHeader_();
  var datasetId = domoFindDatasetId_(authHeader);
  var rootFolder = domoGetOrCreateFolder_(DriveApp.getRootFolder(), DRIVE_ROOT_FOLDER_NAME);
  var cpRoot = domoGetOrCreateFolder_(rootFolder, DOMO_CP_SUBFOLDER_NAME);
  var currentMonth = Utilities.formatDate(new Date(), 'America/New_York', 'yyyy-MM');
  var pastMonths = domoListMonthsBetween_(EXTRACT_START_MONTH, currentMonth)
    .filter(function (m) { return m !== currentMonth; });

  var upgraded = 0;
  pastMonths.forEach(function (monthStr) {
    if (upgraded >= DOMO_BACKFILL_MONTHS_PER_RUN) return;
    var fileName = 'Contribution Profit Rollup - ' + monthStr + '.csv';
    var existingIt = cpRoot.getFilesByName(fileName);
    if (existingIt.hasNext()) {
      var text = existingIt.next().getBlob().getDataAsString();
      var headerEnd = text.indexOf('\n');
      var header = headerEnd > -1 ? text.slice(0, headerEnd) : text;
      if (header.indexOf('netRevenue') !== -1) return; // already upgraded, skip
    }
    Logger.log('Domo Contribution Profit: force-rewriting rollup ' + monthStr + ' to add netRevenue...');
    var result = domoQueryContributionProfitMonth_(authHeader, datasetId, monthStr);
    var rows = domoBuildContributionProfitRollupRows_(result);
    domoWriteContributionProfitCsv_(cpRoot, fileName, rows);
    Logger.log('Domo Contribution Profit: force-rewrote rollup ' + monthStr + ' -- ' + rows.length + ' (rep, date, group) rows.');
    upgraded++;
  });
  if (!upgraded) Logger.log('Domo Contribution Profit: every past month\'s rollup already has netRevenue -- nothing left to do, this function can be ignored/deleted now.');
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
