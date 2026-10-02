#!/usr/bin/env python3
"""
Refreshes asr_closer_dashboard.html's embedded data from a Sched_Snapshot CSV export.

Usage:
    python3 refresh_asr_dashboard.py <csv_path> <iso_timestamp>

<csv_path>       Path to the decoded Sched_Snapshot CSV (the raw "Sched" tab export).
<iso_timestamp>  The Sched_Snapshot Drive file's modifiedTime, e.g. 2026-10-01T18:00:16.242Z
                  (this becomes DATA_UPDATED_AT_ISO in the dashboard).

Splices RAW_SCHED, TREND_DAILY, TREND_WEEKLY, TREND_MONTHLY, and DATA_UPDATED_AT_ISO into
asr_closer_dashboard.html (expected in the same directory as this script's parent). Does NOT
commit, push, or deploy -- the caller is responsible for that, and should check this script's
exit code / stdout summary before doing so.

Column mapping and formulas are verified against the live "ASR - Closer Report" sheet's own
SUMIFS formulas -- see /Users/markanthonydeguzman/.claude/projects/-Users-markanthonydeguzman-Documents-Claude-Data/memory/project_asr_closer_dashboard.md
for the full history/rationale. Do not change the column list or formulas here without updating
that memory file too.
"""
import sys, re, json, datetime
from collections import defaultdict
import pandas as pd

NUM_COLS = ['Sets','IB_set','OB_set','Appointments','IB_Appt','OB_Appt',
            'Warm_set','IB_warm_set','OB_warm_set','Show','IB_Show','OB_Show',
            'ASR_eligible_calls','ASR_IB_Calls','ASR_OB_Calls',
            'Upfront_Revenue','IB_Revenue','OB_Revenue','Closed Deal',
            'IB_calls','OB_call',
            'Advisor_appt','Advisor_show_den','Advisor_show','Advisor_closed_deal',
            'Closer_upfront_Revenue','Closer_Products_sold','Closer_Clubs','Closer_PG1','RS1',
            'calls_ivr1_asr','calls_ivr2_asr','calls_ivr3_asr','calls_ivr4_asr',
            'sets_ivr1','sets_ivr2','sets_ivr3','sets_ivr4']

RAW_FIELDS = ['sets','ibSets','obSets','appt','ibAppt','obAppt','warmSet','ibWarmSet','obWarmSet',
              'show','ibShow','obShow','calls90s','ibCalls90s','obCalls90s','revenue','ibRevenue',
              'obRevenue','closedDeal','ibCalls','obCalls']


def extract_raw_sched(csv_path):
    df = pd.read_csv(csv_path, dtype=str, keep_default_na=False)
    for c in NUM_COLS:
        df[c] = pd.to_numeric(df[c].str.replace(',', ''), errors='coerce').fillna(0)
    df = df[df['Name'] != ''].copy()
    active = df[(df[NUM_COLS].sum(axis=1) != 0)].copy()

    def iso(d):
        return datetime.datetime.strptime(d, '%m/%d/%Y').strftime('%Y-%m-%d')
    active['iso_date'] = active['Date'].apply(iso)

    rows = []
    for _, r in active.iterrows():
        rows.append([
            r['Name'], r['Current Team'] or r['Team'], r['Current LOB'] or r['LOB'], r['iso_date'],
            int(r['Sets']), int(r['IB_set']), int(r['OB_set']),
            int(r['Appointments']), int(r['IB_Appt']), int(r['OB_Appt']),
            int(r['Warm_set']), int(r['IB_warm_set']), int(r['OB_warm_set']),
            int(r['Show']), int(r['IB_Show']), int(r['OB_Show']),
            int(r['ASR_eligible_calls']), int(r['ASR_IB_Calls']), int(r['ASR_OB_Calls']),
            round(float(r['Upfront_Revenue']), 2), round(float(r['IB_Revenue']), 2), round(float(r['OB_Revenue']), 2),
            int(r['Closed Deal']), int(r['IB_calls']), int(r['OB_call']),
            int(r['Advisor_appt']), int(r['Advisor_show']), int(r['Advisor_closed_deal']),
            round(float(r['Closer_upfront_Revenue']), 2), int(r['Closer_Products_sold']),
            int(r['Closer_Clubs']), int(r['Closer_PG1']),
            int(r['calls_ivr1_asr']), int(r['calls_ivr2_asr']), int(r['calls_ivr3_asr']), int(r['calls_ivr4_asr']),
            int(r['sets_ivr1']), int(r['sets_ivr2']), int(r['sets_ivr3']), int(r['sets_ivr4']),
            int(r['Advisor_show_den']), int(r['RS1']),
        ])
    return rows


