const find=id=>D.find(x=>x.id==id),$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
/* ===== WIKA / LANGUAGE (Settings) ===== */
const L={
en:{hdsub:"AI-Based Seed Identification and Intelligent Planting Information System",welcome:"Welcome to BinhiScan",welcomeP:"Identify supported seeds, view planting instructions, and keep your scan results in one place.",
scanSeed:"Scan a seed",viewGuides:"View planting guides",savedScans:"Saved scans",seedsCat:"Seeds in catalog",commonH:"Common seeds <small>/ Common seeds in the Philippines</small>",commonP:"Search or tap a seed to view its planting guide.",
search:"Search seed… (e.g. ampalaya)",noSeed:"No seed found.",
scanH:"Scan Seed",scanP:"Choose one method to identify a seed.",scanCam:"Scan Camera",uploadPhoto:"🖼 Upload Photo",camNote:"The camera needs your permission.",
guideH:"Planting Guide",guideP:"Choose a seed to view its planting information. These are general estimates; follow local agricultural advice.",selectSeed:"Select seed",
soilH:"Soil Assessment",soilP:"Add a soil photo (optional) and answer the checklist. A photo is a visual reference only; it cannot measure pH or nutrients.",upload:"🖼 Upload",takePhoto:"📷 Take photo",
q1:"1 · Crop",q2:"2 · Soil appearance",q3:"3 · Moisture now",q4:"4 · Sunlight per day",q5:"5 · Current weather",
clay:"Clay",loam:"Loam",sandy:"Sandy",dry:"Dry",moist:"Moist",wet:"Waterlogged",sun3:"Under 4 hours",sun5:"4–6 hours",sun7:"6+ hours",wSunny:"Sunny",wCloudy:"Cloudy",wRainy:"Rainy",wCool:"Cool",
checkSuit:"Check suitability",photoNote:"Photo added as a visual reference only. Choose the soil type and moisture below.",
seasonH:"Planting Season Check",seasonP:"Checks the current month against seasonal guidance stored in this app. It does not use live weather forecasts.",today:"Today's date on this device",chooseSeed:"Choose seed",checkSeason:"Check season",seasonNote:"Best time depends on variety, local climate, rainfall, and farm conditions.",
setH:"Settings",langL:"Language",histH:"Scan History",histP:"Scan results are stored on this device only. Clearing browser data may remove them.",exportH:"Export history",clearH:"Clear history",noScans:"No scans yet.",viewGuide:"View guide",histCleared:"History cleared",histCopied:"History copied",noCopy:"Copy not available here",noScansTxt:"No scans",
tHome:"Home",tGuide:"Guide",tScan:"Scan",tSoil:"Soil",tSeason:"Season",settings:"Settings",
tips:"<b>Tips for a clear scan</b><br>• Good lighting<br>• One seed type, centered<br>• Close and in focus<br>• Plain background",tryAgain:"Try again",demoBtn:"Try demo scan (random, UI check only)",
hint:"Place the seed inside the frame",camBlocked:"Camera access is blocked. Allow camera permission in your browser settings, then tap the capture button.",camNone:"No camera found on this device. Upload a photo instead.",camBusy:"Another app is using the camera (e.g. Zoom or Teams). Close it, then tap the capture button.",camFail:"Could not open the camera. Tap the capture button to try again, or upload a photo.",
analyzing:"Analyzing…",downloading:p=>"Downloading the AI (one time only)… "+p+"%",
ready:n=>n?`✓ AI model ready · recognizes ${n} seeds.`:`⚠ No trained model in model/ yet. Scanning is off until it is added.`,
noSeedPhoto:"No seed detected in the photo.",notSure:(p,n)=>`Not sure which seed this is (${p}% for ${n}).`,noSupported:"No supported seed detected.",tryCloser:"Try a closer, brighter shot of one seed type.",
errModel:"The AI model files could not be loaded. Please try again later.",errTf:"TensorFlow.js could not load. Check your internet connection and refresh.",errZs:"The built-in AI could not load. Check your internet (about 90 MB on first use) and try again.",errScan:"Scan failed. Please try again.",noModel:"No trained model installed yet. Add it to the model/ folder.",
back:"‹ Back",recBtn:"View recommendations",gMorn:"Good morning",gAft:"Good afternoon",gEve:"Good evening",nowH:m=>`Plant in ${m}`,nowTag:"Plant now",noNow:"No seeds in season this month.",sodH:"Seed of the day",jrnH:"Growth journey",jSow:"Sow",jSprout:"Sprout",jGrow:"Grow",jHarv:"Harvest",alsoNow:"Also good to plant now",inM:n=>n==0?"This month":`In ${n} month${n>1?"s":""}`,recH:"Recommendations",rNow:"Planting now",rBest:"Best months",rSoilH:"Soil & water",rCare:"Care tips",rDisc:"General guidance only. Confirm with your local agriculture office.",close:"Close",nowYes:m=>`${m} is a good month to plant.`,nowNo:(m,n)=>`${m} is not the best month. Next good month: ${n}.`,tSeedbed:"Sow in a seedbed first, then transplant healthy seedlings after about 3–4 weeks.",tTrellis:"Provide a trellis or stakes so the vines can climb.",tLeaf:"Harvest young leaves regularly to encourage new growth.",tTree:"Long-term tree crop: start in a nursery bag and transplant when about 30–50 cm tall, spaced widely.",tWet:"Keep soil wet; this crop tolerates shallow flooding.",tRoot:"Loosen the soil and thin seedlings so roots can grow straight.",tMulch:"Mulch around plants to hold moisture and reduce weeds.",tPh:(a,b)=>`Aim for soil pH ${a}–${b}; add compost or lime if needed.`,tGerm:g=>`Expect germination in ${g}.`,aboutVar:l=>`Available varieties: ${l}.`,aboutGen:(c,h)=>`${c}. ${h}`,demoTag:"DEMO · random result, not real AI",confidence:"confidence",soilBtn:"Check soil suitability",done:"Done",
noData:"⚠ No planting data for this seed yet. Add it to seeds.js.",harvest:(a,b)=>a>=730?`Fruits in about ${Math.round(a/365)}–${Math.round(b/365)} years`:`Harvest in ${a}–${b} days`,
rDepth:"Planting depth",rWater:"Watering",rSun:"Sunlight",rGerm:"Estimated germination",rSoil:"Soil & pH",rMonths:"Best months",about:"about ",
result:"Result",estimate:"Estimate only. Confirm with a real soil test and local agricultural advice.",
lSoil:"Soil type",lPh:"Soil pH (estimated)",lTemp:"Temperature",lMoist:"Moisture",lSun:"Sunlight",lSeason:"Season",
soilIdeal:s=>`Ideal for ${s}.`,soilOk:"Acceptable; mix in compost.",soilBad:"Not ideal. Improve with compost or use raised beds.",
phIn:(p,a,b)=>`~${p} is within ${a}–${b}.`,phLow:(p,a,b)=>`~${p} is acidic; add agricultural lime. Ideal ${a}–${b}.`,phHigh:(p,a,b)=>`~${p} is alkaline; add compost. Ideal ${a}–${b}.`,
tOk:(t,a,b)=>`About ${t}°C is suitable (${a}–${b}°C).`,tNo:(t,a,b)=>`About ${t}°C; ideal is ${a}–${b}°C.`,
mWetOk:s=>`Wet soil suits ${s}.`,mWetNo:"Waterlogged soil risks rot. Improve drainage.",mDryNo:s=>`Too dry; ${s} needs wet soil.`,mDryWn:"Dry soil; irrigate before and after sowing.",mOk:"Soil moisture is good.",
sOk:s=>`Enough sun for ${s}.`,sLow:(s,h)=>`Slightly low; ${s} prefers ${h}+ hours.`,sNo:s=>`Too shady for ${s}.`,
seOk:m=>`${m} is within the planting months.`,seNo:m=>`${m} is outside the best months.`,
vOk:"Suitable to plant",vWn:"Possible with care",vNo:"Not recommended",
goodTime:"Good time to plant",notBest:"Not the best month",
inRange:(m,s)=>`${m} is within the recommended planting months for ${s}.`,outRange:(m,s,n)=>`${m} is outside the recommended months for ${s}. Next good month: ${n}.`,
months:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec",loc:"en-US",
cat:{Lahat:"All",Gulay:"Vegetables",Madahon:"Leafy",Beans:"Beans",Prutas:"Fruits",Herbs:"Herbs"},
pdf:c=>c},
tl:{hdsub:"Sistemang Pang-impormasyon sa Pagkilala ng Binhi at Matalinong Pagtatanim gamit ang AI",welcome:"Maligayang pagdating sa BinhiScan",welcomeP:"Kilalanin ang mga binhi, tingnan ang gabay sa pagtatanim, at itago ang mga resulta ng iyong scan.",
scanSeed:"I-scan ang binhi",viewGuides:"Tingnan ang mga gabay sa pagtatanim",savedScans:"Mga naka-save na scan",seedsCat:"Mga binhi sa listahan",commonH:"Karaniwang binhi <small>/ sa Pilipinas</small>",commonP:"Maghanap o pindutin ang binhi para makita ang gabay sa pagtatanim.",
search:"Maghanap ng binhi… (hal. ampalaya)",noSeed:"Walang nakitang binhi.",
scanH:"I-scan ang Binhi",scanP:"Pumili ng isang paraan para makilala ang binhi.",scanCam:"Gamitin ang Camera",uploadPhoto:"🖼 Mag-upload ng Larawan",camNote:"Kailangan ng camera ang iyong pahintulot.",
guideH:"Gabay sa Pagtatanim",guideP:"Pumili ng binhi para makita ang impormasyon sa pagtatanim. Mga tantiya lamang ito; sundin ang payo ng lokal na agrikultura.",selectSeed:"Pumili ng binhi",
soilH:"Pagsusuri ng Lupa",soilP:"Magdagdag ng larawan ng lupa (opsyonal) at sagutan ang checklist. Gabay lamang sa paningin ang larawan; hindi nito nasusukat ang pH o sustansya.",upload:"🖼 Mag-upload",takePhoto:"📷 Kumuha ng larawan",
q1:"1 · Pananim",q2:"2 · Uri ng lupa",q3:"3 · Basa ng lupa ngayon",q4:"4 · Sikat ng araw bawat araw",q5:"5 · Panahon ngayon",
clay:"Clay (malagkit)",loam:"Loam (katamtaman)",sandy:"Sandy (mabuhangin)",dry:"Tuyo",moist:"Basa-basa",wet:"Binabaha",sun3:"Wala pang 4 na oras",sun5:"4–6 na oras",sun7:"6+ oras",wSunny:"Maaraw",wCloudy:"Maulap",wRainy:"Maulan",wCool:"Malamig",
checkSuit:"Suriin kung angkop",photoNote:"Gabay lamang sa paningin ang larawan. Piliin sa ibaba ang uri at basa ng lupa.",
seasonH:"Pagsusuri ng Panahon ng Pagtatanim",seasonP:"Sinusuri ang kasalukuyang buwan batay sa gabay na nakalagay sa app. Hindi ito gumagamit ng live na weather forecast.",today:"Petsa ngayon sa device na ito",chooseSeed:"Pumili ng binhi",checkSeason:"Suriin ang panahon",seasonNote:"Nakadepende ang pinakamainam na oras sa uri ng binhi, klima, ulan, at kalagayan ng bukid.",
setH:"Settings",langL:"Wika",histH:"Kasaysayan ng Scan",histP:"Sa device na ito lang naka-save ang mga resulta ng scan. Maaaring mabura ang mga ito kapag nilinis ang browser data.",exportH:"I-export ang kasaysayan",clearH:"Burahin ang kasaysayan",noScans:"Wala pang scan.",viewGuide:"Tingnan ang gabay",histCleared:"Nabura na ang kasaysayan",histCopied:"Nakopya ang kasaysayan",noCopy:"Hindi available ang pagkopya dito",noScansTxt:"Walang scan",
tHome:"Home",tGuide:"Gabay",tScan:"Scan",tSoil:"Lupa",tSeason:"Panahon",settings:"Settings",
tips:"<b>Mga tip para sa malinaw na scan</b><br>• Maliwanag ang ilaw<br>• Isang uri ng binhi, nasa gitna<br>• Malapit at malinaw ang focus<br>• Simpleng background",tryAgain:"Subukan ulit",demoBtn:"Subukan ang demo scan (random, pang-check ng UI lang)",
hint:"Ilagay ang binhi sa loob ng frame",camBlocked:"Naka-block ang camera. Payagan ang camera sa settings ng browser, tapos pindutin ang capture button.",camNone:"Walang nakitang camera sa device na ito. Mag-upload na lang ng larawan.",camBusy:"Ginagamit ng ibang app ang camera (hal. Zoom o Teams). Isara ito, tapos pindutin ang capture button.",camFail:"Hindi mabuksan ang camera. Pindutin ang capture button para subukan ulit, o mag-upload ng larawan.",
analyzing:"Sinusuri…",downloading:p=>"Dina-download ang AI (isang beses lang)… "+p+"%",
ready:n=>n?`✓ Handa na ang AI model · nakikilala ang ${n} binhi.`:`⚠ Wala pang trained model sa model/. Hindi pa gagana ang scan.`,
noSeedPhoto:"Walang nakitang binhi sa larawan.",notSure:(p,n)=>`Hindi sigurado kung anong binhi ito (${p}% para sa ${n}).`,noSupported:"Walang nakitang suportadong binhi.",tryCloser:"Subukan ang mas malapit at mas maliwanag na kuha ng isang uri ng binhi.",
errModel:"Hindi ma-load ang mga file ng AI model. Pakisubukan ulit mamaya.",errTf:"Hindi ma-load ang TensorFlow.js. Tingnan ang internet at i-refresh.",errZs:"Hindi ma-load ang built-in AI. Tingnan ang internet (mga 90 MB sa unang gamit) at subukan ulit.",errScan:"Hindi natuloy ang scan. Pakisubukan ulit.",noModel:"Wala pang na-install na trained model. Ilagay sa folder na model/.",
back:"‹ Bumalik",recBtn:"Tingnan ang mga rekomendasyon",gMorn:"Magandang umaga",gAft:"Magandang hapon",gEve:"Magandang gabi",nowH:m=>`Itanim ngayong ${m}`,nowTag:"Itanim na",noNow:"Walang binhing nasa panahon ngayong buwan.",sodH:"Binhi ng araw",jrnH:"Paglago ng halaman",jSow:"Tanim",jSprout:"Tumubo",jGrow:"Lumaki",jHarv:"Ani",alsoNow:"Puwede ring itanim ngayon",inM:n=>n==0?"Ngayong buwan":`Sa loob ng ${n} buwan`,recH:"Mga Rekomendasyon",rNow:"Pagtatanim ngayon",rBest:"Pinakamainam na buwan",rSoilH:"Lupa at tubig",rCare:"Mga tip sa pag-aalaga",rDisc:"Pangkalahatang gabay lamang. Kumpirmahin sa lokal na tanggapan ng agrikultura.",close:"Isara",nowYes:m=>`Magandang buwan ang ${m} para magtanim.`,nowNo:(m,n)=>`Hindi ang pinakamainam na buwan ang ${m}. Susunod na magandang buwan: ${n}.`,tSeedbed:"Ihasik muna sa punlaan, saka ilipat ang malulusog na punla pagkalipas ng mga 3–4 na linggo.",tTrellis:"Maglagay ng trellis o tukod para makaakyat ang baging.",tLeaf:"Regular na anihin ang murang dahon para tumubo ang mga bago.",tTree:"Pangmatagalang puno: simulan sa nursery bag at ilipat kapag mga 30–50 cm na ang taas, may malawak na pagitan.",tWet:"Panatilihing basa ang lupa; kaya ng pananim na ito ang mababaw na baha.",tRoot:"Lagyan ng luwag ang lupa at manipisan ang punla para tumuwid ang ugat.",tMulch:"Maglagay ng mulch para manatili ang halumigmig at kumonti ang damo.",tPh:(a,b)=>`Layuning pH ng lupa ay ${a}–${b}; dagdagan ng compost o lime kung kailangan.`,tGerm:g=>`Inaasahang tutubo sa loob ng ${g}.`,aboutVar:l=>`Mga available na uri: ${l}.`,aboutGen:(c,h)=>`${c}. ${h}`,demoTag:"DEMO · random na resulta, hindi totoong AI",confidence:"kumpiyansa",soilBtn:"Suriin ang lupa",done:"Tapos na",
noData:"⚠ Wala pang planting data ang binhing ito. Idagdag ito sa seeds.js.",harvest:(a,b)=>a>=730?`Mamumunga sa mga ${Math.round(a/365)}–${Math.round(b/365)} taon`:`Aanihin sa loob ng ${a}–${b} araw`,
rDepth:"Lalim ng pagtatanim",rWater:"Pagdidilig",rSun:"Sikat ng araw",rGerm:"Tinatayang pagtubo",rSoil:"Lupa at pH",rMonths:"Pinakamainam na buwan",about:"mga ",
result:"Resulta",estimate:"Tantiya lamang. Kumpirmahin sa tunay na soil test at payo ng lokal na agrikultura.",
lSoil:"Uri ng lupa",lPh:"pH ng lupa (tantiya)",lTemp:"Temperatura",lMoist:"Basa ng lupa",lSun:"Sikat ng araw",lSeason:"Panahon",
soilIdeal:s=>`Angkop para sa ${s}.`,soilOk:"Puwede; haluan ng compost.",soilBad:"Hindi angkop. Dagdagan ng compost o gumamit ng nakataas na taniman.",
phIn:(p,a,b)=>`Ang ~${p} ay pasok sa ${a}–${b}.`,phLow:(p,a,b)=>`Ang ~${p} ay maasim; dagdagan ng agricultural lime. Mainam ang ${a}–${b}.`,phHigh:(p,a,b)=>`Ang ~${p} ay alkaline; dagdagan ng compost. Mainam ang ${a}–${b}.`,
tOk:(t,a,b)=>`Ang mga ${t}°C ay angkop (${a}–${b}°C).`,tNo:(t,a,b)=>`Mga ${t}°C; mainam ang ${a}–${b}°C.`,
mWetOk:s=>`Angkop sa ${s} ang basang lupa.`,mWetNo:"Maaaring mabulok kapag binabaha ang lupa. Ayusin ang drainage.",mDryNo:s=>`Masyadong tuyo; kailangan ng ${s} ng basang lupa.`,mDryWn:"Tuyo ang lupa; diligan bago at pagkatapos magtanim.",mOk:"Maganda ang basa ng lupa.",
sOk:s=>`Sapat ang araw para sa ${s}.`,sLow:(s,h)=>`Medyo kulang; mas gusto ng ${s} ang ${h}+ oras.`,sNo:s=>`Masyadong malilim para sa ${s}.`,
seOk:m=>`Ang ${m} ay pasok sa mga buwan ng pagtatanim.`,seNo:m=>`Ang ${m} ay wala sa pinakamainam na buwan.`,
vOk:"Angkop magtanim",vWn:"Puwede kung aalagaan",vNo:"Hindi inirerekomenda",
goodTime:"Magandang panahon magtanim",notBest:"Hindi ang pinakamainam na buwan",
inRange:(m,s)=>`Ang ${m} ay pasok sa inirerekomendang buwan ng pagtatanim ng ${s}.`,outRange:(m,s,n)=>`Ang ${m} ay wala sa inirerekomendang buwan para sa ${s}. Susunod na magandang buwan: ${n}.`,
months:"Ene Peb Mar Abr May Hun Hul Ago Set Okt Nob Dis",loc:"fil-PH",
cat:{Lahat:"Lahat",Gulay:"Gulay",Madahon:"Madahon",Beans:"Beans",Prutas:"Prutas",Herbs:"Herbs"}}};
let lang="en";try{lang=localStorage.getItem("bs_lang")||"en"}catch(e){}if(!L[lang])lang="en";
const t=(k,...a)=>{const v=L[lang][k]!==undefined?L[lang][k]:L.en[k];return typeof v=="function"?v(...a):v};
const MO=()=>t("months").split(" ");
const dTx=s=>lang=="tl"?(s.replace("(seedbed)","(punlaan)").replace(/ days?$/," araw")):s;
const wTx=s=>lang=="tl"&&s.wat?s.wat:s.wa, uTx=s=>lang=="tl"&&s.sut?s.sut:s.su;
const NOW=new Date().getMonth()+1,CL=["Clay","Loam","Sandy"];
const WX={Sunny:33,Cloudy:29,Rainy:26,Cool:20};
let hist=[];try{hist=JSON.parse(localStorage.getItem("bs_h")||"[]")}catch(e){}
hist=hist.filter(h=>D.some(s=>s.id==h.id));
const saveH=()=>{try{localStorage.setItem("bs_h",JSON.stringify(hist))}catch(e){}};
function toast(m){const e=$("#toast");e.textContent=m;e.classList.add("on");setTimeout(()=>e.classList.remove("on"),2200)}
const opts=[...D].sort((a,b)=>a.en.localeCompare(b.en)).map(s=>`<option value="${s.id}">${s.en}${s.multi?" – "+s.type:""}</option>`).join("");
["#gs","#cs","#ses"].forEach(i=>$(i).innerHTML=opts);
let TR=[];
let CATF="Lahat";const CATS=["Lahat","Gulay","Madahon","Beans","Prutas"];
$("#cats").onclick=e=>{const b=e.target.closest("[data-c]");if(b){CATF=b.dataset.c;renderSeeds()}};
function renderSeeds(){const q=($("#sq").value||"").toLowerCase();
$("#cats").innerHTML=CATS.map(c=>`<button class="chip ${c==CATF?"on":""}" data-c="${c}">${t("cat")[c]}</button>`).join("");
$("#seeds").innerHTML=D.filter(s=>(s.id+s.tl+s.en).toLowerCase().includes(q)&&(CATF=="Lahat"||s.cat==CATF)).map(s=>`<button class="chip" data-s="${s.id}">${ico(s)} ${s.en}${s.multi?" – "+s.type:""}</button>`).join("")||`<span class="note">${t("noSeed")}</span>`;
$("#nc").textContent=D.length}
$("#sq").oninput=renderSeeds;

