
const BR=['B011','B012','B016','B018','B024','B046'],DP=['Management','Service','Kitchen'];
const PO=['Manager','Assistant 1','Assistant 2 Service','Assistant 2 Kitchen','Supervisor Service','Supervisor Cold','Supervisor Hot','Supervisor Beverage','Service','Service PT','Reception','Cashier','Maid','Beverage','Hot','Cold','Stir','Store','Wash','Checker'];
const PD={Manager:'Management','Assistant 1':'Management','Assistant 2 Service':'Management','Assistant 2 Kitchen':'Management','Supervisor Service':'Management','Supervisor Cold':'Management','Supervisor Hot':'Management','Supervisor Beverage':'Management',Service:'Service','Service PT':'Service',Reception:'Service',Cashier:'Service',Maid:'Service',Beverage:'Service',Hot:'Kitchen',Cold:'Kitchen',Stir:'Kitchen',Store:'Kitchen',Wash:'Kitchen',Checker:'Kitchen'};
let RS=['ค่าจ้างต่ำ','ย้ายที่อยู่','หาที่ใหม่','ปัญหาส่วนตัว','สิ้นสุดสัญญา','เกษียณ','ถูกเลิกจ้าง'];
const MN=['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
const MS=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
const TG=['< 10 วัน','10 วัน - 1 เดือน','1 - 2 เดือน','2 - 5 เดือน','5 เดือน - 1 ปี','1 - 3 ปี','3 ปีขึ้นไป'];

let employees=[];
let parData={"Manager": {"B011": 0, "B012": 1, "B016": 0, "B018": 1, "B024": 1, "B046": 1}, "Assistant 1": {"B011": 1, "B012": 1, "B016": 1, "B018": 0, "B024": 0, "B046": 1}, "Assistant 2 Service": {"B011": 1, "B012": 0, "B016": 1, "B018": 1, "B024": 1, "B046": 1}, "Assistant 2 Kitchen": {"B011": 1, "B012": 1, "B016": 1, "B018": 1, "B024": 1, "B046": 1}, "Supervisor Service": {"B011": 2, "B012": 1, "B016": 2, "B018": 3, "B024": 1, "B046": 1}, "Supervisor Cold": {"B011": 1, "B012": 1, "B016": 1, "B018": 1, "B024": 1, "B046": 1}, "Supervisor Hot": {"B011": 1, "B012": 1, "B016": 1, "B018": 1, "B024": 1, "B046": 1}, "Supervisor Beverage": {"B011": 1, "B012": 1, "B016": 1, "B018": 1, "B024": 1, "B046": 1}, "Service": {"B011": 4, "B012": 4, "B016": 4, "B018": 7, "B024": 4, "B046": 5}, "Service PT": {"B011": 2, "B012": 2, "B016": 2, "B018": 2, "B024": 1, "B046": 3}, "Reception": {"B011": 0, "B012": 0, "B016": 0, "B018": 2, "B024": 0, "B046": 2}, "Cashier": {"B011": 1, "B012": 2, "B016": 2, "B018": 2, "B024": 1, "B046": 2}, "Maid": {"B011": 1, "B012": 1, "B016": 1, "B018": 1, "B024": 1, "B046": 1}, "Beverage": {"B011": 2, "B012": 2, "B016": 2, "B018": 2, "B024": 2, "B046": 2}, "Hot": {"B011": 3, "B012": 3, "B016": 3, "B018": 4, "B024": 3, "B046": 3}, "Cold": {"B011": 4, "B012": 5, "B016": 5, "B018": 5, "B024": 4, "B046": 6}, "Stir": {"B011": 2, "B012": 2, "B016": 3, "B018": 3, "B024": 2, "B046": 3}, "Store": {"B011": 1, "B012": 1, "B016": 1, "B018": 1, "B024": 1, "B046": 1}, "Wash": {"B011": 1, "B012": 1, "B016": 1, "B018": 2, "B024": 1, "B046": 1}, "Checker": {"B011": 3, "B012": 3, "B016": 3, "B018": 4, "B024": 3, "B046": 3}};
let holdData={"Manager": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Assistant 1": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Assistant 2 Service": {"B011": 0, "B012": 0, "B016": 0, "B018": 1, "B024": 0, "B046": 0}, "Assistant 2 Kitchen": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Supervisor Service": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Supervisor Cold": {"B011": 0, "B012": 1, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Supervisor Hot": {"B011": 0, "B012": 1, "B016": 1, "B018": 0, "B024": 1, "B046": 0}, "Supervisor Beverage": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Service": {"B011": 0, "B012": 2, "B016": 0, "B018": 1, "B024": 0, "B046": 0}, "Service PT": {"B011": 0, "B012": 0, "B016": 2, "B018": 1, "B024": 0, "B046": 0}, "Reception": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Cashier": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Maid": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Beverage": {"B011": 0, "B012": 0, "B016": 0, "B018": 1, "B024": 0, "B046": 0}, "Hot": {"B011": 0, "B012": 1, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Cold": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Stir": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Store": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Wash": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}, "Checker": {"B011": 0, "B012": 0, "B016": 0, "B018": 0, "B024": 0, "B046": 0}};

let curPage=1,pgSize=30,filteredE=[],editIdx=-1,charts={},rTarget=null,isDark=true;
let lastInStamp=null,lastOutStamp=null;

let db=null,auth=null,firebaseOk=false,appReady=false,appLoading=false;

const $=id=>document.getElementById(id);

Chart.register(ChartDataLabels);
Chart.defaults.set('plugins.datalabels',{color:'#94a3b8',font:{size:9,family:'Sarabun'}});

function firebaseConfigOk(c){return c&&typeof c==='object'&&String(c.apiKey||'').trim()&&String(c.projectId||'').trim()}
function ensureFirebase(){
 if(firebaseOk)return true;
 const cfg=window.FIREBASE_CONFIG;
 if(!firebaseConfigOk(cfg))return false;
 if(typeof firebase==='undefined')return false;
 try{if(!firebase.apps.length)firebase.initializeApp(cfg)}catch(e){}
 try{auth=firebase.auth();db=firebase.firestore();firebaseOk=true;return true}catch(e){return false}
}
function empToDoc(e){const d={...e};delete d.id;return d}
function tsFromDate(d){return d?firebase.firestore.Timestamp.fromDate(d):null}
async function persistMeta(){if(!firebaseOk)return;return db.collection('app').doc('meta').set({lastInStamp:tsFromDate(lastInStamp),lastOutStamp:tsFromDate(lastOutStamp)},{merge:true})}
async function persistConfig(){if(!firebaseOk)return;return db.collection('app').doc('config').set({RS,parData,holdData},{merge:true})}
async function persistEmployee(e){if(!firebaseOk)return;const id=String(e.id||'').trim();if(!id)return;return db.collection('employees').doc(id).set(empToDoc(e),{merge:true})}
async function deleteEmployeeById(id){if(!firebaseOk)return;const docId=String(id||'').trim();if(!docId)return;return db.collection('employees').doc(docId).delete()}
async function persistEmployeesBatch(list){
 if(!firebaseOk||!Array.isArray(list)||!list.length)return;
 const batch=db.batch();
 list.forEach(e=>{const id=String(e.id||'').trim();if(!id)return;batch.set(db.collection('employees').doc(id),empToDoc(e),{merge:true})});
 return batch.commit()
}
async function loadUserProfile(user){
 if(!firebaseOk||!user)return null;
 try{const snap=await db.collection('users').doc(user.uid).get();return snap.exists?snap.data():null}catch(e){return null}
}
function setUserUI(name,role){
 const nm=name||'User';
 $('userName').textContent=nm;
 $('userRole').textContent=role||'ผู้ใช้งาน';
 $('userAvatar').textContent=nm.trim()?nm.trim()[0]:'U'
}
async function loadRemoteData(){
 if(!firebaseOk)return;
 const cfgSnap=await db.collection('app').doc('config').get();
 if(cfgSnap.exists){
  const d=cfgSnap.data()||{};
  if(Array.isArray(d.RS))RS=d.RS;
  if(d.parData&&typeof d.parData==='object')parData=d.parData;
  if(d.holdData&&typeof d.holdData==='object')holdData=d.holdData;
 }
 const metaSnap=await db.collection('app').doc('meta').get();
 if(metaSnap.exists){
  const m=metaSnap.data()||{};
  lastInStamp=m.lastInStamp&&typeof m.lastInStamp.toDate==='function'?m.lastInStamp.toDate():null;
  lastOutStamp=m.lastOutStamp&&typeof m.lastOutStamp.toDate==='function'?m.lastOutStamp.toDate():null;
 }
 const empSnap=await db.collection('employees').get();
 employees=empSnap.docs.map(doc=>{
  const d=doc.data()||{};
  const startDate=d.startDate||'';
  return{id:doc.id,name:d.name||'',nickname:d.nickname||'',branch:d.branch||BR[0],dept:d.dept||PD[d.position]||DP[0],position:d.position||PO[0],startDate,endDate:d.endDate||'',status:d.status||'ปัจจุบัน',gender:d.gender||'หญิง',tenureGroup:d.tenureGroup||calcT(startDate),resignReason:d.resignReason||'',note:d.note||''}
 })
}
async function onSignedIn(user){
 if(appLoading)return;
 appLoading=true;
 try{
  const prof=await loadUserProfile(user);
  setUserUI((prof&&prof.name)||user.email||'User',(prof&&prof.role)||'ผู้ใช้งาน');
  await loadRemoteData();
  $('loginPage').style.display='none';
  $('app').classList.add('active');
  if(!appReady){initApp();appReady=true}else{refreshAll()}
 }finally{appLoading=false}
}
function onSignedOut(){
 $('app').classList.remove('active');
 $('loginPage').style.display='flex';
 $('loginPass').value=''
}
function refreshAll(){Object.values(charts).forEach(c=>c.destroy());charts={};popRS();renderDash();filterEmp();renderMP();renderConfig()}
function setupAuthListener(){
 if(!ensureFirebase())return;
 auth.onAuthStateChanged(u=>{if(u)onSignedIn(u);else onSignedOut()})
}

function toggleTheme(){isDark=!isDark;document.documentElement.setAttribute('data-theme',isDark?'':'light');$('themeBtn').innerHTML=isDark?'<i class="fas fa-sun"></i> Light':'<i class="fas fa-moon"></i> Dark';Object.values(charts).forEach(c=>c.destroy());charts={};renderDash()}

async function doLogin(){
 const email=$('loginUser').value.trim(),pass=$('loginPass').value;
 if(!ensureFirebase()){$('loginError').textContent='ยังไม่ได้ตั้งค่า Firebase (js/firebase-config.js)';setTimeout(()=>$('loginError').textContent='',4e3);return}
 if(!email||!pass){$('loginError').textContent='กรอกอีเมลและรหัสผ่าน';setTimeout(()=>$('loginError').textContent='',3e3);return}
 try{await auth.signInWithEmailAndPassword(email,pass)}catch(e){$('loginError').textContent='อีเมลหรือรหัสผ่านไม่ถูกต้อง';setTimeout(()=>$('loginError').textContent='',3e3)}
}
async function doLogout(){try{if(firebaseOk&&auth)await auth.signOut()}catch(e){}onSignedOut()}
$('loginPass').addEventListener('keypress',e=>{if(e.key==='Enter')doLogin()});

document.querySelectorAll('.nav-item').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));item.classList.add('active');const pg=item.dataset.page;document.querySelectorAll('.page-content').forEach(p=>p.classList.remove('active'));$('pg-'+pg).classList.add('active');$('pageTitle').textContent=item.textContent.trim();if(pg==='dashboard')renderDash();if(pg==='manpower')renderMP();if(pg==='config')renderConfig()}));
function toggleSidebar(){$('sidebar').classList.toggle('open')}
function toast(msg,type='success'){const c=$('toastC'),d=document.createElement('div');d.className='toast-item toast-'+type;d.innerHTML='<i class="fas fa-'+(type==='success'?'check-circle':type==='error'?'exclamation-circle':'info-circle')+'"></i>'+msg;c.appendChild(d);setTimeout(()=>d.remove(),3500)}

