// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const AS_OF_DATE           = 'June 8, 2026';
const DAILY_LABEL          = 'Jun 8';
const WEEKLY_LABEL         = 'WB Jun 8';

const DAYS_WORKED          = 6;
const DAYS_REMAINING       = 16;
const DAYS_TOTAL           = 22;
const DAYS_WORKED_RANGE    = 'Jun 1–8';
const DAYS_REMAINING_RANGE = 'Jun 9–12, 15–19, 22–26, 29–30';

const ENTERPRISE_TARGETS = {
  daily:   { pg1:150,  vip:150,  clubs:100  },
  weekly:  { pg1:600,  vip:600,  clubs:400  },
  monthly: { pg1:2400, vip:2400, clubs:1600 },
};

const TEAM_PROFILES = {
  'Enterprise': {
    reps: 38, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:91,  vip:75,  clubs:28},  tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:91,  vip:75,  clubs:28},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:725, vip:515, clubs:395}, tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:947, calls:3746 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:30,  vip:27,  clubs:9},   tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:30,  vip:27,  clubs:9},   tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:241, vip:216, clubs:118}, tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:15,  vip:15, clubs:8},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:88,  vip:67, clubs:76}, tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:103, vip:82, clubs:84}, tgt:{pg1:506, vip:506, clubs:337} },
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
      daily:   { act:{pg1:16,  vip:14, clubs:3},  tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:96,  vip:83, clubs:48}, tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:112, vip:97, clubs:51}, tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:11,  vip:0, clubs:6},   tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:143, vip:4, clubs:103}, tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:154, vip:4, clubs:109}, tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:19,  vip:19,  clubs:2},  tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:91,  vip:89,  clubs:22}, tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:110, vip:108, clubs:24}, tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: false,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 725],
  vip:           [3055, 1859, 2338, 1966,  710, 515],
  clubs:         [1399, 1539, 2120, 2037, 1187, 395],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 634,  91],
  vip:    [518, 420, 195,   0,   9, 296, 405, 440,  75],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 367,  28],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,91],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,75],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,28],
};

// Team Anne full trend (monthly Feb–present, weekly 4/13–present)
const ANNE_MONTHLY = {
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:    [546,  1113, 944, 609, 241],
  vip:    [408,   910, 721, 289, 216],
  clubs:  [240,   305, 287, 353, 118],
};

const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 30],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 27],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109,  9],
};

const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Jesica Jumao-as','57.5%',0.575],['Romuel Sabile','55.6%',0.556],
    ['Kenneth Semira','51.5%',0.515],['Christian Buceron','45.1%',0.451],
    ['Jemar Namora','43.6%',0.436],['Rubilyn Estrada','42.4%',0.424],
    ['Laurice Pentinio','40.0%',0.400],['Ian Ashley Sarmiento','40.0%',0.400],
    ['Andrea Isabel Balon','37.9%',0.379],['Sitti Besas','37.7%',0.377],
    ['Prince Wendell De Luna','36.4%',0.364],['Chelei Bago','35.0%',0.350],
    ['Audrey Banares','32.9%',0.329],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','55.2%',0.552],['Belle Diaz','47.7%',0.477],
    ['Kuh-Kuh Doringo','35.7%',0.357],['Elbrando Tibon','31.7%',0.317],
    ['Mayzelyn Revuelto','30.4%',0.304],['Adrian Bundalian Gabriel','25.9%',0.259],
    ['Mark Ryan Francis','11.1%',0.111],['Charlyn Baylon','8.6%',0.086],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','24.5%',0.245],['Melody Tubio Libradilla','16.5%',0.165],
    ['Lucky Sardia','16.3%',0.163],['Thomas John Lommen','16.1%',0.161],
    ['Rheena Jayne Tomakin','13.6%',0.136],['Jacinto Jr Basada','12.4%',0.124],
    ['Micha Aborquez','10.2%',0.102],['Marvin Tingin','8.5%',0.085],
    ['Majan Perez','7.5%',0.075],['Houda Ashraf Sayyed','5.3%',0.053],
    ['Kathlene Tiampo','4.4%',0.044],['Reynaldo Calde Jr','2.5%',0.025],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','59.3%',0.593],['Gerald Mark Lee Rabonza','48.6%',0.486],
    ['Reynan Sularan','41.3%',0.413],['Rose Shamae Morica','41.2%',0.412],
    ['Aldrin Jay Leones','40.9%',0.409],['Dan Dominique Arizala Casem','40.0%',0.400],
    ['Monette Soltes','33.3%',0.333],['Dexter Cagas Arbas','20.7%',0.207],
    ['Marc Bryan Paguinto','16.7%',0.167],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Phoebe Estel Ymil Collado','11.1%',0.111],['Julius Vizcayno','6.7%',0.067],
    ['Rafael John Abayan','3.6%',0.036],['Jhaziel Gonzales','2.7%',0.027],
    ['Vian Perez','0.0%',0],['Tommy Tecson','0.0%',0],
    ['Richard Ian Alvarez','0.0%',0],['Jessika Elliott','0.0%',0],
    ['Heinrich Abarquez','0.0%',0],['Dan Emmanuel Nicolas','0.0%',0],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','100.0%',1.000],['Jho-May Acosta','53.3%',0.533],
    ['Venus Marie Cartalla','52.5%',0.525],['Martin Lorenzo Savellano','47.6%',0.476],
    ['Aileen Mendez','44.1%',0.441],['Jackie Rose Paet','39.1%',0.391],
    ['Romalyn Magallon','28.6%',0.286],['Kevin Jabagat','7.4%',0.074],
  ]},
];