const cal=s=>MO().map((m,i)=>`<i class="${s.m.includes(i+1)?"y":""} ${i+1==NOW?"n":""}" style="--i:${i}">${m}</i>`).join("");
const row=(a,b)=>`<div class="gr"><b>${a}</b><p>${b}</p></div>`;
const GT={};
function guide(s0,both,tid){tid=tid||(!both&&s0.types.length>1?(GT[s0.id]||s0.types[0].id):null);const u=tid&&s0.types.find(x=>x.id==tid),s=u&&u.o?{...s0,...u.o}:s0;return (s.custom?`<p class="note">${t("noData")}</p>`:"")+`<div class="gh"><span>${ico(s)}</span><div><h3>${s.tl==s.en?s.en:s.tl+" / "+s.en}</h3><small>${t("harvest",s.h[0],s.h[1])}</small></div></div>`+(both?"":typesUI(s0,tid))+row(t("rDepth"),t("about")+dTx(s.dp))+row(t("rWater"),wTx(s))+row(t("rSun"),uTx(s))+row(t("rGerm"),t("about")+dTx(s.g))+row(t("rSoil"),CL.filter((_,i)=>s.s[i]==2).join(" / ")+" · pH "+s.ph[0]+"–"+s.ph[1])+`<div class="gr"><b>${t("rMonths")}</b><div class="cal">${cal(s)}</div></div>`}
function cur(){const p=$$(".pg.on")[0];return p?p.id.slice(2):"home"}
function go(p,id){$$(".pg").forEach(x=>x.classList.toggle("on",x.id=="p-"+p));$$(".tab [data-go]").forEach(b=>b.classList.toggle("on",b.dataset.go==p));
if(id){["#gs","#cs","#ses"].forEach(i=>$(i).value=id)}
if(p=="home"){$("#ns").textContent=hist.length;renderHome();countUps()}if(p=="soil")scene();if(p=="scan")openCam();if(p=="guide")renderGuide();if(p=="settings")renderH();
$("#sout").hidden=true;$("#sout2").innerHTML="";scrollTo(0,0)}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b){e.preventDefault();ov(null);go(b.dataset.go)}});
$("#hb").onclick=()=>{ov(null);go("settings")};$("#gs").onchange=()=>renderGuide();$("#gout").onclick=e=>{const b=e.target.closest("[data-t]");if(b){GT[$("#gs").value]=b.dataset.t;renderGuide()}};
$("#seeds").onclick=e=>{const b=e.target.closest("[data-s]");if(b)go("guide",b.dataset.s)};

