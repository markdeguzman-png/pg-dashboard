// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const AS_OF_DATE           = 'June 22, 2026';
const DAILY_LABEL          = 'Jun 22';
const WEEKLY_LABEL         = 'WB Jun 22';

const DAYS_WORKED          = 16;
const DAYS_REMAINING       = 6;
const DAYS_TOTAL           = 22;
const DAYS_WORKED_RANGE    = 'Jun 1–5, 8–12, 15–19, 22';
const DAYS_REMAINING_RANGE = 'Jun 23–26, 29–30';

const ENTERPRISE_TARGETS = {
  daily:   { pg1:150,  vip:150,  clubs:100  },
  weekly:  { pg1:600,  vip:600,  clubs:400  },
  monthly: { pg1:2400, vip:2400, clubs:1600 },
};

// Per-rep individual quotas (not summed to derive team targets)
const PER_REP_TARGETS = {
  daily:   { pg1: 4,  vip: 4,  clubs: 3  },
  weekly:  { pg1: 16, vip: 16, clubs: 11 },
  monthly: { pg1: 65, vip: 65, clubs: 45 },
};

const TEAM_PROFILES = {
  'Enterprise': {
    reps: 38, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:28,   vip:11,   clubs:34},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:28,   vip:11,   clubs:34},   tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:1495, vip:982,  clubs:1195}, tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:2031, calls:10352 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:15,  vip:13,  clubs:24},   tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:15,  vip:13,  clubs:24},   tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:424, vip:354, clubs:364},  tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:16,  vip:14,  clubs:12},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:16,  vip:14,  clubs:12},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:241, vip:219, clubs:151}, tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Lee': {
    reps: 12, color: '#B3AAA3',
    periods: null,
    hasTrend: false,
    note: 'PTG breakdown not available in current source — showing conversion rates',
  },
  'Team Mark': {
    reps: 9, color: '#7B726C',
    periods: {
      daily:   { act:{pg1:10,  vip:7,   clubs:13},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:10,  vip:7,   clubs:13},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:231, vip:187, clubs:255}, tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:25,  vip:3,  clubs:18},   tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:25,  vip:3,  clubs:18},   tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:386, vip:8,  clubs:321},  tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:4,   vip:4,   clubs:5},   tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:4,   vip:4,   clubs:5},   tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:191, vip:191, clubs:79},  tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: false,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 1495],
  vip:           [3055, 1859, 2338, 1966,  710,  982],
  clubs:         [1399, 1539, 2120, 2037, 1187, 1195],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 622, 463, 382, 28],
  vip:    [518, 420, 195,   0,   9, 296, 405, 428, 309, 234, 11],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 367, 382, 412, 34],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/22'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,97,51,81,70,19,15,86,67,81,61,22,28],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,68,26,55,32,11,7,58,42,48,36,12,11],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,69,63,81,74,20,16,73,68,77,77,32,34],
};

// Team Anne full trend (monthly Feb–present, weekly 4/13–present)
const ANNE_MONTHLY = {
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:    [546,  1113, 944, 609, 424],
  vip:    [408,   910, 721, 289, 354],
  clubs:  [240,   305, 287, 353, 364],
};

const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 120, 70, 15],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 100, 50, 13],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109, 123, 92, 24],
};

