// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const DATA_FILE_TIMESTAMP  = '2026-07-08T20:14:11Z';
const AS_OF_DATE           = 'July 8, 2026';
const DAILY_LABEL          = 'Jul 8';
const WEEKLY_LABEL         = 'WB Jul 6';

const DAYS_WORKED          = 6;
const DAYS_REMAINING       = 17;
const DAYS_TOTAL           = 23;
const DAYS_WORKED_RANGE    = 'Jul 1–3, 6–8';
const DAYS_REMAINING_RANGE = 'Jul 9–10, 13–17, 20–24, 27–31';

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
      daily:   { act:{pg1:44,   vip:39,   clubs:41},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:145,  vip:130,  clubs:162},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:274,  vip:236,  clubs:343},  tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:2625, calls:13827 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:14,  vip:13,  clubs:14},   tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:0,   vip:0,   clubs:0},    tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:529, vip:425, clubs:535},  tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:9,   vip:7,   clubs:5},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:0,   vip:0,   clubs:0},   tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:293, vip:230, clubs:336}, tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Lee': {
    reps: 17, color: '#B3AAA3',
    periods: null,
    hasTrend: false,
    note: 'PTG breakdown not available in current source — showing conversion rates',
  },
  'Team Mark': {
    reps: 9, color: '#7B726C',
    periods: {
      daily:   { act:{pg1:1,   vip:6,   clubs:4},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:11,  vip:10,  clubs:12},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:2,   vip:2,   clubs:3},   tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:0,   vip:1,  clubs:0},    tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:0,   vip:0,  clubs:0},    tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:421, vip:8,  clubs:351},  tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:8,   vip:8,   clubs:9},    tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:8,   vip:7,   clubs:9},    tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:299, vip:260, clubs:195},  tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: true,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun','Jul MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026','Jul 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 1898, 274],
  vip:           [3055, 1859, 2338, 1966,  710, 1223, 236],
  clubs:         [1399, 1539, 2120, 2037, 1187, 1689, 343],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22','6/29','7/6'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 621, 463, 382, 329, 245, 145],
  vip:    [518, 420, 195,   0,   9, 296, 405, 427, 309, 234, 179, 187, 130],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 362, 379, 408, 425, 304, 162],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/22','6/23','6/24','6/25','6/26','6/29','6/30','7/1','7/2','7/3','7/6','7/7','7/8'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,97,51,81,70,19,15,86,67,81,60,70,71,69,71,50,45,62,54,48,57,24,61,67,44],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,68,26,55,32,11,7,58,42,48,36,41,35,41,38,26,27,44,37,43,48,15,58,58,39],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,69,63,81,74,20,15,74,68,77,75,72,85,69,85,75,77,79,44,61,49,71,93,58,41],
};

// Team Anne full trend — aligned with MONTHLY/WEEKLY/DAILY label arrays
// ANNE_MONTHLY: 6 values, null for Jan (no data), Feb–Jun MTD present
const ANNE_MONTHLY = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul MTD'],
  pg1:    [null, 546,  1113, 944, 609, 529, null],
  vip:    [null, 408,   910, 721, 289, 425, null],
  clubs:  [null, 240,   305, 287, 353, 535, null],
};

// ANNE_WEEKLY: 12 values aligned with WEEKLY.labels (4/13–6/29)
const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22','6/29'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 120, 70, 15, 0],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 100, 50, 13, 0],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109, 123, 92, 24, 0],
};

// ANNE_DAILY: 42 values aligned with DAILY.labels (5/9–6/29); sparse — grows as daily task runs
const ANNE_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,null],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,39,null],
};

// Team Remen full trend — sourced from GD Sched aggregate tab
// REMEN_MONTHLY: 6 values aligned with MONTHLY.labels; null for Jan (not in GD)
const REMEN_MONTHLY = {
  pg1:   [null, 896, 343, 288, 228, 299, null],
  vip:   [null, 742, 271, 224, 106, 260, null],
  clubs: [null, 231, 198, 189, 136, 195, null],
};

