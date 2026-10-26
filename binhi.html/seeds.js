const D=[
{id:"mais",tl:"Mais",en:"Corn",e:"🌽",dp:"2.5–5 cm",wa:"Water after planting and keep moisture steady, especially during germination and flowering.",su:"Full sun is preferred.",g:"5–10 days",h:[75,100],m:[4,5,6,10,11,12],ph:[5.8,7],t:[21,32],s:[1,2,1],sun:6},
{id:"kamatis",tl:"Kamatis",en:"Tomato",e:"🍅",dp:"0.5–1 cm (seedbed)",wa:"Water regularly at the base; avoid wetting leaves and keep drainage good.",su:"Full sun (6+ hours).",g:"5–10 days",h:[90,120],m:[10,11,12,1,2],ph:[6,6.8],t:[18,30],s:[0,2,1],sun:6},
{id:"talong",tl:"Talong",en:"Eggplant",e:"🍆",dp:"0.5–1 cm (seedbed)",wa:"Keep soil evenly moist; mulch to hold moisture.",su:"Full sun (6+ hours).",g:"7–14 days",h:[90,120],m:[10,11,12,1,2,3],ph:[5.8,6.8],t:[24,32],s:[1,2,1],sun:6},
{id:"kangkong",tl:"Kangkong",en:"Water Spinach",e:"🌿",dp:"1–2 cm",wa:"Needs plenty of water; keep soil wet or shallowly flooded.",su:"Full sun to partial shade.",g:"3–7 days",h:[25,35],m:[1,2,3,4,5,6,7,8,9,10,11,12],ph:[5.5,7],t:[25,35],s:[2,2,0],sun:4,wet:1},
{id:"sitaw",tl:"Sitaw",en:"Yardlong Bean",e:"🫘",dp:"2–3 cm",wa:"Moderate watering; avoid waterlogging. Provide a trellis.",su:"Full sun (6+ hours).",g:"4–8 days",h:[55,70],m:[10,11,12,1,2,3],ph:[6,7],t:[22,34],s:[1,2,2],sun:6},
{id:"labanos",tl:"Labanos",en:"Radish",e:"🌰",dp:"1–1.5 cm",wa:"Keep soil evenly moist for tender roots.",su:"Full sun to partial shade.",g:"3–7 days",h:[25,40],m:[10,11,12,1,2],ph:[6,7],t:[15,28],s:[0,2,2],sun:4},
{id:"okra",tl:"Okra",en:"Okra",e:"🫑",dp:"2–3 cm",wa:"Water when the top soil is dry; tolerates short dry spells.",su:"Full sun (6+ hours).",g:"5–10 days",h:[50,65],m:[3,4,5,6,7,8,9,10],ph:[6,7],t:[24,36],s:[1,2,2],sun:6},
{id:"pechay",tl:"Pechay",en:"Pak Choi",e:"🥬",dp:"0.5–1 cm",wa:"Keep soil consistently moist, light daily watering.",su:"Full sun to partial shade.",g:"3–5 days",h:[25,35],m:[10,11,12,1,2,3],ph:[6,7],t:[18,30],s:[1,2,1],sun:4}];

/* ============================================================
   LISTAHAN NG BINHI (seeds.js): dito idagdag ang bagong binhi.
   Ang datos ay tantiya lamang; i-verify sa DA/BPI o agronomist.
   S(id, Tagalog, English, emoji, lalim, pagtubo, [anihan min,max], [buwan ng pagtatanim],
     [pH], [temp C], [Clay,Loam,Sandy: 0-2], oras ng araw, tubig H/M/L, basa(1 kung mahilig sa basa))
   Ang id ay dapat tugma sa pangalan ng klase sa AI model (maliit na titik, walang space).
   ============================================================ */