def blank():
    return {f: 0 for f in RAW_FIELDS}


def add(o, r):
    o['sets'] += r[4]; o['ibSets'] += r[5]; o['obSets'] += r[6]
    o['appt'] += r[7]; o['ibAppt'] += r[8]; o['obAppt'] += r[9]
    o['warmSet'] += r[10]; o['ibWarmSet'] += r[11]; o['obWarmSet'] += r[12]
    o['show'] += r[13]; o['ibShow'] += r[14]; o['obShow'] += r[15]
    o['calls90s'] += r[16]; o['ibCalls90s'] += r[17]; o['obCalls90s'] += r[18]
    o['revenue'] += r[19]; o['ibRevenue'] += r[20]; o['obRevenue'] += r[21]
    o['closedDeal'] += r[22]; o['ibCalls'] += r[23]; o['obCalls'] += r[24]


def week_beginning_of(date_str):
    d = datetime.datetime.strptime(date_str, '%Y-%m-%d')
    d = d - datetime.timedelta(days=d.weekday())  # Monday-start, matches weekBeginningOf() in the JS
    return d.strftime('%Y-%m-%d')


def rep_metrics_26(o):
    def d(a, b): return round(a / b * 100, 2) if b else 0.0
    return [
        o['sets'], o['ibSets'], o['obSets'], o['appt'],
        d(o['warmSet'], o['sets']), d(o['ibWarmSet'], o['ibSets']), d(o['obWarmSet'], o['obSets']),
        d(o['show'], o['appt']), d(o['ibShow'], o['ibAppt']), d(o['obShow'], o['obAppt']),
        o['show'], o['ibShow'], o['obShow'],
        d(o['sets'], o['calls90s']), d(o['ibSets'], o['ibCalls90s']), d(o['obSets'], o['obCalls90s']),
        round(o['revenue'], 2), round(o['ibRevenue'], 2), round(o['obRevenue'], 2),
        o['closedDeal'], o['calls90s'], o['ibCalls90s'], o['obCalls90s'],
        o['ibCalls'], o['obCalls'],
        d(o['calls90s'], o['ibCalls'] + o['obCalls']),
    ]


def aggregate(rows):
    daily, weekly, monthly = defaultdict(blank), defaultdict(blank), defaultdict(blank)
    for r in rows:
        date = r[3]
        add(daily[date], r)
        add(weekly[week_beginning_of(date)], r)
        add(monthly[date[:7]], r)

    def emit(d):
        return [[k] + rep_metrics_26(d[k]) for k in sorted(d.keys())]
    return emit(daily), emit(weekly), emit(monthly)


def js_array(rows):
    return '[' + ','.join(json.dumps(row, separators=(',', ':')) for row in rows) + ']'