// Rep tuple: [name, convPct, convRatio, {daily:[32], weekly:[10], monthly:[6]}]
// Indexes align with DAILY.labels / WEEKLY.labels / MONTHLY.labels respectively
const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Romuel Sabile','26.74%',0.2674,{
      daily:  [{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:3,vip:0,clubs:4},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:4,vip:3,clubs:3},{pg1:4,vip:3,clubs:2},{pg1:6,vip:4,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:2,vip:1,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:4,vip:2,clubs:0},{pg1:5,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:5,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:28,vip:27,clubs:10},{pg1:31,vip:24,clubs:16},{pg1:14,vip:11,clubs:12},{pg1:11,vip:0,clubs:7},{pg1:13,vip:0,clubs:7},{pg1:19,vip:13,clubs:10},{pg1:21,vip:17,clubs:3},{pg1:22,vip:18,clubs:5},{pg1:10,vip:7,clubs:3},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:103,vip:74,clubs:21},{pg1:71,vip:54,clubs:25},{pg1:124,vip:102,clubs:36},{pg1:124,vip:111,clubs:45},{pg1:66,vip:30,clubs:34},{pg1:36,vip:28,clubs:12}],
    }],
    ['Jemar Namora','30.38%',0.3038,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:3,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:3,clubs:4},{pg1:2,vip:2,clubs:3},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:4,vip:4,clubs:9},{pg1:2,vip:2,clubs:3},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:3},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:18,vip:12,clubs:24},{pg1:31,vip:16,clubs:19},{pg1:21,vip:8,clubs:16},{pg1:6,vip:0,clubs:7},{pg1:8,vip:0,clubs:4},{pg1:5,vip:5,clubs:4},{pg1:10,vip:7,clubs:9},{pg1:12,vip:12,clubs:19},{pg1:11,vip:11,clubs:20},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:96,vip:88,clubs:68},{pg1:62,vip:40,clubs:56},{pg1:105,vip:82,clubs:70},{pg1:89,vip:54,clubs:75},{pg1:29,vip:12,clubs:29},{pg1:23,vip:23,clubs:39}],
    }],
    ['Jesica Jumao-as','31.82%',0.3182,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:4},{pg1:2,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:0},{pg1:2,vip:1,clubs:4},{pg1:4,vip:4,clubs:1},{pg1:5,vip:4,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:18,vip:15,clubs:0},{pg1:14,vip:11,clubs:0},{pg1:5,vip:3,clubs:1},{pg1:4,vip:0,clubs:2},{pg1:4,vip:0,clubs:0},{pg1:6,vip:5,clubs:5},{pg1:10,vip:10,clubs:0},{pg1:22,vip:20,clubs:9},{pg1:5,vip:4,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:30,vip:26,clubs:3},{pg1:54,vip:44,clubs:1},{pg1:25,vip:15,clubs:7},{pg1:27,vip:24,clubs:11}],
    }],
    ['Kenneth Semira','30.85%',0.3085,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:5},{pg1:5,vip:5,clubs:1},{pg1:5,vip:5,clubs:0},{pg1:5,vip:5,clubs:3},{pg1:2,vip:2,clubs:2},{pg1:8,vip:7,clubs:1},{pg1:2,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:3},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:22,vip:22,clubs:11},{pg1:15,vip:13,clubs:8},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:37,vip:35,clubs:19}],
    }],
    ['Laurice Pentinio','25.64%',0.2564,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:1},{pg1:3,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:4,vip:0,clubs:0},{pg1:8,vip:4,clubs:1},{pg1:3,vip:2,clubs:1},{pg1:4,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:3,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:2,vip:1,clubs:1},{pg1:3,vip:3,clubs:2},{pg1:4,vip:4,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:6,vip:6,clubs:3},{pg1:4,vip:4,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:27,vip:24,clubs:2},{pg1:15,vip:8,clubs:3},{pg1:16,vip:10,clubs:8},{pg1:9,vip:0,clubs:9},{pg1:15,vip:0,clubs:3},{pg1:18,vip:11,clubs:3},{pg1:8,vip:8,clubs:4},{pg1:16,vip:15,clubs:4},{pg1:13,vip:13,clubs:8},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:113,vip:69,clubs:30},{pg1:65,vip:54,clubs:39},{pg1:117,vip:100,clubs:29},{pg1:101,vip:75,clubs:15},{pg1:50,vip:19,clubs:21},{pg1:29,vip:28,clubs:12}],
    }],
    ['Rubilyn Estrada','27.80%',0.278,{
      daily:  [{pg1:0,vip:0,clubs:5},{pg1:1,vip:0,clubs:5},{pg1:4,vip:0,clubs:2},{pg1:2,vip:0,clubs:2},{pg1:2,vip:0,clubs:3},{pg1:2,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:6,vip:5,clubs:3},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:4},{pg1:2,vip:1,clubs:0},{pg1:4,vip:4,clubs:4},{pg1:7,vip:7,clubs:1},{pg1:2,vip:2,clubs:5},{pg1:5,vip:5,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:5},{pg1:5,vip:3,clubs:5},{pg1:3,vip:3,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:24,vip:14,clubs:17},{pg1:29,vip:11,clubs:6},{pg1:17,vip:7,clubs:11},{pg1:7,vip:0,clubs:19},{pg1:11,vip:0,clubs:9},{pg1:15,vip:13,clubs:12},{pg1:26,vip:26,clubs:14},{pg1:12,vip:12,clubs:11},{pg1:8,vip:6,clubs:11},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:125,vip:81,clubs:38},{pg1:59,vip:35,clubs:22},{pg1:111,vip:84,clubs:35},{pg1:107,vip:61,clubs:43},{pg1:63,vip:39,clubs:61},{pg1:20,vip:18,clubs:22}],
    }],
    ['Sitti Besas','25.32%',0.2532,{
      daily:  [{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:4,vip:0,clubs:1},{pg1:2,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:4,vip:2,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:2,vip:1,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:5,vip:3,clubs:3},{pg1:6,vip:5,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:0,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:2,vip:0,clubs:4},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:10,clubs:4},{pg1:15,vip:10,clubs:5},{pg1:11,vip:6,clubs:1},{pg1:9,vip:0,clubs:6},{pg1:11,vip:0,clubs:4},{pg1:11,vip:8,clubs:6},{pg1:12,vip:8,clubs:10},{pg1:17,vip:10,clubs:18},{pg1:7,vip:1,clubs:10},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:104,vip:54,clubs:56},{pg1:69,vip:42,clubs:42},{pg1:119,vip:71,clubs:47},{pg1:48,vip:35,clubs:15},{pg1:46,vip:16,clubs:26},{pg1:24,vip:11,clubs:28}],
    }],
    ['Christian Buceron','26.06%',0.2606,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:3,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:3,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:5,vip:5,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:5},{pg1:2,vip:2,clubs:3},{pg1:2,vip:6,clubs:11},{pg1:1,vip:1,clubs:2},{pg1:2,vip:2,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:3,vip:0,clubs:7},{pg1:5,vip:1,clubs:5},{pg1:12,vip:11,clubs:6},{pg1:17,vip:17,clubs:4},{pg1:14,vip:14,clubs:10},{pg1:7,vip:11,clubs:20},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:37,vip:29,clubs:24},{pg1:21,vip:25,clubs:30}],
    }],
    ['Andrea Isabel Balon','24.87%',0.2487,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:3,vip:0,clubs:1},{pg1:4,vip:0,clubs:0},{pg1:4,vip:0,clubs:2},{pg1:1,vip:0,clubs:1},{pg1:7,vip:3,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:8,vip:7,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:3,vip:3,clubs:2},{pg1:4,vip:4,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:2,vip:3,clubs:3},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:6,vip:6,clubs:1},{pg1:4,vip:4,clubs:3},{pg1:3,vip:3,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:19,vip:17,clubs:2},{pg1:24,vip:17,clubs:4},{pg1:13,vip:11,clubs:5},{pg1:7,vip:0,clubs:8},{pg1:14,vip:0,clubs:6},{pg1:20,vip:15,clubs:2},{pg1:21,vip:21,clubs:8},{pg1:14,vip:14,clubs:5},{pg1:16,vip:16,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:90,vip:68,clubs:16},{pg1:52,vip:40,clubs:19},{pg1:110,vip:100,clubs:23},{pg1:86,vip:74,clubs:13},{pg1:62,vip:36,clubs:24},{pg1:30,vip:30,clubs:11}],
    }],
    ['Ian Ashley Sarmiento','21.67%',0.2167,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:9,vip:9,clubs:0},{pg1:5,vip:6,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:3,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:11,vip:10,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:10,vip:10,clubs:0},{pg1:23,vip:24,clubs:0},{pg1:14,vip:8,clubs:1},{pg1:13,vip:11,clubs:0}],
    }],
    ['Chelei Bago','21.67%',0.2167,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:4,vip:0,clubs:3},{pg1:3,vip:0,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:5,vip:5,clubs:0},{pg1:4,vip:3,clubs:1},{pg1:6,vip:4,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:21,vip:23,clubs:11},{pg1:30,vip:30,clubs:2},{pg1:15,vip:12,clubs:4},{pg1:10,vip:0,clubs:4},{pg1:12,vip:0,clubs:6},{pg1:14,vip:12,clubs:2},{pg1:26,vip:23,clubs:4},{pg1:12,vip:12,clubs:2},{pg1:4,vip:5,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:100,vip:94,clubs:12},{pg1:52,vip:49,clubs:0},{pg1:114,vip:111,clubs:7},{pg1:105,vip:104,clubs:19},{pg1:63,vip:35,clubs:16},{pg1:16,vip:17,clubs:3}],
    }],
    ['Audrey Banares','22.22%',0.2222,{
      daily:  [{pg1:2,vip:0,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:3,vip:0,clubs:0},{pg1:4,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:5,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:6,vip:4,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:2,clubs:0},{pg1:5,vip:3,clubs:0},{pg1:6,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:1,vip:0,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:6,vip:5,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:20,vip:17,clubs:4},{pg1:25,vip:19,clubs:4},{pg1:9,vip:5,clubs:2},{pg1:9,vip:0,clubs:9},{pg1:12,vip:0,clubs:4},{pg1:13,vip:8,clubs:1},{pg1:27,vip:18,clubs:2},{pg1:16,vip:11,clubs:9},{pg1:8,vip:7,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:100,vip:82,clubs:7},{pg1:46,vip:39,clubs:7},{pg1:112,vip:94,clubs:8},{pg1:92,vip:70,clubs:13},{pg1:61,vip:26,clubs:16},{pg1:24,vip:18,clubs:15}],
    }],
    ['Prince Wendell De Luna','20.25%',0.2025,{
      daily:  [{pg1:3,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:3,vip:0,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:5,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:2,vip:1,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:7,vip:7,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:2,vip:1,clubs:1},{pg1:5,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:25,vip:13,clubs:10},{pg1:24,vip:14,clubs:11},{pg1:12,vip:5,clubs:9},{pg1:11,vip:0,clubs:8},{pg1:12,vip:0,clubs:4},{pg1:7,vip:5,clubs:1},{pg1:20,vip:18,clubs:1},{pg1:21,vip:19,clubs:6},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:102,vip:88,clubs:7},{pg1:55,vip:41,clubs:30},{pg1:121,vip:90,clubs:43},{pg1:108,vip:62,clubs:48},{pg1:52,vip:23,clubs:20},{pg1:23,vip:19,clubs:6}],
    }],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','29.46%',0.2946,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:5,vip:0,clubs:7},{pg1:0,vip:0,clubs:0},{pg1:4,vip:1,clubs:3},{pg1:5,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:2,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:4,clubs:1},{pg1:4,vip:4,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:14,vip:1,clubs:11},{pg1:8,vip:6,clubs:0},{pg1:14,vip:10,clubs:4},{pg1:10,vip:10,clubs:3},{pg1:8,vip:9,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:36,vip:17,clubs:15},{pg1:18,vip:19,clubs:5}],
    }],
    ['Belle Diaz','36.19%',0.3619,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:3},{pg1:6,vip:0,clubs:7},{pg1:2,vip:0,clubs:8},{pg1:2,vip:0,clubs:11},{pg1:5,vip:2,clubs:5},{pg1:3,vip:0,clubs:6},{pg1:7,vip:6,clubs:8},{pg1:5,vip:4,clubs:3},{pg1:4,vip:3,clubs:5},{pg1:4,vip:1,clubs:3},{pg1:3,vip:1,clubs:4},{pg1:4,vip:2,clubs:2},{pg1:5,vip:2,clubs:3},{pg1:5,vip:2,clubs:6},{pg1:5,vip:2,clubs:0},{pg1:4,vip:1,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:7,vip:3,clubs:7},{pg1:5,vip:4,clubs:1},{pg1:7,vip:4,clubs:4},{pg1:5,vip:3,clubs:10},{pg1:4,vip:3,clubs:7},{pg1:8,vip:8,clubs:7},{pg1:7,vip:4,clubs:4},{pg1:2,vip:1,clubs:3},{pg1:6,vip:6,clubs:7},{pg1:2,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:0,clubs:9},{pg1:9,vip:0,clubs:20},{pg1:21,vip:2,clubs:45},{pg1:23,vip:15,clubs:23},{pg1:25,vip:9,clubs:18},{pg1:29,vip:18,clubs:34},{pg1:25,vip:19,clubs:23},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:85,vip:26,clubs:115},{pg1:54,vip:37,clubs:57}],
    }],
    ['Kuh-Kuh Doringo','30.99%',0.3099,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:6},{pg1:6,vip:0,clubs:7},{pg1:2,vip:0,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:2,vip:1,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:4,vip:2,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:1,vip:1,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:1,clubs:2},{pg1:3,vip:1,clubs:2},{pg1:4,vip:3,clubs:3},{pg1:3,vip:2,clubs:0},{pg1:4,vip:2,clubs:5},{pg1:5,vip:5,clubs:2},{pg1:3,vip:3,clubs:5},{pg1:4,vip:3,clubs:6},{pg1:4,vip:4,clubs:5},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:9},{pg1:6,vip:0,clubs:8},{pg1:14,vip:0,clubs:19},{pg1:3,vip:2,clubs:6},{pg1:10,vip:6,clubs:10},{pg1:17,vip:9,clubs:12},{pg1:18,vip:16,clubs:21},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:36,vip:8,clubs:52},{pg1:35,vip:25,clubs:33}],
    }],
    ['Elbrando Tibon','20.61%',0.2061,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:2,clubs:5},{pg1:1,vip:2,clubs:0},{pg1:3,vip:2,clubs:2},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:12,clubs:12},{pg1:20,vip:20,clubs:10},{pg1:20,vip:17,clubs:2},{pg1:5,vip:0,clubs:7},{pg1:6,vip:0,clubs:6},{pg1:8,vip:7,clubs:0},{pg1:13,vip:12,clubs:3},{pg1:11,vip:9,clubs:7},{pg1:7,vip:5,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:34,vip:32,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:54,vip:51,clubs:14},{pg1:68,vip:62,clubs:44},{pg1:32,vip:19,clubs:16},{pg1:18,vip:14,clubs:8}],
    }],
    ['Mayzelyn Revuelto','22.61%',0.2261,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:12,vip:12,clubs:10},{pg1:11,vip:9,clubs:6},{pg1:3,vip:3,clubs:6},{pg1:2,vip:0,clubs:5},{pg1:7,vip:0,clubs:6},{pg1:4,vip:2,clubs:6},{pg1:10,vip:10,clubs:4},{pg1:11,vip:11,clubs:0},{pg1:8,vip:7,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:101,vip:70,clubs:13},{pg1:0,vip:0,clubs:0},{pg1:73,vip:65,clubs:24},{pg1:48,vip:41,clubs:33},{pg1:23,vip:12,clubs:22},{pg1:19,vip:18,clubs:0}],
    }],
    ['Adrian Bundalian Gabriel','15.71%',0.1571,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:3},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:4},{pg1:4,vip:4,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:4}],
    }],
    ['Mark Ryan Francis','9.52%',0.0952,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0}],
    }],
    ['Charlyn Baylon','5.50%',0.055,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1}],
    }],
    ['Maria Lourdes Ortiz','7.84%',0.0784],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','17.96%',0.1796],['Melody Tubio Libradilla','13.21%',0.1321],
    ['Thomas John Lommen','12.68%',0.1268],['Lucky Sardia','12.50%',0.125],
    ['Rheena Jayne Tomakin','14.39%',0.1439],['Jacinto Jr Basada','9.13%',0.0913],
    ['Micha Aborquez','9.96%',0.0996],['Marvin Tingin','8.94%',0.0894],
    ['Majan Perez','6.40%',0.064],['Reynaldo Calde Jr','7.69%',0.0769],
    ['Houda Ashraf Sayyed','4.35%',0.0435],['Kathlene Tiampo','3.81%',0.0381],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','26.61%',0.2661,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:5,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:3,vip:2,clubs:1},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:4,vip:4,clubs:1},{pg1:3,vip:4,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:10,vip:0,clubs:0},{pg1:14,vip:0,clubs:3},{pg1:15,vip:11,clubs:0},{pg1:22,vip:22,clubs:0},{pg1:11,vip:10,clubs:4},{pg1:14,vip:15,clubs:7},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:62,vip:33,clubs:3},{pg1:25,vip:25,clubs:11}],
    }],
    ['Gerald Mark Lee Rabonza','37.10%',0.371,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:6,vip:5,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:1,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:0,clubs:5},{pg1:5,vip:0,clubs:6},{pg1:3,vip:2,clubs:1},{pg1:10,vip:10,clubs:0},{pg1:12,vip:12,clubs:2},{pg1:6,vip:6,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:24,vip:12,clubs:13},{pg1:18,vip:18,clubs:6}],
    }],
    ['Rose Shamae Morica','22.22%',0.2222,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:3,clubs:1},{pg1:4,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:4,vip:4,clubs:0},{pg1:18,vip:18,clubs:1},{pg1:7,vip:7,clubs:14},{pg1:2,vip:0,clubs:13},{pg1:8,vip:3,clubs:7},{pg1:7,vip:5,clubs:0},{pg1:9,vip:9,clubs:2},{pg1:16,vip:16,clubs:0},{pg1:10,vip:10,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:38,vip:38,clubs:10},{pg1:26,vip:17,clubs:27},{pg1:26,vip:26,clubs:1}],
    }],
    ['Aldrin Jay Leones','22.22%',0.2222,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:3,vip:3,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:9,vip:9,clubs:5},{pg1:8,vip:8,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:17,vip:17,clubs:6}],
    }],
    ['Monette Soltes','28.57%',0.2857,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:4,vip:0,clubs:2},{pg1:7,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:10,vip:9,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:17,vip:5,clubs:4},{pg1:15,vip:14,clubs:2}],
    }],
    ['Reynan Sularan','22.70%',0.227,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:0,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:4,vip:5,clubs:1},{pg1:6,vip:7,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:5,vip:0,clubs:3},{pg1:5,vip:0,clubs:5},{pg1:8,vip:11,clubs:2},{pg1:11,vip:11,clubs:0},{pg1:15,vip:15,clubs:3},{pg1:7,vip:7,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:24,vip:25,clubs:7},{pg1:29,vip:22,clubs:10},{pg1:22,vip:22,clubs:7}],
    }],
    ['Dan Dominique Arizala Casem','25.35%',0.2535,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:3},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:10,vip:10,clubs:3}],
    }],
    ['Dexter Cagas Arbas','16.44%',0.1644,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:2}],
    }],
    ['Marc Bryan Paguinto','12.08%',0.1208,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:5},{pg1:2,vip:2,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:8}],
    }],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Julius Vizcayno','7.32%',0.0732],['Vian Perez','3.66%',0.0366],
    ['Phoebe Estel Ymil Collado','4.35%',0.0435],['Rafael John Abayan','2.94%',0.0294],
    ['Dan Emmanuel Nicolas','1.04%',0.0104],['Jhaziel Gonzales','0.85%',0.0085],
    ['Heinrich Abarquez','2.63%',0.0263],['Tommy Tecson','0.00%',0],
    ['Richard Ian Alvarez','0.00%',0],['Jessika Elliott','0.00%',0],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','52.81%',0.5281,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:9,vip:3,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:4,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:7,vip:5,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:6,vip:5,clubs:0},{pg1:3,vip:1,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:7,vip:6,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:6,vip:5,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:3,clubs:2},{pg1:7,vip:5,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:3,vip:4,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:21,vip:20,clubs:5},{pg1:15,vip:12,clubs:4},{pg1:6,vip:4,clubs:16},{pg1:11,vip:0,clubs:8},{pg1:9,vip:0,clubs:8},{pg1:25,vip:19,clubs:3},{pg1:22,vip:16,clubs:0},{pg1:19,vip:15,clubs:3},{pg1:13,vip:14,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:89,vip:70,clubs:7},{pg1:91,vip:78,clubs:12},{pg1:89,vip:62,clubs:29},{pg1:80,vip:70,clubs:31},{pg1:67,vip:35,clubs:22},{pg1:32,vip:29,clubs:5}],
    }],
    ['Jho-May Acosta','30.30%',0.303,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:1,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:2,vip:3,clubs:2},{pg1:7,vip:7,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:11,vip:8,clubs:5},{pg1:7,vip:7,clubs:1}],
    }],
    ['Martin Lorenzo Savellano','34.21%',0.3421,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:13,clubs:3},{pg1:8,vip:8,clubs:3},{pg1:3,vip:3,clubs:0},{pg1:7,vip:0,clubs:5},{pg1:6,vip:0,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:4,vip:5,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:8,vip:8,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:72,vip:71,clubs:5},{pg1:71,vip:60,clubs:8},{pg1:31,vip:28,clubs:9},{pg1:34,vip:33,clubs:7},{pg1:20,vip:8,clubs:7},{pg1:15,vip:15,clubs:4}],
    }],
    ['Venus Marie Cartalla','28.62%',0.2862,{
      daily:  [{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:3},{pg1:3,vip:0,clubs:3},{pg1:1,vip:0,clubs:3},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:0},{pg1:8,vip:8,clubs:5},{pg1:1,vip:1,clubs:4},{pg1:3,vip:2,clubs:3},{pg1:4,vip:2,clubs:1},{pg1:2,vip:1,clubs:3},{pg1:3,vip:2,clubs:3},{pg1:5,vip:0,clubs:2},{pg1:5,vip:3,clubs:1},{pg1:5,vip:2,clubs:4},{pg1:3,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:7,vip:5,clubs:8},{pg1:3,vip:2,clubs:5},{pg1:5,vip:4,clubs:1},{pg1:8,vip:6,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:4},{pg1:2,vip:1,clubs:4},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:12,vip:5,clubs:17},{pg1:22,vip:12,clubs:14},{pg1:9,vip:7,clubs:13},{pg1:19,vip:0,clubs:12},{pg1:9,vip:0,clubs:11},{pg1:20,vip:13,clubs:13},{pg1:23,vip:9,clubs:15},{pg1:20,vip:15,clubs:19},{pg1:15,vip:10,clubs:10},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:93,vip:90,clubs:23},{pg1:101,vip:83,clubs:33},{pg1:52,vip:30,clubs:65},{pg1:53,vip:30,clubs:71},{pg1:72,vip:22,clubs:55},{pg1:35,vip:25,clubs:29}],
    }],
    ['Jackie Rose Paet','24.81%',0.2481,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:3,vip:3,clubs:8},{pg1:7,vip:5,clubs:1},{pg1:1,vip:1,clubs:4},{pg1:5,vip:4,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:3,vip:4,clubs:3},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:22,vip:20,clubs:15},{pg1:12,vip:12,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:75,vip:66,clubs:29},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:34,vip:32,clubs:21}],
    }],
    ['Romalyn Magallon','26.53%',0.2653,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:7,clubs:6},{pg1:8,vip:8,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:39,vip:37,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:16,vip:15,clubs:11}],
    }],
    ['Aileen Mendez','24.58%',0.2458,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:13,vip:12,clubs:1},{pg1:8,vip:7,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:54,vip:48,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:21,vip:19,clubs:3}],
    }],
    ['Kevin Jabagat','11.39%',0.1139,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:2,vip:1,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:1,clubs:6}],
    }],
  ]},
];

