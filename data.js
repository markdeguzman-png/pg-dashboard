// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const AS_OF_DATE           = 'June 11, 2026';
const DAILY_LABEL          = 'Jun 11';
const WEEKLY_LABEL         = 'WB Jun 8';

const DAYS_WORKED          = 9;
const DAYS_REMAINING       = 13;
const DAYS_TOTAL           = 22;
const DAYS_WORKED_RANGE    = 'Jun 1–5, 8–11';
const DAYS_REMAINING_RANGE = 'Jun 12, 15–19, 22–26, 29–30';

const ENTERPRISE_TARGETS = {
  daily:   { pg1:150,  vip:150,  clubs:100  },
  weekly:  { pg1:600,  vip:600,  clubs:400  },
  monthly: { pg1:2400, vip:2400, clubs:1600 },
};

const TEAM_PROFILES = {
  'Enterprise': {
    reps: 38, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:38,  vip:26,  clubs:32},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:343, vip:239, clubs:227},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:977, vip:679, clubs:594},  tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:1270, calls:5975 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:6,   vip:5,   clubs:4},   tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:90,  vip:78,  clubs:77},  tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:301, vip:267, clubs:186}, tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:5,   vip:5,  clubs:7},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:59,  vip:52, clubs:43},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:147, vip:119, clubs:119}, tgt:{pg1:506, vip:506, clubs:337} },
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
      daily:   { act:{pg1:8,   vip:9,  clubs:4},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:53,  vip:51, clubs:23},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:149, vip:134, clubs:71}, tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:12,  vip:0,  clubs:14},  tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:143, vip:4,  clubs:103}, tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:232, vip:5,  clubs:166}, tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:7,   vip:7,   clubs:3},  tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:91,  vip:89,  clubs:22}, tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:139, vip:138, clubs:40}, tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: false,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 977],
  vip:           [3055, 1859, 2338, 1966,  710, 679],
  clubs:         [1399, 1539, 2120, 2037, 1187, 594],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 634, 343],
  vip:    [518, 420, 195,   0,   9, 296, 405, 440, 239],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 367, 227],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8','6/9','6/10','6/11'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,97,51,38],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,68,26,26],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,69,63,32],
};

// Team Anne full trend (monthly Feb–present, weekly 4/13–present)
const ANNE_MONTHLY = {
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:    [546,  1113, 944, 609, 301],
  vip:    [408,   910, 721, 289, 267],
  clubs:  [240,   305, 287, 353, 186],
};

const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 90],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 78],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109, 77],
};

const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Romuel Sabile','44.16%',0.4416],['Jesica Jumao-as','39.74%',0.3974],
    ['Jemar Namora','38.53%',0.3853],['Rubilyn Estrada','37.36%',0.3736],
    ['Christian Buceron','35.42%',0.3542],['Laurice Pentinio','34.69%',0.3469],
    ['Kenneth Semira','34.51%',0.3451],['Sitti Besas','34.26%',0.3426],
    ['Ian Ashley Sarmiento','31.71%',0.3171],['Andrea Isabel Balon','31.37%',0.3137],
    ['Chelei Bago','31.15%',0.3115],['Audrey Banares','28.97%',0.2897],
    ['Prince Wendell De Luna','27.96%',0.2796],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','44.44%',0.4444],['Belle Diaz','40.34%',0.4034],
    ['Kuh-Kuh Doringo','34.58%',0.3458],['Elbrando Tibon','28.36%',0.2836],
    ['Mayzelyn Revuelto','25.00%',0.2500],['Adrian Bundalian Gabriel','19.57%',0.1957],
    ['Mark Ryan Francis','11.11%',0.1111],['Charlyn Baylon','4.69%',0.0469],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','19.73%',0.1973],['Melody Tubio Libradilla','13.82%',0.1382],
    ['Lucky Sardia','13.18%',0.1318],['Thomas John Lommen','12.98%',0.1298],
    ['Jacinto Jr Basada','11.36%',0.1136],['Rheena Jayne Tomakin','11.11%',0.1111],
    ['Micha Aborquez','9.17%',0.0917],['Marvin Tingin','8.85%',0.0885],
    ['Majan Perez','6.82%',0.0682],['Reynaldo Calde Jr','5.43%',0.0543],
    ['Houda Ashraf Sayyed','5.38%',0.0538],['Kathlene Tiampo','4.88%',0.0488],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','40.68%',0.4068],['Gerald Mark Lee Rabonza','38.33%',0.3833],
    ['Rose Shamae Morica','33.33%',0.3333],['Aldrin Jay Leones','31.88%',0.3188],
    ['Monette Soltes','31.37%',0.3137],['Reynan Sularan','27.03%',0.2703],
    ['Dan Dominique Arizala Casem','22.45%',0.2245],['Dexter Cagas Arbas','15.22%',0.1522],
    ['Marc Bryan Paguinto','13.64%',0.1364],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Julius Vizcayno','10.00%',0.1000],['Phoebe Estel Ymil Collado','6.56%',0.0656],
    ['Vian Perez','5.00%',0.0500],['Rafael John Abayan','4.08%',0.0408],
    ['Dan Emmanuel Nicolas','1.85%',0.0185],['Jhaziel Gonzales','1.64%',0.0164],
    ['Heinrich Abarquez','1.20%',0.0120],['Tommy Tecson','0.00%',0],
    ['Richard Ian Alvarez','0.00%',0],['Jessika Elliott','0.00%',0],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','66.67%',0.6667],['Jho-May Acosta','38.10%',0.3810],
    ['Venus Marie Cartalla','36.52%',0.3652],['Martin Lorenzo Savellano','33.33%',0.3333],
    ['Jackie Rose Paet','30.23%',0.3023],['Aileen Mendez','29.23%',0.2923],
    ['Romalyn Magallon','25.93%',0.2593],['Kevin Jabagat','11.11%',0.1111],
  ]},
];
