# SESSION_LOG.md
_Append new sessions at the top_

---

## Session: 2026-07-02 (continuation of 2026-07-01 session)

### What Changed

**Data fixes applied manually:**
- Added Jun 30 Enterprise DAILY entry (pg1:34, vip:24, clubs:29) — was missing because daily task ran at 8:30AM before GD had 6/30 data
- Added Jun 30 to REVENUE_DAILY (gross:27,808, net:25,210) with per-category breakdown
- Finalized June in REVENUE_MONTHLY (gross:902,359, net:785,072, per-category updated) — changed label from "Jun MTD" to "Jun"
- Added Jul MTD stub to REVENUE_MONTHLY (zeros — will fill via daily task)
- Updated WB 6/29 in REVENUE_WEEKLY to full week total (gross:54,398, net:47,662 including 6/30+7/1+7/2)
- Added 7/2 to DAILY array (pg1:57, vip:48, clubs:49) — intraday had been updating TEAM_PROFILES but not adding the date
- Updated AS_OF_DATE to July 2, 2026 and DAILY_LABEL to Jul 2

**Intraday SKILL.md updated:**
- Now adds today's date to DAILY array if not present (not just updates existing last entry)
- Now updates AS_OF_DATE and DAILY_LABEL on every run
- Fixes the recurring pattern of dashboard showing yesterday's date until the next daily run

**Scheduled task consolidation:**
- Removed 10AM EDT intraday slot (was too early, daily at 8:30AM handles morning)
- `pg-dashboard-intraday-update` now fires 11AM–6PM EDT hourly
- `pg-dashboard-intraday-update-a` and `-b` confirmed DISABLED
- Daily task confirmed running at 8:30AM EDT (`30 20 * * 1-5` PHT)

**Revenue + Contactable source migration:**
- Both now exclusively read from GD (Revenue_Enterprise + Contactable tabs)
- Local `Contactable and Revenue Raw Data.xlsx` no longer used as a source
- gspread service account set up: `pg-dashboard-reader@pg-dashboard-501016.iam.gserviceaccount.com`
- JSON key at: `~/.credentials/pg-dashboard-sa.json`
- Google Sheets API enabled in project pg-dashboard-501016

**Safety guards added to both SKILLs:**
- Git lock guard: checks `.git/index.lock` before doing anything
- Data validation: skips commit if Enterprise actuals are all zero
- Completion notifications: enabled on all 3 tasks

### Key Decisions

- 1PM EDT slot removed from intraday because daily full update runs at 8:30AM (not 1PM anymore)
- Revenue_Enterprise GD tab is the live source; local Excel is dead
- Intraday must maintain AS_OF_DATE + DAILY array, not just TEAM_PROFILES cards

### Commits This Session

```
1b2fe5e  Intraday update 2026-07-02 22:15 UTC — PG1/VIP/Clubs refresh
1423e12  Jul 2 daily + Jun 30 revenue + Jun final monthly
045ae35  Intraday update 2026-07-02 21:36 UTC
73812f2  Intraday update 2026-07-02 21:34 UTC
29b3872  Intraday update 2026-07-02 19:33 UTC
196d8ab  Auto-update dashboard data 2026-07-02 22:29 — Jul 1 rollover
d324f3e  Intraday update 2026-07-01 17:50 UTC
75b036e  Intraday update 2026-06-30 20:35 UTC
980ae32  Add Jun 30 data: Enterprise PG1/VIP/Clubs from GD
4577176  Revenue update through 6/29 from GD Revenue_Enterprise tab
```

---

## Session: 2026-07-01

### What Changed
- Set up gspread service account for accessing GD tabs by name
- Confirmed Revenue_Enterprise tab structure (Month, Week, Date, Category, Gross, Refund, Net Rev)
- Confirmed Contactable tab structure (Month, Week_Start, Date, New Cx, Contactable)
- Updated daily SKILL.md to read Revenue and Contactable from GD instead of local XLSX
- Created intraday SKILL.md for PG1/VIP/Clubs-only hourly updates
- Corrected 6/26 dashboard data (enterprise, Remen, CC) from authoritative GD source
- Fixed CC DAILY array (missing 6/23, wrong values)
- Set up two-cron intraday schedule to handle PHT/EDT midnight crossing

---

## Session: 2026-06-27 (approximate)

### What Changed
- Initial dashboard automation setup
- Daily scheduled task created
- data.js structure established with TEAM_PROFILES, MONTHLY, WEEKLY, DAILY arrays
- CONVERSIONS, PS, CC data added
- Per-team trend arrays (ANNE, REMEN, MARK) added
