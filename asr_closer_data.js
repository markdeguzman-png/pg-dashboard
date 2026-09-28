// ASR / Closer Report — recreated dashboard data
// Source: "ASR - Closer Report" Google Sheet (docs.google.com/spreadsheets/d/1pcsC28bwL0_5S0oa65LHXHJTRgNFT4rO-bqpszvDmD8)
// Captured live 2026-09-28. Rep/closer tables are the current-period snapshot as shown in
// Control / Closers Metric. Company daily/weekly/monthly trend is the real rollup shown in
// Executive Summary Trend (Daily columns 09/18-09/27, Weekly WB08/17-WB09/21, Monthly Jul-Sep).
// Team/company trend rows for ASR & CLOSER Trend View are computed by summing the real
// per-rep / per-closer rows above (same underlying truth as the sheet's own SUMIFS rollups).

const ASOF = "2026-09-28";

// ---------- Roster: ASR / Setter side (Control tab) ----------
const ASR_REPS = [
// team, name, sets, appt, show, noShow, showRate, closeRate, upfrontRevenue, bookingRate, ibBR, obBR
["Team Remen","Sitti Besas",226,182,126,32,69.23,51.59,20447.22,46.60,32.37,60.66],
["Team Remen","Romalyn Magallon",214,149,118,49,64.32,42.02,14799.20,50.52,50.62,70.77],
["Team Remen","Marc Bryan Paguinto",209,181,96,58,53.04,35.42,10202.74,64.11,40.35,69.14],
["Team Remen","Homaboroma OrluOrlu",198,161,86,47,53.42,32.56,9990.39,46.15,29.71,66.84],
["Team Remen","Thomas John Lommen",196,183,121,33,66.12,38.84,13316.28,40.92,27.17,56.44],
["Team Remen","Alvin Alan Comia",180,177,130,30,73.45,38.46,15821.28,42.95,30.07,64.63],
["Team Remen","Omar Abdallah Mahmoud",182,175,125,35,72.67,39.20,13882.59,46.31,42.62,43.07],
["Team Remen","Marlon Estebat",178,164,119,25,72.56,33.61,12712.94,39.12,33.15,41.05],
["Team Remen","Jacinto Jr Basada",130,116,80,15,68.97,50.00,14539.62,34.58,33.33,35.64],
["Team Remen","Abet Belano",120,112,82,21,73.21,52.44,12297.93,35.82,34.10,37.65],
["Team Remen","Melody Tubio Libradilla",79,77,52,10,67.53,38.46,4987.49,38.16,17.19,47.55],
["Team Remen","Eden Mesfin",4,2,1,0,50.00,0.00,0,0,0,0],
["Team Mimi","Monette Soltes",186,129,124,33,71.26,60.48,22762.37,50.00,47.47,53.55],
["Team Mimi","Audrey Banares",143,133,80,26,62.02,53.75,14729.43,50.18,43.79,57.58],
["Team Mimi","Prince Wendell De Luna",135,119,95,14,79.83,54.74,15307.32,58.44,65.91,48.48],
["Team Mimi","Micha Aborquez",120,105,73,21,68.20,43.84,9647.49,43.64,39.35,49.17],
["Team Mimi","Lucky Sardia",113,106,73,8,68.87,54.79,11075.50,36.36,32.73,44.44],
["Team Mimi","Laurice Pentinio",113,105,90,4,85.71,58.89,14598.92,42.16,43.54,37.29],
["Team Mimi","Rheena Jayne Tomakin",112,99,74,15,74.75,56.76,12736.98,49.78,43.59,53.06],
["Team Mimi","Chelei Bago",104,94,67,17,71.28,34.33,7150.05,46.85,40.00,59.74],
["Team Mimi","Charlyn Baylon",103,98,74,14,75.51,39.19,7765.52,38.58,23.15,49.06],
["Team Mimi","Andrea Isabel Balon",86,73,58,8,79.45,43.10,6135.25,27.22,16.49,44.26],
["Team Mimi","Emmanuella Frago",80,71,58,7,70.42,54.00,8290.20,40.00,32.93,44.92],
["Team Mimi","Jireh Bless Espejo",38,37,25,8,67.57,32.00,2162.97,35.51,23.53,41.10],
["Team Mimi","Hera Pearl Baldo",10,8,5,1,62.50,20.00,359.00,0,0,0],
["Team Mimi","Jeiven Adrian Marasigan",5,3,3,0,100.00,0.00,0,0,0,0],
["Team Mimi","Gerard Cadacio",2,2,0,0,0.00,0.00,0,0,0,0],
["Team Mark","Marwin Ray Reyes",160,149,97,32,65.10,41.24,12998.27,52.46,35.51,66.47],
["Team Mark","Gerome Maca",153,133,102,33,76.69,33.33,14019.03,48.26,19.30,64.53],
["Team Mark","Nicolo Gerard C. Gonzalez",142,114,65,35,57.02,38.46,13054.48,55.25,20.00,57.76],
["Team Mark","Jackie Ramos",141,134,86,27,64.18,44.19,14936.78,38.74,25.00,48.58],
["Team Mark","Kim Paolo B. Planas",129,119,85,12,71.43,54.12,19035.83,37.94,32.88,41.75],
["Team Mark","Emmanuel Sandoval",121,108,77,16,71.30,59.74,10282.00,45.83,43.36,47.68],
["Team Mark","Carlo Palma",104,92,57,25,61.96,31.58,5757.08,45.41,22.73,54.60],
["Team Mark","Maria Asuncion Lansang",85,77,56,10,72.73,44.64,7583.25,32.95,14.41,46.94],
["Team Mark","Dennis Alillo",78,67,38,14,56.72,34.21,3596.84,24.76,10.00,28.24],
].map(r => ({team:r[0], name:r[1], sets:r[2], appt:r[3], show:r[4], noShow:r[5], showRate:r[6], closeRate:r[7], revenue:r[8], bookingRate:r[9], ibBR:r[10], obBR:r[11]}));

