// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const DATA_FILE_TIMESTAMP  = '2026-09-10T15:42:37Z';
const AS_OF_DATE           = 'August 28, 2026';
const DAILY_LABEL          = 'Aug 28';
const WEEKLY_LABEL         = 'WB Aug 24';

const DAYS_WORKED          = 20;
const DAYS_REMAINING       = 1;
const DAYS_TOTAL           = 21;
const DAYS_WORKED_RANGE    = 'Aug 3–7, 10–14, 17–21, 24–28';
const DAYS_REMAINING_RANGE = 'Aug 31';

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
      daily:   { act:{pg1:29,   vip:0,    clubs:63},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:149,  vip:0,    clubs:326},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:738,  vip:0,    clubs:1591},  tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:1070, calls:6179 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:11,   vip:0,   clubs:20},    tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:53,  vip:0,   clubs:94},   tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:263, vip:0, clubs:479},  tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:9,   vip:0,   clubs:17},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:39,  vip:0,   clubs:86},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:212, vip:0,  clubs:509}, tgt:{pg1:506, vip:506, clubs:337} },
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
      daily:   { act:{pg1:2,   vip:0,   clubs:3},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:6,   vip:0,   clubs:21},   tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:16,  vip:0,  clubs:94},  tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:0,   vip:0,  clubs:0},    tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:0,   vip:0,  clubs:0},    tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:0,   vip:0, clubs:0},    tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:4,   vip:0,   clubs:11},    tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:33,  vip:0,   clubs:59},   tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:136, vip:0,  clubs:215},  tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: true,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026','Jul 2026','Aug 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 1898, 993, 738],
  vip:           [3055, 1859, 2338, 1966, 710, 1223, 338, 0],
  clubs:         [1399, 1539, 2120, 2037, 1187, 1689, 1515, 1591],
};

const WEEKLY = {
  labels: ['4/13', '4/20', '4/27', '5/4', '5/11', '5/18', '5/25', '6/1', '6/8', '6/15', '6/22', '6/29', '7/6', '7/13', '7/20', '7/27', '8/3', '8/10', '8/17', '8/24'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 621, 463, 382, 329, 245, 262, 179, 185, 212, 172, 156, 145, 149],
  vip:    [518, 420, 195, 0, 9, 296, 405, 427, 309, 234, 179, 187, 211, 6, 1, 4, 0, 0, 0, 0],
  clubs:    [502, 406, 377, 280, 345, 241, 239, 362, 379, 408, 425, 304, 311, 268, 330, 391, 352, 298, 388, 326],
};

const DAILY = {
  labels: ['5/9', '5/10', '5/11', '5/12', '5/13', '5/14', '5/15', '5/18', '5/19', '5/20', '5/21', '5/22', '5/25', '5/26', '5/27', '5/28', '5/29', '5/30', '5/31', '6/1', '6/2', '6/3', '6/4', '6/5', '6/8', '6/9', '6/10', '6/11', '6/12', '6/13', '6/14', '6/15', '6/16', '6/17', '6/18', '6/19', '6/22', '6/23', '6/24', '6/25', '6/26', '6/29', '6/30', '7/1', '7/2', '7/3', '7/6', '7/7', '7/8', '7/9', '7/10', '7/13', '7/14', '7/15', '7/16', '7/17', '7/20', '7/21', '7/22', '7/23', '7/24', '7/27', '7/28', '7/29', '7/30', '7/31', '8/3', '8/4', '8/5', '8/6', '8/7', '8/10', '8/11', '8/12', '8/13', '8/14', '8/17', '8/18', '8/19', '8/20', '8/21', '8/24', '8/25', '8/26', '8/27', '8/28'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,97,51,81,70,19,15,86,67,81,60,70,71,69,71,50,45,62,54,48,57,24,61,67,52,41,41,29,34,23,31,22,19,29,40,40,42,51,46,36,43,36,35,39,34,38,26,41,26,21,38,30,27,42,20,27,29,24,35,28,33,29],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,68,26,55,32,11,7,58,42,48,36,41,35,41,38,26,27,44,37,43,48,15,58,58,45,30,20,6,0,0,0,0,0,0,0,0,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,69,63,81,74,20,15,74,68,77,75,72,85,69,85,75,77,79,44,61,49,71,93,57,57,56,48,54,44,51,52,36,53,42,58,62,56,92,82,79,78,60,73,77,84,78,40,56,69,56,68,49,81,94,76,64,73,80,58,52,73,63],
};