// REMEN_WEEKLY: 12 values aligned with WEEKLY.labels; null for 4/13–4/27 (before GD tab started)
const REMEN_WEEKLY = {
  pg1:   [null, null, null, 49, 41, 66, 71, 90, 71, 76, 54, 8],
  vip:   [null, null, null,  0,  0, 54, 52, 80, 67, 68, 38, 7],
  clubs: [null, null, null, 35, 33, 27, 30, 48, 45, 55, 38, 9],
};

// REMEN_DAILY: 42 values aligned with DAILY.labels; data starts 6/17 (positions 33–41)
const REMEN_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, 9,14,16,12,15, 7, 9, 6, 8],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, 9,14,14, 8,12, 6, 5, 2, 7],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, 5, 8,12, 8, 9, 3, 3, 9, 9],
};

// Team Jen trend arrays — sparse until daily task starts maintaining them
const JEN_MONTHLY = {
  pg1:   [null,null,null,null,null,293,null],
  vip:   [null,null,null,null,null,230,null],
  clubs: [null,null,null,null,null,336,null],
};
const JEN_WEEKLY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,60,0],
  vip:   [null,null,null,null,null,null,null,null,null,null,50,0],
  clubs: [null,null,null,null,null,null,null,null,null,null,87,0],
};
const JEN_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,8,0],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,4,0],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,0],
};

// Team Mark trend arrays — sparse until daily task starts maintaining them
const MARK_MONTHLY = {
  pg1:   [null,null,null,null,null,218,2],
  vip:   [null,null,null,null,null,216,2],
  clubs: [null,null,null,null,null,120,3],
};
const MARK_WEEKLY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,76,11],
  vip:   [null,null,null,null,null,null,null,null,null,null,68,10],
  clubs: [null,null,null,null,null,null,null,null,null,null,55,12],
};
const MARK_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9,0],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,0],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0],
};

// Lookup maps for renderPG1TrendChart — add new teams here when arrays are ready
const TEAM_TREND_DAILY   = { 'Team Anne':ANNE_DAILY,   'Team Remen':REMEN_DAILY,   'Team Jen':JEN_DAILY,   'Team Mark':MARK_DAILY   };
const TEAM_TREND_WEEKLY  = { 'Team Anne':ANNE_WEEKLY,  'Team Remen':REMEN_WEEKLY,  'Team Jen':JEN_WEEKLY,  'Team Mark':MARK_WEEKLY  };
const TEAM_TREND_MONTHLY = { 'Team Anne':ANNE_MONTHLY, 'Team Remen':REMEN_MONTHLY, 'Team Jen':JEN_MONTHLY, 'Team Mark':MARK_MONTHLY };