// ---------- Roster: Closer / PG1 Advisor side (Closers Metric tab) ----------
const CLOSERS = [
// name, appt, show, closedDeal, closeRate, revenue, aov, showRate, clubs, pg1
["Belle Diaz",421,320,208,65.00,65903.90,316.85,86.96,167,29],
["Amie B. Montederamos",335,276,144,52.17,46970.90,326.19,79.54,131,25],
["Venus Marie Cartalla",330,230,136,59.13,43135.11,317.17,79.04,116,19],
["Pauline Dimaculangan",329,164,109,66.46,39448.30,361.91,58.36,91,24],
["Jemar Namora",364,220,88,40.00,30050.77,341.49,74.07,89,12],
["Daniel Aliyu",338,221,108,48.87,28721.30,265.94,77.54,81,33],
["Aldrin Jay Leones",335,244,114,46.72,28537.92,250.33,81.33,95,11],
["Kuh-Kuh Doringo",295,173,105,60.69,26399.60,251.42,71.19,72,13],
["Christian Buceron",323,118,63,53.39,25666.87,407.41,53.75,64,19],
["Elbrando Tibon",249,147,46,31.29,21463.17,466.59,75.38,51,19],
["Reynan Sularan",306,204,82,40.20,21460.80,261.72,76.12,52,25],
["Rubilyn Estrada",304,196,89,45.41,20387.79,229.08,73.13,67,19],
["Romuel Sabile",342,156,62,39.74,18237.10,294.15,61.66,54,25],
["Nezy Kea Buenaventura",199,121,48,39.67,16918.05,352.46,71.18,43,22],
["Jackie Rose Paet",239,160,48,30.00,13734.64,286.14,72.40,34,44],
["Mark Ryan Francis",222,121,41,33.88,13452.01,328.10,59.61,46,6],
["Maria Lourdes Ortiz",202,139,49,35.25,11134.56,227.24,75.54,41,26],
["Abdullah Ahmed Khan",232,113,28,24.78,10666.09,380.93,61.41,26,19],
["Edelson Libunao",109,67,17,25.37,4082.10,240.12,68.37,10,0],
["Shane Cregan",30,18,3,16.67,1335.00,445.00,62.07,0,0],
["Bekim Kraya",25,13,2,15.38,1246.00,623.00,56.52,0,0],
["Tincia Ware",58,36,5,13.89,1216.85,243.37,73.47,0,0],
["John Reynoso",0,0,0,0,0,0,0,0,0],
].map(r => ({name:r[0], appt:r[1], show:r[2], closedDeal:r[3], closeRate:r[4], revenue:r[5], aov:r[6], showRate:r[7], clubs:r[8], pg1:r[9]}));

