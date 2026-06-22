// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const AS_OF_DATE           = 'June 19, 2026';
const DAILY_LABEL          = 'Jun 19';
const WEEKLY_LABEL         = 'WB Jun 15';

const DAYS_WORKED          = 15;
const DAYS_REMAINING       = 7;
const DAYS_TOTAL           = 22;
const DAYS_WORKED_RANGE    = 'Jun 1–5, 8–12, 15–19';
const DAYS_REMAINING_RANGE = 'Jun 22–26, 29–30';

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
      daily:   { act:{pg1:22,   vip:12,   clubs:32},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:317,  vip:196,  clubs:327},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:1402, vip:933,  clubs:1076}, tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:2031, calls:10352 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:24,  vip:19,  clubs:20},   tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:70,  vip:50,  clubs:92},   tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:401, vip:339, clubs:324},  tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:9,   vip:9,   clubs:5},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:64,  vip:57,  clubs:38},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:225, vip:204, clubs:131}, tgt:{pg1:506, vip:506, clubs:337} },
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
      daily:   { act:{pg1:13,  vip:14,  clubs:13},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:48,  vip:43,  clubs:77},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:215, vip:179, clubs:228}, tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:19,  vip:1,  clubs:16},   tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:146, vip:4,  clubs:104},  tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:365, vip:5,  clubs:302},  tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:3,   vip:3,   clubs:2},   tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:90,  vip:88,  clubs:22},  tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:184, vip:184, clubs:71},  tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: false,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 1402],
  vip:           [3055, 1859, 2338, 1966,  710,  933],
  clubs:         [1399, 1539, 2120, 2037, 1187, 1076],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 622, 463, 317],
  vip:    [518, 420, 195,   0,   9, 296, 405, 428, 309, 196],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 367, 382, 327],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,97,51,81,70,19,15,86,67,81,61,22],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,68,26,55,32,11,7,58,42,48,36,12],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,69,63,81,74,20,16,73,68,77,77,32],
};

// Team Anne full trend (monthly Feb–present, weekly 4/13–present)
const ANNE_MONTHLY = {
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:    [546,  1113, 944, 609, 401],
  vip:    [408,   910, 721, 289, 339],
  clubs:  [240,   305, 287, 353, 324],
};

const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 120, 70],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 100, 50],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109, 123, 92],
};