// Rep tuple: [name, convPct, convRatio, {daily:[32], weekly:[10], monthly:[6]}]
// Indexes align with DAILY.labels / WEEKLY.labels / MONTHLY.labels respectively
const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Romuel Sabile','28.65%',0.2865,{daily:{pg1:2,vip:1,clubs:3},weekly:{pg1:2,vip:1,clubs:3},monthly:{pg1:36,vip:28,clubs:12}}],
    ['Jemar Namora','31.77%',0.3177,{daily:{pg1:1,vip:1,clubs:2},weekly:{pg1:11,vip:11,clubs:20},monthly:{pg1:23,vip:23,clubs:39}}],
    ['Jesica Jumao-as','28.86%',0.2886,{daily:{pg1:1,vip:1,clubs:1},weekly:{pg1:5,vip:4,clubs:2},monthly:{pg1:27,vip:24,clubs:11}}],
    ['Kenneth Semira','33.82%',0.3382,{daily:{pg1:1,vip:1,clubs:2},weekly:{pg1:15,vip:13,clubs:8},monthly:{pg1:37,vip:35,clubs:19}}],
    ['Laurice Pentinio','27.67%',0.2767,{daily:{pg1:2,vip:2,clubs:1},weekly:{pg1:13,vip:13,clubs:8},monthly:{pg1:29,vip:28,clubs:12}}],
    ['Rubilyn Estrada','33.02%',0.3302,{daily:{pg1:0,vip:0,clubs:2},weekly:{pg1:8,vip:6,clubs:11},monthly:{pg1:20,vip:18,clubs:22}}],
    ['Sitti Besas','27.06%',0.2706,{daily:{pg1:1,vip:0,clubs:2},weekly:{pg1:7,vip:1,clubs:10},monthly:{pg1:24,vip:11,clubs:28}}],
    ['Christian Buceron','27.22%',0.2722,{daily:{pg1:2,vip:2,clubs:4},weekly:{pg1:7,vip:11,clubs:20},monthly:{pg1:21,vip:25,clubs:30}}],
    ['Andrea Isabel Balon','25.74%',0.2574,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:16,vip:16,clubs:6},monthly:{pg1:30,vip:30,clubs:11}}],
    ['Ian Ashley Sarmiento','21.67%',0.2167,{daily:{pg1:1,vip:0,clubs:0},weekly:{pg1:2,vip:1,clubs:0},monthly:{pg1:13,vip:11,clubs:0}}],
    ['Chelei Bago','24.22%',0.2422,{daily:{pg1:0,vip:1,clubs:1},weekly:{pg1:4,vip:5,clubs:1},monthly:{pg1:16,vip:17,clubs:3}}],
    ['Audrey Banares','25.78%',0.2578,{daily:{pg1:2,vip:2,clubs:1},weekly:{pg1:8,vip:7,clubs:6},monthly:{pg1:24,vip:18,clubs:15}}],
    ['Prince Wendell De Luna','19.75%',0.1975,{daily:{pg1:1,vip:0,clubs:0},weekly:{pg1:2,vip:0,clubs:0},monthly:{pg1:23,vip:19,clubs:6}}],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','28.68%',0.2868,{daily:{pg1:1,vip:1,clubs:1},weekly:{pg1:8,vip:9,clubs:2},monthly:{pg1:18,vip:19,clubs:5}}],
    ['Belle Diaz','43.41%',0.4341,{daily:{pg1:2,vip:0,clubs:2},weekly:{pg1:25,vip:19,clubs:23},monthly:{pg1:54,vip:37,clubs:57}}],
    ['Kuh-Kuh Doringo','31.90%',0.319,{daily:{pg1:2,vip:1,clubs:3},weekly:{pg1:18,vip:16,clubs:21},monthly:{pg1:35,vip:25,clubs:33}}],
    ['Elbrando Tibon','21.43%',0.2143,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:7,vip:5,clubs:1},monthly:{pg1:18,vip:14,clubs:8}}],
    ['Mayzelyn Revuelto','24.24%',0.2424,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:8,vip:7,clubs:0},monthly:{pg1:19,vip:18,clubs:0}}],
    ['Adrian Bundalian Gabriel','16.67%',0.1667,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:4,vip:4,clubs:0},monthly:{pg1:8,vip:8,clubs:4}}],
    ['Mark Ryan Francis','18.52%',0.1852,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:2,vip:2,clubs:0},monthly:{pg1:2,vip:2,clubs:0}}],
    ['Charlyn Baylon','6.09%',0.0609,{daily:{pg1:0,vip:0,clubs:1},weekly:{pg1:2,vip:2,clubs:1},monthly:{pg1:2,vip:2,clubs:1}}],
    ['Maria Lourdes Ortiz','9.59%',0.0959,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','19.37%',0.1937,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Melody Tubio Libradilla','15.47%',0.1547,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Thomas John Lommen','13.80%',0.138,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Lucky Sardia','13.67%',0.1367,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Rheena Jayne Tomakin','15.11%',0.1511,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Jacinto Jr Basada','11.20%',0.112,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Micha Aborquez','11.26%',0.1126,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Marvin Tingin','8.94%',0.0894,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Majan Perez','6.40%',0.064,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Reynaldo Calde Jr','7.69%',0.0769,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Houda Ashraf Sayyed','4.35%',0.0435,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Kathlene Tiampo','4.24%',0.0424,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','26.62%',0.2662,{daily:{pg1:2,vip:2,clubs:2},weekly:{pg1:14,vip:15,clubs:7},monthly:{pg1:25,vip:25,clubs:11}}],
    ['Gerald Mark Lee Rabonza','37.10%',0.371,{daily:{pg1:0,vip:0,clubs:2},weekly:{pg1:6,vip:6,clubs:4},monthly:{pg1:18,vip:18,clubs:6}}],
    ['Rose Shamae Morica','23.12%',0.2312,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:10,vip:10,clubs:1},monthly:{pg1:26,vip:26,clubs:1}}],
    ['Aldrin Jay Leones','20.92%',0.2092,{daily:{pg1:2,vip:2,clubs:0},weekly:{pg1:8,vip:8,clubs:1},monthly:{pg1:17,vip:17,clubs:6}}],
    ['Monette Soltes','28.57%',0.2857,{daily:{pg1:2,vip:2,clubs:2},weekly:{pg1:5,vip:5,clubs:2},monthly:{pg1:15,vip:14,clubs:2}}],
    ['Reynan Sularan','23.33%',0.2333,{daily:{pg1:2,vip:2,clubs:0},weekly:{pg1:7,vip:7,clubs:4},monthly:{pg1:22,vip:22,clubs:7}}],
    ['Dan Dominique Arizala Casem','25.35%',0.2535,{daily:{pg1:2,vip:2,clubs:0},weekly:{pg1:2,vip:2,clubs:0},monthly:{pg1:10,vip:10,clubs:3}}],
    ['Dexter Cagas Arbas','20.00%',0.2,{daily:{pg1:0,vip:0,clubs:2},weekly:{pg1:2,vip:2,clubs:2},monthly:{pg1:7,vip:7,clubs:2}}],
    ['Marc Bryan Paguinto','15.19%',0.1519,{daily:{pg1:0,vip:0,clubs:1},weekly:{pg1:2,vip:2,clubs:3},monthly:{pg1:7,vip:7,clubs:8}}],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Julius Vizcayno','6.74%',0.0674,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Vian Perez','5.49%',0.0549,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Phoebe Estel Ymil Collado','3.60%',0.036,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Rafael John Abayan','3.51%',0.0351,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Dan Emmanuel Nicolas','0.93%',0.0093,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Jhaziel Gonzales','1.59%',0.0159,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Heinrich Abarquez','2.45%',0.0245,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Tommy Tecson','0.00%',0,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Richard Ian Alvarez','0.00%',0,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Jessika Elliott','0.00%',0,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','57.58%',0.5758,{daily:{pg1:1,vip:1,clubs:1},weekly:{pg1:11,vip:9,clubs:2},monthly:{pg1:49,vip:46,clubs:11}}],
    ['Jho-May Acosta','37.14%',0.3714,{daily:{pg1:2,vip:2,clubs:1},weekly:{pg1:7,vip:7,clubs:1},monthly:{pg1:7,vip:7,clubs:1}}],
    ['Martin Lorenzo Savellano','34.21%',0.3421,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:8,vip:8,clubs:3},monthly:{pg1:15,vip:15,clubs:4}}],
    ['Venus Marie Cartalla','33.33%',0.3333,{daily:{pg1:2,vip:0,clubs:0},weekly:{pg1:15,vip:10,clubs:10},monthly:{pg1:35,vip:25,clubs:29}}],
    ['Jackie Rose Paet','27.24%',0.2724,{daily:{pg1:1,vip:1,clubs:0},weekly:{pg1:12,vip:12,clubs:6},monthly:{pg1:34,vip:32,clubs:21}}],
    ['Romalyn Magallon','28.14%',0.2814,{daily:{pg1:0,vip:0,clubs:1},weekly:{pg1:8,vip:8,clubs:5},monthly:{pg1:16,vip:15,clubs:11}}],
    ['Aileen Mendez','24.58%',0.2458,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:6,vip:4,clubs:2},monthly:{pg1:27,vip:23,clubs:5}}],
    ['Kevin Jabagat','10.47%',0.1047,{daily:{pg1:1,vip:1,clubs:3},weekly:{pg1:2,vip:1,clubs:4},monthly:{pg1:2,vip:1,clubs:6}}],
  ]},
];;

