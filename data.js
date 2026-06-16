// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const AS_OF_DATE           = 'June 16, 2026';
const DAILY_LABEL          = 'Jun 16';
const WEEKLY_LABEL         = 'WB Jun 15';

const DAYS_WORKED          = 12;
const DAYS_REMAINING       = 10;
const DAYS_TOTAL           = 22;
const DAYS_WORKED_RANGE    = 'Jun 1–5, 8–12, 15–16';
const DAYS_REMAINING_RANGE = 'Jun 17–19, 22–26, 29–30';

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
      daily:   { act:{pg1:46,   vip:34,   clubs:44},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:134,  vip:91,   clubs:121},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:1258, vip:849,  clubs:874},  tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:1704, calls:8331 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:11,  vip:10,  clubs:8},    tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:28,  vip:24,  clubs:22},   tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:376, vip:327, clubs:254},  tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:6,   vip:6,   clubs:14},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:23,  vip:18,  clubs:35},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:190, vip:154, clubs:186}, tgt:{pg1:506, vip:506, clubs:337} },
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
      daily:   { act:{pg1:11,  vip:10,  clubs:5},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:22,  vip:22,  clubs:12},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:174, vip:173, clubs:60},  tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:7,   vip:0,  clubs:15},   tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:29,  vip:1,  clubs:35},   tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:305, vip:6,  clubs:246},  tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:11,  vip:8,   clubs:2},   tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:22,  vip:20,  clubs:9},   tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:174, vip:173, clubs:60},  tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: false,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 1258],
  vip:           [3055, 1859, 2338, 1966,  710,  849],
  clubs:         [1399, 1539, 2120, 2037, 1187,  874],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 634, 490, 134],
  vip:    [518, 420, 195,   0,   9, 296, 405, 440, 318,  91],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 367, 386, 121],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,97,51,81,70,19,15,88,46],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,68,26,55,32,11,7,57,34],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,69,63,81,74,20,16,77,44],
};

// Team Anne full trend (monthly Feb–present, weekly 4/13–present)
const ANNE_MONTHLY = {
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:    [546,  1113, 944, 609, 376],
  vip:    [408,   910, 721, 289, 327],
  clubs:  [240,   305, 287, 353, 254],
};

const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 137, 28],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 114, 24],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109, 123, 22],
};

