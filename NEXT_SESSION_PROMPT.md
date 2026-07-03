# NEXT_SESSION_PROMPT.md
_Updated: 2026-07-02 — paste this at the start of the next Claude Code session_

---

You are continuing work on the PGZ Executive Dashboard project.

**Working directory:** `/Users/markanthonydeguzman/Documents/Claude Data/`
**GitHub repo:** `markdeguzman-png/pg-dashboard` (main branch → GitHub Pages)
**The only file that ever changes:** `data.js`

Read `PROJECT_CONTEXT.md`, `CURRENT_STATUS.md`, and `ARCHITECTURE.md` in the working directory before doing anything.

## Current Setup

Two scheduled tasks run automatically:

1. **`pg-dashboard-daily-update`** — 8:30AM EDT Mon–Fri — reads GD Sched tab (via GD MCP) + Revenue_Enterprise and Contactable tabs (via gspread Python) — updates ALL fields in data.js and pushes
2. **`pg-dashboard-intraday-update`** — 11AM–6PM EDT hourly Mon–Fri — reads GD Sched tab only — updates TEAM_PROFILES daily actuals, AS_OF_DATE, DAILY_LABEL, and DAILY array last entry (or appends today)

Tasks disabled (do not re-enable): `pg-dashboard-intraday-update-a`, `pg-dashboard-intraday-update-b`

## Key Technical Facts

- **GD MCP ID:** `48417493-3416-426c-ab57-b2d4a1758bd4`
- **GD File ID:** `19BkAG2XmNc_guAlCeGqYz0Eci5uChyAXecPxX0bfHBU`
- GD MCP can only read the Sched tab (active/default sheet). Revenue_Enterprise and Contactable tabs MUST use gspread.
- **gspread service account JSON:** `~/.credentials/pg-dashboard-sa.json`
- Python 3.9, gspread and pandas are installed
- Dollar values in Revenue_Enterprise have `$` and commas — must strip before parsing

## Data Source Map

| data.js array | Source |
|---|---|
| TEAM_PROFILES, MONTHLY, WEEKLY, DAILY | GD Sched tab (MCP) |
| ANNE_MONTHLY/WEEKLY, CONVERSIONS, PS | GD Sched tab (MCP) |
| CUSTOMER_CARE_* | GD Sched tab (MCP) |
| REVENUE_* | GD Revenue_Enterprise tab (gspread) |
| CONTACTABLE_* | GD Contactable tab (gspread) |

**Do NOT read local XLSX files for Revenue or Contactable** — they are stale.

## Pending Items as of 2026-07-02

1. **Jul MTD revenue is zeros** — daily task at 8:30AM July 3 should fill it in from GD. Verify after it runs.

2. **Contactable data lags** — GD Contactable tab only has data through 6/21. CONTACTABLE_DAILY shows zeros from 6/22 onward. Someone needs to update the GD tab with 6/22+ data.

3. **Per-team Jul weekly actuals are 0** — Anne/Jen/Philip show 0 weekly because their GD scorecards use a Day/Week/Month format that resets each week. The daily task should update these each morning.

4. **Team Mark monthly shows pg1:2, vip:2, clubs:3** — this is Jul MTD (only 2 days in). Correct.

5. **REMEN_DAILY and MARK_DAILY length alignment** — if these ever fall out of sync with DAILY.labels, charts will shift. Check when doing manual edits.

## How to Manually Fix Data

1. Read the GD Sched tab via the GD MCP tool (use `read_file_content` with the file ID above)
2. For revenue/contactable, run the gspread Python snippet (see SCRIPT_INVENTORY.md)
3. Edit data.js directly with the correct values
4. `git add data.js && git commit -m "..." && git push origin main`
5. Never stage HTML files

## Month Rollover (when a new month starts)

See `~/.claude/projects/.../memory/project_month_rollover_procedure.md` for the full procedure. Key steps:
- Add new month label to MONTHLY, ANNE_MONTHLY, REMEN_MONTHLY, MARK_MONTHLY, REVENUE_MONTHLY, CONTACTABLE_MONTHLY
- WEEKLY gets a new WB row
- DAILY gets the new month's dates day by day
- DAYS_WORKED resets to 0, DAYS_REMAINING = full month working days, DAYS_TOTAL = same

## Safety Rules

- Git lock guard: check `.git/index.lock` — if exists, another task is running, exit
- Validate before commit: Enterprise PG1+VIP+Clubs > 0
- Never commit HTML files
- Never change `tgt` values in TEAM_PROFILES (targets are fixed)
- If GD shows #DIV/0! or blank, keep existing data.js value unchanged