function initApp(){
 const now=new Date();$('todayBadge').textContent=now.toLocaleDateString('th-TH',{day:'numeric',month:'long',year:'numeric'});
 $('nStart').value=now.toISOString().split('T')[0];

 const yrs=new Set([String(now.getFullYear())]);employees.forEach(e=>{if(e.startDate)yrs.add(e.startDate.slice(0,4));if(e.endDate)yrs.add(e.endDate.slice(0,4))});
 $('dYear').innerHTML='<option value="">ทุกปี</option>'+[...yrs].sort().reverse().map(y=>`<option ${y===String(now.getFullYear())?'selected':''}>${y}</option>`).join('');
 $('dMonth').value=String(now.getMonth());

 const selInit={
  dBranch:'<option value="">ทุกสาขา</option>',
  fBranch:'<option value="">ทุกสาขา</option>',
  rFB:'<option value="">ทุกสาขา</option>',
  mpBranch:'<option value="">ทุกสาขา</option>',
  dDept:'<option value="">ทุกแผนก</option>',
  fDept:'<option value="">ทุกแผนก</option>',
  rFD:'<option value="">ทุกแผนก</option>',
  dPos:'<option value="">ทุกตำแหน่ง</option>',
  rFP:'<option value="">ทุกตำแหน่ง</option>'
 };
 Object.entries(selInit).forEach(([id,html])=>{const el=$(id);if(el)el.innerHTML=html});
 ['nBranch','eBranch','nDept','eDept','nPos','ePos'].forEach(id=>{const el=$(id);if(el)el.innerHTML='' });

 BR.forEach(b=>{['dBranch','fBranch','rFB','mpBranch'].forEach(id=>{const el=$(id);if(el)el.innerHTML+=`<option value="${b}">${b}</option>`})});
 DP.forEach(d=>{['dDept','fDept','rFD'].forEach(id=>{const el=$(id);if(el)el.innerHTML+=`<option value="${d}">${d}</option>`})});
 PO.forEach(p=>{['dPos','rFP'].forEach(id=>{const el=$(id);if(el)el.innerHTML+=`<option value="${p}">${p}</option>`})});
 [{ids:['nBranch','eBranch'],v:BR},{ids:['nDept','eDept'],v:DP},{ids:['nPos','ePos'],v:PO}].forEach(s=>s.ids.forEach(id=>{const el=$(id);if(el)s.v.forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;el.appendChild(o)})}));
 popRS();renderDash();filterEmp();renderConfig();
}
function popRS(){['rReason','eReason'].forEach(id=>{const el=$(id);if(!el)return;el.innerHTML='<option value="">-- เลือก --</option>';RS.forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent=r;el.appendChild(o)})})}
function resetDF(){const n=new Date();$('dYear').value=String(n.getFullYear());$('dMonth').value=String(n.getMonth());$('dBranch').value='';$('dDept').value='';$('dPos').value='';renderDash()}
function mF(e){const fb=$('dBranch').value,fd=$('dDept').value,fp=$('dPos').value;if(fb&&e.branch!==fb)return false;if(fd&&e.dept!==fd)return false;if(fp&&e.position!==fp)return false;return true}
function mD(ds,y,m){if(!ds)return false;const d=new Date(ds);if(y&&d.getFullYear()!==+y)return false;if(m!==''&&d.getMonth()!==+m)return false;return true}
function calcT(s){if(!s)return'';const d=Math.floor((new Date()-new Date(s))/864e5);if(d<10)return'< 10 วัน';if(d<=30)return'10 วัน - 1 เดือน';if(d<=60)return'1 - 2 เดือน';if(d<=150)return'2 - 5 เดือน';if(d<=365)return'5 เดือน - 1 ปี';if(d<=1095)return'1 - 3 ปี';return'3 ปีขึ้นไป'}
function durText(s,ref){if(!s)return'';const sd=new Date(s),ed=ref?new Date(ref):new Date();let y=ed.getFullYear()-sd.getFullYear(),m=ed.getMonth()-sd.getMonth(),d=ed.getDate()-sd.getDate();if(d<0){m--;d+=new Date(ed.getFullYear(),ed.getMonth(),0).getDate()}if(m<0){y--;m+=12}let r=[];if(y>0)r.push(y+'ปี');if(m>0)r.push(m+'เดือน');if(d>0||r.length===0)r.push(d+'วัน');return r.join(' ')}