// Rep tuple: [name, convPct, convRatio, {daily:[32], weekly:[10], monthly:[6]}]
// Indexes align with DAILY.labels / WEEKLY.labels / MONTHLY.labels respectively
const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Romuel Sabile','31.51%',0.3151,{
      daily:  [{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:3,vip:0,clubs:4},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:4,vip:3,clubs:3},{pg1:4,vip:3,clubs:2},{pg1:6,vip:4,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:2,vip:1,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:4,vip:2,clubs:0},{pg1:5,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:5,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:28,vip:27,clubs:10},{pg1:31,vip:24,clubs:16},{pg1:14,vip:11,clubs:12},{pg1:11,vip:0,clubs:7},{pg1:13,vip:0,clubs:7},{pg1:19,vip:13,clubs:10},{pg1:21,vip:17,clubs:3},{pg1:22,vip:18,clubs:5},{pg1:10,vip:7,clubs:3},{pg1:2,vip:1,clubs:3}],
      monthly:[{pg1:103,vip:74,clubs:21},{pg1:71,vip:54,clubs:25},{pg1:124,vip:102,clubs:36},{pg1:124,vip:111,clubs:45},{pg1:66,vip:30,clubs:34},{pg1:36,vip:28,clubs:12}],
    }],
    ['Jemar Namora','33.47%',0.3347,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:3,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:3,clubs:4},{pg1:2,vip:2,clubs:3},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:4,vip:4,clubs:9},{pg1:2,vip:2,clubs:3},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:3},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:18,vip:12,clubs:24},{pg1:31,vip:16,clubs:19},{pg1:21,vip:8,clubs:16},{pg1:6,vip:0,clubs:7},{pg1:8,vip:0,clubs:4},{pg1:5,vip:5,clubs:4},{pg1:10,vip:7,clubs:9},{pg1:12,vip:12,clubs:19},{pg1:11,vip:11,clubs:20},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:96,vip:88,clubs:68},{pg1:62,vip:40,clubs:56},{pg1:105,vip:82,clubs:70},{pg1:89,vip:54,clubs:75},{pg1:29,vip:12,clubs:29},{pg1:23,vip:23,clubs:39}],
    }],
    ['Jesica Jumao-as','31.82%',0.3182,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:4},{pg1:2,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:0},{pg1:2,vip:1,clubs:4},{pg1:4,vip:4,clubs:1},{pg1:5,vip:4,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:18,vip:15,clubs:0},{pg1:14,vip:11,clubs:0},{pg1:5,vip:3,clubs:1},{pg1:4,vip:0,clubs:2},{pg1:4,vip:0,clubs:0},{pg1:6,vip:5,clubs:5},{pg1:10,vip:10,clubs:0},{pg1:22,vip:20,clubs:9},{pg1:5,vip:4,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:30,vip:26,clubs:3},{pg1:54,vip:44,clubs:1},{pg1:25,vip:15,clubs:7},{pg1:27,vip:24,clubs:11}],
    }],
    ['Kenneth Semira','32.58%',0.3258,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:5},{pg1:5,vip:5,clubs:1},{pg1:5,vip:5,clubs:0},{pg1:5,vip:5,clubs:3},{pg1:2,vip:2,clubs:2},{pg1:8,vip:7,clubs:1},{pg1:2,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:3},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:22,vip:22,clubs:11},{pg1:15,vip:13,clubs:8},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:37,vip:35,clubs:19}],
    }],
    ['Laurice Pentinio','29.76%',0.2976,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:1},{pg1:3,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:4,vip:0,clubs:0},{pg1:8,vip:4,clubs:1},{pg1:3,vip:2,clubs:1},{pg1:4,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:3,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:2,vip:1,clubs:1},{pg1:3,vip:3,clubs:2},{pg1:4,vip:4,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:6,vip:6,clubs:3},{pg1:4,vip:4,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:27,vip:24,clubs:2},{pg1:15,vip:8,clubs:3},{pg1:16,vip:10,clubs:8},{pg1:9,vip:0,clubs:9},{pg1:15,vip:0,clubs:3},{pg1:18,vip:11,clubs:3},{pg1:8,vip:8,clubs:4},{pg1:16,vip:15,clubs:4},{pg1:13,vip:13,clubs:8},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:113,vip:69,clubs:30},{pg1:65,vip:54,clubs:39},{pg1:117,vip:100,clubs:29},{pg1:101,vip:75,clubs:15},{pg1:50,vip:19,clubs:21},{pg1:29,vip:28,clubs:12}],
    }],
    ['Rubilyn Estrada','34.13%',0.3413,{
      daily:  [{pg1:0,vip:0,clubs:5},{pg1:1,vip:0,clubs:5},{pg1:4,vip:0,clubs:2},{pg1:2,vip:0,clubs:2},{pg1:2,vip:0,clubs:3},{pg1:2,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:6,vip:5,clubs:3},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:4},{pg1:2,vip:1,clubs:0},{pg1:4,vip:4,clubs:4},{pg1:7,vip:7,clubs:1},{pg1:2,vip:2,clubs:5},{pg1:5,vip:5,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:5},{pg1:5,vip:3,clubs:5},{pg1:3,vip:3,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:24,vip:14,clubs:17},{pg1:29,vip:11,clubs:6},{pg1:17,vip:7,clubs:11},{pg1:7,vip:0,clubs:19},{pg1:11,vip:0,clubs:9},{pg1:15,vip:13,clubs:12},{pg1:26,vip:26,clubs:14},{pg1:12,vip:12,clubs:11},{pg1:8,vip:6,clubs:11},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:125,vip:81,clubs:38},{pg1:59,vip:35,clubs:22},{pg1:111,vip:84,clubs:35},{pg1:107,vip:61,clubs:43},{pg1:63,vip:39,clubs:61},{pg1:20,vip:18,clubs:22}],
    }],
    ['Sitti Besas','28.04%',0.2804,{
      daily:  [{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:4,vip:0,clubs:1},{pg1:2,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:4,vip:2,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:2,vip:1,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:5,vip:3,clubs:3},{pg1:6,vip:5,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:0,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:2,vip:0,clubs:4},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:10,clubs:4},{pg1:15,vip:10,clubs:5},{pg1:11,vip:6,clubs:1},{pg1:9,vip:0,clubs:6},{pg1:11,vip:0,clubs:4},{pg1:11,vip:8,clubs:6},{pg1:12,vip:8,clubs:10},{pg1:17,vip:10,clubs:18},{pg1:7,vip:1,clubs:10},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:104,vip:54,clubs:56},{pg1:69,vip:42,clubs:42},{pg1:119,vip:71,clubs:47},{pg1:48,vip:35,clubs:15},{pg1:46,vip:16,clubs:26},{pg1:24,vip:11,clubs:28}],
    }],
    ['Christian Buceron','27.92%',0.2792,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:3,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:3,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:5,vip:5,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:5},{pg1:2,vip:2,clubs:3},{pg1:2,vip:6,clubs:11},{pg1:1,vip:1,clubs:2},{pg1:2,vip:2,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:3,vip:0,clubs:7},{pg1:5,vip:1,clubs:5},{pg1:12,vip:11,clubs:6},{pg1:17,vip:17,clubs:4},{pg1:14,vip:14,clubs:10},{pg1:7,vip:11,clubs:20},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:37,vip:29,clubs:24},{pg1:21,vip:25,clubs:30}],
    }],
    ['Andrea Isabel Balon','25.82%',0.2582,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:3,vip:0,clubs:1},{pg1:4,vip:0,clubs:0},{pg1:4,vip:0,clubs:2},{pg1:1,vip:0,clubs:1},{pg1:7,vip:3,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:8,vip:7,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:3,vip:3,clubs:2},{pg1:4,vip:4,clubs:1},{pg1:3,vip:3,clubs:3},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:2,vip:3,clubs:3},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:6,vip:6,clubs:1},{pg1:4,vip:4,clubs:3},{pg1:3,vip:3,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:19,vip:17,clubs:2},{pg1:24,vip:17,clubs:4},{pg1:13,vip:11,clubs:5},{pg1:7,vip:0,clubs:8},{pg1:14,vip:0,clubs:6},{pg1:20,vip:15,clubs:2},{pg1:21,vip:21,clubs:8},{pg1:14,vip:14,clubs:5},{pg1:16,vip:16,clubs:6},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:90,vip:68,clubs:16},{pg1:52,vip:40,clubs:19},{pg1:110,vip:100,clubs:23},{pg1:86,vip:74,clubs:13},{pg1:62,vip:36,clubs:24},{pg1:30,vip:30,clubs:11}],
    }],
    ['Ian Ashley Sarmiento','21.67%',0.2167,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:9,vip:9,clubs:0},{pg1:5,vip:6,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:3,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:11,vip:10,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:10,vip:10,clubs:0},{pg1:23,vip:24,clubs:0},{pg1:14,vip:8,clubs:1},{pg1:13,vip:11,clubs:0}],
    }],
    ['Chelei Bago','24.07%',0.2407,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:4,vip:0,clubs:3},{pg1:3,vip:0,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:5,vip:5,clubs:0},{pg1:4,vip:3,clubs:1},{pg1:6,vip:4,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:21,vip:23,clubs:11},{pg1:30,vip:30,clubs:2},{pg1:15,vip:12,clubs:4},{pg1:10,vip:0,clubs:4},{pg1:12,vip:0,clubs:6},{pg1:14,vip:12,clubs:2},{pg1:26,vip:23,clubs:4},{pg1:12,vip:12,clubs:2},{pg1:4,vip:5,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:100,vip:94,clubs:12},{pg1:52,vip:49,clubs:0},{pg1:114,vip:111,clubs:7},{pg1:105,vip:104,clubs:19},{pg1:63,vip:35,clubs:16},{pg1:16,vip:17,clubs:3}],
    }],
    ['Audrey Banares','25.95%',0.2595,{
      daily:  [{pg1:2,vip:0,clubs:3},{pg1:0,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:3,vip:0,clubs:0},{pg1:4,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:2,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:5,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:6,vip:4,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:2,clubs:0},{pg1:5,vip:3,clubs:0},{pg1:6,vip:3,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:1,vip:0,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:6,vip:5,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:20,vip:17,clubs:4},{pg1:25,vip:19,clubs:4},{pg1:9,vip:5,clubs:2},{pg1:9,vip:0,clubs:9},{pg1:12,vip:0,clubs:4},{pg1:13,vip:8,clubs:1},{pg1:27,vip:18,clubs:2},{pg1:16,vip:11,clubs:9},{pg1:8,vip:7,clubs:6},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:100,vip:82,clubs:7},{pg1:46,vip:39,clubs:7},{pg1:112,vip:94,clubs:8},{pg1:92,vip:70,clubs:13},{pg1:61,vip:26,clubs:16},{pg1:24,vip:18,clubs:15}],
    }],
    ['Prince Wendell De Luna','22.07%',0.2207,{
      daily:  [{pg1:3,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:3,vip:0,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:5,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:2,vip:1,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:7,vip:7,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:2,vip:1,clubs:1},{pg1:5,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:25,vip:13,clubs:10},{pg1:24,vip:14,clubs:11},{pg1:12,vip:5,clubs:9},{pg1:11,vip:0,clubs:8},{pg1:12,vip:0,clubs:4},{pg1:7,vip:5,clubs:1},{pg1:20,vip:18,clubs:1},{pg1:21,vip:19,clubs:6},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:102,vip:88,clubs:7},{pg1:55,vip:41,clubs:30},{pg1:121,vip:90,clubs:43},{pg1:108,vip:62,clubs:48},{pg1:52,vip:23,clubs:20},{pg1:23,vip:19,clubs:6}],
    }],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','31.73%',0.3173,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:5,vip:0,clubs:7},{pg1:0,vip:0,clubs:0},{pg1:4,vip:1,clubs:3},{pg1:5,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:3,vip:2,clubs:1},{pg1:3,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:2,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:4,clubs:1},{pg1:4,vip:4,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:14,vip:1,clubs:11},{pg1:8,vip:6,clubs:0},{pg1:14,vip:10,clubs:4},{pg1:10,vip:10,clubs:3},{pg1:8,vip:9,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:36,vip:17,clubs:15},{pg1:18,vip:19,clubs:5}],
    }],
    ['Belle Diaz','40.56%',0.4056,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:3},{pg1:6,vip:0,clubs:7},{pg1:2,vip:0,clubs:8},{pg1:2,vip:0,clubs:11},{pg1:5,vip:2,clubs:5},{pg1:3,vip:0,clubs:6},{pg1:7,vip:6,clubs:8},{pg1:5,vip:4,clubs:3},{pg1:4,vip:3,clubs:5},{pg1:4,vip:1,clubs:3},{pg1:3,vip:1,clubs:4},{pg1:4,vip:2,clubs:2},{pg1:5,vip:2,clubs:3},{pg1:5,vip:2,clubs:6},{pg1:5,vip:2,clubs:0},{pg1:4,vip:1,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:7,vip:3,clubs:7},{pg1:5,vip:4,clubs:1},{pg1:7,vip:4,clubs:4},{pg1:5,vip:3,clubs:10},{pg1:4,vip:3,clubs:7},{pg1:8,vip:8,clubs:7},{pg1:7,vip:4,clubs:4},{pg1:2,vip:1,clubs:3},{pg1:6,vip:6,clubs:7},{pg1:2,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:0,clubs:9},{pg1:9,vip:0,clubs:20},{pg1:21,vip:2,clubs:45},{pg1:23,vip:15,clubs:23},{pg1:25,vip:9,clubs:18},{pg1:29,vip:18,clubs:34},{pg1:25,vip:19,clubs:23},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:85,vip:26,clubs:115},{pg1:54,vip:37,clubs:57}],
    }],
    ['Kuh-Kuh Doringo','32.84%',0.3284,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:6},{pg1:6,vip:0,clubs:7},{pg1:2,vip:0,clubs:4},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:2},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:2,vip:1,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:4,vip:2,clubs:1},{pg1:3,vip:2,clubs:2},{pg1:1,vip:1,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:1,clubs:2},{pg1:3,vip:1,clubs:2},{pg1:4,vip:3,clubs:3},{pg1:3,vip:2,clubs:0},{pg1:4,vip:2,clubs:5},{pg1:5,vip:5,clubs:2},{pg1:3,vip:3,clubs:5},{pg1:4,vip:3,clubs:6},{pg1:4,vip:4,clubs:5},{pg1:2,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:9},{pg1:6,vip:0,clubs:8},{pg1:14,vip:0,clubs:19},{pg1:3,vip:2,clubs:6},{pg1:10,vip:6,clubs:10},{pg1:17,vip:9,clubs:12},{pg1:18,vip:16,clubs:21},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:36,vip:8,clubs:52},{pg1:35,vip:25,clubs:33}],
    }],
    ['Elbrando Tibon','21.95%',0.2195,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:2,clubs:5},{pg1:1,vip:2,clubs:0},{pg1:3,vip:2,clubs:2},{pg1:3,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:12,clubs:12},{pg1:20,vip:20,clubs:10},{pg1:20,vip:17,clubs:2},{pg1:5,vip:0,clubs:7},{pg1:6,vip:0,clubs:6},{pg1:8,vip:7,clubs:0},{pg1:13,vip:12,clubs:3},{pg1:11,vip:9,clubs:7},{pg1:7,vip:5,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:34,vip:32,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:54,vip:51,clubs:14},{pg1:68,vip:62,clubs:44},{pg1:32,vip:19,clubs:16},{pg1:18,vip:14,clubs:8}],
    }],
    ['Mayzelyn Revuelto','23.21%',0.2321,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:0},{pg1:2,vip:0,clubs:2},{pg1:2,vip:0,clubs:1},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:12,vip:12,clubs:10},{pg1:11,vip:9,clubs:6},{pg1:3,vip:3,clubs:6},{pg1:2,vip:0,clubs:5},{pg1:7,vip:0,clubs:6},{pg1:4,vip:2,clubs:6},{pg1:10,vip:10,clubs:4},{pg1:11,vip:11,clubs:0},{pg1:8,vip:7,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:101,vip:70,clubs:13},{pg1:0,vip:0,clubs:0},{pg1:73,vip:65,clubs:24},{pg1:48,vip:41,clubs:33},{pg1:23,vip:12,clubs:22},{pg1:19,vip:18,clubs:0}],
    }],
    ['Adrian Bundalian Gabriel','16.42%',0.1642,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:3},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:4},{pg1:4,vip:4,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:4}],
    }],
    ['Mark Ryan Francis','11.11%',0.1111,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0}],
    }],
    ['Charlyn Baylon','5.83%',0.0583,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1}],
    }],
    ['Maria Lourdes Ortiz','9.52%',0.0952],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','18.82%',0.1882],['Melody Tubio Libradilla','13.89%',0.1389],
    ['Thomas John Lommen','13.55%',0.1355],['Lucky Sardia','13.50%',0.135],
    ['Rheena Jayne Tomakin','15.95%',0.1595],['Jacinto Jr Basada','10.38%',0.1038],
    ['Micha Aborquez','10.50%',0.105],['Marvin Tingin','8.94%',0.0894],
    ['Majan Perez','6.40%',0.064],['Reynaldo Calde Jr','7.69%',0.0769],
    ['Houda Ashraf Sayyed','4.35%',0.0435],['Kathlene Tiampo','4.02%',0.0402],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','30.84%',0.3084,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:5,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:3,vip:0,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:3,vip:2,clubs:1},{pg1:4,vip:4,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:4,vip:4,clubs:1},{pg1:3,vip:4,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:10,vip:0,clubs:0},{pg1:14,vip:0,clubs:3},{pg1:15,vip:11,clubs:0},{pg1:22,vip:22,clubs:0},{pg1:11,vip:10,clubs:4},{pg1:14,vip:15,clubs:7},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:62,vip:33,clubs:3},{pg1:25,vip:25,clubs:11}],
    }],
    ['Gerald Mark Lee Rabonza','37.10%',0.371,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:1,vip:0,clubs:2},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:6,vip:5,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:1,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:4,vip:0,clubs:5},{pg1:5,vip:0,clubs:6},{pg1:3,vip:2,clubs:1},{pg1:10,vip:10,clubs:0},{pg1:12,vip:12,clubs:2},{pg1:6,vip:6,clubs:4},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:24,vip:12,clubs:13},{pg1:18,vip:18,clubs:6}],
    }],
    ['Rose Shamae Morica','23.23%',0.2323,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:5},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:3,clubs:1},{pg1:4,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:4,vip:4,clubs:0},{pg1:18,vip:18,clubs:1},{pg1:7,vip:7,clubs:14},{pg1:2,vip:0,clubs:13},{pg1:8,vip:3,clubs:7},{pg1:7,vip:5,clubs:0},{pg1:9,vip:9,clubs:2},{pg1:16,vip:16,clubs:0},{pg1:10,vip:10,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:38,vip:38,clubs:10},{pg1:26,vip:17,clubs:27},{pg1:26,vip:26,clubs:1}],
    }],
    ['Aldrin Jay Leones','23.62%',0.2362,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:3,vip:3,clubs:1},{pg1:4,vip:4,clubs:1},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:9,vip:9,clubs:5},{pg1:8,vip:8,clubs:1},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:17,vip:17,clubs:6}],
    }],
    ['Monette Soltes','28.57%',0.2857,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:3,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:4,vip:0,clubs:2},{pg1:7,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:10,vip:9,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:17,vip:5,clubs:4},{pg1:15,vip:14,clubs:2}],
    }],
    ['Reynan Sularan','24.50%',0.245,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:0,clubs:1},{pg1:0,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:1,vip:2,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:4,vip:5,clubs:1},{pg1:6,vip:7,clubs:2},{pg1:3,vip:2,clubs:3},{pg1:5,vip:0,clubs:3},{pg1:5,vip:0,clubs:5},{pg1:8,vip:11,clubs:2},{pg1:11,vip:11,clubs:0},{pg1:15,vip:15,clubs:3},{pg1:7,vip:7,clubs:4},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:24,vip:25,clubs:7},{pg1:29,vip:22,clubs:10},{pg1:22,vip:22,clubs:7}],
    }],
    ['Dan Dominique Arizala Casem','25.35%',0.2535,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:8,clubs:3},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:10,vip:10,clubs:3}],
    }],
    ['Dexter Cagas Arbas','16.90%',0.169,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:2}],
    }],
    ['Marc Bryan Paguinto','13.04%',0.1304,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:5},{pg1:2,vip:2,clubs:3},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:7,vip:7,clubs:8}],
    }],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Julius Vizcayno','7.89%',0.0789],['Vian Perez','3.90%',0.039],
    ['Phoebe Estel Ymil Collado','4.82%',0.0482],['Rafael John Abayan','3.06%',0.0306],
    ['Dan Emmanuel Nicolas','1.04%',0.0104],['Jhaziel Gonzales','0.93%',0.0093],
    ['Heinrich Abarquez','2.72%',0.0272],['Tommy Tecson','0.00%',0],
    ['Richard Ian Alvarez','0.00%',0],['Jessika Elliott','0.00%',0],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','57.32%',0.5732,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:3,vip:0,clubs:3},{pg1:1,vip:0,clubs:1},{pg1:0,vip:0,clubs:2},{pg1:2,vip:0,clubs:0},{pg1:3,vip:0,clubs:2},{pg1:9,vip:3,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:2,vip:4,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:7,vip:5,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:6,vip:5,clubs:0},{pg1:3,vip:1,clubs:0},{pg1:4,vip:3,clubs:0},{pg1:7,vip:6,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:6,vip:5,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:4,vip:3,clubs:2},{pg1:7,vip:5,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:6,vip:6,clubs:0},{pg1:3,vip:4,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:21,vip:20,clubs:5},{pg1:15,vip:12,clubs:4},{pg1:6,vip:4,clubs:16},{pg1:11,vip:0,clubs:8},{pg1:9,vip:0,clubs:8},{pg1:25,vip:19,clubs:3},{pg1:22,vip:16,clubs:0},{pg1:19,vip:15,clubs:3},{pg1:13,vip:14,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:89,vip:70,clubs:7},{pg1:91,vip:78,clubs:12},{pg1:89,vip:62,clubs:29},{pg1:80,vip:70,clubs:31},{pg1:67,vip:35,clubs:22},{pg1:32,vip:29,clubs:5}],
    }],
    ['Jho-May Acosta','32.26%',0.3226,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:1,vip:2,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:5,vip:5,clubs:2},{pg1:2,vip:3,clubs:2},{pg1:7,vip:7,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:11,vip:8,clubs:5},{pg1:7,vip:7,clubs:1}],
    }],
    ['Martin Lorenzo Savellano','34.21%',0.3421,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:1},{pg1:1,vip:0,clubs:0},{pg1:3,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:3,vip:3,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:14,vip:13,clubs:3},{pg1:8,vip:8,clubs:3},{pg1:3,vip:3,clubs:0},{pg1:7,vip:0,clubs:5},{pg1:6,vip:0,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:4,vip:5,clubs:0},{pg1:7,vip:7,clubs:1},{pg1:8,vip:8,clubs:3},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:72,vip:71,clubs:5},{pg1:71,vip:60,clubs:8},{pg1:31,vip:28,clubs:9},{pg1:34,vip:33,clubs:7},{pg1:20,vip:8,clubs:7},{pg1:15,vip:15,clubs:4}],
    }],
    ['Venus Marie Cartalla','34.03%',0.3403,{
      daily:  [{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:3},{pg1:3,vip:0,clubs:3},{pg1:1,vip:0,clubs:3},{pg1:1,vip:0,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:4,vip:0,clubs:0},{pg1:8,vip:8,clubs:5},{pg1:1,vip:1,clubs:4},{pg1:3,vip:2,clubs:3},{pg1:4,vip:2,clubs:1},{pg1:2,vip:1,clubs:3},{pg1:3,vip:2,clubs:3},{pg1:5,vip:0,clubs:2},{pg1:5,vip:3,clubs:1},{pg1:5,vip:2,clubs:4},{pg1:3,vip:1,clubs:2},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:7,vip:5,clubs:8},{pg1:3,vip:2,clubs:5},{pg1:5,vip:4,clubs:1},{pg1:8,vip:6,clubs:2},{pg1:3,vip:3,clubs:0},{pg1:0,vip:0,clubs:4},{pg1:2,vip:1,clubs:4},{pg1:2,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:12,vip:5,clubs:17},{pg1:22,vip:12,clubs:14},{pg1:9,vip:7,clubs:13},{pg1:19,vip:0,clubs:12},{pg1:9,vip:0,clubs:11},{pg1:20,vip:13,clubs:13},{pg1:23,vip:9,clubs:15},{pg1:20,vip:15,clubs:19},{pg1:15,vip:10,clubs:10},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:93,vip:90,clubs:23},{pg1:101,vip:83,clubs:33},{pg1:52,vip:30,clubs:65},{pg1:53,vip:30,clubs:71},{pg1:72,vip:22,clubs:55},{pg1:35,vip:25,clubs:29}],
    }],
    ['Jackie Rose Paet','28.33%',0.2833,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:4,vip:4,clubs:0},{pg1:4,vip:4,clubs:1},{pg1:3,vip:3,clubs:8},{pg1:7,vip:5,clubs:1},{pg1:1,vip:1,clubs:4},{pg1:5,vip:4,clubs:1},{pg1:2,vip:2,clubs:1},{pg1:1,vip:1,clubs:1},{pg1:3,vip:4,clubs:3},{pg1:1,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:22,vip:20,clubs:15},{pg1:12,vip:12,clubs:6},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:75,vip:66,clubs:29},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:34,vip:32,clubs:21}],
    }],
    ['Romalyn Magallon','27.66%',0.2766,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:3},{pg1:3,vip:3,clubs:1},{pg1:3,vip:3,clubs:1},{pg1:2,vip:2,clubs:0},{pg1:1,vip:1,clubs:1},{pg1:2,vip:2,clubs:2},{pg1:0,vip:0,clubs:1},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:8,vip:7,clubs:6},{pg1:8,vip:8,clubs:5},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:39,vip:37,clubs:6},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:16,vip:15,clubs:11}],
    }],
    ['Aileen Mendez','24.58%',0.2458,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:2,vip:2,clubs:1},{pg1:3,vip:3,clubs:0},{pg1:1,vip:0,clubs:0},{pg1:2,vip:2,clubs:0},{pg1:5,vip:5,clubs:0},{pg1:3,vip:3,clubs:0},{pg1:1,vip:1,clubs:2},{pg1:1,vip:1,clubs:0},{pg1:1,vip:1,clubs:0},{pg1:2,vip:1,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
      weekly: [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:13,vip:12,clubs:1},{pg1:8,vip:7,clubs:2},{pg1:0,vip:0,clubs:0}],
      monthly:[{pg1:0,vip:0,clubs:0},{pg1:54,vip:48,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:21,vip:19,clubs:3}],
    }],
    ['Kevin Jabagat','12.33%',0.1233,{
      daily:  [{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:2},{pg1:1,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:1},{pg1:1,vip:1,clubs:3},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0},{pg1:0,vip:0,clubs:0}],
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
  labels:   ['Feb','Mar','Apr','May','Jun MTD'],
  sets:     [689,  1078, 469, 506, 334],
  show:     [336,  457,  288, 304, 178],
  closed:   [130,  122,  99,  93,  70],
  cash_rev: [null, null, null, null, 346558],
  cash_ref: [null, null, null, null, 0],
};
const PHONE_SETTERS_WEEKLY = {
  labels:   ['4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15'],
  sets:     [101, 71, 141, 120, 119, 106, 121, 124, 89],
  show:     [56,  36,  70,  81,  79,  62,  53,  78, 47],
  closed:   [26,  14,  17,  19,  23,  28,  21,  33, 16],
  cash_rev: [0,   0,   0,   0,   0,   0,   130663,0,   130663],
  cash_ref: [0,   0,   0,   0,   0,   0,   0,     0,   0],
};
const PHONE_SETTERS_DAILY = {
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19'],
  sets:     [33, 33, 14,  4,  2, 21, 35, 22, 20, 24,  1,  2, 24, 29, 13, 23,  0],
  show:     [ 6,  9,  9,  9,  0, 14, 11, 12, 12, 21,  8,  0, 16,  7, 12, 10,  1],
  closed:   [ 1,  3,  5,  5,  0,  4,  7,  3,  5,  7,  7,  0,  5,  1,  4,  6,  0],
  cash_rev: [0,   0,   0,   0,   0,   0,   0,   0,   24450,0,   0,   0,   0,   0,   0,   0,   0],
  cash_ref: [0,   0,   0,   0,   0,   0,   0,   0,   0,    0,   0,   0,   0,   0,   0,   0,   0],
};
const PHONE_SETTERS_REP_TARGETS = {
  daily:   { sets:  3, show:  2, cash:   5000 },
  weekly:  { sets: 15, show: 10, cash:  25000 },
  monthly: { sets: 60, show: 40, cash: 100000 },
};
// [name, {daily:{sets,show,cash_rev,cash_ref}, weekly:{...}, monthly:{...}}]
// Cash = cash_rev + cash_ref; monthly MTD only (not tracked per-rep at daily/weekly level)
const PHONE_SETTERS_REPS = [
  ['Jhaziel Gonzales',          {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:5, show:4,cash_rev:0,cash_ref:0}, monthly:{sets:27,show:20,cash_rev:54978,cash_ref:0}}],
  ['Tommy Tecson',              {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:8, show:5,cash_rev:0,cash_ref:0}, monthly:{sets:38,show:22,cash_rev:48200,cash_ref:0}}],
  ['Phoebe Estel Ymil Collado', {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:1, show:3,cash_rev:0,cash_ref:0}, monthly:{sets:34,show:17,cash_rev:42500,cash_ref:0}}],
  ['Vian Perez',                {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:6, show:1,cash_rev:0,cash_ref:0}, monthly:{sets:27,show:12,cash_rev:42100,cash_ref:0}}],
  ['Rafael John Abayan',        {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:10,show:3,cash_rev:0,cash_ref:0}, monthly:{sets:29,show:17,cash_rev:38833,cash_ref:0}}],
  ['Richard Ian Alvarez',       {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:6, show:1,cash_rev:0,cash_ref:0}, monthly:{sets:25,show:12,cash_rev:36667,cash_ref:0}}],
  ['Heinrich Abarquez',         {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:5, show:3,cash_rev:0,cash_ref:0}, monthly:{sets:41,show:25,cash_rev:30750,cash_ref:0}}],
  ['Dan Emmanuel Nicolas',      {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:3, show:2,cash_rev:0,cash_ref:0}, monthly:{sets:20,show:9, cash_rev:27700,cash_ref:0}}],
  ['Julius Vizcayno',           {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0, show:1,cash_rev:0,cash_ref:0}, monthly:{sets:25,show:13,cash_rev:17330,cash_ref:0}}],
  ['Philip Josh Caperig',       {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0, show:0,cash_rev:0,cash_ref:0}, monthly:{sets:2, show:1, cash_rev:0,    cash_ref:0}}],
];

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
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18'],
  pg1:      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  vip:      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  clubs:    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  csat_num: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  csat_den: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
};