const WA={H:"Needs plenty of water; keep soil consistently moist or flooded.",M:"Moderate watering; keep soil evenly moist and avoid waterlogging.",L:"Water when the top soil is dry; tolerates short dry spells."};
const WAT={H:"Kailangan ng maraming tubig; panatilihing laging basa o binabaha ang lupa.",M:"Katamtamang pagdidilig; panatilihing pantay ang basa ng lupa at iwasan ang pagbabaha.",L:"Diligan kapag tuyo na ang ibabaw ng lupa; kaya ang maikling tagtuyot."};
const SU={6:"Full sun (6+ hours).",4:"Full sun to partial shade."},SUT={6:"Buong sikat ng araw (6+ oras).",4:"Buong sikat ng araw hanggang bahagyang lilim."},ALL=[1,2,3,4,5,6,7,8,9,10,11,12];
const S=(id,tl,en,e,dp,g,h,m,ph,t,s,sun,w,wet)=>D.push({id,tl,en,e,dp,wa:WA[w],wat:WAT[w],su:SU[sun],sut:SUT[sun],g,h,m,ph,t,s,sun,wet});
S("ampalaya","Ampalaya","Bitter Melon","🥒","1–2 cm","4–8 days",[60,80],[9,10,11,12,1,2],[6,6.7],[24,34],[1,2,1],6,"M");
S("upo","Upo","Bottle Gourd","🥒","2–3 cm","5–10 days",[60,90],[5,6,10,11,12],[6,7],[24,34],[1,2,1],6,"M");
S("patola","Patola","Sponge Gourd","🥒","2–3 cm","5–10 days",[60,80],[5,6,10,11,12,1],[6,7],[24,35],[1,2,1],6,"M");
S("kalabasa","Kalabasa","Squash","🎃","2–3 cm","5–10 days",[90,110],[10,11,12,1,5,6],[6,7],[22,32],[1,2,2],6,"M");
S("pipino","Pipino","Cucumber","🥒","1–2 cm","3–7 days",[45,60],[10,11,12,1,2,3],[6,7],[22,32],[1,2,2],6,"M");
S("sili","Sili","Chili Pepper","🌶️","0.5–1 cm (seedbed)","7–14 days",[90,120],[10,11,12,1,2,5,6],[6,7],[22,32],[1,2,1],6,"M");
S("sibuyas","Sibuyas","Onion","🧅","0.5–1 cm (seedbed)","7–12 days",[100,140],[11,12,1],[6,7],[15,28],[0,2,1],6,"M");
S("repolyo","Repolyo","Cabbage","🥬","0.5–1 cm (seedbed)","4–8 days",[70,100],[10,11,12,1,2],[6,7],[15,25],[1,2,0],6,"M");
S("karot","Karot","Carrot","🥕","0.5–1 cm","7–14 days",[70,90],[10,11,12,1,2],[6,6.8],[15,25],[0,2,2],6,"M");
S("mustasa","Mustasa","Mustard Greens","🥬","0.5–1 cm","3–5 days",[30,45],[10,11,12,1,2,3],[6,7],[15,28],[1,2,1],4,"M");
S("munggo","Munggo","Mung Bean","🫘","2–3 cm","3–7 days",[60,75],[11,12,1,2,3],[6,7],[25,35],[0,2,2],6,"L");
S("mani","Mani","Peanut","🥜","3–5 cm","5–10 days",[100,130],[10,11,12,1,5,6],[5.8,6.5],[24,33],[0,2,2],6,"M");
S("palay","Palay","Rice","🌾","2–3 cm","3–7 days",[100,130],[5,6,7,11,12,1],[5.5,7],[24,35],[2,2,0],6,"H",1);
S("pakwan","Pakwan","Watermelon","🍉","2–3 cm","4–8 days",[75,95],[10,11,12,1,2],[6,7],[24,35],[0,2,2],6,"M");
S("letsugas","Letsugas","Lettuce","🥬","0.3–0.5 cm","3–7 days",[40,60],[10,11,12,1,2],[6,7],[15,25],[1,2,1],4,"M");
S("malunggay","Malunggay","Moringa","🌿","1–2 cm","7–14 days",[180,240],ALL,[6,7.5],[25,36],[1,2,2],6,"L");
S("alugbati","Alugbati","Malabar Spinach","🌿","1–2 cm","7–14 days",[40,60],ALL,[6,7],[24,35],[1,2,1],4,"M");

S("bataw","Bataw","Hyacinth Bean","🫘","2–3 cm","5–10 days",[90,150],[9,10,11,12],[6,7],[22,32],[1,2,2],6,"L");
S("patani","Patani","Lima Bean","🫘","2–3 cm","5–10 days",[80,120],[10,11,12,1],[6,7],[20,30],[1,2,2],6,"M");
S("sigarilyas","Sigarilyas","Winged Bean","🫘","2–3 cm","7–14 days",[60,90],[5,6,7,10,11],[5.5,6.5],[24,32],[1,2,1],6,"M");
S("singkamas","Singkamas","Jicama","🌰","2–3 cm","7–14 days",[120,150],[5,6,7,8],[6,7],[24,32],[0,2,2],6,"M");
S("saluyot","Saluyot","Jute Mallow","🌿","0.5–1 cm","3–7 days",[40,60],[4,5,6,7,8,9],[6,7.5],[25,35],[1,2,2],6,"M");
S("papaya","Papaya","Papaya","🍈","1–2 cm","14–28 days",[270,360],[5,6,10,11],[6,6.5],[22,32],[1,2,2],6,"M");
/* Tagalog na paglalarawan para sa unang 8 binhi */
const TLX={mais:["Diligan pagkatapos magtanim at panatilihing pantay ang basa, lalo na sa pagtubo at pamumulaklak.","Mas gusto ang buong sikat ng araw."],
kamatis:["Regular na diligan sa puno; iwasang mabasa ang dahon at panatilihing maayos ang drainage.","Buong sikat ng araw (6+ oras)."],
talong:["Panatilihing pantay ang basa ng lupa; gumamit ng mulch para manatili ang halumigmig.","Buong sikat ng araw (6+ oras)."],
kangkong:["Kailangan ng maraming tubig; panatilihing basa o mababaw na binabaha ang lupa.","Buong sikat ng araw hanggang bahagyang lilim."],
sitaw:["Katamtamang pagdidilig; iwasan ang pagbabaha. Maglagay ng trellis o tukod.","Buong sikat ng araw (6+ oras)."],
labanos:["Panatilihing pantay ang basa ng lupa para malambot ang ugat.","Buong sikat ng araw hanggang bahagyang lilim."],
okra:["Diligan kapag tuyo na ang ibabaw ng lupa; kaya ang maikling tagtuyot.","Buong sikat ng araw (6+ oras)."],
pechay:["Panatilihing laging basa ang lupa; magaan na pagdidilig araw-araw.","Buong sikat ng araw hanggang bahagyang lilim."]};
D.forEach(x=>{const t=TLX[x.id];if(t){x.wat=t[0];x.sut=t[1]}});
/* Mga kategorya (para sa filter sa Home) */
const CAT={Gulay:["kamatis","talong","okra","ampalaya","upo","patola","kalabasa","pipino","sili","sibuyas","karot","labanos","singkamas"],
Madahon:["kangkong","pechay","mustasa","repolyo","letsugas","alugbati","saluyot","malunggay"],
Beans:["sitaw","munggo","mani","bataw","patani","sigarilyas"],Butil:["mais","palay"],Prutas:["pakwan","papaya"]};
D.forEach(x=>{x.cat=Object.keys(CAT).find(k=>CAT[k].includes(x.id))||"Iba pa"});