function renderDash(){
 const fy=$('dYear').value,fm=$('dMonth').value,fb=$('dBranch').value;
 const all=employees.filter(mF);
 const active=all.filter(e=>e.status==='ปัจจุบัน'||e.status==='แจ้งลาออก');
 const pending=all.filter(e=>e.status==='แจ้งลาออก');
 const inP=all.filter(e=>mD(e.startDate,fy,fm));
 const outP=all.filter(e=>e.status==='ออกแล้ว'&&mD(e.endDate,fy,fm));
 const net=inP.length-outP.length;
 const base=active.length+inP.length;
 const tr=base>0?((outP.length/base)*100).toFixed(2):'0.00';
 let pL='ทั้งหมด';if(fy&&fm!=='')pL=MS[+fm]+' '+fy;else if(fy)pL='ปี '+fy;else if(fm!=='')pL=MS[+fm];

 const fmtStamp=d=>d?d.toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'numeric'})+' '+d.toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'}):'ยังไม่มีการอัปเดต';
 $('stampBar').innerHTML=`<div style="display:flex;align-items:center;gap:6px;padding:8px 14px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);font-size:11px;transition:background .3s"><i class="fas fa-user-plus" style="color:var(--green)"></i><span style="color:var(--text3)">อัปเดตพนักงานเข้าล่าสุด:</span><span style="font-weight:600;color:var(--green)">${fmtStamp(lastInStamp)}</span></div><div style="display:flex;align-items:center;gap:6px;padding:8px 14px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);font-size:11px;transition:background .3s"><i class="fas fa-user-minus" style="color:var(--red)"></i><span style="color:var(--text3)">อัปเดตพนักงานออกล่าสุด:</span><span style="font-weight:600;color:var(--red)">${fmtStamp(lastOutStamp)}</span></div>`;

 const allPending=employees.filter(e=>e.status==='แจ้งลาออก');
 if(allPending.length>0){$('pendingBadge').style.display='';$('pendingBadge').textContent='แจ้งลาออก '+allPending.length}else $('pendingBadge').style.display='none';

 if(pending.length>0){
  let ph=`<div class="pending-card"><h4><i class="fas fa-clock"></i> แจ้งลาออกล่วงหน้า — ${pending.length} คน</h4>`;
  pending.forEach(e=>ph+=`<div class="pending-row"><span style="font-weight:600">${e.id}</span><span>${e.name}</span><span class="tag">${e.branch}</span><span>${e.dept}</span><span>${e.position}</span><span style="color:var(--text3)">${e.endDate||'รอกำหนดวัน'}</span><span style="color:var(--orange)">${e.resignReason||''}</span></div>`);
  ph+=`</div>`;$('pendingSection').innerHTML=ph;
 }else $('pendingSection').innerHTML='';

 $('dashStats').innerHTML=`
  <div class="stat-card"><div class="glow" style="background:var(--green)"></div><div class="stat-label"><i class="fas fa-user-check"></i> พนักงานปัจจุบัน</div><div class="stat-value" style="color:var(--green)">${active.length}</div><div class="stat-sub">กำลังทำงาน${pending.length>0?' (รวมแจ้งลาออก '+pending.length+')':''}</div></div>
  <div class="stat-card"><div class="glow" style="background:var(--cyan)"></div><div class="stat-label"><i class="fas fa-user-plus"></i> เข้าใหม่</div><div class="stat-value" style="color:var(--cyan)">${inP.length}</div><div class="stat-sub">${pL}</div></div>
  <div class="stat-card"><div class="glow" style="background:var(--red)"></div><div class="stat-label"><i class="fas fa-user-minus"></i> ออก</div><div class="stat-value" style="color:var(--red)">${outP.length}</div><div class="stat-sub">${pL}</div></div>
  <div class="stat-card"><div class="glow" style="background:var(--purple)"></div><div class="stat-label"><i class="fas fa-scale-balanced"></i> Net</div><div class="stat-value" style="color:${net>=0?'var(--green)':'var(--red)'}">${net>=0?'+':''}${net}</div><div class="stat-sub">${pL}</div></div>
  <div class="stat-card"><div class="glow" style="background:var(--amber)"></div><div class="stat-label"><i class="fas fa-chart-line"></i> Turnover</div><div class="stat-value" style="color:var(--amber)">${tr}%</div><div class="stat-sub">ออก/${base} คน</div></div>`;

 const selY=fy||String(new Date().getFullYear());
 let h=`<div class="section-title"><i class="fas fa-table-cells"></i> สรุป ${fm===''?'รายเดือน ปี '+selY:pL}</div><div style="overflow-x:auto"><table class="sum-table"><thead><tr><th>เดือน</th><th>เข้า</th><th>ออก</th><th>Net</th><th>มีอยู่+เข้า</th><th>Turnover%</th>`;
 if(!fb)BR.forEach(b=>h+=`<th style="font-size:8px">${b}<br>ออก</th>`);
 h+=`</tr></thead><tbody>`;
 let tI=0,tO=0;const bT={};BR.forEach(b=>bT[b]=0);
 const startM=fm!==''?+fm:0,endM=fm!==''?+fm:11;
 for(let m=startM;m<=endM;m++){
  const mi=all.filter(e=>mD(e.startDate,selY,String(m))).length;
  const mo=all.filter(e=>e.status==='ออกแล้ว'&&mD(e.endDate,selY,String(m))).length;
  const mn=mi-mo;
  const activeM=all.filter(e=>(e.status==='ปัจจุบัน'||e.status==='แจ้งลาออก')).length;
  const baseM=activeM+mi;
  const mtr=baseM>0?((mo/baseM)*100).toFixed(2):'0';
  tI+=mi;tO+=mo;
  h+=`<tr${+mtr>=10?' class="val-hi"':''}><td class="la">${MN[m]}</td><td class="${mi?'vp':'vz'}">${mi}</td><td class="${mo?'vn':'vz'}">${mo}</td><td class="${mn>0?'vp':mn<0?'vn':'vz'}">${mn>0?'+':''}${mn}</td><td>${baseM}</td><td class="va">${mtr}%</td>`;
  if(!fb)BR.forEach(b=>{const v=employees.filter(e=>mF(e)&&e.branch===b&&e.status==='ออกแล้ว'&&mD(e.endDate,selY,String(m))).length;bT[b]+=v;h+=`<td class="${v?'vn':'vz'}">${v}</td>`});
  h+=`</tr>`;
 }
 if(fm===''){const tN=tI-tO;const tBase=active.length+tI;const tTr=tBase>0?((tO/tBase)*100).toFixed(2):'0';
 h+=`<tr class="total-row"><td class="la">รวม</td><td class="vp">${tI}</td><td class="vn">${tO}</td><td class="${tN>=0?'vp':'vn'}">${tN>=0?'+':''}${tN}</td><td>${tBase}</td><td class="va">${tTr}%</td>`;
 if(!fb)BR.forEach(b=>h+=`<td class="vn">${bT[b]}</td>`);h+=`</tr>`}
 h+=`</tbody></table></div>`;$('yearlySum').innerHTML=h;

 const clr=isDark?'#94a3b8':'#475569';const gClr=isDark?'rgba(30,41,59,0.5)':'rgba(203,213,225,0.5)';
 let ch=`<div class="chart-card"><h3><i class="fas fa-building"></i> สาขา + Turnover%</h3><div class="chart-wrap"><canvas id="cBr"></canvas></div></div>`;
 ch+=`<div class="chart-card"><h3><i class="fas fa-briefcase"></i> แผนก ${fb?fb:'รวม'}</h3><div class="chart-wrap"><canvas id="cDp"></canvas></div></div>`;
 ch+=`<div class="chart-card"><h3><i class="fas fa-chart-bar"></i> เข้า-ออก + Turnover% ${selY}</h3><div class="chart-wrap" style="height:270px"><canvas id="cMo"></canvas></div></div>`;
 ch+=`<div class="chart-card"><h3><i class="fas fa-clock"></i> อายุงาน</h3><div class="chart-wrap"><canvas id="cTn"></canvas></div></div>`;
 $('dashCharts').innerHTML=ch;

 setTimeout(()=>{
  const bd=BR.map(b=>{const a=all.filter(e=>e.branch===b&&(e.status==='ปัจจุบัน'||e.status==='แจ้งลาออก')).length;const o=all.filter(e=>e.branch===b&&e.status==='ออกแล้ว'&&mD(e.endDate,fy,fm)).length;const bs=a+all.filter(e=>e.branch===b&&mD(e.startDate,fy,fm)).length;return{b,a,o,tr:bs>0?+((o/bs)*100).toFixed(1):0}});
  rc('cBr','bar',{labels:bd.map(d=>d.b),datasets:[{label:'ปัจจุบัน',data:bd.map(d=>d.a),backgroundColor:'rgba(16,185,129,0.7)',borderRadius:4,yAxisID:'y'},{label:'ออก',data:bd.map(d=>d.o),backgroundColor:'rgba(239,68,68,0.5)',borderRadius:4,yAxisID:'y'},{label:'Turnover%',data:bd.map(d=>d.tr),type:'line',borderColor:'#f59e0b',tension:.3,yAxisID:'y1',pointRadius:3,datalabels:{formatter:v=>v+'%',color:'#f59e0b',anchor:'end',align:'top'}}]},{scales:{y:{position:'left',ticks:{color:clr},grid:{color:gClr}},y1:{position:'right',ticks:{color:'#f59e0b',callback:v=>v+'%'},grid:{display:false}},x:{ticks:{color:clr},grid:{color:gClr}}}});

  const dd=DP.map(d=>active.filter(e=>e.dept===d).length);
  rc('cDp','doughnut',{labels:DP.map((d,i)=>d+' ('+dd[i]+')'),datasets:[{data:dd,backgroundColor:['rgba(99,102,241,0.8)','rgba(6,182,212,0.8)','rgba(245,158,11,0.8)'],borderWidth:0}]},{cutout:'55%',plugins:{datalabels:{formatter:(v,ctx)=>{const t=ctx.dataset.data.reduce((a,b)=>a+b,0);return t?((v/t)*100).toFixed(1)+'%':'0%'},color:'#fff',font:{size:11,weight:'bold'}}}});

  const moI=[],moO=[],moTr=[];
  for(let m=0;m<12;m++){const mi=all.filter(e=>mD(e.startDate,selY,String(m))).length;const mo=all.filter(e=>e.status==='ออกแล้ว'&&mD(e.endDate,selY,String(m))).length;const bs=active.length+mi;moI.push(mi);moO.push(mo);moTr.push(bs>0?+((mo/bs)*100).toFixed(1):0)}
  rc('cMo','bar',{labels:MS,datasets:[{label:'เข้า',data:moI,backgroundColor:'rgba(16,185,129,0.7)',borderRadius:3,yAxisID:'y'},{label:'ออก',data:moO,backgroundColor:'rgba(239,68,68,0.6)',borderRadius:3,yAxisID:'y'},{label:'Turnover%',data:moTr,type:'line',borderColor:'#f59e0b',tension:.3,yAxisID:'y1',pointRadius:3,datalabels:{formatter:v=>v>0?v+'%':'',color:'#f59e0b',anchor:'end',align:'top',font:{size:8}}}]},{scales:{y:{position:'left',ticks:{color:clr},grid:{color:gClr}},y1:{position:'right',ticks:{color:'#f59e0b',callback:v=>v+'%'},grid:{display:false}},x:{ticks:{color:clr,font:{size:9}},grid:{color:gClr}}}});

  const td=TG.map(g=>active.filter(e=>e.tenureGroup===g).length);
  rc('cTn','bar',{labels:TG,datasets:[{label:'คน',data:td,backgroundColor:'rgba(99,102,241,0.6)',borderRadius:4}]},{indexAxis:'y',plugins:{datalabels:{anchor:'end',align:'right',formatter:v=>v>0?v:''}},scales:{x:{ticks:{color:clr},grid:{color:gClr}},y:{ticks:{color:clr,font:{size:9}},grid:{color:gClr}}}});
 },60);

 let el=`<div style="display:flex;flex-direction:column;gap:12px">`;
 el+=`<div class="emp-box"><h4 style="color:var(--green)"><i class="fas fa-user-plus"></i> พนักงานเข้าใหม่ (${pL}) — ${inP.length} คน</h4>`;
 if(!inP.length)el+=`<div style="color:var(--text3);font-size:11px;padding:8px">ไม่มีข้อมูล</div>`;
 else{el+=`<table style="width:100%;font-size:11px"><thead><tr><th>รหัส</th><th>ชื่อเล่น</th><th>ชื่อ-นามสกุล</th><th>สาขา</th><th>ตำแหน่ง</th><th>วันเข้างาน</th><th>ระยะเวลา</th></tr></thead><tbody>`;
 inP.sort((a,b)=>b.startDate.localeCompare(a.startDate)).forEach(e=>el+=`<tr><td>${e.id}</td><td style="font-weight:600">${e.nickname}</td><td>${e.name}</td><td><span class="tag">${e.branch}</span></td><td>${e.position}</td><td>${e.startDate}</td><td style="color:var(--cyan)">${durText(e.startDate)}</td></tr>`);
 el+=`</tbody></table>`}
 el+=`</div>`;
 el+=`<div class="emp-box"><h4 style="color:var(--red)"><i class="fas fa-user-minus"></i> พนักงานออก (${pL}) — ${outP.length} คน</h4>`;
 if(!outP.length)el+=`<div style="color:var(--text3);font-size:11px;padding:8px">ไม่มีข้อมูล</div>`;
 else{el+=`<table style="width:100%;font-size:11px"><thead><tr><th>รหัส</th><th>ชื่อเล่น</th><th>ชื่อ-นามสกุล</th><th>สาขา</th><th>ตำแหน่ง</th><th>วันเข้า</th><th>วันออก</th><th>ทำงาน</th><th>สาเหตุ</th></tr></thead><tbody>`;
 outP.sort((a,b)=>b.endDate.localeCompare(a.endDate)).forEach(e=>el+=`<tr><td>${e.id}</td><td style="font-weight:600">${e.nickname}</td><td>${e.name}</td><td><span class="tag">${e.branch}</span></td><td>${e.position}</td><td>${e.startDate}</td><td>${e.endDate}</td><td style="color:var(--amber)">${durText(e.startDate,e.endDate)}</td><td style="color:var(--red)">${e.resignReason||'-'}</td></tr>`);
 el+=`</tbody></table>`}
 el+=`</div></div>`;
 $('dashEmpLists').innerHTML=el;

 const resigned=all.filter(e=>e.status==='ออกแล้ว'&&mD(e.endDate,fy,fm));
 let ts=`<div class="section-title"><i class="fas fa-hourglass-half"></i> สถิติออกตามอายุงาน (${pL}) — ${resigned.length} คน</div>`;
 if(resigned.length){ts+=`<div style="overflow-x:auto"><table class="sum-table"><thead><tr><th>กลุ่มอายุงาน</th><th>จำนวน</th><th>% ของลาออก</th></tr></thead><tbody>`;
 TG.forEach(g=>{const c=resigned.filter(e=>e.tenureGroup===g).length;const p=((c/resigned.length)*100).toFixed(1);ts+=`<tr${+p>=30?' class="val-hi"':''}><td class="la">${g}</td><td>${c}</td><td class="va">${p}%</td></tr>`});
 ts+=`</tbody></table></div>`}else ts+=`<div style="color:var(--text3);font-size:11px">ไม่มีข้อมูล</div>`;
 $('dashTenure').innerHTML=ts;
}

