/* ══════════════════════════════════════════════
   CYBERVAULT PRO — MAIN.JS
   Navigation · Cursor · Matrix · Particles · State
   ══════════════════════════════════════════════ */

/* ─── CURSOR ─── */
const $cur = document.getElementById('cursor');
const $ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; $cur.style.left=mx+'px'; $cur.style.top=my+'px'; });
(function l(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;$ring.style.left=rx+'px';$ring.style.top=ry+'px';requestAnimationFrame(l);})();
function addHover(sel){document.querySelectorAll(sel).forEach(el=>{el.addEventListener('mouseenter',()=>{$cur.classList.add('hover');$ring.classList.add('hover')});el.addEventListener('mouseleave',()=>{$cur.classList.remove('hover');$ring.classList.remove('hover')})});}
addHover('button,a,input,select,.feat-card,.ai-card,.tip-card,.tool-module,.cat-chip,.price-btn,.level-btn,.course-card,.news-card,.source-item');

/* ─── MATRIX ─── */
(function(){
  const c=document.getElementById('matrixCanvas');
  if(!c)return;
  const cx=c.getContext('2d');
  const ch='アイウエオカキクケコ01';
  let drops;
  function resize(){c.width=window.innerWidth;c.height=window.innerHeight;drops=new Array(Math.floor(c.width/18)).fill(1);}
  resize(); window.addEventListener('resize',resize);
  setInterval(()=>{cx.fillStyle='rgba(2,8,23,0.06)';cx.fillRect(0,0,c.width,c.height);cx.fillStyle='#00d4ff';cx.font='13px Share Tech Mono';drops.forEach((y,i)=>{cx.fillText(ch[Math.floor(Math.random()*ch.length)],i*18,y*18);if(y*18>c.height&&Math.random()>.975)drops[i]=0;drops[i]++;});},60);
})();

/* ─── PARTICLES ─── */
(function(){
  const p=document.getElementById('particles');
  if(!p)return;
  const colors=['#00d4ff','#7c3aed','#10b981','#f59e0b'];
  for(let i=0;i<28;i++){const el=document.createElement('div');el.className='particle';el.style.cssText=`left:${Math.random()*100}%;width:2px;height:2px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${10+Math.random()*15}s;animation-delay:${Math.random()*12}s;`;p.appendChild(el);}
})();

/* ─── NAVIGATION ─── */
window.navigate = function(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.dataset.page===page));
  const pageEl = document.getElementById('page-'+page);
  if(pageEl) pageEl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('navLinks').classList.remove('open');

  if(page==='finder'  && typeof renderFinder  ==='function') renderFinder();
  if(page==='tips'    && typeof renderTips    ==='function') renderTips();
  if(page==='tools'   && typeof renderSigs    ==='function') renderSigs();
  if(page==='courses' && typeof renderCourses ==='function') renderCourses();
  if(page==='news'    && typeof renderNews    ==='function') renderNews();
  if(page==='dashboard') renderDashboard();
  if(page==='analytics') renderAnalytics();

  setTimeout(initReveal,80);
  addHover('button,a,input,select,.feat-card,.ai-card,.tip-card,.tool-module,.cat-chip,.price-btn,.level-btn,.course-card,.news-card,.source-item');
};

document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',e=>{e.preventDefault();navigate(a.dataset.page);});
});

document.getElementById('menuBtn').addEventListener('click',()=>{
  document.getElementById('navLinks').classList.toggle('open');
});