$("#sbt").onclick=()=>{const s=find($("#ses").value),ok=s.m.includes(NOW),nx=[...s.m,...s.m.map(x=>x+12)].find(x=>x>NOW),M=MO(),away=ok?0:nx-NOW,oth=D.filter(x=>x.id!=s.id&&x.m.includes(NOW)&&x.m.length<12).slice(0,8);
$("#sout2").innerHTML=`<div class="sres"><div class="sbadge ${ok?"ok":"wn"}"><span class="se">${ico(s)}</span><div><span class="verdict ${ok?"ok":"wn"}">${ok?t("goodTime"):t("notBest")}</span><small>${t("inM",away)}</small></div></div><p>${ok?t("inRange",M[NOW-1],s.en):t("outRange",M[NOW-1],s.en,M[(nx-1)%12])}</p><div class="cal">${cal(s)}</div>${oth.length?`<h4 class="alh">${t("alsoNow")}</h4><div class="chips">${oth.map((x,k)=>`<button class="chip now" style="--c:${k}" data-s="${x.id}">${ico(x)} ${x.en}</button>`).join("")}</div>`:""}</div>`};
$("#sout2").onclick=e=>{const b=e.target.closest("[data-s]");if(b)go("guide",b.dataset.s)};
$("#chk").onclick=()=>{const s=find($("#cs").value),sv=s.s[CL.indexOf($("#so").value)],ph=({Clay:6.8,Loam:6.5,Sandy:6})[$("#so").value],mo=$("#mo").value,sn=+$("#sn").value,tm=WX[$("#wx").value],inS=s.m.includes(NOW),M=MO();let r=[],p=0;
const A=(l,a,b,n)=>{r.push([l,a,b]);p+=n};
sv==2?A("ok",t("lSoil"),t("soilIdeal",s.en),25):sv==1?A("wn",t("lSoil"),t("soilOk"),15):A("no",t("lSoil"),t("soilBad"),4);
ph>=s.ph[0]&&ph<=s.ph[1]?A("ok",t("lPh"),t("phIn",ph,s.ph[0],s.ph[1]),20):A("wn",t("lPh"),ph<s.ph[0]?t("phLow",ph,s.ph[0],s.ph[1]):t("phHigh",ph,s.ph[0],s.ph[1]),9);
tm>=s.t[0]&&tm<=s.t[1]?A("ok",t("lTemp"),t("tOk",tm,s.t[0],s.t[1]),20):A("no",t("lTemp"),t("tNo",tm,s.t[0],s.t[1]),5);
mo=="Waterlogged"?(s.wet?A("ok",t("lMoist"),t("mWetOk",s.en),15):A("no",t("lMoist"),t("mWetNo"),2)):mo=="Dry"?(s.wet?A("no",t("lMoist"),t("mDryNo",s.en),3):A("wn",t("lMoist"),t("mDryWn"),9)):A("ok",t("lMoist"),t("mOk"),15);
sn>=s.sun?A("ok",t("lSun"),t("sOk",s.en),10):sn>=s.sun-2?A("wn",t("lSun"),t("sLow",s.en,s.sun),6):A("no",t("lSun"),t("sNo",s.en),2);
inS?A("ok",t("lSeason"),t("seOk",M[NOW-1]),10):A("wn",t("lSeason"),t("seNo",M[NOW-1]),3);
const v=p>=75?["ok",t("vOk")]:p>=50?["wn",t("vWn")]:["no",t("vNo")],I={ok:"✓",wn:"!",no:"✕"};
const o=$("#sout");o.hidden=false;o.innerHTML=`<h2>${t("result")} <small>— ${s.en}</small></h2><div class="gauge ${v[0]}"><svg viewBox="0 0 160 90"><path d="M10 80A70 70 0 0 1 150 80" fill="none" stroke="var(--line)" stroke-width="12" stroke-linecap="round"/><path d="M10 80A70 70 0 0 1 150 80" fill="none" stroke="var(--c)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${p/100*220} 220" class="gp" style="--d:${p/100*220}"/></svg><b class="cn" data-n="${p}">0</b></div><div style="text-align:center"><span class="verdict ${v[0]}">${v[1]}</span></div>`+r.map((c,i)=>`<div class="chk ${c[0]}" style="--k:${i}"><i>${I[c[0]]}</i><div><b>${c[1]}</b><span>${c[2]}</span></div></div>`).join("")+`<p class="note">${t("estimate")}</p>`;o.scrollIntoView({behavior:"smooth"});$$("#sout .cn").forEach(e=>countUp(e,+e.dataset.n,1300))};
function renderH(){$("#hl").innerHTML=hist.length?hist.map((h,i)=>{const s=find(h.id);return `<div class="hr"><div><b>${ico(s)} ${s.tl} (${s.en})</b><small>${h.ts} · ${h.c.toFixed(1)}%</small></div><button class="btn g" data-h="${h.id}">${t("viewGuide")}</button></div>`}).join(""):`<p class="note" style="margin-top:14px">${t("noScans")}</p>`;$$("[data-h]").forEach(b=>b.onclick=()=>go("guide",b.dataset.h))}
$("#clr").onclick=()=>{hist=[];saveH();renderH();toast(t("histCleared"))};
$("#exp").onclick=async()=>{const x=hist.map(h=>`${h.ts} - ${find(h.id).tl} (${find(h.id).en}) - ${h.c}%`).join("\n")||t("noScansTxt");try{await navigator.clipboard.writeText(x);toast(t("histCopied"))}catch(e){toast(t("noCopy"))}};
// ---- Scan ----
let stream=null;const ov=n=>["cam","ana","res"].forEach(x=>$("#"+x).classList.toggle("on",x==n));
const stopCam=()=>{clearTimeout(live);live=null;if(stream)stream.getTracks().forEach(t=>t.stop());stream=null};
async function openCam(){ov("cam");$("#tipbox").hidden=true;$("#hint").textContent=t("hint");
try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false});$("#vid").srcObject=stream;liveStart()}catch(e){stream=null;const n=e&&e.name;$("#hint").textContent=n=="NotAllowedError"?t("camBlocked"):n=="NotFoundError"?t("camNone"):n=="NotReadableError"?t("camBusy"):t("camFail")}}
$("#bcam").onclick=openCam;$("#retry").onclick=openCam;$("#cb").onclick=()=>{stopCam();ov(null)};$("#ab").onclick=()=>ov(null);
$("#tips").onclick=()=>$("#tipbox").hidden=!$("#tipbox").hidden;
$("#shut").onclick=()=>{if(!stream){if(matchMedia("(pointer:coarse)").matches)$("#camin").click();else openCam();return}const v=$("#vid"),c=document.createElement("canvas");c.width=v.videoWidth;c.height=v.videoHeight;c.getContext("2d").drawImage(v,0,0);c.toBlob(b=>{stopCam();scan(b)},"image/jpeg",.9)};
["up","up2","camin"].forEach(id=>$("#"+id).onchange=e=>{stopCam();scan(e.target.files[0]);e.target.value=""});
/* ===== SARILING AI MODEL (TensorFlow.js) =====
   Galing sa training/train.py. Ilagay ang laman ng training/out/tfjs/ sa folder na model/
   (model.json, mga .bin, labels.json). Walang Claude o API na ginagamit. */