function rc(id,type,data,extra={}){if(charts[id])charts[id].destroy();const el=$(id);if(!el)return;const clr=isDark?'#94a3b8':'#475569';const df={responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:clr,font:{family:'Sarabun',size:9}}},datalabels:{display:type==='doughnut'?true:'auto',color:clr,font:{size:8,family:'Sarabun'}}}};if(type==='bar'&&!extra.indexAxis)df.plugins.datalabels={display:'auto',anchor:'end',align:'top',color:clr,font:{size:8},formatter:v=>v>0?v:''};charts[id]=new Chart(el.getContext('2d'),{type,data,options:{...df,...extra}})}

function filterEmp(){const q=$('empSearch').value.toLowerCase(),fb=$('fBranch').value,fd=$('fDept').value,fs=$('fStatus').value;filteredE=employees.filter(e=>{if(fb&&e.branch!==fb)return false;if(fd&&e.dept!==fd)return false;if(fs&&e.status!==fs)return false;if(q&&!e.id.toLowerCase().includes(q)&&!e.name.toLowerCase().includes(q)&&!e.nickname.toLowerCase().includes(q))return false;return true});curPage=1;renderET()}
function renderET(){const s=(curPage-1)*pgSize,pg=filteredE.slice(s,s+pgSize);$('empBody').innerHTML=pg.map(e=>{const idx=employees.indexOf(e),cls=e.status==='ปัจจุบัน'?'status-active':e.status==='แจ้งลาออก'?'status-pending':'status-left';return`<tr><td><b>${e.id}</b></td><td>${e.name}</td><td>${e.nickname}</td><td><span class="tag">${e.branch}</span></td><td>${e.dept}</td><td>${e.position}</td><td>${e.startDate}</td><td>${e.endDate||'-'}</td><td><span class="status-badge ${cls}">${e.status}</span></td><td>${e.gender}</td><td>${e.tenureGroup}</td><td><button class="btn btn-sm" onclick="openEdit(${idx})"><i class="fas fa-pen"></i></button> <button class="btn btn-sm btn-red" onclick="delEmp(${idx})"><i class="fas fa-trash"></i></button></td></tr>`}).join('');$('empCount').textContent=filteredE.length+' คน';$('empInfo').textContent=`${s+1}-${Math.min(s+pgSize,filteredE.length)} / ${filteredE.length}`;const tp=Math.ceil(filteredE.length/pgSize),pe=$('empPages');pe.innerHTML='';for(let p=1;p<=Math.min(tp,10);p++){const b=document.createElement('button');b.className='page-btn'+(p===curPage?' active':'');b.textContent=p;b.onclick=()=>{curPage=p;renderET()};pe.appendChild(b)}}