// Rep tuple: [name, convPct, convRatio, {daily:[32], weekly:[10], monthly:[6]}]
// Indexes align with DAILY.labels / WEEKLY.labels / MONTHLY.labels respectively
const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Romuel Sabile','41.76%',0.4176,{
      daily:  [{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:3,vip:0,clubs:4},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:4,vip:3,clubs:3},{pg1:4,vip:3,clubs:2},{pg1:6,vip:4,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:2,vip:1,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:4,vip:2,clubs:0},{pg1:5,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:5,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:28,vip:27,clubs:10},{pg1:31,vip:24,clubs:16},{pg1:14,vip:11,clubs:12},{pg1:11,vip:0,clubs:7},{pg1:13,vip:0,clubs:7},{pg1:19,vip:13,clubs:10},{pg1:21,vip:17,clubs:3},{pg1:22,vip:18,clubs:5},{pg1:10,vip:7,clubs:3},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:103,vip:74,clubs:21},{pg1:71,vip:54,clubs:25},{pg1:124,vip:102,clubs:36},{pg1:124,vip:111,clubs:45},{pg1:66,vip:30,clubs:34},{pg1:32,vip:25,clubs:8}],
    }],
    ['Jemar Namora','30.72%',0.3072,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:3,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:3,clubs:4},{pg1:2,vip:2,clubs:3},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:4,vip:4,clubs:9},{pg1:2,vip:2,clubs:3},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:3},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:18,vip:12,clubs:24},{pg1:31,vip:16,clubs:19},{pg1:21,vip:8,clubs:16},{pg1:6,vip:0,clubs:7},{pg1:8,vip:0,clubs:4},{pg1:5,vip:5,clubs:4},{pg1:10,vip:7,clubs:9},{pg1:12,vip:12,clubs:19},{pg1:11,vip:11,clubs:20},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:96,vip:88,clubs:68},{pg1:62,vip:40,clubs:56},{pg1:105,vip:82,clubs:70},{pg1:89,vip:54,clubs:75},{pg1:29,vip:12,clubs:29},{pg1:23,vip:23,clubs:39}],
    }],
    ['Jesica Jumao-as','34.34%',0.3434,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:4},{pg1:2,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:0},{pg1:2,vip:1,clubs:4},{pg1:4,vip:4,clubs:1},{pg1:5,vip:4,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:18,vip:15,clubs:0},{pg1:14,vip:11,clubs:0},{pg1:5,vip:3,clubs:1},{pg1:4,vip:0,clubs:2},{pg1:4,vip:0,clubs:0},{pg1:6,vip:5,clubs:5},{pg1:10,vip:10,clubs:0},{pg1:22,vip:20,clubs:9},{pg1:5,vip:4,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:30,vip:26,clubs:3},{pg1:54,vip:44,clubs:1},{pg1:25,vip:15,clubs:7},{pg1:27,vip:24,clubs:11}],
    }],
    ['Kenneth Semira','34.69%',0.3469,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:5},{pg1:5,vip:5,clubs:1},{pg1:5,vip:5,clubs:0},{pg1:5,vip:5,clubs:3},{pg1:2,vip:2,clubs:2},{pg1:8,vip:7,clubs:1},{pg1:2,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:3},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:22,vip:22,clubs:11},{pg1:15,vip:13,clubs:8},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:37,vip:35,clubs:19}],
    }],
    ['Laurice Pentinio','33.62%',0.3362,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:1},{pg1:3,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:4,vip:0,clubs:0},{pg1:8,vip:4,clubs:1},{pg1:3,vip:2,clubs:1},{pg1:4,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:3,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:2,vip:1,clubs:1},{pg1:3,vip:3,clubs:2},{pg1:4,vip:4,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:6,vip:6,clubs:3},{pg1:4,vip:4,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:27,vip:24,clubs:2},{pg1:15,vip:8,clubs:3},{pg1:16,vip:10,clubs:8},{pg1:9,vip:0,clubs:9},{pg1:15,vip:0,clubs:3},{pg1:18,vip:11,clubs:3},{pg1:8,vip:8,clubs:4},{pg1:16,vip:15,clubs:4},{pg1:13,vip:13,clubs:8},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:113,vip:69,clubs:30},{pg1:65,vip:54,clubs:39},{pg1:117,vip:100,clubs:29},{pg1:101,vip:75,clubs:15},{pg1:50,vip:19,clubs:21},{pg1:29,vip:28,clubs:12}],
    }],
    ['Rubilyn Estrada','29.75%',0.2975,{
      daily:  [{pg1:0,vip:0,clubs:5},{pg1:1,vip:0,clubs:5},{pg1:4,vip:0,clubs:2},{pg1:2,vip:0,clubs:2},{pg1:2,vip:0,clubs:3},{pg1:2,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:6,vip:5,clubs:3},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:4},{pg1:2,vip:1,clubs:0},{pg1:4,vip:4,clubs:4},{pg1:7,vip:7,clubs:1},{pg1:2,vip:2,clubs:5},{pg1:5,vip:5,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:5},{pg1:5,vip:3,clubs:5},{pg1:3,vip:3,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:24,vip:14,clubs:17},{pg1:29,vip:11,clubs:6},{pg1:17,vip:7,clubs:11},{pg1:7,vip:0,clubs:19},{pg1:11,vip:0,clubs:9},{pg1:15,vip:13,clubs:12},{pg1:26,vip:26,clubs:14},{pg1:12,vip:12,clubs:11},{pg1:8,vip:6,clubs:11},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:125,vip:81,clubs:38},{pg1:59,vip:35,clubs:22},{pg1:111,vip:84,clubs:35},{pg1:107,vip:61,clubs:43},{pg1:63,vip:39,clubs:61},{pg1:20,vip:18,clubs:22}],
    }],
    ['Sitti Besas','26.11%',0.2611,{
      daily:  [{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:4,vip:0,clubs:1},{pg1:2,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:4,vip:2,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:2,vip:1,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:5,vip:3,clubs:3},{pg1:6,vip:5,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:0,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:2,vip:0,clubs:4},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:10,clubs:4},{pg1:15,vip:10,clubs:5},{pg1:11,vip:6,clubs:1},{pg1:9,vip:0,clubs:6},{pg1:11,vip:0,clubs:4},{pg1:11,vip:8,clubs:6},{pg1:12,vip:8,clubs:10},{pg1:17,vip:10,clubs:18},{pg1:7,vip:1,clubs:10},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:104,vip:54,clubs:56},{pg1:69,vip:42,clubs:42},{pg1:119,vip:71,clubs:47},{pg1:48,vip:35,clubs:15},{pg1:46,vip:16,clubs:26},{pg1:24,vip:11,clubs:28}],
    }],
    ['Christian Buceron','33.63%',0.3363,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:3,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:3,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:5,vip:5,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:5},{pg1:2,vip:2,clubs:3},{pg1:2,vip:6,clubs:11},{pg1:1,vip:1,clubs:2},{pg1:2,vip:2,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:3,vip:0,clubs:7},{pg1:5,vip:1,clubs:5},{pg1:12,vip:11,clubs:6},{pg1:17,vip:17,clubs:4},{pg1:14,vip:14,clubs:10},{pg1:7,vip:11,clubs:20},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:37,vip:29,clubs:24},{pg1:21,vip:25,clubs:30}],
    }],
    ['Andrea Isabel Balon','28.80%',0.2880,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:3,vip:0,clubs:1},{pg1:4,vip:0,clubs:0},{pg1:4,vip:0,clubs:2},{pg1:1,vip:0,clubs:1},{pg1:7,vip:3,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:8,vip:7,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:3,vip:3,clubs:2},{pg1:4,vip:4,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:2,vip:3,clubs:3},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:6,vip:6,clubs:1},{pg1:4,vip:4,clubs:3},{pg1:3,vip:3,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:19,vip:17,clubs:2},{pg1:24,vip:17,clubs:4},{pg1:13,vip:11,clubs:5},{pg1:7,vip:0,clubs:8},{pg1:14,vip:0,clubs:6},{pg1:20,vip:15,clubs:2},{pg1:21,vip:21,clubs:8},{pg1:14,vip:14,clubs:5},{pg1:16,vip:16,clubs:6},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:90,vip:68,clubs:16},{pg1:52,vip:40,clubs:19},{pg1:110,vip:100,clubs:23},{pg1:86,vip:74,clubs:13},{pg1:62,vip:36,clubs:24},{pg1:30,vip:30,clubs:11}],
    }],
    ['Ian Ashley Sarmiento','27.66%',0.2766,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:9,vip:9,clubs:0},{pg1:5,vip:6,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:3,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:11,vip:10,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:10,vip:10,clubs:0},{pg1:23,vip:24,clubs:0},{pg1:14,vip:8,clubs:1},{pg1:13,vip:11,clubs:0}],
    }],
    ['Chelei Bago','28.57%',0.2857,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:4,vip:0,clubs:3},{pg1:3,vip:0,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:5,vip:5,clubs:0},{pg1:4,vip:3,clubs:1},{pg1:6,vip:4,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:21,vip:23,clubs:11},{pg1:30,vip:30,clubs:2},{pg1:15,vip:12,clubs:4},{pg1:10,vip:0,clubs:4},{pg1:12,vip:0,clubs:6},{pg1:14,vip:12,clubs:2},{pg1:26,vip:23,clubs:4},{pg1:12,vip:12,clubs:2},{pg1:4,vip:5,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:100,vip:94,clubs:12},{pg1:52,vip:49,clubs:0},{pg1:114,vip:111,clubs:7},{pg1:105,vip:104,clubs:19},{pg1:63,vip:35,clubs:16},{pg1:16,vip:17,clubs:3}],
    }],
    ['Audrey Banares','24.31%',0.2431,{
      daily:  [{pg1:2,vip:0,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:3,vip:0,clubs:0},{pg1:4,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:5,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:6,vip:4,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:2,clubs:0},{pg1:5,vip:3,clubs:0},{pg1:6,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:1,vip:0,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:6,vip:5,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:20,vip:17,clubs:4},{pg1:25,vip:19,clubs:4},{pg1:9,vip:5,clubs:2},{pg1:9,vip:0,clubs:9},{pg1:12,vip:0,clubs:4},{pg1:13,vip:8,clubs:1},{pg1:27,vip:18,clubs:2},{pg1:16,vip:11,clubs:9},{pg1:8,vip:7,clubs:6},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:100,vip:82,clubs:7},{pg1:46,vip:39,clubs:7},{pg1:112,vip:94,clubs:8},{pg1:92,vip:70,clubs:13},{pg1:61,vip:26,clubs:16},{pg1:24,vip:18,clubs:15}],
    }],
    ['Prince Wendell De Luna','24.30%',0.2430,{
      daily:  [{pg1:3,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:3,vip:0,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:5,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:2,vip:1,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:7,vip:7,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:2,vip:1,clubs:1},{pg1:5,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:25,vip:13,clubs:10},{pg1:24,vip:14,clubs:11},{pg1:12,vip:5,clubs:9},{pg1:11,vip:0,clubs:8},{pg1:12,vip:0,clubs:4},{pg1:7,vip:5,clubs:1},{pg1:20,vip:18,clubs:1},{pg1:21,vip:19,clubs:6},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:102,vip:88,clubs:7},{pg1:55,vip:41,clubs:30},{pg1:121,vip:90,clubs:43},{pg1:108,vip:62,clubs:48},{pg1:52,vip:23,clubs:20},{pg1:23,vip:19,clubs:6}],
    }],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','44.44%',0.4444,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:5,vip:0,clubs:7},{pg1:0,vip:0,clubs:0},{pg1:4,vip:1,clubs:3},{pg1:5,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:2,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:4,clubs:1},{pg1:4,vip:4,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:14,vip:1,clubs:11},{pg1:8,vip:6,clubs:0},{pg1:14,vip:10,clubs:4},{pg1:10,vip:10,clubs:3},{pg1:8,vip:9,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:36,vip:17,clubs:15},{pg1:18,vip:19,clubs:5}],
    }],
    ['Belle Diaz','39.32%',0.3932,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:3},{pg1:6,vip:0,clubs:7},{pg1:2,vip:0,clubs:8},{pg1:2,vip:0,clubs:11},{pg1:5,vip:2,clubs:5},{pg1:3,vip:0,clubs:6},{pg1:7,vip:6,clubs:8},{pg1:5,vip:4,clubs:3},{pg1:4,vip:3,clubs:5},{pg1:4,vip:1,clubs:3},{pg1:3,vip:1,clubs:4},{pg1:4,vip:2,clubs:2},{pg1:5,vip:2,clubs:3},{pg1:5,vip:2,clubs:6},{pg1:5,vip:2,clubs:0},{pg1:4,vip:1,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:7,vip:3,clubs:7},{pg1:5,vip:4,clubs:1},{pg1:7,vip:4,clubs:4},{pg1:5,vip:3,clubs:10},{pg1:4,vip:3,clubs:7},{pg1:8,vip:8,clubs:7},{pg1:7,vip:4,clubs:4},{pg1:2,vip:1,clubs:3},{pg1:6,vip:6,clubs:7},{pg1:2,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:0,clubs:9},{pg1:9,vip:0,clubs:20},{pg1:21,vip:2,clubs:45},{pg1:23,vip:15,clubs:23},{pg1:25,vip:9,clubs:18},{pg1:29,vip:18,clubs:34},{pg1:25,vip:19,clubs:23},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:85,vip:26,clubs:115},{pg1:54,vip:37,clubs:57}],
    }],
    ['Kuh-Kuh Doringo','36.03%',0.3603,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:6},{pg1:6,vip:0,clubs:7},{pg1:2,vip:0,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:2,vip:1,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:4,vip:2,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:1,vip:1,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:1,clubs:2},{pg1:3,vip:1,clubs:2},{pg1:4,vip:3,clubs:3},{pg1:3,vip:2,clubs:0},{pg1:4,vip:2,clubs:5},{pg1:5,vip:5,clubs:2},{pg1:3,vip:3,clubs:5},{pg1:4,vip:3,clubs:6},{pg1:4,vip:4,clubs:5},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:9},{pg1:6,vip:0,clubs:8},{pg1:14,vip:0,clubs:19},{pg1:3,vip:2,clubs:6},{pg1:10,vip:6,clubs:10},{pg1:17,vip:9,clubs:12},{pg1:18,vip:16,clubs:21},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:36,vip:8,clubs:52},{pg1:35,vip:25,clubs:33}],
    }],
    ['Elbrando Tibon','25.30%',0.2530,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:2,clubs:5},{pg1:1,vip:2,clubs:0},{pg1:3,vip:2,clubs:2},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:12,clubs:12},{pg1:20,vip:20,clubs:10},{pg1:20,vip:17,clubs:2},{pg1:5,vip:0,clubs:7},{pg1:6,vip:0,clubs:6},{pg1:8,vip:7,clubs:0},{pg1:13,vip:12,clubs:3},{pg1:11,vip:9,clubs:7},{pg1:7,vip:5,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:34,vip:32,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:54,vip:51,clubs:14},{pg1:68,vip:62,clubs:44},{pg1:32,vip:19,clubs:16},{pg1:18,vip:14,clubs:8}],
    }],
    ['Mayzelyn Revuelto','25.32%',0.2532,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:12,vip:12,clubs:10},{pg1:11,vip:9,clubs:6},{pg1:3,vip:3,clubs:6},{pg1:2,vip:0,clubs:5},{pg1:7,vip:0,clubs:6},{pg1:4,vip:2,clubs:6},{pg1:10,vip:10,clubs:4},{pg1:11,vip:11,clubs:0},{pg1:8,vip:7,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:101,vip:70,clubs:13},{pg1:0,vip:0,clubs:0},{pg1:73,vip:65,clubs:24},{pg1:48,vip:41,clubs:33},{pg1:23,vip:12,clubs:22},{pg1:19,vip:18,clubs:0}],
    }],
    ['Adrian Bundalian Gabriel','19.57%',0.1957,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:3},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:4},{pg1:4,vip:4,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:4}],
    }],
    ['Mark Ryan Francis','11.11%',0.1111,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0}],
    }],
    ['Charlyn Baylon','5.19%',0.0519,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1}],
    }],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','17.71%',0.1771],['Melody Tubio Libradilla','13.89%',0.1389],
    ['Thomas John Lommen','12.45%',0.1245],['Lucky Sardia','11.18%',0.1118],
    ['Rheena Jayne Tomakin','10.70%',0.1070],['Jacinto Jr Basada','8.82%',0.0882],
    ['Micha Aborquez','10.34%',0.1034],['Marvin Tingin','9.72%',0.0972],
    ['Majan Perez','6.51%',0.0651],['Reynaldo Calde Jr','6.96%',0.0696],
    ['Houda Ashraf Sayyed','4.97%',0.0497],['Kathlene Tiampo','4.38%',0.0438],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','41.56%',0.4156,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:5,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:3,vip:2,clubs:1},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:4,vip:4,clubs:1},{pg1:3,vip:4,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:10,vip:0,clubs:0},{pg1:14,vip:0,clubs:3},{pg1:15,vip:11,clubs:0},{pg1:22,vip:22,clubs:0},{pg1:11,vip:10,clubs:4},{pg1:14,vip:15,clubs:7},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:62,vip:33,clubs:3},{pg1:25,vip:25,clubs:11}],
    }],
    ['Gerald Mark Lee Rabonza','37.10%',0.3710,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:6,vip:5,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:1,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:0,clubs:5},{pg1:5,vip:0,clubs:6},{pg1:3,vip:2,clubs:1},{pg1:10,vip:10,clubs:0},{pg1:12,vip:12,clubs:2},{pg1:6,vip:6,clubs:4},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:24,vip:12,clubs:13},{pg1:18,vip:18,clubs:6}],
    }],
    ['Rose Shamae Morica','26.73%',0.2673,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:3,clubs:1},{pg1:4,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:4,vip:4,clubs:0},{pg1:18,vip:18,clubs:1},{pg1:7,vip:7,clubs:14},{pg1:2,vip:0,clubs:13},{pg1:8,vip:3,clubs:7},{pg1:7,vip:5,clubs:0},{pg1:9,vip:9,clubs:2},{pg1:16,vip:16,clubs:0},{pg1:10,vip:10,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:38,vip:38,clubs:10},{pg1:26,vip:17,clubs:27},{pg1:26,vip:26,clubs:1}],
    }],
    ['Aldrin Jay Leones','27.59%',0.2759,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:3,vip:3,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:9,vip:9,clubs:5},{pg1:8,vip:8,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:17,vip:17,clubs:6}],
    }],
    ['Monette Soltes','29.31%',0.2931,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:4,vip:0,clubs:2},{pg1:7,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:10,vip:9,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:17,vip:5,clubs:4},{pg1:15,vip:14,clubs:2}],
    }],
    ['Reynan Sularan','25.74%',0.2574,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:0,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:4,vip:5,clubs:1},{pg1:6,vip:7,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:5,vip:0,clubs:3},{pg1:5,vip:0,clubs:5},{pg1:8,vip:11,clubs:2},{pg1:11,vip:11,clubs:0},{pg1:15,vip:15,clubs:3},{pg1:7,vip:7,clubs:4},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:24,vip:25,clubs:7},{pg1:29,vip:22,clubs:10},{pg1:22,vip:22,clubs:7}],
    }],
    ['Dan Dominique Arizala Casem','25.45%',0.2545,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:3},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:10,vip:10,clubs:3}],
    }],
    ['Dexter Cagas Arbas','16.36%',0.1636,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:2}],
    }],
    ['Marc Bryan Paguinto','13.21%',0.1321,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:5},{pg1:2,vip:2,clubs:3},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:8}],
    }],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Julius Vizcayno','8.70%',0.0870],['Vian Perez','5.36%',0.0536],
    ['Phoebe Estel Ymil Collado','5.71%',0.0571],['Rafael John Abayan','3.33%',0.0333],
    ['Dan Emmanuel Nicolas','1.61%',0.0161],['Jhaziel Gonzales','1.39%',0.0139],
    ['Heinrich Abarquez','1.02%',0.0102],['Tommy Tecson','0.00%',0],
    ['Richard Ian Alvarez','0.00%',0],['Jessika Elliott','0.00%',0],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','56.06%',0.5606,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:9,vip:3,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:4,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:7,vip:5,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:6,vip:5,clubs:0},{pg1:3,vip:1,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:7,vip:6,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:6,vip:5,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:3,clubs:2},{pg1:7,vip:5,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:3,vip:4,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:21,vip:20,clubs:5},{pg1:15,vip:12,clubs:4},{pg1:6,vip:4,clubs:16},{pg1:11,vip:0,clubs:8},{pg1:9,vip:0,clubs:8},{pg1:25,vip:19,clubs:3},{pg1:22,vip:16,clubs:0},{pg1:19,vip:15,clubs:3},{pg1:13,vip:14,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:89,vip:70,clubs:7},{pg1:91,vip:78,clubs:12},{pg1:89,vip:62,clubs:29},{pg1:80,vip:70,clubs:31},{pg1:67,vip:35,clubs:22},{pg1:32,vip:29,clubs:5}],
    }],
    ['Jho-May Acosta','38.10%',0.3810,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:1,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:2,vip:3,clubs:2},{pg1:7,vip:7,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:11,vip:8,clubs:5},{pg1:7,vip:7,clubs:1}],
    }],
    ['Martin Lorenzo Savellano','32.69%',0.3269,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:13,clubs:3},{pg1:8,vip:8,clubs:3},{pg1:3,vip:3,clubs:0},{pg1:7,vip:0,clubs:5},{pg1:6,vip:0,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:4,vip:5,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:8,vip:8,clubs:3},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:72,vip:71,clubs:5},{pg1:71,vip:60,clubs:8},{pg1:31,vip:28,clubs:9},{pg1:34,vip:33,clubs:7},{pg1:20,vip:8,clubs:7},{pg1:15,vip:15,clubs:4}],
    }],
    ['Venus Marie Cartalla','34.42%',0.3442,{
      daily:  [{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:3},{pg1:3,vip:0,clubs:3},{pg1:1,vip:0,clubs:3},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:0},{pg1:8,vip:8,clubs:5},{pg1:1,vip:1,clubs:4},{pg1:3,vip:2,clubs:3},{pg1:4,vip:2,clubs:1},{pg1:2,vip:1,clubs:3},{pg1:3,vip:2,clubs:3},{pg1:5,vip:0,clubs:2},{pg1:5,vip:3,clubs:1},{pg1:5,vip:2,clubs:4},{pg1:3,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:7,vip:5,clubs:8},{pg1:3,vip:2,clubs:5},{pg1:5,vip:4,clubs:1},{pg1:8,vip:6,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:4},{pg1:2,vip:1,clubs:4},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:12,vip:5,clubs:17},{pg1:22,vip:12,clubs:14},{pg1:9,vip:7,clubs:13},{pg1:19,vip:0,clubs:12},{pg1:9,vip:0,clubs:11},{pg1:20,vip:13,clubs:13},{pg1:23,vip:9,clubs:15},{pg1:20,vip:15,clubs:19},{pg1:15,vip:10,clubs:10},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:93,vip:90,clubs:23},{pg1:101,vip:83,clubs:33},{pg1:52,vip:30,clubs:65},{pg1:53,vip:30,clubs:71},{pg1:72,vip:22,clubs:55},{pg1:35,vip:25,clubs:29}],
    }],
    ['Jackie Rose Paet','26.90%',0.2690,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:3,vip:3,clubs:8},{pg1:7,vip:5,clubs:1},{pg1:1,vip:1,clubs:4},{pg1:5,vip:4,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:3,vip:4,clubs:3},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:22,vip:20,clubs:15},{pg1:12,vip:12,clubs:6},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:75,vip:66,clubs:29},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:34,vip:32,clubs:21}],
    }],
    ['Romalyn Magallon','28.71%',0.2871,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:7,clubs:6},{pg1:8,vip:8,clubs:5},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:39,vip:37,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:16,vip:15,clubs:11}],
    }],
    ['Aileen Mendez','26.51%',0.2651,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:13,vip:12,clubs:1},{pg1:8,vip:7,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:54,vip:48,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:21,vip:19,clubs:3}],
    }],
    ['Kevin Jabagat','15.38%',0.1538,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:2,vip:1,clubs:4},{pg1:0,vip:0,clubs:0}],
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
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  sets:   [689,  1078, 469, 506, 243],
  show:   [336,  457,  288, 304, 141],
  closed: [130,  122,  99,  93,  54],
  cash:   [null, null, null, null, 304308],
};
const PHONE_SETTERS_WEEKLY = {
  labels: ['4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  sets:   [101, 71, 141, 120, 119, 106, 121, 126, 19],
  show:   [56,  36,  70,  81,  79,  62,  53,  78, 14],
  closed: [26,  14,  17,  19,  23,  28,  21,  33,  5],
  cash:   [null,null,null,null,null,null,130663,null,null],
};
const PHONE_SETTERS_DAILY = {
  labels: ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16'],
  sets:   [33, 33, 14,  4,  2, 21, 37, 22, 19, 23,  1,  3, 19,  1],
  show:   [ 6,  9,  9,  9,  0, 14, 11, 12, 12, 21,  8,  0, 14,  2],
  closed: [ 1,  3,  5,  5,  0,  4,  7,  3,  5,  7,  7,  0,  5,  0],
  cash:   [null,null,null,null,null,null,null,null,24450,null,null,null,null,null],
};

// ── Customer Care (Team Lee LOB) ──────────────────────────────────────────
const CUSTOMER_CARE_MONTHLY = {
  labels:   ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:      [null,null,null,null,null],
  vip:      [null,null,null,null,null],
  clubs:    [null,null,null,null,null],
  csat_num: [null,null,null,null,null],
  csat_den: [null,null,null,null,null],
};
const CUSTOMER_CARE_WEEKLY = {
  labels:   ['4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  pg1:      [null,null,null,null,null,null,null,null,null],
  vip:      [null,null,null,null,null,null,null,null,null],
  clubs:    [null,null,null,null,null,null,null,null,null],
  csat_num: [null,null,null,null,null,null,null,null,null],
  csat_den: [null,null,null,null,null,null,null,null,null],
};
const CUSTOMER_CARE_DAILY = {
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16'],
  pg1:      [null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  vip:      [null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  clubs:    [null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  csat_num: [null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  csat_den: [null,null,null,null,null,null,null,null,null,null,null,null,null,null],
};