// ---------- Company-wide trend (Executive Summary Trend tab, "ASRs" block) ----------
// Full 23-metric row set exactly as the sheet has it, re-captured live at 150% zoom for accuracy.
// Field order: sets, ibSets, obSets, appt, warmT, ibWarmT, obWarmT, showRate, ibShowRate, obShowRate,
// shows, ibShows, obShows, bookingRate, ibBookingRate, obBookingRate, revenue, ibRevenue, obRevenue,
// closedDeal, calls90s, ibCalls90s, obCalls90s
const TREND_FIELDS = ["sets","ibSets","obSets","appt","warmT","ibWarmT","obWarmT","showRate","ibShowRate","obShowRate",
  "shows","ibShows","obShows","bookingRate","ibBookingRate","obBookingRate","revenue","ibRevenue","obRevenue",
  "closedDeal","calls90s","ibCalls90s","obCalls90s"];

function rowsToObjs(keyName, rows, fields){
  return rows.map(r => { const o = {[keyName]: r[0]}; fields.forEach((f,i)=> o[f]=r[i+1]); return o; });
}

// Daily: IB/OB Revenue split isn't reliably captured at daily granularity (only total revenue); the rest is complete.
const TREND_DAILY = rowsToObjs('date', [
  ["2026-09-18",218,88,130,177,42.20,69.32,23.85,70.06,85.33,58.82,124,64,60,46.68,37.29,56.28,22463,null,null,65,467,236,231],
  ["2026-09-19",50,30,20,96,72.00,90.00,45.00,59.38,79.49,45.61,57,31,26,41.67,38.96,46.51,11980,null,null,35,120,77,43],
  ["2026-09-20",39,15,24,52,41.03,86.67,12.50,71.15,84.21,63.64,37,16,21,41.49,26.32,64.86,5890,null,null,20,94,57,37],
  ["2026-09-21",253,74,179,154,33.99,56.76,24.58,77.27,84.62,73.53,119,44,75,44.08,28.35,57.19,16451,null,null,53,574,261,313],
  ["2026-09-22",198,86,112,198,40.40,62.79,23.21,66.67,83.10,57.48,132,59,73,43.33,36.91,50.00,17472,null,null,51,457,233,224],
  ["2026-09-23",190,68,122,150,29.47,55.88,14.75,62.16,70.15,55.56,92,47,45,42.79,32.38,52.14,13549,null,null,38,444,210,234],
  ["2026-09-24",157,64,93,150,27.39,45.31,15.05,58.00,73.08,50.00,87,38,49,40.89,35.16,46.04,12764,null,null,36,384,182,202],
  ["2026-09-25",160,70,90,90,30.00,51.43,13.33,60.67,65.52,57.61,91,38,53,49.69,38.67,63.83,17250,null,null,42,322,181,141],
  ["2026-09-26",46,23,23,46,43.48,73.91,13.04,67.78,74.42,61.70,61,32,29,0,0,0,9334,null,null,25,0,0,0],
  ["2026-09-27",35,11,24,46,17.14,45.45,4.17,47.83,33.33,57.14,22,6,16,0,0,0,2270,null,null,8,0,0,0],
], TREND_FIELDS);

const TREND_WEEKLY = rowsToObjs('weekBeginning', [
  ["2026-08-17",1204,452,752,1193,21.68,38.72,11.44,71.92,79.91,67.25,858,358,501,38.73,29.48,47.72,105885,68798,37087,308,3109,1533,1576],
  ["2026-08-24",1157,369,788,1064,32.41,52.30,23.10,72.93,75.42,71.29,776,267,504,37.27,24.57,49.19,82931,46873,36058,274,3104,1502,1602],
  ["2026-08-31",1337,442,895,1144,38.74,64.93,25.81,74.48,81.53,70.56,852,331,520,41.00,29.33,51.03,101828,53899,47929,375,3261,1507,1754],
  ["2026-09-07",1302,459,843,1030,33.49,54.90,21.83,68.45,75.20,64.52,705,285,420,43.30,33.58,51.40,82946,44757,38189,284,3007,1367,1640],
  ["2026-09-14",1284,522,762,1206,44.08,70.88,25.72,70.15,80.67,62.52,846,409,437,43.81,35.37,52.37,135166,86717,48449,404,2931,1476,1455],
  ["2026-09-21",1039,396,643,936,32.63,55.81,18.35,64.53,73.13,59.13,604,264,340,47.64,37.11,57.72,89091,52136,36955,253,2181,1067,1114],
], TREND_FIELDS);