function addEmp(){
 const id=$('nId').value.trim(),name=$('nName').value.trim();
 if(!id||!name){toast('กรอกรหัสและชื่อ','error');return}
 if(employees.find(e=>e.id===id)){toast('รหัสซ้ำ!','error');return}
 const emp={id,name,nickname:$('nNick').value.trim(),branch:$('nBranch').value,dept:$('nDept').value,position:$('nPos').value,startDate:$('nStart').value,endDate:'',status:'ปัจจุบัน',gender:$('nGender').value,tenureGroup:calcT($('nStart').value),resignReason:'',note:$('nNote').value};
 employees.unshift(emp);
 lastInStamp=new Date();
 toast('เพิ่ม '+name+' สำเร็จ');
 clearAdd();
 filterEmp();
 renderDash();
 persistEmployee(emp).catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'));
 persistMeta().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))
}
function clearAdd(){['nId','nName','nNick','nNote'].forEach(id=>$(id).value='')}

function searchR(){const q=$('rSearch').value.toLowerCase(),fb=$('rFB').value,fd=$('rFD').value,fp=$('rFP').value,r=$('rResults');if(q.length<1&&!fb&&!fd&&!fp){r.innerHTML='';return}const found=employees.filter(e=>{if(e.status!=='ปัจจุบัน'&&e.status!=='แจ้งลาออก')return false;if(fb&&e.branch!==fb)return false;if(fd&&e.dept!==fd)return false;if(fp&&e.position!==fp)return false;if(q&&!e.id.includes(q)&&!e.name.toLowerCase().includes(q)&&!e.nickname.toLowerCase().includes(q))return false;return true}).slice(0,10);r.innerHTML=found.map(e=>`<div style="padding:5px 8px;cursor:pointer;border-radius:4px;font-size:11px;background:var(--bg3);margin-bottom:2px" onmouseover="this.style.background='var(--bg4)'" onmouseout="this.style.background='var(--bg3)'" onclick="selR(${employees.indexOf(e)})"><b>${e.id}</b> ${e.name} (${e.nickname}) — ${e.branch}/${e.position}</div>`).join('')}
function selR(idx){rTarget=idx;const e=employees[idx];$('rSel').innerHTML=`<b>${e.id}</b> ${e.name} (${e.nickname})<br>${e.branch} / ${e.dept} / ${e.position}`;['rSelW','rDW','rRW','rTypeW','rNW'].forEach(id=>$(id).style.display='');$('rBtn').style.display='';$('rBtnP').style.display='';$('rDate').value=new Date().toISOString().split('T')[0];$('rResults').innerHTML=''}
function doResign(type){
 if(rTarget===null)return;
 const e=employees[rTarget];
 const st=type||$('rType').value;
 e.status=st;
 e.endDate=$('rDate').value;
 e.resignReason=$('rReason').value;
 e.note=$('rNote').value;
 e.tenureGroup=calcT(e.startDate);
 lastOutStamp=new Date();
 toast(e.name+(st==='แจ้งลาออก'?' แจ้งลาออกสำเร็จ':' ลาออกสำเร็จ'));
 rTarget=null;
 $('rSearch').value='';
 ['rSelW','rDW','rRW','rTypeW','rNW'].forEach(id=>$(id).style.display='none');
 $('rBtn').style.display='none';
 $('rBtnP').style.display='none';
 filterEmp();
 renderDash();
 persistEmployee(e).catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'));
 persistMeta().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))
}