// ── Phone Setters (Internal Setter LOB / TMA) ─────────────────────────────
const PHONE_SETTERS_TARGETS = {
  daily:   { sets:30,  show:18, closed:6,   cash:50000   },
  weekly:  { sets:150, show:85, closed:30,  cash:250000  },
  monthly: { sets:600, show:340,closed:120, cash:1000000 },
};
const PHONE_SETTERS_MONTHLY = {
  labels:   ['Feb','Mar','Apr','May','Jun MTD'],
  sets:     [689,  1078, 469, 506, 475],
  show:     [336,  457,  288, 304, 263],
  closed:   [130,  122,  99,  93,  106],
  cash_rev: [null, null, null, null, 594505],
  cash_ref: [null, null, null, null, 0],
};
const PHONE_SETTERS_WEEKLY = {
  labels:   ['4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22','6/29'],
  sets:     [101, 71, 141, 120, 119, 106, 121, 124, 116, 100, 0],
  show:     [56,  36,  70,  81,  79,  62,  53,  78,  62,  49, 0],
  closed:   [26,  14,  17,  19,  23,  28,  21,  33,  25,  28, 0],
  cash_rev: [178294,89000,112312,155478,134952,167118,130663,179745,138467,130663,0],
  cash_ref: [0,     -500, -5000, -6000, -4000, -4000, 0,     -6100, -9500, 0, 0],
};
const PHONE_SETTERS_DAILY = {
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/22','6/23','6/24','6/25','6/26','6/29'],
  sets:     [33, 33, 14,  4,  2, 21, 35, 22, 20, 24,  1,  2, 24, 29, 13, 24, 23, 39, 39, 29, 19, 18, 0],
  show:     [ 6,  9,  9,  9,  0, 14, 11, 12, 12, 21,  8,  0, 16,  7, 12, 11, 11, 16, 22, 12, 11,  8, 0],
  closed:   [ 1,  3,  5,  5,  0,  4,  7,  3,  5,  7,  7,  0,  5,  1,  4,  6,  6,  3,  9,  6,  6,  2, 0],
  cash_rev: [3000,12833,36830,24000,0,29600,32200,17300,24450,37095,39100,0,30250,6500,7500,36200,45667,25050,54330,29900,0,8750,0],
  cash_ref: [0,   0,   0,   0,   0,-4100,-2000,0,    0,    0,    0,   0,0,    -2000,0,  0, -7500, 0, 0, -2000, 0, 0, 0],
};
const PHONE_SETTERS_REP_TARGETS = {
  daily:   { sets:  3, show:  2, cash:   5000 },
  weekly:  { sets: 15, show: 10, cash:  25000 },
  monthly: { sets: 60, show: 40, cash: 100000 },
};
// [name, {daily:{sets,show,cash_rev,cash_ref}, weekly:{...}, monthly:{...}}]
// Cash = cash_rev + cash_ref; monthly MTD only (not tracked per-rep at daily/weekly level)
const PHONE_SETTERS_REPS = [
  ['Jhaziel Gonzales',          {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:9, show:8, cash_rev:22500,cash_ref:0}, monthly:{sets:45,show:30,cash_rev:78978, cash_ref:0}}],
  ['Tommy Tecson',              {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:12,show:7, cash_rev:21583,cash_ref:0}, monthly:{sets:58,show:35,cash_rev:75333, cash_ref:0}}],
  ['Phoebe Estel Ymil Collado', {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:8, show:2, cash_rev:6500, cash_ref:0}, monthly:{sets:46,show:19,cash_rev:66100, cash_ref:0}}],
  ['Vian Perez',                {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:17,show:11,cash_rev:26750,cash_ref:0}, monthly:{sets:71,show:45,cash_rev:58500, cash_ref:0}}],
  ['Rafael John Abayan',        {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:10,show:3, cash_rev:7500, cash_ref:0}, monthly:{sets:63,show:34,cash_rev:77017, cash_ref:0}}],
  ['Richard Ian Alvarez',       {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:10,show:4, cash_rev:13000,cash_ref:0}, monthly:{sets:52,show:30,cash_rev:84567, cash_ref:0}}],
  ['Heinrich Abarquez',         {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:10,show:4, cash_rev:13000,cash_ref:0}, monthly:{sets:48,show:30,cash_rev:84567, cash_ref:0}}],
  ['Dan Emmanuel Nicolas',      {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:10,show:2, cash_rev:2000, cash_ref:0}, monthly:{sets:39,show:19,cash_rev:49200, cash_ref:0}}],
  ['Julius Vizcayno',           {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:10,show:5, cash_rev:6330, cash_ref:0}, monthly:{sets:46,show:24,cash_rev:46860, cash_ref:0}}],
  ['Philip Josh Caperig',       {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0, show:0, cash_rev:0,   cash_ref:0}, monthly:{sets:0, show:0, cash_rev:0,     cash_ref:0}}],
];

