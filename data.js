// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const AS_OF_DATE           = 'June 12, 2026';
const DAILY_LABEL          = 'Jun 12';
const WEEKLY_LABEL         = 'WB Jun 8';

const DAYS_WORKED          = 10;
const DAYS_REMAINING       = 12;
const DAYS_TOTAL           = 22;
const DAYS_WORKED_RANGE    = 'Jun 1–5, 8–12';
const DAYS_REMAINING_RANGE = 'Jun 15–19, 22–26, 29–30';

const ENTERPRISE_TARGETS = {
  daily:   { pg1:150,  vip:150,  clubs:100  },
  weekly:  { pg1:600,  vip:600,  clubs:400  },
  monthly: { pg1:2400, vip:2400, clubs:1600 },
};

const TEAM_PROFILES = {
  'Enterprise': {
    reps: 38, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:34,   vip:14,   clubs:25},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:420,  vip:282,  clubs:301},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:1054, vip:722,  clubs:668},  tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:1441, calls:6659 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:18,  vip:17,  clubs:15},   tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:108, vip:95,  clubs:95},   tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:319, vip:284, clubs:204},  tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:12,  vip:12,  clubs:14},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:71,  vip:61,  clubs:56},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:159, vip:128, clubs:132}, tgt:{pg1:506, vip:506, clubs:337} },
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
      daily:   { act:{pg1:15,  vip:15,  clubs:12},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:66,  vip:60,  clubs:33},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:162, vip:143, clubs:81},  tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:23,  vip:0,  clubs:32},   tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:143, vip:4,  clubs:103},  tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:256, vip:5,  clubs:192},  tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:11,  vip:11,  clubs:7},   tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:91,  vip:89,  clubs:22},  tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:147, vip:146, clubs:46},  tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: false,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 1054],
  vip:           [3055, 1859, 2338, 1966,  710,  722],
  clubs:         [1399, 1539, 2120, 2037, 1187,  668],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 634, 420],
  vip:    [518, 420, 195,   0,   9, 296, 405, 440, 282],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 367, 301],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8','6/9','6/10','6/11','6/12'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,97,51,81,34],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,68,26,55,14],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,69,63,81,25],
};

// Team Anne full trend (monthly Feb–present, weekly 4/13–present)
const ANNE_MONTHLY = {
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:    [546,  1113, 944, 609, 319],
  vip:    [408,   910, 721, 289, 284],
  clubs:  [240,   305, 287, 353, 204],
};

const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 108],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189,  95],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109,  95],
};

const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Romuel Sabile','43.37%',0.4337],['Jemar Namora','39.20%',0.3920],
    ['Jesica Jumao-as','36.67%',0.3667],['Kenneth Semira','36.43%',0.3643],
    ['Laurice Pentinio','36.19%',0.3619],['Rubilyn Estrada','35.64%',0.3564],
    ['Sitti Besas','34.48%',0.3448],['Christian Buceron','33.63%',0.3363],
    ['Andrea Isabel Balon','30.70%',0.3070],['Ian Ashley Sarmiento','29.55%',0.2955],
    ['Chelei Bago','29.23%',0.2923],['Audrey Banares','27.27%',0.2727],
    ['Prince Wendell De Luna','26.26%',0.2626],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','44.44%',0.4444],['Belle Diaz','42.57%',0.4257],
    ['Kuh-Kuh Doringo','38.98%',0.3898],['Elbrando Tibon','25.64%',0.2564],
    ['Mayzelyn Revuelto','25.33%',0.2533],['Adrian Bundalian Gabriel','19.57%',0.1957],
    ['Mark Ryan Francis','11.11%',0.1111],['Charlyn Baylon','4.17%',0.0417],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','20.50%',0.2050],['Melody Tubio Libradilla','14.91%',0.1491],
    ['Thomas John Lommen','13.72%',0.1372],['Lucky Sardia','12.84%',0.1284],
    ['Rheena Jayne Tomakin','11.84%',0.1184],['Jacinto Jr Basada','11.36%',0.1136],
    ['Micha Aborquez','11.02%',0.1102],['Marvin Tingin','10.24%',0.1024],
    ['Majan Perez','7.43%',0.0743],['Reynaldo Calde Jr','6.99%',0.0699],
    ['Houda Ashraf Sayyed','4.90%',0.0490],['Kathlene Tiampo','4.29%',0.0429],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','44.93%',0.4493],['Gerald Mark Lee Rabonza','37.10%',0.3710],
    ['Rose Shamae Morica','31.03%',0.3103],['Aldrin Jay Leones','30.26%',0.3026],
    ['Monette Soltes','30.19%',0.3019],['Reynan Sularan','28.74%',0.2874],
    ['Dan Dominique Arizala Casem','24.53%',0.2453],['Dexter Cagas Arbas','17.65%',0.1765],
    ['Marc Bryan Paguinto','13.54%',0.1354],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Julius Vizcayno','8.82%',0.0882],['Vian Perez','6.12%',0.0612],
    ['Phoebe Estel Ymil Collado','5.97%',0.0597],['Rafael John Abayan','3.64%',0.0364],
    ['Dan Emmanuel Nicolas','1.72%',0.0172],['Jhaziel Gonzales','1.52%',0.0152],
    ['Heinrich Abarquez','1.10%',0.0110],['Tommy Tecson','0.00%',0],
    ['Richard Ian Alvarez','0.00%',0],['Jessika Elliott','0.00%',0],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','64.91%',0.6491],['Jho-May Acosta','38.10%',0.3810],
    ['Martin Lorenzo Savellano','37.78%',0.3778],['Venus Marie Cartalla','36.92%',0.3692],
    ['Jackie Rose Paet','30.56%',0.3056],['Romalyn Magallon','28.72%',0.2872],
    ['Aileen Mendez','28.57%',0.2857],['Kevin Jabagat','15.56%',0.1556],
  ]},
];