function openEdit(idx){editIdx=idx;const e=employees[idx];$('eId').value=e.id;$('eName').value=e.name;$('eNick').value=e.nickname;$('eGender').value=e.gender;$('eBranch').value=e.branch;$('eDept').value=e.dept;$('ePos').value=e.position;$('eStart').value=e.startDate;$('eEnd').value=e.endDate;$('eStatus').value=e.status;$('eReason').value=e.resignReason;$('eNote').value=e.note;$('editModal').classList.add('show')}
function closeModal(){$('editModal').classList.remove('show')}
function saveEdit(){
 const e=employees[editIdx];
 const oldSt=e.status;
 e.name=$('eName').value;
 e.nickname=$('eNick').value;
 e.gender=$('eGender').value;
 e.branch=$('eBranch').value;
 e.dept=$('eDept').value;
 e.position=$('ePos').value;
 e.startDate=$('eStart').value;
 e.endDate=$('eEnd').value;
 e.status=$('eStatus').value;
 e.resignReason=$('eReason').value;
 e.note=$('eNote').value;
 e.tenureGroup=calcT(e.startDate);
 if(oldSt!==e.status){if(e.status==='ปัจจุบัน')lastInStamp=new Date();if(e.status==='ออกแล้ว'||e.status==='แจ้งลาออก')lastOutStamp=new Date()}
 closeModal();
 toast('อัปเดตสำเร็จ');
 filterEmp();
 renderDash();
 persistEmployee(e).catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'));
 persistMeta().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))
}
function delEmp(idx){
 const id=employees[idx]&&employees[idx].id;
 if(!confirm('ลบ '+employees[idx].name+'?'))return;
 employees.splice(idx,1);
 toast('ลบสำเร็จ');
 filterEmp();
 deleteEmployeeById(id).catch(()=>toast('ลบในฐานข้อมูลไม่สำเร็จ','error'))
}

function exportCSV(){const h=['รหัส','ชื่อ','ชื่อเล่น','สาขา','แผนก','ตำแหน่ง','วันเริ่ม','วันออก','สถานะ','เพศ','อายุงาน','สาเหตุ','หมายเหตุ'];const rows=filteredE.map(e=>[e.id,e.name,e.nickname,e.branch,e.dept,e.position,e.startDate,e.endDate,e.status,e.gender,e.tenureGroup,e.resignReason,e.note].map(v=>'"'+(v||'')+'"').join(','));dl('\uFEFF'+h.join(',')+String.fromCharCode(10)+rows.join(String.fromCharCode(10)),'HR.csv','text/csv;charset=utf-8');toast('Export สำเร็จ','info')}
function exportXLS(){let h='<html><head><meta charset="utf-8"></head><body><table border="1"><tr><th>รหัส</th><th>ชื่อ</th><th>ชื่อเล่น</th><th>สาขา</th><th>แผนก</th><th>ตำแหน่ง</th><th>วันเริ่ม</th><th>วันออก</th><th>สถานะ</th><th>เพศ</th><th>อายุงาน</th><th>สาเหตุ</th><th>หมายเหตุ</th></tr>';filteredE.forEach(e=>h+=`<tr><td>${e.id}</td><td>${e.name}</td><td>${e.nickname}</td><td>${e.branch}</td><td>${e.dept}</td><td>${e.position}</td><td>${e.startDate}</td><td>${e.endDate||''}</td><td>${e.status}</td><td>${e.gender}</td><td>${e.tenureGroup}</td><td>${e.resignReason}</td><td>${e.note||''}</td></tr>`);dl(h+'</table></body></html>','HR.xls','application/vnd.ms-excel;charset=utf-8');toast('Export สำเร็จ','info')}
function dl(c,f,t){const b=new Blob([c],{type:t}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=f;a.click()}

function openFilePicker(el){
 if(!el)return;
 el.value='';
 try{el.click()}catch(e){
  try{el.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}))}catch(e2){}
 }
}
function pickImportCSV(){openFilePicker($('impCsv'))}
function pickImportXLS(){openFilePicker($('impXls'))}