// Team Anne full trend — aligned with MONTHLY/WEEKLY/DAILY label arrays
// ANNE_MONTHLY: 6 values, null for Jan (no data), Feb–Jun MTD present
const ANNE_MONTHLY = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug MTD'],
  pg1:    [null, 546, 1113, 944, 609, 529, 185, 263],
  vip:    [null, 408, 910, 721, 289, 425, 112, 0],
  clubs:  [null, 240, 305, 287, 353, 535, 255, 479],
};

// ANNE_WEEKLY: 14 values aligned with WEEKLY.labels (4/13–7/13)
const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22','6/29','7/6','7/13'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 120, 70, 15, 0, 81, 51],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 100, 50, 13, 0, 68,  4],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109, 123, 92, 24, 0, 107, 77],
};

// ANNE_DAILY: 54 values aligned with DAILY.labels (5/9–7/17); sparse — grows as daily task runs; array is known short of DAILY.labels (see memory)
const ANNE_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null,18,12,21,24,20,16,9,3,12,7,10,7],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,null,14,12,16,20,18,15,8,3,4,0,0,0],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,39,null,23,18,24,29,25,17,13,5,23,15,22,8],
};

// Team Remen full trend — sourced from GD Sched aggregate tab
// REMEN_MONTHLY: 6 values aligned with MONTHLY.labels; null for Jan (not in GD)
const REMEN_MONTHLY = {
  pg1:   [null, 896, 343, 288, 228, 299, 134, 136],
  vip:   [null, 742, 271, 224, 106, 260, 74, 0],
  clubs: [null, 231, 198, 189, 136, 195, 190, 215],
};

// REMEN_WEEKLY: 16 values aligned with WEEKLY.labels; null for 4/13–4/27 (before GD tab started)
const REMEN_WEEKLY = {
  pg1:   [null, null, null, 49, 41, 66, 71, 90, 71, 76, 54, 8, 50, 21, 18, 15],
  vip:   [null, null, null,  0,  0, 54, 52, 80, 67, 68, 38, 7, 46,  1,  0,  0],
  clubs: [null, null, null, 35, 33, 27, 30, 48, 45, 55, 38, 9, 58, 25, 39, 13],
};

// REMEN_DAILY: 60 values aligned with DAILY.labels; data starts 6/17 (positions 33–41); array is known short of DAILY.labels (see memory)
const REMEN_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, 9,14,16,12,15, 7, 9, 6, 8,12,11, 5, 8,10,11, 8,12, 5, 4, 5, 3, 3, 3, 4, 5,11, 4],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, 9,14,14, 8,12, 6, 5, 2, 7,10,13, 9,10,10,12, 7, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, 5, 8,12, 8, 9, 3, 3, 9, 9, 3,13, 7,13, 5,11,23, 3, 6, 3, 5, 0, 8,14, 9, 8,13, 0],
};

// Team Jen trend arrays — sparse until daily task starts maintaining them
const JEN_MONTHLY = {
  pg1:   [null, null, null, null, null, 293, 234, 212],
  vip:   [null, null, null, null, null, 230, 82, 0],
  clubs: [null, null, null, null, null, 336, 331, 509],
};
const JEN_WEEKLY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,60,0,63,41,51,28],
  vip:   [null,null,null,null,null,null,null,null,null,null,50,0,50, 0, 0, 0],
  clubs: [null,null,null,null,null,null,null,null,null,null,87,0,72,73,66,43],
};
const JEN_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,8,0,11,12,12,16,19,11,8,6,4,8,8,7,6,12,11,15,19,9],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,4,0,8,10,16,14,17,9,7,3,0,0,0,0,0,0,0,0,0,0],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,0,4,16,12,25,17,5,8,8,10,19,13,17,11,13,11,14,26,17],
};