/* ─── DASHBOARD ─── */
window.renderDashboard = function() {
  if (!window.CV_USER) return;
  const u = CV_USER;
  const stats = FS.getStats(u.uid);
  const joined = u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}) : 'Today';

  const el = document.getElementById('dashboardBody');
  if(!el) return;

  el.innerHTML = `
    <div class="db-profile-card">
      <div class="db-avatar">${u.photoURL ? `<img src="${u.photoURL}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">` : u.displayName.charAt(0).toUpperCase()}</div>
      <div class="db-profile-info">
        <div class="db-name">${u.displayName}</div>
        <div class="db-email">${u.email}</div>
        <div class="db-role-badge">${u.role || 'user'}</div>
      </div>
      <div class="db-profile-actions">
        <button class="db-btn-sm" onclick="navigate('analytics')">📊 View Analytics</button>
        <button class="db-btn-sm db-btn-danger" onclick="handleLogout()">🚪 Logout</button>
      </div>
    </div>

    <div class="db-quick-stats">
      ${[
        {icon:'🔐',label:'Passwords',val:stats.pw_check||0,  page:'tools'},
        {icon:'🕵️',label:'URL Scans', val:stats.url_scan||0, page:'tools'},
        {icon:'🤖',label:'AI Views',  val:stats.ai_view||0,  page:'finder'},
        {icon:'⭐',label:'Bookmarks', val:stats.bookmark||0, page:'analytics'},
        {icon:'🎓',label:'Courses',   val:stats.course_view||0,page:'courses'},
        {icon:'📰',label:'News Read', val:stats.news_view||0, page:'news'},
      ].map(s=>`
        <div class="db-qs-card" onclick="navigate('${s.page}')">
          <div class="db-qs-icon">${s.icon}</div>
          <div class="db-qs-num">${s.val}</div>
          <div class="db-qs-label">${s.label}</div>
        </div>`).join('')}
    </div>

    <div class="db-actions-grid">
      <div class="db-action-card" onclick="navigate('finder')">
        <span class="db-action-icon">🤖</span>
        <span class="db-action-title">AI Finder</span>
        <span class="db-action-sub">500+ Tools</span>
      </div>
      <div class="db-action-card" onclick="navigate('tools')">
        <span class="db-action-icon">🔐</span>
        <span class="db-action-title">Security Tools</span>
        <span class="db-action-sub">Scan & Analyze</span>
      </div>
      <div class="db-action-card" onclick="navigate('courses')">
        <span class="db-action-icon">🎓</span>
        <span class="db-action-title">Free Courses</span>
        <span class="db-action-sub">106+ Available</span>
      </div>
      <div class="db-action-card" onclick="navigate('analytics')">
        <span class="db-action-icon">📊</span>
        <span class="db-action-title">Analytics</span>
        <span class="db-action-sub">Your Stats</span>
      </div>
      <div class="db-action-card" onclick="navigate('news')">
        <span class="db-action-icon">📡</span>
        <span class="db-action-title">Cyber News</span>
        <span class="db-action-sub">Live Threats</span>
      </div>
      <div class="db-action-card" onclick="navigate('tips')">
        <span class="db-action-icon">🛡️</span>
        <span class="db-action-title">Security Tips</span>
        <span class="db-action-sub">15+ Guides</span>
      </div>
    </div>

    <div class="db-info-row">
      <div class="db-info-item"><span>📅 Member since</span><strong>${joined}</strong></div>
      <div class="db-info-item"><span>🌐 Firebase</span><strong style="color:${FIREBASE_READY?'var(--accent3)':'var(--accent4)'}">${FIREBASE_READY?'Connected':'Local Mode'}</strong></div>
      <div class="db-info-item"><span>🔒 Security Score</span><strong style="color:var(--accent)">${computeScore(stats)}/100</strong></div>
    </div>
  `;
};

function computeScore(stats){
  let s=15;
  if(stats.pw_check>0)s+=20;
  if(stats.url_scan>0)s+=20;
  if(stats.bookmark>0)s+=15;
  if(stats.course_view>0)s+=15;
  if(stats.pw_check>=5)s+=15;
  return Math.min(s,100);
}

/* ─── REVEAL ─── */
function initReveal(){
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    if(el.classList.contains('in'))return;
    el.style.transitionDelay=(i*.06)+'s';
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('in');obs.disconnect();}},{threshold:0.1});
    obs.observe(el);
  });
}
initReveal();

/* ─── COUNTERS ─── */
function counter(el,target,suffix=''){
  let v=0; const step=Math.ceil(target/60);
  const t=setInterval(()=>{v=Math.min(v+step,target);el.textContent=v+suffix;if(v>=target)clearInterval(t);},25);
}
window.startCounters=function(toolCount,catCount,freeCount){
  const c1=document.getElementById('c1');
  const c2=document.getElementById('c2');
  const c3=document.getElementById('c3');
  const c4=document.getElementById('c4');
  if(c1)counter(c1,toolCount,'+');
  if(c2)counter(c2,catCount);
  if(c3)counter(c3,freeCount,'+');
  if(c4)counter(c4,15,'+');
};

/* ─── NAV SCROLL ─── */
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('mainNav');
  if(nav)nav.style.background=window.scrollY>20?'rgba(2,8,23,0.98)':'rgba(2,8,23,0.88)';
});

/* ─── KEYBOARD ─── */
document.addEventListener('keydown',e=>{
  if(e.ctrlKey||e.metaKey||e.target.tagName==='INPUT'||e.target.tagName==='SELECT')return;
  const map={'1':'home','2':'finder','3':'tools','4':'tips','5':'courses','6':'news','7':'dashboard','8':'analytics'};
  if(map[e.key])navigate(map[e.key]);
});

/* ─── FEATURE CARD GLOW ─── */
document.querySelectorAll('.feat-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const glow=card.querySelector('.feat-glow');
    if(glow)glow.style.background=`radial-gradient(circle at ${((e.clientX-r.left)/r.width)*100}% ${((e.clientY-r.top)/r.height)*100}%,rgba(0,212,255,0.08),transparent 60%)`;
  });
});
