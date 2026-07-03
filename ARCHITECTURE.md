# ARCHITECTURE.md
_Last updated: 2026-07-02_

## File Map

```
/Users/markanthonydeguzman/Documents/Claude Data/
├── data.js                          ← THE ONLY FILE THAT GETS UPDATED BY TASKS
├── index.html                       ← Dashboard HTML (never edit for data)
├── Executive Dashboard.html         ← Alt dashboard HTML (never edit for data)
├── Executive Dashboard.xlsx         ← Legacy Excel (no longer data source)
├── Executive Raw Data.xlsx          ← Legacy Excel (no longer data source)
├── PG Executive Dashboard.xlsx      ← Legacy Excel (no longer data source)
├── Contactable and Revenue Raw      ← Legacy Excel (superseded by GD tabs)
│   Data.xlsx
└── data.js.bak_20260627_020621      ← Backup from before June 27 changes

~/.claude/scheduled-tasks/
├── pg-dashboard-daily-update/
│   └── SKILL.md                     ← Full daily update instructions
├── pg-dashboard-intraday-update/
│   └── SKILL.md                     ← Intraday PG1/VIP/Clubs-only instructions
├── pg-dashboard-intraday-update-a/  ← DISABLED (superseded)
│   └── SKILL.md
└── pg-dashboard-intraday-update-b/  ← DISABLED (superseded)
    └── SKILL.md

~/.credentials/
└── pg-dashboard-sa.json             ← Google Service Account JSON key

~/.claude/projects/.../memory/
├── MEMORY.md                        ← Memory index (auto-loaded by Claude)
├── feedback_dashboard_update_approach.md
├── project_new_data_sources.md
├── project_per_team_trend_arrays.md
└── project_month_rollover_procedure.md
```

## data.js Structure

All constants are plain JS — no build step, just `<script src="data.js">` in the HTML.

```
DATA_FILE_TIMESTAMP     UTC ISO string, shown in dashboard footer
AS_OF_DATE              e.g. 'July 2, 2026'
DAILY_LABEL             e.g. 'Jul 2'
WEEKLY_LABEL            e.g. 'WB Jun 29'

DAYS_WORKED / REMAINING / TOTAL / RANGES   — projection constants for current month

ENTERPRISE_TARGETS      Fixed targets for Enterprise overall
PER_REP_TARGETS         Fixed per-rep quotas

TEAM_PROFILES           Current daily/weekly/monthly actuals + targets per team
                        { 'Enterprise', 'Team Anne', 'Team Jen', 'Team Lee',
                          'Team Mark', 'Team Philip', 'Team Remen' }
                        Each has: reps, color, periods:{daily,weekly,monthly:{act,tgt}},
                                  hasTrend, note, conv (Enterprise only)

MONTHLY                 Rolling monthly PG1/VIP/Clubs — Jan 2026 to current MTD
WEEKLY                  Rolling weekly PG1/VIP/Clubs — WB 4/13 to current WB
DAILY                   Rolling daily PG1/VIP/Clubs — 5/9 to today (Mon–Fri only)

ANNE_MONTHLY            Team Anne monthly breakdown
ANNE_WEEKLY             Team Anne weekly breakdown
ANNE_DAILY              Team Anne daily (sparse, nulls for dates before GD had data)

REMEN_MONTHLY/WEEKLY/DAILY    Same for Team Remen
MARK_MONTHLY/WEEKLY/DAILY     Same for Team Mark

CONVERSIONS             Per-rep conversion data: rate string, ratio, daily/weekly/monthly {pg1,vip,clubs}
                        Flat object keyed by rep name

CUSTOMER_CARE_DAILY / WEEKLY / MONTHLY   — Customer Care (Team Lee) PG1/VIP/Clubs/CSAT
CUSTOMER_CARE_REPS      Per-CC-rep weekly/monthly data

PHONE_SETTERS_DAILY / WEEKLY / MONTHLY   — sets, show, cash_rev, cash_ref
PHONE_SETTERS_REPS      Per-setter daily/weekly/monthly

REVENUE_MONTHLY         Revenue by month (Feb–current) — gross, net, per category
REVENUE_WEEKLY          Revenue by week (WB 5/4–current) — gross, net, per category
REVENUE_DAILY           Revenue by day (6/1–current, incl weekends) — gross, net, per category
                        Categories: pg1, vip, physical, digital, scratch, champions

CONTACTABLE_MONTHLY     New Cx + Contactable by month (Jan–current MTD)
CONTACTABLE_WEEKLY      New Cx + Contactable by week (WB 4/27–current)
CONTACTABLE_DAILY       New Cx + Contactable by day (6/1–current, incl weekends)
```

## How the Update Cycle Works

```
8:30AM EDT (Mon–Fri)
└── pg-dashboard-daily-update SKILL runs:
    1. Check git lock (exit if locked)
    2. Read GD Sched tab → PG1/VIP/Clubs + PS + CONVERSIONS
    3. Read GD Revenue_Enterprise tab via gspread → REVENUE arrays
    4. Read GD Contactable tab via gspread → CONTACTABLE arrays
    5. Validate data (non-zero Enterprise actuals, non-zero monthly revenue)
    6. Write ALL fields in data.js
    7. git add data.js && git commit && git push

11AM–6PM EDT hourly (Mon–Fri)
└── pg-dashboard-intraday-update SKILL runs:
    1. Check git lock (exit if locked)
    2. Check EDT weekday (exit if weekend)
    3. Read GD Sched tab → Enterprise + per-team Day scorecard only
    4. Validate (non-zero total)
    5. Update TEAM_PROFILES daily actuals, AS_OF_DATE, DAILY_LABEL
    6. Update DAILY array last entry (or append today if date changed)
    7. git add data.js && git commit && git push
```

## GD Tab Access Methods

| Tab | How to read |
|---|---|
| Sched | GD MCP `read_file_content` (file ID) — returns active/default tab |
| Revenue_Enterprise | gspread `sh.worksheet('Revenue_Enterprise')` |
| Contactable | gspread `sh.worksheet('Contactable')` |

## GitHub Pages Deploy

Every `git push origin main` triggers GitHub Pages rebuild. Live within ~60 seconds of push.
No build step. GitHub Pages serves `index.html` + `data.js` as static files.