function normalizeHeader(h){return String(h||'').replace(/\uFEFF/g,'').trim()}
function normalizeDateValue(v){
 if(!v)return '';
 if(v instanceof Date)return v.toISOString().split('T')[0];
 if(typeof v==='number'&&typeof XLSX!=='undefined'&&XLSX.SSF&&typeof XLSX.SSF.parse_date_code==='function'){
  const d=XLSX.SSF.parse_date_code(v);
  if(d&&d.y&&d.m&&d.d){
   const mm=String(d.m).padStart(2,'0');
   const dd=String(d.d).padStart(2,'0');
   return `${d.y}-${mm}-${dd}`
  }
 }
 const s=String(v).trim();
 if(!s)return '';
 if(/^\d{4}-\d{2}-\d{2}$/.test(s))return s;
 const m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
 if(m){
  const d=String(m[1]).padStart(2,'0');
  const mo=String(m[2]).padStart(2,'0');
  const y=m[3];
  return `${y}-${mo}-${d}`
 }
 return s
}
function parseCSVText(text){
 const s=String(text||'').replace(/\r\n/g,'\n').replace(/\r/g,'\n');
 const rows=[];let row=[],field='',i=0,inQ=false;
 while(i<s.length){
  const ch=s[i];
  if(inQ){
   if(ch==='"'){if(s[i+1]==='"'){field+='"';i+=2;continue}else{inQ=false;i++;continue}}
   field+=ch;i++;continue
  }
  if(ch==='"'){inQ=true;i++;continue}
  if(ch===','){row.push(field);field='';i++;continue}
  if(ch==='\n'){row.push(field);rows.push(row);row=[];field='';i++;continue}
  field+=ch;i++
 }
 row.push(field);rows.push(row);
 return rows.filter(r=>r.some(v=>String(v||'').trim()!==''))
}
function mapEmployeeFromObject(o){
 const id=String(o.id||o['รหัส']||o['รหัสพนักงาน']||'').trim();
 const name=String(o.name||o['ชื่อ']||o['ชื่อ-นามสกุล']||'').trim();
 if(!id||!name)return null;
 const startDate=normalizeDateValue(o.startDate||o['วันเริ่ม']||o['วันเริ่มงาน']||o['วันที่เริ่มงาน']||'');
 const endDate=normalizeDateValue(o.endDate||o['วันออก']||o['วันลาออกงาน']||o['วันที่ลาออก']||'');
 const position=String(o.position||o['ตำแหน่ง']||'').trim()||PO[0];
 const dept=String(o.dept||o['แผนก']||'').trim()||PD[position]||DP[0];
 const branch=String(o.branch||o['สาขา']||'').trim()||BR[0];
 const status=String(o.status||o['สถานะ']||'').trim()||'ปัจจุบัน';
 const gender=String(o.gender||o['เพศ']||'').trim()||'หญิง';
 const resignReason=String(o.resignReason||o['สาเหตุ']||o['สาเหตุลาออก']||'').trim();
 const note=String(o.note||o['หมายเหตุ']||'').trim();
 const nickname=String(o.nickname||o['ชื่อเล่น']||'').trim();
 const tenureGroup=String(o.tenureGroup||o['อายุงาน']||o['กลุ่มอายุงาน']||'').trim()||calcT(startDate);
 return{id,name,nickname,branch,dept,position,startDate,endDate,status,gender,tenureGroup,resignReason,note}
}
async function persistEmployeesInChunks(list){
 if(!firebaseOk)return;
 const chunkSize=450;
 for(let i=0;i<list.length;i+=chunkSize){
  const chunk=list.slice(i,i+chunkSize);
  await persistEmployeesBatch(chunk)
 }
}
async function importCSVFile(file){
 if(!file){toast('ไม่พบไฟล์','error');return}
 if(!firebaseOk){toast('ยังไม่ได้เชื่อมต่อ Firebase','error');return}
 const text=await file.text();
 const rows=parseCSVText(text);
 if(!rows.length){toast('ไฟล์ว่าง','error');return}
 const headers=rows[0].map(normalizeHeader);
 const dataRows=rows.slice(1);
 const parsed=[];
 dataRows.forEach(r=>{
  const o={};
  headers.forEach((h,idx)=>{if(h)o[h]=r[idx]});
  const emp=mapEmployeeFromObject(o);
  if(emp)parsed.push(emp)
 });
 if(!parsed.length){toast('ไม่พบข้อมูลพนักงานในไฟล์','error');return}
 const merged=new Map(employees.map(e=>[String(e.id),e]));
 parsed.forEach(e=>merged.set(String(e.id),e));
 employees=[...merged.values()];
 try{
  await persistEmployeesInChunks(parsed);
  lastInStamp=new Date();
  await persistMeta();
  refreshAll();
  toast('Import CSV สำเร็จ '+parsed.length+' รายการ','success')
 }catch(e){toast('Import ไม่สำเร็จ','error')}
}
async function importExcelFile(file){
 if(!file){toast('ไม่พบไฟล์','error');return}
 const name=String(file.name||'').toLowerCase();
 if(name.endsWith('.xlsx'))return importXLSXFile(file);
 return importXLSFile(file)
}
async function importXLSFile(file){
 if(!file){toast('ไม่พบไฟล์','error');return}
 if(!firebaseOk){toast('ยังไม่ได้เชื่อมต่อ Firebase','error');return}
 const html=await file.text();
 const doc=new DOMParser().parseFromString(html,'text/html');
 const table=doc.querySelector('table');
 if(!table){toast('ไฟล์ Excel นี้ไม่รองรับ','error');return}
 const trs=[...table.querySelectorAll('tr')];
 if(trs.length<2){toast('ไฟล์ว่าง','error');return}
 const ths=[...trs[0].querySelectorAll('th,td')].map(el=>normalizeHeader(el.textContent));
 const parsed=[];
 trs.slice(1).forEach(tr=>{
  const tds=[...tr.querySelectorAll('td')].map(el=>String(el.textContent||'').trim());
  const o={};
  ths.forEach((h,idx)=>{if(h)o[h]=tds[idx]});
  const emp=mapEmployeeFromObject(o);
  if(emp)parsed.push(emp)
 });
 if(!parsed.length){toast('ไม่พบข้อมูลพนักงานในไฟล์','error');return}
 const merged=new Map(employees.map(e=>[String(e.id),e]));
 parsed.forEach(e=>merged.set(String(e.id),e));
 employees=[...merged.values()];
 try{
  await persistEmployeesInChunks(parsed);
  lastInStamp=new Date();
  await persistMeta();
  refreshAll();
  toast('Import Excel สำเร็จ '+parsed.length+' รายการ','success')
 }catch(e){toast('Import ไม่สำเร็จ','error')}
}
async function importXLSXFile(file){
 if(!file){toast('ไม่พบไฟล์','error');return}
 if(!firebaseOk){toast('ยังไม่ได้เชื่อมต่อ Firebase','error');return}
 if(typeof XLSX==='undefined'){toast('ยังไม่พร้อมใช้งาน Import .xlsx','error');return}
 const buf=await file.arrayBuffer();
 const wb=XLSX.read(buf,{type:'array',cellDates:true});
 const sheetName=wb.SheetNames&&wb.SheetNames[0];
 const ws=sheetName?wb.Sheets[sheetName]:null;
 if(!ws){toast('ไฟล์ว่าง','error');return}
 const rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});
 if(!rows.length){toast('ไฟล์ว่าง','error');return}
 const headers=rows[0].map(normalizeHeader);
 const parsed=[];
 rows.slice(1).forEach(r=>{
  const o={};
  headers.forEach((h,idx)=>{if(h)o[h]=r[idx]});
  const emp=mapEmployeeFromObject(o);
  if(emp)parsed.push(emp)
 });
 if(!parsed.length){toast('ไม่พบข้อมูลพนักงานในไฟล์','error');return}
 const merged=new Map(employees.map(e=>[String(e.id),e]));
 parsed.forEach(e=>merged.set(String(e.id),e));
 employees=[...merged.values()];
 try{
  await persistEmployeesInChunks(parsed);
  lastInStamp=new Date();
  await persistMeta();
  refreshAll();
  toast('Import Excel สำเร็จ '+parsed.length+' รายการ','success')
 }catch(e){toast('Import ไม่สำเร็จ','error')}
}