const MIN_CONF=0.50;   // normal seed-match threshold
const MIN_MARGIN=0.08; // minimum gap between the top two model predictions
let net=null,labels=null;
async function getLabels(){for(const f of["labels.json","metadata.json"]){try{const r=await fetch("model/"+f);if(!r.ok)continue;const j=await r.json(),l=Array.isArray(j)?j:j.labels;if(Array.isArray(l)&&l.length)return l.map(x=>String(x).trim().toLowerCase())}catch(e){}}throw 0}
async function loadModel(){if(typeof tf==="undefined")throw{code:"notf"};if(net)return net;
try{labels=await getLabels();net=await tf.loadLayersModel("model/model.json");return net}catch(e){console.error(e);throw{code:"model"}}}   // o galing sa folder na model/
function crop(src){const w=src.videoWidth||src.naturalWidth,h=src.videoHeight||src.naturalHeight,s=Math.min(w,h);
return tf.tidy(()=>tf.browser.fromPixels(src).slice([Math.floor((h-s)/2),Math.floor((w-s)/2),0],[s,s,3]).resizeBilinear([224,224]).toFloat().div(127.5).sub(1))}
async function predict(src,tta,base){const T=base?await loadAny(base):null,m=T?T.m:await loadModel(),labs=T?T.l:labels;
const p=tf.tidy(()=>{const x=crop(src),v=[x];if(tta)v.push(x.reverse(1),x.reverse(0),x.reverse([0,1]));return m.predict(tf.stack(v)).mean(0)});
const pr=Array.from(await p.data());p.dispose();const o=pr.map((c,i)=>[c,i]).sort((a,b)=>b[0]-a[0]);
return{top:o.slice(0,3),conf:o[0][0],margin:o[0][0]-o[1][0],name:labs[o[0][1]].toLowerCase()}}
async function identifyModel(f){const img=new Image();img.src=URL.createObjectURL(f);await img.decode();
const r=await predict(img,true),s=D.find(x=>x.id==r.name),a=r.top[0],b=r.top[1];
if(r.name=="not_seed"&&r.conf>=0.40)return{id:null,reason:()=>t("noSeedPhoto")};
if(!s)return{id:null,reason:()=>t("notSure")};
// Very uncertain results are rejected. Borderline matches are shown as POSSIBLE only,
// so the app never presents them as a confirmed identification.
if(r.conf<0.40||r.margin<0.05)return{id:null,reason:()=>t("notSure")};
const low=(r.conf<MIN_CONF||r.margin<MIN_MARGIN);
lastTy=null;if(s.types.length>1){try{const q=await predict(img,true,"model/types/"+s.id);if(q.conf>=.6&&q.margin>=.15)lastTy={name:q.name,conf:q.conf}}catch(e){}}
return{id:s.id,c:r.conf*100,low}}
let lastN=0,lastTy=null;const TMC={};
async function loadAny(b){if(!TMC[b])TMC[b]=(async()=>{const m=await tf.loadLayersModel(b+"/model.json");let l=null;for(const f of["labels.json","metadata.json"]){try{const r=await fetch(b+"/"+f);if(!r.ok)continue;const j=await r.json(),a=Array.isArray(j)?j:j.labels;if(a&&a.length){l=a.map(x=>String(x).trim().toLowerCase());break}}catch(e){}}if(!l)throw 0;return{m,l}})();try{return await TMC[b]}catch(e){delete TMC[b];throw e}}
function typesUI(s,tid){if(s.types.length<2)return"";const u=s.types.find(x=>x.id==tid)||s.types[0];return`<div class="gr"><b>${lang=="tl"?"Uri":"Type"}</b><div class="chips" style="margin-top:8px">`+s.types.map(x=>`<button class="chip${x.id==u.id?" on":""}" data-t="${x.id}">${x.name}</button>`).join("")+`</div><p class="note" style="margin:8px 0 0">${u.desc}</p></div>`}
function typesList(s){const L=s.types||[];if(!L.length)return"";return row(lang=="tl"?(L.length>1?"Mga uri":"Uri"):(L.length>1?"Types":"Type"),L.map(u=>`<b>${u.name}</b> – ${u.desc}`).join("<br>"))}
function typeHtml(s){const u=s.types.length==1?s.types[0]:(lastTy&&s.types.find(x=>x.id==lastTy.name));
if(u)return`<p style="margin:10px 0 0"><b>${lang=="tl"?"Uri":"Type"}:</b> ${u.name}</p><p class="note" style="margin:4px 0 0">${u.desc}</p>`;
return`<p style="margin:10px 0 0"><b>${lang=="tl"?"Uri":"Type"}:</b> <small class="note">${lang=="tl"?"(piliin ang uri)":"(tap to choose)"}</small></p><div class="chips" style="justify-content:center;margin-top:8px">`+s.types.map(x=>`<button class="chip" data-t="${x.id}">${x.name}</button>`).join("")+`</div>`}
/* Hanapin at i-outline (dilaw) ang bawat binhi: background = median ng gilid ng larawan, hinihiwalay gamit ang Otsu threshold */
async function outlined(f){const im=new Image();im.src=URL.createObjectURL(f);await im.decode();
const W=Math.min(480,im.naturalWidth),H=Math.round(im.naturalHeight*W/im.naturalWidth),c=document.createElement("canvas");c.width=W;c.height=H;
const g=c.getContext("2d",{willReadFrequently:true});g.drawImage(im,0,0,W,H);const id=g.getImageData(0,0,W,H),d=id.data,N=W*H;
const bs=[];for(let x=0;x<W;x++)bs.push(x*4,((H-1)*W+x)*4);for(let y=0;y<H;y++)bs.push(y*W*4,(y*W+W-1)*4);
const med=k=>{const a=bs.map(i=>d[i+k]).sort((p,q)=>p-q);return a[a.length>>1]},B=[med(0),med(1),med(2)];
const dist=new Float32Array(N),hist=new Uint32Array(256);
for(let i=0;i<N;i++){const e=Math.hypot(d[i*4]-B[0],d[i*4+1]-B[1],d[i*4+2]-B[2]);dist[i]=e;hist[Math.min(255,e|0)]++}
let sum=0;for(let t=0;t<256;t++)sum+=t*hist[t];let wb=0,sb=0,best=0,th=40;
for(let t=0;t<256;t++){wb+=hist[t];if(!wb)continue;const wf=N-wb;if(!wf)break;sb+=t*hist[t];const v=wb*wf*(sb/wb-(sum-sb)/wf)**2;if(v>best){best=v;th=t}}
th=Math.max(th,30);const m=new Uint8Array(N);for(let i=0;i<N;i++)m[i]=dist[i]>th?1:0;
const seen=new Uint8Array(N),keep=new Uint8Array(N);let n=0;const st=[];
for(let s=0;s<N;s++){if(!m[s]||seen[s])continue;const px=[];st.push(s);seen[s]=1;
while(st.length){const p=st.pop();px.push(p);const x=p%W;
if(x>0&&m[p-1]&&!seen[p-1]){seen[p-1]=1;st.push(p-1)}if(x<W-1&&m[p+1]&&!seen[p+1]){seen[p+1]=1;st.push(p+1)}
if(p>=W&&m[p-W]&&!seen[p-W]){seen[p-W]=1;st.push(p-W)}if(p<N-W&&m[p+W]&&!seen[p+W]){seen[p+W]=1;st.push(p+W)}}
if(px.length>N*.003&&px.length<N*.5){n++;for(const p of px)keep[p]=1}}
if(!n||n>60)return null;
for(let p=0;p<N;p++){if(!keep[p])continue;const x=p%W;
if(x==0||x==W-1||p<W||p>=N-W||!keep[p-1]||!keep[p+1]||!keep[p-W]||!keep[p+W])for(const q of[p,p+1,p+W]){if(q<N){d[q*4]=255;d[q*4+1]=214;d[q*4+2]=10}}}
g.putImageData(id,0,0);return{url:c.toDataURL("image/jpeg",.92),n}}
let live=null;
async function liveStart(){clearTimeout(live);const h=$("#hint");if(!(await hasTrained()))return;try{await loadModel()}catch(e){return}
let last=null,n=0;const tick=async()=>{if(!stream||!$("#cam").classList.contains("on"))return;const v=$("#vid");
if(v.videoWidth){try{const r=await predict(v,false),s=D.find(x=>x.id==r.name);
if(s&&r.conf>=MIN_CONF&&r.margin>=MIN_MARGIN){h.innerHTML=`${ico(s)} ${lang=="tl"?s.tl:s.en} · ${Math.round(r.conf*100)}%`;h.classList.add("lock");n=r.name==last?n+1:1;last=r.name;if(n>=4){$("#shut").click();return}}
else{h.textContent=t("hint");h.classList.remove("lock");last=null;n=0}}catch(e){}}
live=setTimeout(tick,300)};tick()}
/* ===== AI MODE ===== "model" = totoong machine learning (galing sa training/train.py) | "demo" = random, pang-check ng UI lang */
let AI_MODE="model",demoOnce=false,lastFile=null;
async function demoScan(){
await new Promise(r=>setTimeout(r,900));
const supported=(labels||[]).filter(x=>x!=="not_seed").map(x=>D.find(s=>s.id===x)).filter(Boolean);
const pool=supported.length?supported:D;
const s=pool[Math.floor(Math.random()*pool.length)];
return{id:s.id,c:88,demo:true}
}
let lastDemo=false;
let modelWhy="";
async function hasTrained(){modelWhy="";const U=f=>new URL("model/"+f,location.href).href;
try{await getLabels()}catch(e){modelWhy="metadata.json not found: "+U("metadata.json");return false}
try{const r=await fetch(U("model.json"));if(!r.ok){modelWhy="model.json error "+r.status+": "+U("model.json");return false}return true}catch(e){modelWhy="network error: "+U("model.json");return false}}
async function identify(f){if(AI_MODE=="demo"||demoOnce){demoOnce=false;return demoScan()}return(await hasTrained())?identifyModel(f):{id:null,reason:()=>t("noModel")+(modelWhy?"\n["+modelWhy+"]":"")}}
async function scan(file){if(!file)return;lastFile=file;let url=URL.createObjectURL(file);lastN=0;lastTy=null;$("#aimg").src=url;$("#sw").style.display="";$("#retry").hidden=true;$("#atx").textContent=t("analyzing");ov("ana");
const fail=t=>{$("#sw").style.display="none";$("#atx").innerHTML=t;$("#retry").hidden=false;};
try{const o=await outlined(file);if(o){url=o.url;lastN=o.n;$("#aimg").src=url}}catch(e){}
try{const r=await identify(file);if(!r||!find(r.id)){fail((r&&r.reason?r.reason():t("noSupported"))+"<br><small style='font:400 13px var(--sans);color:var(--mut)'>"+t("tryCloser")+"</small>");return}
const c=Math.max(0,Math.min(100,+r.c||0));
if(r.low){openPossible(r.id,url);return}
hist.unshift({id:r.id,c,ts:new Date().toLocaleString(t("loc"))});hist=hist.slice(0,30);saveH();openRes(r.id,c,url)}
catch(e){console.error(e);const m=e.code=="model",nt=e.code=="notf";fail(m?t("errModel"):nt?t("errTf"):e.code=="zs"?t("errZs"):t("errScan"));}}
function openPossible(id,img){
const s=find(id),R=$("#res");
R.innerHTML=`<div class="in"><button class="btn g" id="pbk" style="width:auto;padding:11px 18px;margin-bottom:12px">${t("back")}</button><div class="card" style="text-align:center"><div class="circ sm"><img src="${img}" alt=""></div><span class="verdict wn">${lang=="tl"?"Posibleng tugma":"Possible match"}</span><h2 style="font-size:26px;margin:12px 0 4px">${ico(s)} ${lang=="tl"?s.tl:s.en}</h2><p class="note">${lang=="tl"?"Hindi pa kumpirmado ang pagkilala ng AI. Subukan ang isang binhi lamang, malinaw ang focus, at plain ang background.":"The AI match is not confirmed. Try one seed at a time, in focus, against a plain background."}</p></div><button class="btn" id="ptry">${t("tryAgain")}</button></div>`;
ov("res");R.scrollTop=0;$("#pbk").onclick=()=>{ov(null);go("home")};$("#ptry").onclick=()=>{ov(null);go("scan")};
}
function aboutTx(s){const T=s.types||[];if(T.length==1)return T[0].desc+".";if(T.length>1)return t("aboutVar",T.map(x=>x.name).join(", "));return t("aboutGen",(t("cat")[s.cat]||s.cat),t("harvest",s.h[0],s.h[1]))}
const ILL={
g:'<svg viewBox="0 0 160 100" class="ill"><rect class="soil" x="0" y="68" width="160" height="32"/><ellipse class="sd" cx="80" cy="82" rx="9" ry="6"/><path class="stem" d="M80 76V44"/><path class="lfa" d="M80 54C68 54 60 48 58 38C70 38 78 44 80 54Z"/><path class="lfb" d="M80 50C80 38 88 30 100 28C102 40 94 48 80 50Z"/></svg>',
p:'<svg viewBox="0 0 160 100" class="ill"><rect class="soil" x="0" y="68" width="160" height="32"/><ellipse class="hole" cx="80" cy="68" rx="22" ry="6"/><g class="drop"><path class="stem" d="M80 70V46"/><path class="lfa st" d="M80 56C69 56 62 51 60 42C71 42 78 47 80 56Z"/><path class="lfb st" d="M80 52C80 41 87 34 98 32C100 43 93 50 80 52Z"/></g></svg>',
c:'<svg viewBox="0 0 160 100" class="ill"><g class="sun"><circle cx="128" cy="24" r="9"/><path d="M128 6v6M128 36v6M110 24h6M140 24h6M115 11l4 4M137 33l4 4M141 11l-4 4M119 33l-4 4"/></g><rect class="soil" x="0" y="72" width="160" height="28"/><path class="stem" d="M64 74V50"/><path class="lfa st" d="M64 58C54 58 48 53 46 45C56 45 62 50 64 58Z"/><path class="lfb st" d="M64 54C64 44 70 38 80 36C82 46 76 52 64 54Z"/><g class="wd"><path d="M34 22q5 8 0 11q-5-3 0-11z"/><path d="M48 14q5 8 0 11q-5-3 0-11z"/><path d="M42 34q5 8 0 11q-5-3 0-11z"/></g></svg>'};
function stepTx(s){const T=lang=="tl",M=MO(),sd=(s.dp||"").includes("seedbed"),tree=s.h[0]>=730,id=s.base||s.id,climb=["sitaw","bataw","sigarilyas","patani","tapilan","passion_fruit"].includes(id),
soil=CL.filter((_,i)=>s.s[i]==2).map(x=>t({Clay:"clay",Loam:"loam",Sandy:"sandy"}[x]).replace(/ \(.*\)/,"")).join(" / "),
mo=s.m.length==12?(T?"buong taon":"all year"):s.m.map(x=>M[x-1]).join(", "),dp=dTx(s.dp).replace(" (punlaan)","").replace(" (seedbed)","");
const g=T?`Ihasik nang mga ${dp} ang lalim sa maluwag at basa-basang lupa${sd?" o seed tray":""}. Panatilihing mainit (${s.t[0]}–${s.t[1]}°C); karaniwang tumutubo sa ${dTx(s.g)}.${tree?" Gumamit ng sariwa at nilinis na buto (alisin ang laman).":""}`
:`Sow about ${dp} deep in loose, moist soil${sd?" or a seed tray":""}. Keep it warm (${s.t[0]}–${s.t[1]}°C); seeds usually sprout in ${dTx(s.g)}.${tree?" Use fresh, clean seeds with the pulp removed.":""}`;
const p=T?`Itanim sa ${soil} na lupa na may pH ${s.ph[0]}–${s.ph[1]}. Pinakamainam na buwan: ${mo}.${sd?" Ilipat ang punla pagkalipas ng 3–4 na linggo.":""}${tree?" Ilipat kapag 30–50 cm na ang taas, may malawak na pagitan.":""}${climb?" Maglagay ng trellis o tukod.":""}`
:`Plant in ${soil} soil with pH ${s.ph[0]}–${s.ph[1]}. Best months: ${mo}.${sd?" Transplant seedlings after 3–4 weeks.":""}${tree?" Transplant at 30–50 cm tall, spaced widely.":""}${climb?" Provide a trellis or stakes.":""}`;
const c=`${wTx(s)} ${uTx(s)} ${s.cat=="Madahon"?t("tLeaf")+" ":""}${t("tMulch")} ${t("harvest",s.h[0],s.h[1])}.`;
return[g,p,c]}
function openRecs(id){const s=find(id),ok=s.m.includes(NOW),nx=[...s.m,...s.m.map(x=>x+12)].find(x=>x>NOW),M=MO(),B=$("#sbody"),tx=stepTx(s),T=lang=="tl",
st=[[T?"Pagtubo":"Germination",ILL.g],[T?"Pagtatanim":"Planting",ILL.p],[T?"Wastong Pag-aalaga":"Proper Care",ILL.c]];
$("#sttl").innerHTML=`${T?"Mga Rekomendasyon sa Binhi":"Seed Recommendations"}<small>${ico(s)} ${T?s.tl:s.en}</small>`;
B.innerHTML=`<h3 class="srq">${T?"Ano ang puwede mong gawin sa binhing ito?":"What can you do with this seed?"}</h3>`+st.map((x,i)=>`<div class="stp" style="--k:${i}"><div class="sill">${x[1]}</div><div class="stx"><span class="sn">${i+1}</span><div><b>${x[0]}</b><p>${tx[i]}</p></div></div></div>`).join("")+
`<div class="rnow ${ok?"ok":"wn"}" style="--k:3"><b>${t("rNow")}</b><span>${ok?t("nowYes",M[NOW-1]):t("nowNo",M[NOW-1],M[(nx-1)%12])}</span></div><div class="rsec" style="--k:4"><h4>${t("rBest")}</h4><div class="cal">${cal(s)}</div></div><p class="note">${t("rDisc")}</p><button class="btn" id="rsl">${t("soilBtn")}</button><button class="btn g" data-close>${t("close")}</button>`;
$("#sheet").hidden=false;document.body.style.overflow="hidden";requestAnimationFrame(()=>$("#sheet").classList.add("on"));B.scrollTop=0;
$("#rsl").onclick=()=>{closeSheet();ov(null);go("soil",id)}}
function closeSheet(){const S=$("#sheet");S.classList.remove("on");document.body.style.overflow="";setTimeout(()=>{S.hidden=true},250)}
$("#sheet").addEventListener("click",e=>{if(e.target.closest("[data-close]"))closeSheet()});
document.addEventListener("keydown",e=>{if(e.key=="Escape"&&!$("#sheet").hidden)closeSheet()});
function openRes(id,c,img){const s=find(id),R=$("#res");R.innerHTML=`<div class="in"><button class="btn g bk" id="rbk">${t("back")}</button><div class="card rh"><div class="circ sm"><img src="${img}" alt=""></div><h2>${s.tl}</h2><p class="en">${s.en}</p>${typeHtml(s)}<p class="desc">${aboutTx(s)}</p>${lastN?`<small class="note">${lastN} ${lang=="tl"?"binhi ang nakita":"seeds detected"}</small>`:""}<div class="cf"><span>${Math.round(c)}%</span><div class="bar"><i style="width:${c}%"></i></div><small class="note">${t("confidence")}</small></div></div><div class="card">${guide(s,true,lastTy&&lastTy.name)}</div></div><div class="rbar"><button class="btn" id="rrec"><svg class="ic"><use href="#i-bulb"/></svg>${t("recBtn")}</button><div class="two"><button class="btn g" id="rsoil">${t("soilBtn")}</button><button class="btn g" id="rdone">${t("done")}</button></div></div>`;
ov("res");R.scrollTop=0;R.onclick=e=>{const b=e.target.closest("[data-t]");if(b){lastTy={name:b.dataset.t,conf:1};openRes(id,c,img)}};$("#rbk").onclick=()=>ov(null);$("#rrec").onclick=()=>openRecs(id);$("#rdone").onclick=()=>{ov(null);go("home")};$("#rsoil").onclick=()=>{ov(null);go("soil",id)}}
function soilPhoto(f){if(!f)return;$("#sthumb").innerHTML=`<img class="thumb" src="${URL.createObjectURL(f)}" alt=""><p class="note" style="margin:8px 0 0">${t("photoNote")}</p>`}
$("#sp1").onchange=e=>soilPhoto(e.target.files[0]);$("#sp2").onchange=e=>soilPhoto(e.target.files[0]);