def splice(html_path, raw_rows, daily_rows, weekly_rows, monthly_rows, iso_ts):
    content = open(html_path, 'r', encoding='utf-8').read()

    content, n1 = re.subn(r'const RAW_SCHED = \[.*?\];',
                           lambda m: 'const RAW_SCHED = ' + js_array(raw_rows) + ';',
                           content, count=1, flags=re.DOTALL)
    content, n2 = re.subn(r"const TREND_DAILY = rowsToObjs\('date', \[.*?\], TREND_FIELDS\);",
                           lambda m: "const TREND_DAILY = rowsToObjs('date', " + js_array(daily_rows) + ", TREND_FIELDS);",
                           content, count=1, flags=re.DOTALL)
    content, n3 = re.subn(r"const TREND_WEEKLY = rowsToObjs\('weekBeginning', \[.*?\], TREND_FIELDS\);",
                           lambda m: "const TREND_WEEKLY = rowsToObjs('weekBeginning', " + js_array(weekly_rows) + ", TREND_FIELDS);",
                           content, count=1, flags=re.DOTALL)
    content, n4 = re.subn(r"const TREND_MONTHLY = rowsToObjs\('month', \[.*?\], TREND_FIELDS\);",
                           lambda m: "const TREND_MONTHLY = rowsToObjs('month', " + js_array(monthly_rows) + ", TREND_FIELDS);",
                           content, count=1, flags=re.DOTALL)
    content, n5 = re.subn(r'const DATA_UPDATED_AT_ISO = "[^"]*";',
                           f'const DATA_UPDATED_AT_ISO = "{iso_ts}";',
                           content, count=1)

    # Keep the hand-written narrative comment above TREND_MONTHLY current without needing a human
    # to word it each time -- auto-generated, factual, no editorializing. Wrapped with textwrap so
    # lines don't break mid-word/mid-parenthetical.
    import textwrap
    latest_date, latest_sets = daily_rows[-1][0], daily_rows[-1][1]
    text = (
        f"Company-wide Daily/Weekly/Monthly refreshed from a {iso_ts} Sched_Snapshot pull "
        f"(automated hourly-check refresh). Latest day with data: {latest_date} ({latest_sets} Sets "
        f"so far). The most recent ~week is still provisional and will keep narrowing as Sched "
        f"backfills further."
    )
    comment = '\n'.join('// ' + line for line in textwrap.wrap(text, width=96))
    # Matched structurally (the run of "// ..." comment lines directly before "const TREND_MONTHLY
    # ="), not by exact wording -- the wording changes every run, the position doesn't.
    content, n6 = re.subn(
        r'(?:^//[^\n]*\n)+(?=const TREND_MONTHLY = rowsToObjs)',
        lambda m: comment + '\n', content, count=1, flags=re.MULTILINE)

    counts = dict(RAW_SCHED=n1, TREND_DAILY=n2, TREND_WEEKLY=n3, TREND_MONTHLY=n4, DATA_UPDATED_AT_ISO=n5, comment=n6)
    missing = [k for k, v in counts.items() if v != 1]
    if missing:
        raise RuntimeError(f"Splice failed for: {missing} (counts={counts})")

    # Sanity check: inline <script> JS must stay bracket-balanced.
    scripts = re.findall(r'<script>([\s\S]*?)</script>', content)
    combined = '\n'.join(scripts)
    for op, cl, name in [('{', '}', 'braces'), ('[', ']', 'brackets'), ('(', ')', 'parens')]:
        bal = sum(1 if c == op else -1 if c == cl else 0 for c in combined)
        if bal != 0:
            raise RuntimeError(f"Bracket balance check failed after splice: {name} off by {bal}")

    open(html_path, 'w', encoding='utf-8').write(content)
    return latest_date, latest_sets


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    csv_path, iso_ts = sys.argv[1], sys.argv[2]
    html_path = "/Users/markanthonydeguzman/Documents/Claude Data/asr_closer_dashboard.html"

    rows = extract_raw_sched(csv_path)
    daily_rows, weekly_rows, monthly_rows = aggregate(rows)
    latest_date, latest_sets = splice(html_path, rows, daily_rows, weekly_rows, monthly_rows, iso_ts)

    print(f"OK: {len(rows)} raw rows, {len(daily_rows)} days ({daily_rows[0][0]} .. {daily_rows[-1][0]})")
    print(f"LATEST_DATE={latest_date}")
    print(f"LATEST_SETS={latest_sets}")


if __name__ == '__main__':
    main()