const TREND_MONTHLY = rowsToObjs('month', [
  ["2026-07",3618,1367,1845,2911,8.37,11.70,7.75,65.82,67.06,68.13,1916,786,917,36.89,29.17,36.03,175169,84713,76548,522,9808,4687,5121],
  ["2026-08",5286,1781,3505,5026,23.53,38.69,15.83,71.85,76.29,69.43,3611,1316,2294,37.94,null,47.35,384259,216787,167473,1236,13934,6531,7403],
  ["2026-09",4656,1740,2916,4152,37.65,61.90,23.18,69.10,77.57,63.86,2869,1231,1638,43.59,34.11,52.26,389878,226370,164503,1259,10681,5101,5580],
], TREND_FIELDS);

// Per-team monthly rollup (Executive Summary Trend's own per-team blocks, not a Control-roster sum)
const TEAM_MONTHLY = [
  ["Team Remen","2026-07",1264,675,575,968,8.78,9.19,8.52,66.74,66.26,67.10,646,379,257,35.18,33.32,36.69,47488,34645,12545,160,3593,2026,1567],
  ["Team Remen","2026-08",2040,708,1332,1926,20.64,33.62,13.74,70.72,75.22,68.20,1362,513,847,42.62,32.51,51.05,144119,77805,66314,460,4787,2178,2609],
  ["Team Remen","2026-09",1977,748,1229,1743,34.85,55.61,22.21,66.95,74.29,62.34,1167,500,667,45.64,34.89,56.17,144180,82995,61185,468,4332,2144,2188],
  ["Team Mimi","2026-07",1045,622,412,854,13.97,14.79,13.11,68.27,69.41,65.10,583,379,194,33.43,30.05,39.02,65679,46349,17719,187,3126,2070,1056],
  ["Team Mimi","2026-08",1432,540,892,1315,26.05,42.22,16.26,73.76,79.68,69.88,970,396,573,36.06,27.18,44.96,116236,75697,40539,373,3971,1987,1984],
  ["Team Mimi","2026-09",1418,693,725,1283,45.63,67.10,25.10,72.41,79.75,65.17,929,508,421,43.42,37.89,50.45,136116,97849,38267,463,3266,1829,1437],
  ["Team Mark","2026-07",904,24,828,792,4.54,4.17,4.83,67.68,55.56,70.28,536,10,447,38.92,7.04,41.78,50083,989,44326,143,2323,341,1982],
  ["Team Mark","2026-08",1747,495,1252,1659,24.67,42.42,17.65,73.12,77.61,71.31,1213,364,850,35.54,22.68,45.81,117190,59596,57594,380,4916,2183,2733],
  ["Team Mark","2026-09",1224,269,955,1086,32.35,67.66,22.41,68.23,80.32,64.64,741,200,541,41.27,26.22,49.23,108250,43427,64822,316,2966,1026,1940],
].map(r => { const o = {team:r[0], month:r[1]}; TREND_FIELDS.forEach((f,i)=> o[f]=r[i+2]); return o; });

// ---------- BR % per Call Source (sample of reps captured live) ----------
const CALL_SOURCE_BR = [
// name, ivr1Calls, ivr1BR, ivr2Calls, ivr2BR, ivr3Calls, ivr3BR, ivr4Calls, ivr4BR
["Marc Bryan Paguinto",8,150.00,2,50.00,20,40.00,18,5.56],
["Romalyn Magallon",25,8.00,7,900.00,69,57.97,117,8.55],
["Prince Wendell De Luna",24,0.00,9,22.22,32,128.13,56,60.71],
["Nicolo Gerard C. Gonzalez",1,300.00,0,0,10,0.00,11,27.27],
["Marwin Ray Reyes",27,22.22,3,933.33,33,33.33,60,0.00],
["Audrey Banares",33,33.33,10,30.00,7,28.57,89,57.30],
["Monette Soltes",68,47.06,12,291.67,15,20.00,108,30.56],
["Rheena Jayne Tomakin",16,100.00,3,0.00,4,50.00,46,30.43],
["Chelei Bago",13,84.62,6,66.67,43,27.91,70,42.86],
["Omar Abdallah Mahmoud",15,120.00,7,828.57,70,10.00,131,12.98],
["Gerome Maca",7,71.43,2,50.00,39,30.77,34,0.00],
["Homaboroma OrluOrlu",13,38.46,7,614.29,90,23.33,80,66.67],
["Emmanuel Sandoval",15,53.33,4,0.00,22,54.55,39,66.67],
["Sitti Besas",21,95.24,4,75.00,64,21.88,106,36.79],
["Carlo Palma",4,100.00,1,100.00,25,36.00,31,0.00],
["Alvin Alan Comia",16,143.75,5,1000.00,74,9.46,127,0.00],
["Micha Aborquez",20,55.00,6,33.33,43,20.93,57,89.06],
["Laurice Pentinio",17,111.76,3,142.86,54,18.52,109,42.20],
["Thomas John Lommen",14,7.14,2,950.00,76,1.32,85,50.59],
].map(r => ({name:r[0], ivr1Calls:r[1], ivr1BR:r[2], ivr2Calls:r[3], ivr2BR:r[4], ivr3Calls:r[5], ivr3BR:r[6], ivr4Calls:r[7], ivr4BR:r[8]}));