// Team Mark trend arrays — sparse until daily task starts maintaining them
const MARK_MONTHLY = {
  pg1:   [null, null, null, null, null, 218, 29, 16],
  vip:   [null, null, null, null, null, 216, 35, 0],
  clubs: [null, null, null, null, null, 120, 90, 94],
};
const MARK_WEEKLY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,76,11,17, 0, 4, 0],
  vip:   [null,null,null,null,null,null,null,null,null,null,68,10,28, 0, 0, 0],
  clubs: [null,null,null,null,null,null,null,null,null,null,55,12,21,14,27, 7],
};
const MARK_DAILY = {
  pg1:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9,0,4,2,3,3,2,4,5,2,0,0,0,0,1,0,2,1,0,0],
  vip:   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,0,4,2,5,5,7,6,6,1,0,0,0,0,0,0,0,0,0,0],
  clubs: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0,4,3,1,2,2,8,4,2,3,6,3,6,5,4,8,4,3,4],
};

// Lookup maps for renderPG1TrendChart — add new teams here when arrays are ready
const TEAM_TREND_DAILY   = { 'Team Anne':ANNE_DAILY,   'Team Remen':REMEN_DAILY,   'Team Jen':JEN_DAILY,   'Team Mark':MARK_DAILY   };
const TEAM_TREND_WEEKLY  = { 'Team Anne':ANNE_WEEKLY,  'Team Remen':REMEN_WEEKLY,  'Team Jen':JEN_WEEKLY,  'Team Mark':MARK_WEEKLY  };
const TEAM_TREND_MONTHLY = { 'Team Anne':ANNE_MONTHLY, 'Team Remen':REMEN_MONTHLY, 'Team Jen':JEN_MONTHLY, 'Team Mark':MARK_MONTHLY };