// ── Phone Setters (Internal Setter LOB / TMA) ─────────────────────────────
const PHONE_SETTERS_TARGETS = {
  daily:   { sets:30,  show:18, closed:6,   cash:50000   },
  weekly:  { sets:150, show:85, closed:30,  cash:250000  },
  monthly: { sets:600, show:340,closed:120, cash:1000000 },
};
const PHONE_SETTERS_MONTHLY = {
  labels:   ['Feb','Mar','Apr','May','Jun MTD'],
  sets:     [689,  1078, 469, 506, 364],
  show:     [336,  457,  288, 304, 200],
  closed:   [130,  122,  99,  93,  78],
  cash_rev: [null, null, null, null, 448875],
  cash_ref: [null, null, null, null, -8100],
};
const PHONE_SETTERS_WEEKLY = {
  labels:   ['4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22'],
  sets:     [101, 71, 141, 120, 119, 106, 121, 124, 89, 23],
  show:     [56,  36,  70,  81,  79,  62,  53,  78, 47, 15],
  closed:   [26,  14,  17,  19,  23,  28,  21,  33, 16,  6],
  cash_rev: [178295,89000,112312,155478,134952,167118,130663,179745,138467,0],
  cash_ref: [0,     -500, -5000, -6000, -4000, -4000, 0,     -6100, -2000, 0],
};
const PHONE_SETTERS_DAILY = {
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/22'],
  sets:     [33, 33, 14,  4,  2, 21, 35, 22, 20, 24,  1,  2, 24, 29, 13, 23,  0, 23],
  show:     [ 6,  9,  9,  9,  0, 14, 11, 12, 12, 21,  8,  0, 16,  7, 12, 10,  1, 15],
  closed:   [ 1,  3,  5,  5,  0,  4,  7,  3,  5,  7,  7,  0,  5,  1,  4,  6,  0,  6],
  cash_rev: [3000,12833,36830,24000,0,29600,32200,17300,24450,37095,39100,0,30250,6500,7500,0,0,0],
  cash_ref: [0,   0,   0,   0,   0,-4100,-2000,0,    0,    0,    0,   0,0,    -2000,0,  0, 0, 0],
};
const PHONE_SETTERS_REP_TARGETS = {
  daily:   { sets:  3, show:  2, cash:   5000 },
  weekly:  { sets: 15, show: 10, cash:  25000 },
  monthly: { sets: 60, show: 40, cash: 100000 },
};
// [name, {daily:{sets,show,cash_rev,cash_ref}, weekly:{...}, monthly:{...}}]
// Cash = cash_rev + cash_ref; monthly MTD only (not tracked per-rep at daily/weekly level)
const PHONE_SETTERS_REPS = [
  ['Jhaziel Gonzales',          {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:27,show:20,cash_rev:67978,cash_ref:0}}],
  ['Tommy Tecson',              {daily:{sets:0,show:1,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:1,cash_rev:0,cash_ref:0}, monthly:{sets:38,show:22,cash_rev:50200,cash_ref:0}}],
  ['Phoebe Estel Ymil Collado', {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:34,show:17,cash_rev:52617,cash_ref:-5100}}],
  ['Vian Perez',                {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:27,show:12,cash_rev:42100,cash_ref:0}}],
  ['Rafael John Abayan',        {daily:{sets:0,show:1,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:1,cash_rev:0,cash_ref:0}, monthly:{sets:29,show:17,cash_rev:55833,cash_ref:0}}],
  ['Richard Ian Alvarez',       {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:25,show:12,cash_rev:63667,cash_ref:-2000}}],
  ['Heinrich Abarquez',         {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:41,show:25,cash_rev:45000,cash_ref:-1000}}],
  ['Dan Emmanuel Nicolas',      {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:20,show:9, cash_rev:42700,cash_ref:0}}],
  ['Julius Vizcayno',           {daily:{sets:0,show:1,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:1,cash_rev:0,cash_ref:0}, monthly:{sets:25,show:13,cash_rev:28780,cash_ref:0}}],
  ['Philip Josh Caperig',       {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:2, show:1, cash_rev:0,    cash_ref:0}}],
];