// ---------- NO SHOWS (sample rows captured live, Sept appointments) ----------
const NO_SHOWS = [
// apptDate, asr, email, phone, didShow, noShow
["2026-09-01","Abet Belano","gduffin@comcast.net","9254132433","No",1],
["2026-09-01","Alex Edem","dremmers@ameritech.net","8155050690","No",1],
["2026-09-01","Alex Edem","lynn@pioneerpropanecorp.com","7163075843","Cancelled",1],
["2026-09-01","Alex Edem","tomboyle25@gmail.com","5163531220","No",1],
["2026-09-01","Alex Edem","Twsbricker@aol.com","1716525363","No",1],
["2026-09-01","Alvin Alan Comia","jgcello@naturesimagery.com","8434217788","Cancelled",1],
["2026-09-01","Alvin Alan Comia","scottierod69@aol.com","3037487383","No",1],
["2026-09-01","Asmaa Hisham","kevin@ricciconstructiongroup.co","2037101082","No",1],
["2026-09-01","Audrey Banares","bolinhomes@gmail.com","5754306865","Cancelled",1],
["2026-09-01","Audrey Banares","craig.arsenault5@gmail.com","9024391340","No",1],
["2026-09-01","Audrey Banares","pswacon@hotmail.com","9522104770","No",1],
["2026-09-01","Audrey Banares","tdhughes02@gmail.com","6613330737","Cancelled",1],
["2026-09-01","Audrey Banares","timkosharek64@gmail.com","6089291757","No",1],
["2026-09-01","Emmanuel Sandoval","bdiana504@gmail.com","9739538160","Cancelled",1],
["2026-09-01","Emmanuel Sandoval","jmpaysagistes@gmail.com","5146179917","No",1],
["2026-09-01","Emmanuel Sandoval","whitneyrenzelman@gmail.com","9702199986","No",1],
["2026-09-01","Gabriella Abem","efettanucci@gmail.com","12164404343","No",1],
["2026-09-01","Jacinto Jr Basada","barbaraneller@comcast.net","2485635292","Cancelled",1],
["2026-09-01","Jacinto Jr Basada","jsgeorge4@gmail.com","4019654928","Cancelled",1],
].map(r => ({apptDate:r[0], asr:r[1], email:r[2], phone:r[3], didShow:r[4], noShow:r[5]}));

// ---------- BLANK Did Member Show (sample rows captured live) ----------
const BLANK_DID_SHOW = [
// apptDate, pg1Advisor, asr, email, phone
["2026-09-02","Mark Ryan Francis","Jireh Bless Espejo","cheng999@gmail.com","8088007651"],
["2026-09-03","Amie B. Montederamos","Rheena Jayne Tomakin","guardianimages@mac.com","6163641515"],
["2026-09-03","Daniel Aliyu","Nicolo Gerard C. Gonzalez","ratki041@yahoo.com","9733906481"],
["2026-09-03","Mark Ryan Francis","Homaboroma OrluOrlu","cjstyles1922@gmail.com","8039401319"],
["2026-09-03","Mark Ryan Francis","Marc Bryan Paguinto","randall.i.scott@gmail.com","19175875900"],
["2026-09-04","Abdullah Ahmed Khan","Carlo Palma","kevindevaughn33@gmail.com","3309366511"],
["2026-09-04","Daniel Aliyu","Jacinto Jr Basada","jenny.burdette0430@gmail.com","8036403052"],
["2026-09-04","Laurice Pentinio","Jackie Ramos","thomassather36@gmail.com","4065805568"],
].map(r => ({apptDate:r[0], pg1Advisor:r[1], asr:r[2], email:r[3], phone:r[4]}));

const TEAMS = ["Team Remen","Team Mimi","Team Mark"];

if (typeof module !== "undefined") {
  module.exports = { ASOF, ASR_REPS, CLOSERS, TREND_DAILY, TREND_WEEKLY, TREND_MONTHLY, CALL_SOURCE_BR, NO_SHOWS, BLANK_DID_SHOW, TEAMS };
}