// Rep tuple: [name, convPct, convRatio, {daily:[32], weekly:[10], monthly:[6]}]
// Indexes align with DAILY.labels / WEEKLY.labels / MONTHLY.labels respectively
const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Romuel Sabile','28.65%',0.2865,{daily:{pg1:2,vip:0,clubs:2},weekly:{pg1:9,vip:0,clubs:8},monthly:{pg1:46,vip:0,clubs:37}}],
    ['Jemar Namora','31.77%',0.3177,{daily:{pg1:0,vip:0,clubs:3},weekly:{pg1:4,vip:0,clubs:29},monthly:{pg1:27,vip:0,clubs:80}}],
    ['Jesica Jumao-as','28.86%',0.2886,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Kenneth Semira','33.82%',0.3382,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:6,vip:0,clubs:38}}],
    ['Laurice Pentinio','27.67%',0.2767,{daily:{pg1:1,vip:0,clubs:3},weekly:{pg1:7,vip:0,clubs:11},monthly:{pg1:21,vip:0,clubs:84}}],
    ['Rubilyn Estrada','33.02%',0.3302,{daily:{pg1:4,vip:0,clubs:3},weekly:{pg1:8,vip:0,clubs:8},monthly:{pg1:43,vip:0,clubs:56}}],
    ['Sitti Besas','27.06%',0.2706,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Christian Buceron','27.22%',0.2722,{daily:{pg1:1,vip:0,clubs:3},weekly:{pg1:8,vip:0,clubs:15},monthly:{pg1:38,vip:0,clubs:91}}],
    ['Andrea Isabel Balon','25.74%',0.2574,{daily:{pg1:3,vip:0,clubs:3},weekly:{pg1:4,vip:0,clubs:18},monthly:{pg1:36,vip:0,clubs:44}}],
    ['Ian Ashley Sarmiento','21.67%',0.2167,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Chelei Bago','24.22%',0.2422,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:9,vip:0,clubs:0},monthly:{pg1:33,vip:0,clubs:23}}],
    ['Audrey Banares','25.78%',0.2578,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:2,vip:0,clubs:3}}],
    ['Prince Wendell De Luna','19.75%',0.1975,{daily:{pg1:0,vip:0,clubs:3},weekly:{pg1:4,vip:0,clubs:5},monthly:{pg1:11,vip:0,clubs:23}}],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','28.68%',0.2868,{daily:{pg1:5,vip:0,clubs:2},weekly:{pg1:18,vip:0,clubs:11},monthly:{pg1:57,vip:0,clubs:52}}],
    ['Belle Diaz','43.41%',0.4341,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:2,vip:0,clubs:19},monthly:{pg1:62,vip:0,clubs:200}}],
    ['Kuh-Kuh Doringo','31.90%',0.319,{daily:{pg1:2,vip:0,clubs:4},weekly:{pg1:7,vip:0,clubs:24},monthly:{pg1:36,vip:0,clubs:104}}],
    ['Elbrando Tibon','21.43%',0.2143,{daily:{pg1:1,vip:0,clubs:8},weekly:{pg1:1,vip:0,clubs:16},monthly:{pg1:15,vip:0,clubs:87}}],
    ['Mayzelyn Revuelto','24.24%',0.2424,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Adrian Bundalian Gabriel','16.67%',0.1667,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Mark Ryan Francis','18.52%',0.1852,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:2,vip:0,clubs:4},monthly:{pg1:10,vip:0,clubs:26}}],
    ['Charlyn Baylon','6.09%',0.0609,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:1,vip:0,clubs:0}}],
    ['Maria Lourdes Ortiz','9.59%',0.0959,{daily:{pg1:1,vip:0,clubs:3},weekly:{pg1:9,vip:0,clubs:12},monthly:{pg1:31,vip:0,clubs:40}}],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','19.37%',0.1937,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:2}}],
    ['Melody Tubio Libradilla','15.47%',0.1547,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:3}}],
    ['Thomas John Lommen','13.80%',0.138,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Lucky Sardia','13.67%',0.1367,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Rheena Jayne Tomakin','15.11%',0.1511,{daily:{pg1:0,vip:0,clubs:1},weekly:{pg1:0,vip:0,clubs:1},monthly:{pg1:0,vip:0,clubs:2}}],
    ['Jacinto Jr Basada','11.20%',0.112,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Micha Aborquez','11.26%',0.1126,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Marvin Tingin','8.94%',0.0894,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Majan Perez','6.40%',0.064,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Reynaldo Calde Jr','7.69%',0.0769,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Houda Ashraf Sayyed','4.35%',0.0435,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Kathlene Tiampo','4.24%',0.0424,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','26.62%',0.2662,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Gerald Mark Lee Rabonza','37.10%',0.371,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Rose Shamae Morica','23.12%',0.2312,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Aldrin Jay Leones','20.92%',0.2092,{daily:{pg1:2,vip:0,clubs:3},weekly:{pg1:6,vip:0,clubs:21},monthly:{pg1:16,vip:0,clubs:94}}],
    ['Monette Soltes','28.57%',0.2857,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Reynan Sularan','23.33%',0.2333,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Dan Dominique Arizala Casem','25.35%',0.2535,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Dexter Cagas Arbas','20.00%',0.2,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Marc Bryan Paguinto','15.19%',0.1519,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
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
    ['Daniel Aliyu','57.58%',0.5758,{daily:{pg1:0,vip:0,clubs:2},weekly:{pg1:6,vip:0,clubs:12},monthly:{pg1:26,vip:0,clubs:45}}],
    ['Jho-May Acosta','37.14%',0.3714,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Martin Lorenzo Savellano','34.21%',0.3421,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Venus Marie Cartalla','33.33%',0.3333,{daily:{pg1:2,vip:0,clubs:7},weekly:{pg1:10,vip:0,clubs:38},monthly:{pg1:48,vip:0,clubs:126}}],
    ['Jackie Rose Paet','27.24%',0.2724,{daily:{pg1:2,vip:0,clubs:2},weekly:{pg1:17,vip:0,clubs:9},monthly:{pg1:62,vip:0,clubs:44}}],
    ['Romalyn Magallon','28.14%',0.2814,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Aileen Mendez','24.58%',0.2458,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
    ['Kevin Jabagat','10.47%',0.1047,{daily:{pg1:0,vip:0,clubs:0},weekly:{pg1:0,vip:0,clubs:0},monthly:{pg1:0,vip:0,clubs:0}}],
  ]},
];;