// ── Customer Care (Team Lee LOB) ──────────────────────────────────────────
const CUSTOMER_CARE_MONTHLY = {
  labels:   ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:      [4,   52,  77,  185, 239],
  vip:      [105, 151, 119, 17,  17],
  clubs:    [27,  60,  90,  126, 222],
  csat_num: [473, 446, 998, 1166,1124],
  csat_den: [600, 519, 1189,1339,1287],
};
const CUSTOMER_CARE_WEEKLY = {
  labels:   ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  pg1:      [7,  42, 22, 42, 49, 33, 58, 96, 67, 69],
  vip:      [37,  0,  4,  0,  0,  6,  6,  3,  0,  2],
  clubs:    [16, 10,  9, 14, 26, 22, 23, 53, 47, 62],
  csat_num: [183,128,118,214,209,240,150,321,299,217],
  csat_den: [199,143,136,233,236,258,168,356,328,237],
};
const CUSTOMER_CARE_DAILY = {
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/22'],
  pg1:      [22,13,12, 8, 2,12,15,11,11,11, 4, 3,12,10,23,11,13, 0],
  vip:      [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  clubs:    [ 6,10, 5, 7, 2, 3, 6, 9,13,12, 3, 1, 7,10,20,10,10, 0],
  csat_num: [52,45,45,12,14,54,57,55,50,56,17,10,50,46,38,42,31, 0],
  csat_den: [59,51,51,12,14,59,63,60,56,61,18,11,57,49,42,46,33, 0],
};
// [name, {daily:{pg1,vip,clubs,csat_num,csat_den}, weekly:{...}, monthly:{...}}]
const CUSTOMER_CARE_REPS = [
  ['Kikumi Keeshia Matsuo',   {daily:{pg1:2, vip:0,clubs:2, csat_num:3,  csat_den:3},  weekly:{pg1:14,vip:1,clubs:11,csat_num:21, csat_den:21}, monthly:{pg1:44, vip:2,clubs:20,csat_num:78,  csat_den:80}}],
  ['Melody Tubio Libradilla', {daily:{pg1:5, vip:0,clubs:1, csat_num:5,  csat_den:5},  weekly:{pg1:9, vip:0,clubs:8, csat_num:29, csat_den:29}, monthly:{pg1:32, vip:0,clubs:13,csat_num:101, csat_den:105}}],
  ['Thomas John Lommen',      {daily:{pg1:1, vip:1,clubs:1, csat_num:5,  csat_den:5},  weekly:{pg1:7, vip:1,clubs:9, csat_num:16, csat_den:19}, monthly:{pg1:35, vip:1,clubs:22,csat_num:99,  csat_den:111}}],
  ['Lucky Sardia',            {daily:{pg1:0, vip:0,clubs:3, csat_num:6,  csat_den:6},  weekly:{pg1:9, vip:0,clubs:9, csat_num:27, csat_den:27}, monthly:{pg1:26, vip:0,clubs:17,csat_num:67,  csat_den:70}}],
  ['Rheena Jayne Tomakin',    {daily:{pg1:1, vip:0,clubs:2, csat_num:6,  csat_den:7},  weekly:{pg1:14,vip:0,clubs:9, csat_num:24, csat_den:27}, monthly:{pg1:26, vip:0,clubs:22,csat_num:82,  csat_den:88}}],
  ['Jacinto Jr Basada',       {daily:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  weekly:{pg1:3, vip:0,clubs:4, csat_num:17, csat_den:17}, monthly:{pg1:17, vip:0,clubs:11,csat_num:52,  csat_den:55}}],
  ['Micha Aborquez',          {daily:{pg1:3, vip:0,clubs:1, csat_num:3,  csat_den:3},  weekly:{pg1:7, vip:0,clubs:4, csat_num:23, csat_den:28}, monthly:{pg1:18, vip:0,clubs:10,csat_num:57,  csat_den:65}}],
  ['Marvin Tingin',           {daily:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  weekly:{pg1:1, vip:0,clubs:1, csat_num:7,  csat_den:7},  monthly:{pg1:13, vip:1,clubs:11,csat_num:64,  csat_den:71}}],
  ['Majan Perez',             {daily:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  weekly:{pg1:0, vip:0,clubs:4, csat_num:9,  csat_den:10}, monthly:{pg1:1,  vip:0,clubs:16,csat_num:54,  csat_den:59}}],
  ['Reynaldo Calde Jr',       {daily:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  weekly:{pg1:3, vip:0,clubs:0, csat_num:9,  csat_den:9},  monthly:{pg1:11, vip:0,clubs:3, csat_num:47,  csat_den:49}}],
  ['Houda Ashraf Sayyed',     {daily:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  weekly:{pg1:1, vip:0,clubs:0, csat_num:15, csat_den:19}, monthly:{pg1:5,  vip:1,clubs:5, csat_num:80,  csat_den:103}}],
  ['Kathlene Tiampo',         {daily:{pg1:1, vip:0,clubs:0, csat_num:3,  csat_den:4},  weekly:{pg1:1, vip:0,clubs:3, csat_num:20, csat_den:24}, monthly:{pg1:4,  vip:0,clubs:7, csat_num:46,  csat_den:55}}],
];