// ── Customer Care (Team Lee LOB) ──────────────────────────────────────────
const CUSTOMER_CARE_MONTHLY = {
  labels:   ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:      [4,   52,  77,  185, 282],
  vip:      [105, 151, 119, 17,   14],
  clubs:    [27,  60,  90,  126, 204],
  csat_num: [473, 446, 998, 1166, 982],
  csat_den: [600, 519, 1189,1339,1079],
};
const CUSTOMER_CARE_WEEKLY = {
  labels:   ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22'],
  pg1:      [7,  42, 22, 42, 49, 33, 58, 96, 67, 69, 48],
  vip:      [37,  0,  4,  0,  0,  6,  6,  3,  0,  2,  7],
  clubs:    [16, 10,  9, 14, 26, 22, 23, 53, 47, 62, 45],
  csat_num: [183,128,118,214,209,240,150,321,299,217,145],
  csat_den: [199,143,136,233,236,258,168,356,328,237,158],
};
const CUSTOMER_CARE_DAILY = {
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/22','6/23','6/24','6/25','6/26'],
  pg1:      [22,13,12, 8, 2,12,15,11,11,11, 4, 3,12,10,23,11,13,19,10,14, 5, 0],
  vip:      [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 3, 2, 0, 2, 0],
  clubs:    [ 6,10, 5, 7, 2, 3, 6, 9,13,12, 3, 1, 7,10,20,10,10,11, 9,17, 5, 3],
  csat_num: [52,45,45,12,14,54,57,55,50,56,17,10,50,46,38,42,31,39,36,38,32, 0],
  csat_den: [59,51,51,12,14,59,63,60,56,61,18,11,57,49,42,46,33,47,39,39,33, 0],
};
// [name, {daily:{pg1,vip,clubs,csat_num,csat_den}, weekly:{...}, monthly:{...}}]
const CUSTOMER_CARE_REPS = [
  ['Kikumi Keeshia Matsuo',   {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:7, vip:0,clubs:5, csat_num:28, csat_den:28}, monthly:{pg1:51, vip:2,clubs:24,csat_num:106,csat_den:108}}],
  ['Melody Tubio Libradilla', {daily:{pg1:0, vip:0,clubs:3, csat_num:0, csat_den:0},  weekly:{pg1:5, vip:1,clubs:6, csat_num:14, csat_den:16}, monthly:{pg1:37, vip:1,clubs:19,csat_num:115,csat_den:121}}],
  ['Thomas John Lommen',      {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:8, vip:0,clubs:0, csat_num:18, csat_den:18}, monthly:{pg1:43, vip:1,clubs:23,csat_num:118,csat_den:130}}],
  ['Lucky Sardia',            {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:5, vip:1,clubs:6, csat_num:22, csat_den:23}, monthly:{pg1:31, vip:1,clubs:23,csat_num:90, csat_den:94}}],
  ['Rheena Jayne Tomakin',    {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:6, vip:1,clubs:7, csat_num:18, csat_den:19}, monthly:{pg1:32, vip:1,clubs:29,csat_num:100,csat_den:107}}],
  ['Jacinto Jr Basada',       {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:6, vip:0,clubs:3, csat_num:9,  csat_den:10}, monthly:{pg1:23, vip:0,clubs:18,csat_num:69, csat_den:73}}],
  ['Micha Aborquez',          {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:5, vip:0,clubs:7, csat_num:10, csat_den:11}, monthly:{pg1:23, vip:0,clubs:17,csat_num:67, csat_den:76}}],
  ['Marvin Tingin',           {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:13, vip:1,clubs:10,csat_num:64, csat_den:71}}],
  ['Majan Perez',             {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:1,  vip:0,clubs:16,csat_num:54, csat_den:59}}],
  ['Reynaldo Calde Jr',       {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:11, vip:0,clubs:3, csat_num:47, csat_den:49}}],
  ['Houda Ashraf Sayyed',     {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:5,  vip:1,clubs:5, csat_num:80, csat_den:103}}],
  ['Kathlene Tiampo',         {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:1, vip:0,clubs:3, csat_num:14, csat_den:16}, monthly:{pg1:5,  vip:0,clubs:9, csat_num:60, csat_den:71}}],
  ['Amie B. Montederamos',   {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:0,  vip:0,clubs:0, csat_num:0,  csat_den:0}}],
  ['Emmanuel Sandoval',       {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:0,  vip:0,clubs:0, csat_num:0,  csat_den:0}}],
  ['Emmanuella Frago',        {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:0,  vip:0,clubs:0, csat_num:0,  csat_den:0}}],
  ['Khalid Siddig',           {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:0,  vip:0,clubs:0, csat_num:0,  csat_den:0}}],
  ['Pauline Dimaculangan',    {daily:{pg1:0, vip:0,clubs:0, csat_num:0, csat_den:0},  weekly:{pg1:0, vip:0,clubs:0, csat_num:0,  csat_den:0},  monthly:{pg1:0,  vip:0,clubs:0, csat_num:0,  csat_den:0}}],
];