function renderMP(){const fb=$('mpBranch').value;const brs=fb?[fb]:BR;let html='';brs.forEach(br=>{const be=employees.filter(e=>e.branch===br&&(e.status==='ปัจจุบัน'||e.status==='แจ้งลาออก'));html+=`<div style="margin-bottom:16px"><div class="section-title"><i class="fas fa-building"></i> ${br}</div><div style="overflow-x:auto"><table class="mp-table"><thead><tr><th>แผนก</th><th>ตำแหน่ง</th><th>PAR</th><th>Real</th><th>Hold</th><th>Need</th><th>สถานะ</th><th>ชื่อเล่น</th></tr></thead><tbody>`;
 let cd='',tP=0,tR=0,tH=0,tN=0;
 PO.forEach(pos=>{const dept=PD[pos]||'';const par=parData[pos]?parData[pos][br]||0:0;const hold=holdData[pos]?holdData[pos][br]||0:0;const real=be.filter(e=>e.position===pos).length;const open=par-hold;const need=open-real;tP+=par;tR+=real;tH+=hold;tN+=Math.max(need,0);const names=be.filter(e=>e.position===pos);let st='';if(par===0&&hold===0)st='<span class="need-lock">🔒</span>';else if(hold>=par)st='<span class="need-lock">🔒 Hold</span>';else if(need>0)st=`<span class="need-pos">⚠️ ขาด ${need}</span>`;else if(need===0)st='<span class="need-ok">✅</span>';else st=`<span class="need-ok">✅+${Math.abs(need)}</span>`;let sd='';if(dept!==cd){cd=dept;sd=dept}html+=`<tr><td class="la" style="font-weight:${sd?'700':'400'};color:${sd?'var(--accent2)':'inherit'}">${sd}</td><td class="la">${pos}</td><td><input type="number" value="${par}" min="0" onchange="updP('${pos}','${br}',this.value)"></td><td style="font-weight:700">${real}</td><td><input type="number" value="${hold}" min="0" onchange="updH('${pos}','${br}',this.value)"></td><td style="font-weight:700;color:${need>0?'var(--red)':need<0?'var(--cyan)':'var(--green)'}">${need}</td><td>${st}</td><td class="la"><div style="display:flex;flex-wrap:wrap;gap:2px">${names.map(e=>`<span class="name-chip${e.status==='แจ้งลาออก'?' pending':''}" title="${e.name}${e.status==='แจ้งลาออก'?' [แจ้งลาออก]':''}">${e.nickname}${e.status==='แจ้งลาออก'?' ⏳':''}</span>`).join('')}</div></td></tr>`});
 html+=`<tr class="mp-total"><td class="la" colspan="2">รวม ${br}</td><td>${tP}</td><td style="font-weight:700">${tR}</td><td>${tH}</td><td style="font-weight:700;color:${tN>0?'var(--red)':'var(--green)'}">${tN}</td><td></td><td></td></tr></tbody></table></div></div>`});
 $('mpContent').innerHTML=html}
function updP(p,b,v){if(!parData[p])parData[p]={};parData[p][b]=Math.max(0,+v);renderMP();persistConfig().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))}
function updH(p,b,v){if(!holdData[p])holdData[p]={};holdData[p][b]=Math.max(0,+v);renderMP();persistConfig().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))}

function renderConfig(){$('cfgBranch').innerHTML=BR.map(b=>`<div class="config-item"><span>${b}</span><span class="tag">${employees.filter(e=>e.branch===b&&e.status!=='ออกแล้ว').length}</span></div>`).join('');$('cfgDept').innerHTML=DP.map(d=>`<div class="config-item"><span>${d}</span><span class="tag">${employees.filter(e=>e.dept===d&&e.status!=='ออกแล้ว').length}</span></div>`).join('');$('cfgPos').innerHTML=PO.map(p=>`<div class="config-item"><span>${p}</span><span class="tag">${employees.filter(e=>e.position===p&&e.status!=='ออกแล้ว').length}</span></div>`).join('');renderRS();renderCfgSum()}
function renderRS(){$('cfgReason').innerHTML=RS.map((r,i)=>`<div class="reason-item"><span>${r}</span><div class="reason-actions"><button style="background:var(--bg4);color:var(--text2)" onclick="editRS(${i})"><i class="fas fa-pen"></i></button><button style="background:rgba(239,68,68,0.15);color:var(--red)" onclick="delRS(${i})"><i class="fas fa-trash"></i></button></div></div>`).join('')}
function addReason(){const v=$('newReasonInput').value.trim();if(!v){toast('กรอกสาเหตุ','error');return}if(RS.includes(v)){toast('มีอยู่แล้ว','error');return}RS.push(v);$('newReasonInput').value='';popRS();renderRS();toast('เพิ่ม "'+v+'" สำเร็จ');persistConfig().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))}
function editRS(i){
 const nv=prompt('แก้ไข:',RS[i]);
 if(nv&&nv.trim()){
  const old=RS[i],next=nv.trim();
  RS[i]=next;
  const changed=[];
  employees.forEach(e=>{if(e.resignReason===old){e.resignReason=next;changed.push(e)}});
  popRS();renderRS();toast('แก้ไขสำเร็จ');
  persistConfig().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'));
  if(changed.length)persistEmployeesBatch(changed).catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))
 }
}
function delRS(i){if(!confirm('ลบ "'+RS[i]+'"?'))return;RS.splice(i,1);popRS();renderRS();toast('ลบสำเร็จ');persistConfig().catch(()=>toast('บันทึกฐานข้อมูลไม่สำเร็จ','error'))}
function renderCfgSum(){const res=employees.filter(e=>e.status==='ออกแล้ว');let h=`<div class="section-title"><i class="fas fa-chart-pie"></i> สรุปลาออก (${res.length} คน)</div><div style="overflow-x:auto"><table class="sum-table"><thead><tr><th>สาเหตุ</th><th>จำนวน</th><th>%</th></tr></thead><tbody>`;const rc={};res.forEach(e=>{const r=e.resignReason||'ไม่ระบุ';rc[r]=(rc[r]||0)+1});Object.entries(rc).sort((a,b)=>b[1]-a[1]).forEach(([r,c])=>h+=`<tr><td class="la">${r}</td><td>${c}</td><td class="va">${res.length?((c/res.length)*100).toFixed(1):'0'}%</td></tr>`);h+=`</tbody></table></div>`;$('cfgResignSum').innerHTML=h}

setupAuthListener();
