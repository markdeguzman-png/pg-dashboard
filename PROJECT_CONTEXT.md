# PROJECT_CONTEXT.md
_Last updated: 2026-07-02_

## What This Project Is

An automated executive dashboard for Performance Golf Zone (PGZ) that tracks sales team performance in real time. The dashboard is a static GitHub Pages site. All data lives in one JS file (`data.js`). Two Claude Code scheduled tasks keep it current throughout the day.

## Who It's For

Mark de Guzman (markdeguzman@performancegolfzone.com) — reviews enterprise and per-team KPIs daily.

## Repository

- **GitHub repo:** `markdeguzman-png/pg-dashboard` (main branch)
- **Live URL:** GitHub Pages (auto-deploys within ~1 min of push)
- **Local working directory:** `/Users/markanthonydeguzman/Documents/Claude Data/`

## Data Architecture

```
Google Drive "Executive Summary 2026"
├── Sched tab          → PG1/VIP/Clubs actuals, PS sets/shows/cash, CONVERSIONS
├── Revenue_Enterprise → Revenue by date, category, week, month
└── Contactable        → New Cx + Contactable counts by date, week, month

data.js  ←  written by scheduled tasks  →  index.html / Executive Dashboard.html
```

## Teams Tracked

| Team | Reps | Notes |
|---|---|---|
| Enterprise | 38 | Overall rollup |
| Team Anne | 13 | Scorecard format in GD |
| Team Jen | 8 | Scorecard format in GD |
| Team Mark | 9 | Rolling table in GD |
| Team Philip | 10 | Scorecard format; training-tier targets |
| Team Remen | 9 | Rolling table in GD |
| Team Lee | 12 | No PG1/VIP/Clubs breakdown available |

## Key Metrics

- **PG1** — personal golf coaching memberships sold
- **VIP** — VIP Coaching memberships sold
- **Clubs** — Scratch Club / Champions Pass sold
- **CONVERSIONS** — per-rep conversion rate (member sold / calls 3-min)
- **PS (Phone Setters)** — sets, shows, cash collected
- **Revenue** — gross and net by category (PG1, VIP Coaching, Physical Products, Digital Products, Scratch Club, Champions Pass)
- **Contactable** — new customers and contactable count by day

## Source of Truth Priority

1. Google Drive "Executive Summary 2026" (Sched tab via GD MCP, Revenue_Enterprise + Contactable tabs via gspread)
2. Local XLSX files — **no longer used for Revenue or Contactable** (superseded by GD tabs)
3. `data.js` — never the source of truth; always overwritten by tasks

## Google Drive Access

- **GD MCP ID:** `48417493-3416-426c-ab57-b2d4a1758bd4`
- **GD File ID:** `19BkAG2XmNc_guAlCeGqYz0Eci5uChyAXecPxX0bfHBU`
- **gspread service account:** `pg-dashboard-reader@pg-dashboard-501016.iam.gserviceaccount.com`
- **JSON key path:** `~/.credentials/pg-dashboard-sa.json`
- **GD MCP limitation:** Only surfaces the active/default tab (Sched). Cannot target Revenue_Enterprise or Contactable by tab name — those require gspread.
