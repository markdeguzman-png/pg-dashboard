// ── PG Dashboard Data — auto-updated by scheduled task ────────────────────
// Do NOT edit the HTML file for data changes — update this file only.

const AS_OF_DATE           = 'June 9, 2026';
const DAILY_LABEL          = 'Jun 9';
const WEEKLY_LABEL         = 'WB Jun 8';

const DAYS_WORKED          = 7;
const DAYS_REMAINING       = 15;
const DAYS_TOTAL           = 22;
const DAYS_WORKED_RANGE    = 'Jun 1–5, 8–9';
const DAYS_REMAINING_RANGE = 'Jun 10–12, 15–19, 22–26, 29–30';

const ENTERPRISE_TARGETS = {
  daily:   { pg1:150,  vip:150,  clubs:100  },
  weekly:  { pg1:600,  vip:600,  clubs:400  },
  monthly: { pg1:2400, vip:2400, clubs:1600 },
};

const TEAM_PROFILES = {
  'Enterprise': {
    reps: 38, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:63,  vip:44,  clubs:37},   tgt:{pg1:150,  vip:150,  clubs:100}  },
      weekly:  { act:{pg1:220, vip:163, clubs:100},  tgt:{pg1:600,  vip:600,  clubs:400}  },
      monthly: { act:{pg1:854, vip:603, clubs:467},  tgt:{pg1:2400, vip:2400, clubs:1600} },
    },
    conv: { sold:397, calls:1599 },
    hasTrend: true,
    note: null,
  },
  'Team Anne': {
    reps: 13, color: '#FD3300',
    periods: {
      daily:   { act:{pg1:10,  vip:11,  clubs:11},  tgt:{pg1:52,  vip:52,  clubs:35}  },
      weekly:  { act:{pg1:62,  vip:53,  clubs:38},  tgt:{pg1:206, vip:206, clubs:137} },
      monthly: { act:{pg1:273, vip:242, clubs:147}, tgt:{pg1:822, vip:822, clubs:548} },
    },
    hasTrend: true,
    note: null,
  },
  'Team Jen': {
    reps: 8, color: '#DB2C00',
    periods: {
      daily:   { act:{pg1:14,  vip:12, clubs:5},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:38,  vip:36, clubs:20},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:126, vip:103, clubs:96}, tgt:{pg1:506, vip:506, clubs:337} },
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
      daily:   { act:{pg1:10,  vip:11, clubs:4},   tgt:{pg1:32,  vip:32,  clubs:22}  },
      weekly:  { act:{pg1:40,  vip:37, clubs:10},  tgt:{pg1:127, vip:127, clubs:85}  },
      monthly: { act:{pg1:136, vip:120, clubs:58}, tgt:{pg1:506, vip:506, clubs:337} },
    },
    hasTrend: false,
    note: null,
  },
  'Team Philip': {
    reps: 10, color: '#DFD9D5',
    periods: {
      daily:   { act:{pg1:11,  vip:2,  clubs:3},   tgt:{pg1:9,   vip:9,   clubs:9}   },
      weekly:  { act:{pg1:61,  vip:7,  clubs:23},  tgt:{pg1:45,  vip:45,  clubs:45}  },
      monthly: { act:{pg1:215, vip:14, clubs:104}, tgt:{pg1:200, vip:200, clubs:200} },
    },
    hasTrend: false,
    note: 'Targets reflect training-tier rep structure',
  },
  'Team Remen': {
    reps: 9, color: '#ECE9E4',
    periods: {
      daily:   { act:{pg1:9,   vip:10,  clubs:3},  tgt:{pg1:36,  vip:36,  clubs:24}  },
      weekly:  { act:{pg1:33,  vip:34,  clubs:9},  tgt:{pg1:143, vip:143, clubs:95}  },
      monthly: { act:{pg1:124, vip:123, clubs:31}, tgt:{pg1:569, vip:569, clubs:379} },
    },
    hasTrend: false,
    note: null,
  },
};

const MONTHLY = {
  labels:        ['Jan','Feb','Mar','Apr','May','Jun MTD'],
  displayLabels: ['Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026 (MTD)'],
  pg1:           [2938, 1842, 2615, 2069, 1707, 854],
  vip:           [3055, 1859, 2338, 1966,  710, 603],
  clubs:         [1399, 1539, 2120, 2037, 1187, 467],
};

const WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [459, 559, 327, 298, 401, 415, 556, 634, 220],
  vip:    [518, 420, 195,   0,   9, 296, 405, 440, 163],
  clubs:  [502, 406, 377, 280, 345, 241, 239, 367, 100],
};

const DAILY = {
  labels: ['5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/18','5/19','5/20','5/21','5/22','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/8','6/9'],
  pg1:    [14,4,85,70,86,80,70,101,83,89,77,65,100,102,116,103,91,29,15,139,124,137,110,82,157,63],
  vip:    [0,0,0,0,0,8,1,58,73,73,55,37,84,80,75,76,65,17,8,102,86,92,76,60,119,44],
  clubs:  [14,13,61,73,68,62,63,45,57,54,42,43,36,43,51,40,48,12,9,62,61,72,61,64,63,37],
};