// ── Contactable ───────────────────────────────────────────────────────────
const CONTACTABLE_MONTHLY = {
  labels:      ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  new_cx:      [17793,10473,16862,11368,22513,17107],
  contactable: [10817, 5941,10347, 7105,11891, 7454],
};
const CONTACTABLE_WEEKLY = {
  labels:      ['4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22'],
  new_cx:      [3071,4917,5096,5298,5299,4981,5822,6304,0],
  contactable: [1746,2728,2648,2848,2505,2061,2529,2864,0],
};
const CONTACTABLE_DAILY = {
  labels:      ['6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/20','6/21','6/22','6/23','6/24','6/25'],
  new_cx:      [834,846,745,708,689,577,582,951,888,884,905,878,669,647,955,961,976,966,971,695,780,0,0,0,0],
  contactable: [315,307,270,255,287,293,334,361,323,387,389,378,335,356,425,428,371,396,406,380,458,0,0,0,0],
};

// ── Revenue (Enterprise) ──────────────────────────────────────────────────
const REVENUE_MONTHLY = {
  labels:    ['Feb','Mar','Apr','May','Jun','Jul MTD'],
  gross:     [1226580,1272624,1213880,1001907, 902359, 0],
  net:       [ 992601,1050027,1031954, 794187, 785072, 0],
  pg1:       [ 308580, 193941, 219384, 182565, 106165, 0],
  vip:       [ 431741, 414546, 381024, 365693, 340119, 0],
  physical:  [ 237193, 390838, 392196, 221919, 320071, 0],
  digital:   [   8705,  36802,  29103,   9296,  11404, 0],
  scratch:   [   9368,  13349,  12156,   7783,   5963, 0],
  champions: [  -2987,    548,  -1911,   6929,   1351, 0],
};
const REVENUE_WEEKLY = {
  labels:    ['5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22','6/29'],
  gross:     [219532,266953,227820,205444,177882,226555,216680,226842, 54398],
  net:       [157662,215553,180022,170751,148706,198538,188086,202079, 47662],
  pg1:       [ 29329, 45738, 44239, 34444,  5313, 23214, 26406, 40016, 10913],
  vip:       [ 83114,100077, 75545, 73588, 68302, 93827, 82176, 87103,  8711],
  physical:  [ 41784, 65764, 56979, 51352, 71615, 77232, 74695, 70385, 24887],
  digital:   [  1564,  3026,  2871,  1246,  2158,  2363,  2492,  3015,  1373],
  scratch:   [  2390,  1467,  1146,  1530,  1538,  1204,  1578,  1416,   223],
  champions: [  -520,  -520,  -759,  8589,  -222,   695,   737,   141,     0],
};
const REVENUE_DAILY = {
  labels:    ['6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/20','6/21','6/22','6/23','6/24','6/25','6/26','6/27','6/28','6/29','6/30'],
  gross:     [26506,27075,34323,26235,27985,19114,16645,38354,31033,32967,34205,44179,24188,21629,36897,30024,36404,32633,31546,22881,26294,37923,30678,33044,36312,33358,22929,32598,24737,27808],
  net:       [19762,19965,28886,21266,24924,17657,16247,30544,24271,28403,31443,39850,23561,20466,30815,23412,30039,29683,27075,22555,24506,32013,26549,29860,29218,30535,22038,31864,20899,25210],
  pg1:       [ -776,-1758, 1379,  836, 1699, 2145, 1788, 4323,  532, -345, 3956, 6219, 4558, 3972, 4960,  143, 2134, 1856, 2848, 7146, 7320, 8238, 2575, 1783, 9462, 6832, 5751, 5376, 5671, 5242],
  vip:       [ 8859, 6849,11256, 9098,10770,10779,10691,13176,11513,10779,10077,18959,14524,14799,12730,11078,11569,12483,10482,10550,13284,10831, 9296, 9860, 9533,10899,11948,24736, 1732, 6979],
  physical:  [10655,14738,15729,10917,11950, 4281, 3346,13045,11869,16962,16635,14358, 3275, 1089,12246,11487,16011,14621,12798, 4635, 2898,12265,14018,17177,10071,12236, 3630,  986,13247,11640],
  digital:   [  562,  478, 1083,  386,  609,  452,  452,  840,  462,  860, 1015,  710,  595,  593, 1241,  530,  133,  483,  803,   62,    0,  438,  517,  857,  -31,  511,  518,  206,  122, 1251],
  scratch:   [  537,  532,  422,  348,  277,  268,  268,  378,  281,  354,  362,  335,  275,  242,  277,  174,  192,  240,  144,  162,  407,  241,  143,  181,  183,   57,  190,  420,  126,   97],
  champions: [    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,  598,    0,    0,    3,    0,    0,    0,  139,    0,    0],
};