// ── Phone Setters (Internal Setter LOB / TMA) ─────────────────────────────
const PHONE_SETTERS_TARGETS = {
  daily:   { sets:30,  show:18, closed:6,   cash:50000   },
  weekly:  { sets:150, show:85, closed:30,  cash:250000  },
  monthly: { sets:600, show:340,closed:120, cash:1000000 },
};
const PHONE_SETTERS_MONTHLY = {
  labels:   ['Feb','Mar','Apr','May','Jun','Jul','Aug MTD'],
  sets:     [689, 1078, 469, 506, 475, 758, 639],
  show:     [336, 457, 288, 304, 263, 416, 402],
  closed:   [130, 122, 99, 93, 106, 129, 126],
  cash_rev: [null, null, null, null, 594505, 901383, 941272],
  cash_ref: [null, null, null, null, 0, 0, 0],
};
const PHONE_SETTERS_WEEKLY = {
  labels:   ['4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22','6/29','7/6','7/13','7/20','7/27','8/3','8/10','8/17','8/24'],
  sets:     [101, 71, 141, 120, 119, 106, 121, 124, 116, 100, 119, 163, 172, 137, 201, 174, 161, 123, 136],
  show:     [56, 36, 70, 81, 79, 62, 53, 78, 62, 49, 66, 57, 95, 77, 102, 78, 99, 61, 95],
  closed:   [26, 14, 17, 19, 23, 28, 21, 33, 25, 28, 21, 30, 27, 25, 26, 20, 33, 23, 32],
  cash_rev: [178294, 89000, 112312, 155478, 134952, 167118, 130663, 179745, 138467, 130663, 186422, 175642, 210225, 167142, 164548, 159358, 230014, 168952, 232249],
  cash_ref: [0, -500, -5000, -6000, -4000, -4000, 0, -6100, -9500, 0, -7555, -8500, 0, 0, 0, 0, 0, 0, 0],
};
const PHONE_SETTERS_DAILY = {
  labels:   ['6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/22','6/23','6/24','6/25','6/26','6/29','6/30','7/1','7/2','7/3','7/6','7/7','7/8','7/9','7/10','7/11','7/12','7/13','7/14','7/15','7/16','7/17','7/18','7/19','7/20','7/21','7/22','7/23','7/24','7/25','7/26','7/27','7/28','7/29','7/30','7/31','8/1','8/2','8/3','8/4','8/5','8/6','8/7','8/8','8/9','8/10','8/11','8/12','8/13','8/14','8/15','8/16','8/17','8/18','8/19','8/20','8/21','8/22','8/23','8/24','8/25','8/26','8/27','8/28'],
  sets:     [33,33,14,4,2,21,35,22,20,24,1,2,24,29,13,24,23,39,39,29,19,18,24,33,19,24,15,19,37,29,39,28,17,2,20,35,40,28,26,23,2,19,27,20,31,25,15,0,17,57,39,23,46,6,2,45,30,37,39,33,2,1,40,39,32,29,21,6,3,18,25,25,25,30,5,0,31,35,30,16,29],
  show:     [6,9,9,9,0,14,11,12,12,21,8,0,16,7,12,11,11,16,22,12,11,8,15,9,9,23,8,9,15,15,18,0,10,2,9,21,27,13,13,11,0,8,15,14,17,15,8,0,5,23,23,29,16,14,2,11,21,13,17,15,6,2,11,22,23,26,17,11,1,16,10,10,12,13,9,0,19,17,20,22,17],
  closed:   [1,3,5,5,0,4,7,3,5,7,7,0,5,1,4,6,6,3,9,6,6,2,4,5,4,4,4,9,8,7,6,0,3,0,2,4,10,8,1,2,0,8,3,3,6,2,3,0,2,8,6,5,4,1,0,4,9,7,2,2,1,0,6,4,9,7,7,2,0,8,4,5,2,4,0,0,7,7,5,7,7],
  cash_rev: [3000,12833,36830,24000,0,29600,32200,17300,24450,37095,39100,0,30250,6500,7500,36200,45667,25050,54330,29900,0,8750,30349,36030,29305,56388,28600,52665,49358,42706,30913,0,24036,0,19051,40413,75379,48166,7550,17500,2167,37668,21000,23750,42578,20872,18025,3250,25500,39548,41000,32000,26500,18878,6500,39125,52135,37000,3349,27750,5250,3250,45599,24003,58162,52250,50000,9916,0,68500,24254,27249,16249,32700,2000,2250,60749,45250,26050,49500,52700],
  cash_ref: [0,0,0,0,0,-4100,-2000,0,0,0,0,0,0,-2000,0,0,-7500,0,0,-2000,0,0,0,-1000,-1055,-5500,0,-6500,-2000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
const PHONE_SETTERS_REP_TARGETS = {
  daily:   { sets:  3, show:  2, cash:   5000 },
  weekly:  { sets: 15, show: 10, cash:  25000 },
  monthly: { sets: 60, show: 40, cash: 100000 },
};
// [name, {daily:{sets,show,cash_rev,cash_ref}, weekly:{...}, monthly:{...}}]
// Cash = cash_rev + cash_ref; monthly MTD only (not tracked per-rep at daily/weekly level)
const PHONE_SETTERS_REPS = [
  ['Jhaziel Gonzales',          {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:7,show:5,cash_rev:0,cash_ref:0}, monthly:{sets:45,show:27,cash_rev:1055,cash_ref:-1055}}],
  ['Tommy Tecson',          {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:0,show:0,cash_rev:15000,cash_ref:-2000}}],
  ['Phoebe Estel Ymil Collado',          {daily:{sets:1,show:1,cash_rev:0,cash_ref:0}, weekly:{sets:12,show:11,cash_rev:0,cash_ref:0}, monthly:{sets:78,show:57,cash_rev:37509,cash_ref:0}}],
  ['Vian Perez',          {daily:{sets:3,show:3,cash_rev:0,cash_ref:0}, weekly:{sets:10,show:9,cash_rev:0,cash_ref:0}, monthly:{sets:43,show:23,cash_rev:49000,cash_ref:-3500}}],
  ['Rafael John Abayan',          {daily:{sets:3,show:3,cash_rev:0,cash_ref:0}, weekly:{sets:11,show:10,cash_rev:0,cash_ref:0}, monthly:{sets:52,show:36,cash_rev:27413,cash_ref:0}}],
  ['Richard Ian Alvarez',          {daily:{sets:3,show:2,cash_rev:0,cash_ref:0}, weekly:{sets:13,show:8,cash_rev:0,cash_ref:0}, monthly:{sets:51,show:32,cash_rev:40500,cash_ref:-2000}}],
  ['Heinrich Abarquez',          {daily:{sets:4,show:2,cash_rev:0,cash_ref:0}, weekly:{sets:13,show:6,cash_rev:0,cash_ref:0}, monthly:{sets:82,show:44,cash_rev:38958,cash_ref:-6500}}],
  ['Dan Emmanuel Nicolas',          {daily:{sets:3,show:1,cash_rev:0,cash_ref:0}, weekly:{sets:12,show:7,cash_rev:0,cash_ref:0}, monthly:{sets:51,show:26,cash_rev:14000,cash_ref:0}}],
  ['Julius Vizcayno',          {daily:{sets:1,show:1,cash_rev:0,cash_ref:0}, weekly:{sets:9,show:7,cash_rev:0,cash_ref:0}, monthly:{sets:54,show:30,cash_rev:34000,cash_ref:0}}],
  ['Philip Josh Caperig',          {daily:{sets:0,show:0,cash_rev:0,cash_ref:0}, weekly:{sets:0,show:0,cash_rev:0,cash_ref:0}, monthly:{sets:0,show:0,cash_rev:0,cash_ref:0}}],
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
  new_cx:      [17793,10473,16862,11368,22513,20715],
  contactable: [10817, 5941,10347, 7105,11891, 8325],
};
const CONTACTABLE_WEEKLY = {
  labels:      ['4/27','5/4','5/11','5/18','5/25','6/1','6/8','6/15','6/22'],
  new_cx:      [3071,4917,5096,5298,5299,4981,5822,6304,3608],
  contactable: [1746,2728,2648,2848,2505,2061,2529,2864,871],
};
const CONTACTABLE_DAILY = {
  labels:      ['6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/20','6/21','6/22','6/23','6/24','6/25'],
  new_cx:      [834,846,745,708,689,577,582,951,888,884,905,878,669,647,955,961,976,966,971,695,780,880,931,982,815],
  contactable: [315,307,270,255,287,293,334,361,323,387,389,378,335,356,425,428,371,396,406,380,458,354,245,136,136],
};