// Team Anne full trend (monthly Feb–present, weekly 4/13–present)
const ANNE_MONTHLY = {
  labels: ['Feb','Mar','Apr','May','Jun MTD'],
  pg1:    [546,  1113, 944, 609, 273],
  vip:    [408,   910, 721, 289, 242],
  clubs:  [240,   305, 287, 353, 147],
};

const ANNE_WEEKLY = {
  labels: ['4/13','4/20','4/27','5/4','5/11','5/18','5/25','6/1','6/8'],
  pg1:    [225, 244, 137,  94, 131, 156, 213, 211, 62],
  vip:    [184, 167,  80,   0,   1, 110, 178, 189, 53],
  clubs:  [ 84,  70,  74,  98,  74,  72,  77, 109, 38],
};

const CONVERSIONS = [
  { team:'Team Anne', color:'#FD3300', reps:[
    ['Jesica Jumao-as','52.6%',0.526],['Romuel Sabile','51.8%',0.518],
    ['Jemar Namora','42.5%',0.425],['Rubilyn Estrada','39.7%',0.397],
    ['Kenneth Semira','38.3%',0.383],['Christian Buceron','37.5%',0.375],
    ['Sitti Besas','35.6%',0.356],['Ian Ashley Sarmiento','35.3%',0.353],
    ['Laurice Pentinio','34.6%',0.346],['Chelei Bago','33.3%',0.333],
    ['Prince Wendell De Luna','32.9%',0.329],['Andrea Isabel Balon','32.1%',0.321],
    ['Audrey Banares','30.1%',0.301],
  ]},
  { team:'Team Jen', color:'#DB2C00', reps:[
    ['Nezy Kea Buenaventura','43.9%',0.439],['Belle Diaz','43.3%',0.433],
    ['Kuh-Kuh Doringo','32.5%',0.325],['Elbrando Tibon','30.2%',0.302],
    ['Mayzelyn Revuelto','25.0%',0.250],['Adrian Bundalian Gabriel','19.4%',0.194],
    ['Mark Ryan Francis','11.1%',0.111],['Charlyn Baylon','7.0%',0.070],
  ]},
  { team:'Team Lee', color:'#7B726C', reps:[
    ['Kikumi Keeshia Matsuo','21.2%',0.212],['Lucky Sardia','16.3%',0.163],
    ['Melody Tubio Libradilla','14.5%',0.145],['Thomas John Lommen','13.9%',0.139],
    ['Jacinto Jr Basada','12.4%',0.124],['Rheena Jayne Tomakin','11.4%',0.114],
    ['Micha Aborquez','10.2%',0.102],['Marvin Tingin','9.2%',0.092],
    ['Majan Perez','6.0%',0.060],['Houda Ashraf Sayyed','5.1%',0.051],
    ['Kathlene Tiampo','4.4%',0.044],['Reynaldo Calde Jr','2.0%',0.020],
  ]},
  { team:'Team Mark', color:'#B3AAA3', reps:[
    ['Alvin Alan Comia','45.2%',0.452],['Gerald Mark Lee Rabonza','42.2%',0.422],
    ['Aldrin Jay Leones','36.4%',0.364],['Rose Shamae Morica','32.8%',0.328],
    ['Reynan Sularan','32.2%',0.322],['Monette Soltes','31.7%',0.317],
    ['Dan Dominique Arizala Casem','28.2%',0.282],['Dexter Cagas Arbas','17.1%',0.171],
    ['Marc Bryan Paguinto','13.5%',0.135],
  ]},
  { team:'Team Philip', color:'#DFD9D5', reps:[
    ['Phoebe Estel Ymil Collado','10.3%',0.103],['Julius Vizcayno','6.7%',0.067],
    ['Vian Perez','3.7%',0.037],['Rafael John Abayan','3.1%',0.031],
    ['Dan Emmanuel Nicolas','2.6%',0.026],['Jhaziel Gonzales','2.1%',0.021],
    ['Tommy Tecson','0.0%',0],['Richard Ian Alvarez','0.0%',0],
    ['Jessika Elliott','0.0%',0],['Heinrich Abarquez','0.0%',0],
  ]},
  { team:'Team Remen', color:'#ECE9E4', reps:[
    ['Daniel Aliyu','80.0%',0.800],['Jho-May Acosta','50.0%',0.500],
    ['Venus Marie Cartalla','45.0%',0.450],['Martin Lorenzo Savellano','41.4%',0.414],
    ['Jackie Rose Paet','33.3%',0.333],['Aileen Mendez','32.0%',0.320],
    ['Romalyn Magallon','24.6%',0.246],['Kevin Jabagat','8.8%',0.088],
  ]},
];
