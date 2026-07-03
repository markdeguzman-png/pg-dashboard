# CURRENT_STATUS.md
_Last updated: 2026-07-02_

## Dashboard State (as of session end)

| Field | Value |
|---|---|
| AS_OF_DATE | July 2, 2026 |
| DAILY_LABEL | Jul 2 |
| WEEKLY_LABEL | WB Jun 29 |
| DAYS_WORKED | 2 (Jul 1–2) |
| DAYS_REMAINING | 21 |
| DAYS_TOTAL | 23 |
| Latest DAILY entry | 7/2 (pg1:57, vip:48, clubs:49) |
| Latest WEEKLY entry | WB 6/29 (pg1:164, vip:124, clubs:184) |
| MONTHLY (Jul MTD) | pg1:48, vip:43, clubs:61 |
| REVENUE_MONTHLY last | Jun finalized + Jul MTD stub (zeros) |
| REVENUE_DAILY last | 6/30 |
| REVENUE_WEEKLY last | WB 6/29 (gross:54,398, net:47,662) |
| CONTACTABLE_DAILY last | 6/21 (GD not updated past 6/21 yet) |

## Scheduled Tasks (active)

| Task ID | Cron (PHT local) | Fires (EDT) | What it does |
|---|---|---|---|
| `pg-dashboard-daily-update` | `30 20 * * 1-5` | 8:30AM Mon–Fri | Full update of everything |
| `pg-dashboard-intraday-update` | `0 23,0,1,2,3,4,5,6 * * *` | 11AM–6PM Mon–Fri | PG1/VIP/Clubs only |
| `pg-dashboard-intraday-update-a` | `0 22,23 * * 1-5` | — | **DISABLED** |
| `pg-dashboard-intraday-update-b` | `0 0,1,2,3,4,5,6 * * 2-6` | — | **DISABLED** |

## What's Working

- Daily full update runs at 8:30AM EDT and pushes all data to GitHub
- Intraday runs hourly 11AM–6PM EDT, refreshes PG1/VIP/Clubs actuals and advances the date if needed
- Revenue and Contactable sourced from GD via gspread (no longer depends on local XLSX)
- Git lock guard prevents two tasks from colliding
- Data validation skips commit if GD returns all zeros
- Completion notifications enabled on all tasks

## Known Issues / Watch Points

1. **Jul MTD revenue shows zeros** — daily task at 8:30AM July 3 will pull Jul 1–2 revenue from GD and fill it in. Until then the Jul MTD bar in the revenue chart is empty.

2. **Contactable data lags** — GD Contactable tab is only current through 6/21. Whoever maintains the GD file needs to backfill 6/22–present for contactable counts to be accurate.

3. **Team Remen/Anne/Jen weekly actuals show 0 for current WB** — these teams use the scorecard format (not rolling table), so their weekly actuals reset each week and only fill in during the daily update.

4. **MARK_DAILY length mismatch** — if Team Mark's daily array ever falls out of alignment with DAILY.labels, they'll chart against wrong dates. Monitor if Mark's data looks shifted.

5. **Per-team Clubs values sometimes lag** — GD scorecard updates throughout the day; early intraday runs may show lower values than final.

## Last Manual Corrections Made This Session

- Jun 30 Enterprise DAILY entry corrected (pg1:34, vip:24, clubs:29)
- Jun revenue finalized in REVENUE_MONTHLY (gross:902,359, net:785,072)
- Jun 30 added to REVENUE_DAILY
- WB 6/29 revenue updated to include full week (6/29+6/30+7/1+7/2)
- Jul 2 added to DAILY array with current actuals