// ── Revenue (Enterprise) ──────────────────────────────────────────────────
const REVENUE_MONTHLY = {
  labels:    ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug MTD'],
  gross:    [1226581, 1272624, 1213881, 1001908, 906609, 891667, 378910],
  net:      [992601, 1050027, 1031954, 794187, 789322, 701438, 304039],
  pg1:      [308580, 193942, 219385, 182565, 107865, 84899, 86537],
  vip:      [431741, 414547, 381024, 365693, 340119, 276417, 9408],
  physical: [237193, 390838, 392196, 221919, 322621, 255479, 193094],
  digital:  [8706, 36802, 29103, 9296, 11404, 19406, 8453],
  scratch:  [9369, 13350, 12157, 7784, 5963, 5995, -29],
  champions:[-2988, 548, -1911, 6929, 1351, 59242, 6576],
};
const REVENUE_WEEKLY = {
  labels:    ['5/4', '5/11', '5/18', '5/25', '6/1', '6/8', '6/15', '6/22', '6/29', '7/6', '7/13', '7/20', '7/27', '8/3', '8/10', '8/17'],
  gross:    [219533, 266953, 227821, 205444, 177882, 226556, 218838, 228935, 183004, 194598, 187741, 201508, 196263, 139034, 132150, 90676],
  net:      [157663, 215554, 180023, 170752, 148706, 198539, 190245, 204171, 160675, 148891, 146368, 154524, 152071, 112519, 108173, 69919],
  pg1:      [29329, 45738, 44239, 34444, 5313, 23215, 27460, 40664, 21545, 12971, 15363, 19557, 27549, 32688, 34255, 18720],
  vip:      [83114, 100077, 75545, 73588, 68302, 93827, 82176, 87103, 52168, 70323, 70834, 62357, 32416, 2972, 2078, 1388],
  physical: [41784, 65765, 56979, 51353, 71616, 77233, 75801, 71830, 60484, 51976, 44645, 51795, 78442, 66739, 70232, 50402],
  digital:  [1564, 3026, 2872, 1247, 2159, 2364, 2492, 3015, 3527, 1509, 1041, 7568, 7410, 3771, 2605, 1801],
  scratch:  [2391, 1468, 1147, 1531, 1539, 1205, 1579, 1417, 1289, 1443, 887, 1191, 1408, -29, 0, 0],
  champions:[-520, -520, -759, 8589, -223, 695, 737, 142, 21661, 10670, 13598, 12055, 4846, 6378, -997, -2393],
};
const REVENUE_DAILY = {
  labels:    ['6/1', '6/2', '6/3', '6/4', '6/5', '6/6', '6/7', '6/8', '6/9', '6/10', '6/11', '6/12', '6/13', '6/14', '6/15', '6/16', '6/17', '6/18', '6/19', '6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30', '7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7', '7/8', '7/9', '7/10', '7/11', '7/12', '7/13', '7/14', '7/15', '7/16', '7/17', '7/18', '7/19', '7/20', '7/21', '7/22', '7/23', '7/24', '7/25', '7/26', '7/27', '7/28', '7/29', '7/30', '7/31', '8/1', '8/2', '8/3', '8/4', '8/5', '8/6', '8/7', '8/8', '8/9', '8/10', '8/11', '8/12', '8/13', '8/14', '8/15', '8/16', '8/17', '8/18', '8/19', '8/20'],
  gross:    [26506, 27075, 34323, 26235, 27985, 19114, 16645, 38354, 31033, 32967, 34205, 44179, 24188, 21629, 36897, 30024, 36404, 32633, 31546, 22881, 26294, 37923, 30678, 33044, 36312, 33358, 22929, 32598, 24737, 27808, 31654, 32099, 31542, 16289, 17022, 30512, 25582, 36252, 33370, 26512, 17587, 24784, 27667, 25589, 30025, 33970, 32035, 20235, 18220, 26870, 29905, 30638, 33800, 36320, 22552, 21423, 37289, 58644, 27290, 29856, 26135, 9218, 7832, 25781, 23874, 25884, 24099, 20363, 11849, 7184, 18698, 27020, 20662, 29547, 18513, 10928, 6781, 22910, 36918, 22059, 8788],
  net:      [19762, 19965, 28886, 21266, 24924, 17657, 16247, 30544, 24271, 28403, 31443, 39850, 23561, 20466, 30815, 23412, 30039, 29683, 27075, 22555, 24506, 32013, 26549, 29860, 29218, 30535, 22038, 31864, 20899, 25210, 25878, 24964, 29921, 15743, 16507, 22313, 19350, 27308, 23615, 19471, 14990, 21846, 18590, 20088, 21850, 26288, 24606, 18244, 16702, 16041, 21145, 22849, 23929, 32702, 17856, 20003, 26620, 46254, 22627, 21801, 21340, 6289, 7140, 21622, 15410, 22567, 20150, 14522, 11251, 6997, 14968, 18268, 16858, 26312, 16600, 9641, 5526, 17598, 30213, 16996, 5111],
  pg1:      [-776, -1758, 1379, 836, 1699, 2145, 1788, 4323, 532, -345, 3956, 6219, 4558, 3972, 4960, 143, 2134, 1856, 2848, 7146, 7320, 8238, 2575, 1783, 9462, 6832, 5751, 5376, 5671, 5242, 4071, 2150, 2615, 1024, 473, 1270, 2664, 2279, 1312, 1896, 2138, 1412, 1124, 2705, 1297, 4532, 2665, 1443, 1597, 1706, 1509, 4299, 4372, 4699, 1619, 1353, 5912, 5968, 4017, 3719, 7058, 156, 718, 4190, 5836, 5520, 5513, 7766, 2663, 1199, 5451, 8967, 4649, 8755, 4684, 1083, 665, 5209, 9611, 3345, 555],
  vip:      [8859, 6849, 11256, 9098, 10770, 10779, 10691, 13176, 11513, 10779, 10077, 18959, 14524, 14799, 12730, 11078, 11569, 12483, 10482, 10550, 13284, 10831, 9296, 9860, 9533, 10899, 11948, 24736, 1732, 6979, 7572, 7602, 9672, 8900, 9711, 7839, 7919, 11919, 10622, 7908, 8919, 15197, 9899, 10146, 10164, 9791, 10047, 10899, 9888, 9125, 9683, 6970, 7712, 9593, 9068, 10206, 7097, 16607, 396, 5247, 99, 1485, 1485, 396, 198, -99, -495, 990, 1289, 693, 99, -197, 198, -99, 295, 693, 1089, 497, 891, -99, 99],
  physical: [10655, 14738, 15729, 10917, 11950, 4281, 3346, 13045, 11869, 16962, 16635, 14358, 3275, 1089, 12246, 11487, 16011, 14621, 12798, 4635, 2898, 12265, 14018, 17177, 10071, 12236, 3630, 986, 13247, 11640, 9956, 9782, 11454, 597, 2554, 12931, 10014, 9897, 9579, 7934, 1005, 617, 8731, 8017, 6565, 8364, 9653, 2141, 1175, 7995, 9059, 6876, 7466, 12426, 4175, 3798, 13692, 21200, 13813, 8973, 15044, 2532, 3190, 13969, 9757, 17273, 13664, 3968, 5757, 2352, 8252, 10870, 11680, 16094, 12073, 7702, 3561, 11798, 19732, 14351, 4521],
  digital:  [562, 478, 1083, 386, 609, 452, 452, 840, 462, 860, 1015, 710, 595, 593, 1241, 530, 133, 483, 803, 62, 0, 438, 517, 857, -31, 511, 518, 206, 122, 1251, 771, 765, 618, 0, 0, 244, 323, 357, -400, 547, 47, 391, 296, 109, 0, 109, 355, 62, 109, 691, 308, 232, 2272, 2445, 1019, 602, 1655, 2189, 1912, 1148, 230, 322, -47, 1473, 545, 471, 770, 403, 47, 62, 369, 223, 331, 964, 246, 163, 310, 393, 777, 596, 36],
  scratch:  [537, 532, 422, 348, 277, 268, 268, 378, 281, 354, 362, 335, 275, 242, 277, 174, 192, 240, 144, 162, 407, 241, 143, 181, 183, 57, 190, 420, 126, 97, 181, 182, 182, 338, 183, 232, 86, 67, 113, 290, 290, 365, 58, 207, 95, 106, 192, 211, 18, 114, -10, 86, -85, 550, 382, 154, 458, 452, 170, 223, 105, 0, 0, 0, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  champions:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 598, 0, 0, 3, 0, 0, 0, 139, 0, 0, 3327, 4483, 5381, 4884, 3586, -203, -1656, 2789, 2389, 896, 2591, 3864, -1518, -1096, 3729, 3386, 1694, 3488, 3915, -3590, 596, 4386, 2192, 2989, 1593, 3889, -2194, -162, 2319, 2491, -1196, 1794, 1794, 1594, -897, -598, 698, 1395, 1495, 2691, 797, -1595, 0, 598, -698, 0, -99, -299, -798, -1196, -100],
};