const BS_LOGO='<svg class="logo" viewBox="0 0 100 100"><circle cx="50" cy="46" r="38" fill="#efe7c6"/><path d="M5 50Q50 120 95 50Q50 92 5 50Z" fill="#2f7d32"/><path d="M11 53Q50 104 89 53Q50 88 11 53Z" fill="#86c442"/><path class="st" d="M50 78C50 64 48 52 52 35" fill="none" stroke="#1c2a1c" stroke-width="3.4" stroke-linecap="round"/><path class="lf1" d="M50 63C40 65 31 59 27 48C40 46 48 53 50 63Z" fill="#3a9a3a"/><path class="lf2" d="M52 40C47 24 55 10 69 5C73 22 66 36 52 40Z" fill="#ee8a2b"/></svg>';
$("#hlogo").innerHTML=BS_LOGO.replace('class="logo"','class="hlogo"');

function countUp(el,n,d){d=d||1100;const t0=performance.now();requestAnimationFrame(function f(t){const p=Math.min(1,(t-t0)/d);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})}
function countUps(){countUp($("#ns"),hist.length,900);countUp($("#nc"),D.length,1200)}
function renderHome(){const h=new Date().getHours(),g=h<12?"gMorn":h<18?"gAft":"gEve",mn=new Date().toLocaleDateString(t("loc"),{month:"long"});
$("#greet").innerHTML=`<span class="wave">👋</span><span>${t(g)}</span>`;
const now=D.filter(s=>s.m.includes(NOW)&&s.m.length<12).slice(0,12);
$("#nowc").innerHTML=`<div class="sh"><span>${t("nowH",mn)}</span><span class="tg">${t("nowTag")}</span></div>`+(now.length?`<div class="chips">${now.map((s,i)=>`<button class="chip now" style="--c:${i}" data-s="${s.id}">${ico(s)} ${s.en}</button>`).join("")}</div>`:`<p class="note" style="margin:0">${t("noNow")}</p>`);
const d=new Date(),s=D[Math.floor((d-new Date(d.getFullYear(),0,0))/864e5)%D.length];
$("#sod").innerHTML=`<div class="sod"><div class="sodi">${ico(s)}</div><div><small>${t("sodH")}</small><b>${lang=="tl"?s.tl:s.en}</b><p>${t("harvest",s.h[0],s.h[1])}. ${wTx(s)}</p><button class="btn g sm" data-s="${s.id}">${t("viewGuide")}</button></div></div>`}
["#nowc","#sod"].forEach(i=>$(i).onclick=e=>{const b=e.target.closest("[data-s]");if(b)go("guide",b.dataset.s)});
$("#ffs").innerHTML=Array.from({length:10},(_,i)=>`<i style="--x:${(i*47+9)%96}%;--s:${3+i%3*1.5}px;--d:${11+i%4*2}s;--l:${(i*1.3)%8}s"></i>`).join("");
function journey(s){const T=lang=="tl",g=dTx(s.g),hv=s.h[0]>=730?`${Math.round(s.h[0]/365)}–${Math.round(s.h[1]/365)} ${T?"taon":"yrs"}`:`${s.h[0]}–${s.h[1]} ${T?"araw":"days"}`;
const st=[["🌰",t("jSow"),""],["🌱",t("jSprout"),g],["🌿",t("jGrow"),""],[ico(s),t("jHarv"),hv]];
return`<div class="gr gj"><b>${t("jrnH")}</b><div class="jr"><i class="jl"></i>${st.map((x,i)=>`<div class="js" style="--i:${i}"><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join("")}</div></div>`}
function renderGuide(){const s=find($("#gs").value),o=$("#gout");o.innerHTML=guide(s)+journey(s);$$("#gout .gr").forEach((e,i)=>e.style.setProperty("--k",i))}
function scene(){const s=find($("#cs").value),so=$("#so").value,mo=$("#mo").value,sn=+$("#sn").value,wx=$("#wx").value,
col={Clay:"#8a5a3c",Loam:"#5b3d28",Sandy:"#c9a36a"}[so],sky={Sunny:"#2f7fa8",Cloudy:"#4b6672",Rainy:"#34495a",Cool:"#46708a"}[wx],
sun=(wx=="Rainy"||wx=="Cloudy")?.3:sn>=7?1:sn>=5?.75:.5,nd=mo=="Dry"?0:mo=="Moist"?3:6;
let x="";if(sun>.3||wx=="Sunny")x+=`<g class="sc-sun" style="opacity:${sun}"><circle cx="248" cy="30" r="13" fill="#f1c453"/><path d="M248 6v8M248 46v8M224 30h8M264 30h8M231 13l6 6M259 41l6 6M265 13l-6 6M237 41l-6 6" stroke="#f1c453" stroke-width="3" stroke-linecap="round"/></g>`;
if(wx!="Sunny")x+=`<g class="sc-cloud" fill="#d7e3ea" opacity="${wx=="Rainy"?.95:.8}"><ellipse cx="90" cy="30" rx="30" ry="13"/><ellipse cx="112" cy="24" rx="20" ry="12"/><ellipse cx="70" cy="26" rx="16" ry="10"/></g>`;
if(wx=="Rainy")x+=[70,90,110,130,150].map((v,i)=>`<line class="sc-rn" x1="${v}" y1="46" x2="${v-4}" y2="56" style="animation-delay:${i*.18}s"/>`).join("");
if(wx=="Cool")x+=`<path class="sc-wd" d="M170 40h50M180 52h40M165 64h45" stroke="#cfe6f2" stroke-width="2.5" stroke-linecap="round" fill="none"/>`;
x+=`<rect x="0" y="94" width="300" height="36" fill="${col}"/>`;
x+=[30,80,140,200,260,60,230].map((v,i)=>`<circle cx="${v}" cy="${104+i%3*9}" r="2" fill="#000" opacity=".2"/>`).join("");
if(mo=="Waterlogged")x+=`<ellipse class="sc-pd" cx="150" cy="95" rx="70" ry="4" fill="#7fc4ff" opacity=".6"/>`;
x+=Array.from({length:nd},(_,i)=>`<path class="sc-dp" d="M${50+i*38} 100q4 6 0 9q-4-3 0-9z" fill="#7fc4ff" style="animation-delay:${i*.35}s"/>`).join("");
x+=`<g class="sc-pl"><svg x="118" y="34" width="64" height="64" viewBox="0 0 32 32" overflow="visible">${icoInner(s)||`<text x="16" y="28" font-size="30" text-anchor="middle">${ico(s)}</text>`}</svg></g>`;
$("#scene").innerHTML=`<svg viewBox="0 0 300 130" role="img" aria-hidden="true"><rect width="300" height="94" fill="${sky}"/>${x}</svg>`}
["cs","so","mo","sn","wx"].forEach(i=>$("#"+i).addEventListener("change",scene));
/* ===== APPLY LANGUAGE ===== */
function applyLang(){
document.documentElement.lang=lang=="tl"?"fil":"en";
$$("[data-i]").forEach(el=>el.innerHTML=t(el.dataset.i));
$("#sq").placeholder=t("search");$("#hb").setAttribute("aria-label",t("settings"));
$("#dt").textContent=new Date().toLocaleDateString(t("loc"),{month:"long",day:"numeric",year:"numeric"});
$$("#lang [data-l]").forEach(b=>b.classList.toggle("on",b.dataset.l==lang));
if(!$("#ana").classList.contains("on"))$("#atx").textContent=t("analyzing");
renderSeeds();
const p=cur();if(p=="guide")renderGuide();if(p=="settings")renderH();if(p=="home")$("#ns").textContent=hist.length;renderHome();
$("#sout").hidden=true;$("#sout2").innerHTML=""}
$("#lang").onclick=e=>{const b=e.target.closest("[data-l]");if(!b)return;lang=b.dataset.l;try{localStorage.setItem("bs_lang",lang)}catch(e){}applyLang()};
applyLang();
go("home");

/* ===== HOMEPAGE: 10s BinhiScan splash -> Get Started ===== */
function landing(){const L=$("#land");if(!L)return;
const LOGO=BS_LOGO;
const dots=Array.from({length:16},(_,i)=>`<i style="--x:${(i*37+8)%96}%;--s:${3+(i%4)*2}px;--d:${9+(i%5)*2.2}s;--l:${(i*0.9)%7}s"></i>`).join("");
const name="BinhiScan".split("").map((c,i)=>`<span style="--i:${i}">${c}</span>`).join("");
L.innerHTML=`<div class="lbg">${dots}</div>
<section class="ls"><div class="lseed"><span class="rg"></span><span class="rg"></span><span class="rg"></span><span class="core"></span>${LOGO}<u></u></div>
<h1 class="lname" aria-label="BinhiScan">${name}</h1><p class="ltag2">Kilalanin · Itanim · Palaguin</p><div class="lbar"><i></i></div></section>
<section class="lg2"><div class="lw">
<div class="lorb it" style="--k:0"><div class="o1"><i></i></div><div class="o2"><i></i></div><div class="c">${LOGO}</div></div>
<h1 class="it" style="--k:1">Kilalanin ang binhi.<em>Itanim nang tama.</em></h1>
<p class="sb it" style="--k:2">Identify the seed. Learn how to plant it.</p>
<div class="lpills it" style="--k:3"><span><svg class="ic"><use href="#i-cam"/></svg>Scan</span><span><svg class="ic"><use href="#i-guide"/></svg>Planting guide</span><span><svg class="ic"><use href="#i-sun"/></svg>Best months</span></div>
<button class="btn it" id="lgo" style="--k:4">Get Started <svg class="ic" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div></section>`;
setTimeout(()=>L.classList.add("go"),10000);
$("#lgo").onclick=()=>{L.classList.add("off");go("home")}}
landing();

/* Android back button support (ginagamit ng MainActivity) */
window.__bsBack=()=>{const sh=$("#sheet");if(sh&&!sh.hidden){closeSheet();return true}
if($("#cam").classList.contains("on")||$("#ana").classList.contains("on")||$("#res").classList.contains("on")){stopCam();ov(null);return true}
const L=$("#land");if(L&&!L.classList.contains("off"))return false;
if(cur()!="home"){go("home");return true}return false};
