# SCRIPT_INVENTORY.md
_Last updated: 2026-07-02_

## Scheduled Task SKILLs (Claude Code runs these automatically)

### 1. `pg-dashboard-daily-update` — Full Daily Update
**Path:** `~/.claude/scheduled-tasks/pg-dashboard-daily-update/SKILL.md`
**Schedule:** 8:30AM EDT Mon–Fri (`30 20 * * 1-5` PHT)
**Last ran:** 2026-07-02 ~8:30AM EDT

**What it does (plain English):**
1. Checks if another task has a git lock — if yes, quits immediately
2. Reads the GD Sched tab via the GD MCP tool — this gives PG1/VIP/Clubs actuals for Enterprise and all teams, plus Phone Setter sets/shows/cash, and per-rep CONVERSIONS data
3. Reads `Revenue_Enterprise` GD tab via Python gspread library — parses dollar amounts, groups by date/week/month, computes category breakdowns
4. Reads `Contactable` GD tab via gspread — groups New Cx and Contactable counts by date/week/month
5. Validates the data: enterprise actuals must be non-zero, revenue must exist for current month
6. Writes every single field in `data.js` — date labels, projections, all team actuals, all trend arrays, revenue, contactable
7. Commits and pushes to GitHub

**Inputs:** GD Sched tab (MCP), GD Revenue_Enterprise tab (gspread), GD Contactable tab (gspread)
**Output:** `data.js` committed and pushed to `markdeguzman-png/pg-dashboard` main branch
**Dependencies:** GD MCP server, gspread Python library, `~/.credentials/pg-dashboard-sa.json`

---

### 2. `pg-dashboard-intraday-update` — Hourly Intraday Refresh
**Path:** `~/.claude/scheduled-tasks/pg-dashboard-intraday-update/SKILL.md`
**Schedule:** 11AM–6PM EDT Mon–Fri (`0 23,0,1,2,3,4,5,6 * * *` PHT — fires every Manila day, EDT weekday guard filters to Mon–Fri only)
**Last ran:** 2026-07-02 ~10PM PHT

**What it does (plain English):**
1. Checks git lock — exits if locked
2. Checks current day in EDT — exits if Saturday or Sunday
3. Reads GD Sched tab — extracts ONLY today's Day scorecard row for Enterprise and each team (just PG1, VIP, Clubs actuals)
4. Validates: sum of Enterprise PG1+VIP+Clubs must be > 0
5. Updates `TEAM_PROFILES` daily actuals for Enterprise + all teams (except Team Lee which has no breakdown)
6. Updates `AS_OF_DATE` and `DAILY_LABEL` to today's EDT date
7. Updates `DAILY` array: if today's date is already the last label, overwrites the last values; if not (new day), appends today's label and values
8. Commits and pushes

**Inputs:** GD Sched tab (MCP) — Day scorecard rows only
**Output:** `data.js` with updated daily actuals committed and pushed
**Does NOT touch:** weekly/monthly arrays, ANNE_WEEKLY, CONVERSIONS, PS cash, CC data, Revenue, Contactable

---

### 3. Disabled Tasks (do not re-enable)

| Task ID | Why disabled |
|---|---|
| `pg-dashboard-intraday-update-a` | Superseded by consolidated `pg-dashboard-intraday-update` |
| `pg-dashboard-intraday-update-b` | Superseded by consolidated `pg-dashboard-intraday-update` |

---

## Python Snippets Used Interactively (not automated scripts)

### gspread Revenue_Enterprise reader
```python
import gspread, pandas as pd

gc = gspread.service_account(filename='/Users/markanthonydeguzman/.credentials/pg-dashboard-sa.json')
sh = gc.open_by_key('19BkAG2XmNc_guAlCeGqYz0Eci5uChyAXecPxX0bfHBU')
ws = sh.worksheet('Revenue_Enterprise')
rows = ws.get_all_values()
df = pd.DataFrame(rows[1:], columns=rows[0])
df['Date'] = pd.to_datetime(df['Date'], errors='coerce')

def parse_dollar(col):
    return pd.to_numeric(col.astype(str).str.replace(r'[\$,]','',regex=True).str.strip(), errors='coerce').fillna(0)
df['Gross'] = parse_dollar(df['Gross'])
df['Net Rev'] = parse_dollar(df['Net Rev'])
```
Columns: `Month, Week, Date, Category, Gross, Refund, Net Rev`
Categories: `PG1, VIP Coaching, Physical Products, Digital Products, Scratch Club, Champions Pass`

### gspread Contactable reader
```python
ws_c = sh.worksheet('Contactable')
rows_c = ws_c.get_all_values()
df_con = pd.DataFrame(rows_c[1:], columns=rows_c[0])
df_con['Date'] = pd.to_datetime(df_con['Date'], errors='coerce')
df_con['New Cx'] = pd.to_numeric(df_con['New Cx'], errors='coerce').fillna(0).astype(int)
df_con['Contactable'] = pd.to_numeric(df_con['Contactable'], errors='coerce').fillna(0).astype(int)
```
Columns: `Month, Week_Start, Date, New Cx, Contactable`

### List all GD tabs
```python
[ws.title for ws in sh.worksheets()]
```

---

## Dependencies

| Package | Purpose | Already installed |
|---|---|---|
| `gspread` | Read GD sheets by tab name | Yes |
| `pandas` | Parse and aggregate revenue/contactable data | Yes |
| `google-auth` | Auth for gspread | Yes |

**Note:** Python 3.9 is used (past EOL). Warnings about this are safe to ignore but upgrading Python is advisable long-term.
