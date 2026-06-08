/* ══════════════════════════════════════════════
   CYBERVAULT — ANALYTICS.JS
   Dashboard Charts · Stats · Activity Feed
   Pure Canvas + SVG — No external libs needed
   ══════════════════════════════════════════════ */

let analyticsReady = false;

window.renderAnalytics = async function() {
  if (!window.CV_USER) return;
  if (analyticsReady) { refreshAnalytics(); return; }
  analyticsReady = true;

  const uid   = CV_USER.uid;
  const stats = FS.getStats(uid);

  // Get records
  const [pwScans, urlScans, bookmarks, activity] = await Promise.all([
    FS.getRecords(uid, 'pw_scans',    50),
    FS.getRecords(uid, 'url_scans',   50),
    FS.getRecords(uid, 'bookmarks',   100),
    FS.getRecords(uid, 'activity',    100),
  ]);

  buildAnalyticsUI(stats, pwScans, urlScans, bookmarks, activity);
};

async function refreshAnalytics() {
  const uid   = CV_USER.uid;
  const stats = FS.getStats(uid);
  const [pwScans, urlScans, bookmarks] = await Promise.all([
    FS.getRecords(uid, 'pw_scans',  50),
    FS.getRecords(uid, 'url_scans', 50),
    FS.getRecords(uid, 'bookmarks', 100),
  ]);
  buildAnalyticsUI(stats, pwScans, urlScans, bookmarks, []);
}

function buildAnalyticsUI(stats, pwScans, urlScans, bookmarks, activity) {
  const el = document.getElementById('analyticsBody');
  if (!el) return;

  const totalActions  = (stats.total || 0);
  const pwCount       = stats.pw_check   || pwScans.length   || 0;
  const urlCount      = stats.url_scan   || urlScans.length  || 0;
  const aiViews       = stats.ai_view    || 0;
  const bookmarkCount = stats.bookmark   || bookmarks.length || 0;
  const courseViews   = stats.course_view || 0;
  const newsViews     = stats.news_view  || 0;
  const joinDate      = CV_USER.createdAt
    ? new Date(CV_USER.createdAt).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })
    : 'Today';

  // Daily activity for past 7 days
  const daily = stats.daily || {};
  const last7 = getLast7Days();
  const dailyVals = last7.map(d => daily[d] || 0);
  const maxDaily  = Math.max(...dailyVals, 1);

  // Phishing results
  const dangerous  = urlScans.filter(s => s.danger).length;
  const suspicious = urlScans.filter(s => s.suspicious).length;
  const safe       = urlScans.length - dangerous - suspicious;

  // PW strength distribution
  const pwStrengths = { weak:0, fair:0, strong:0, vstrong:0 };
  pwScans.forEach(s => { if (pwStrengths[s.strength] !== undefined) pwStrengths[s.strength]++; });

  el.innerHTML = `
    <!-- TOP STATS -->
    <div class="an-stats-grid">
      ${statCard('⚡', 'Total Actions', totalActions, 'var(--accent)', '+' + totalActions + ' lifetime')}
      ${statCard('🔐', 'Passwords Checked', pwCount, '#10b981', 'Security scans')}
      ${statCard('🕵️', 'URLs Scanned', urlCount, '#f59e0b', dangerous + ' threats found')}
      ${statCard('🤖', 'AI Tools Viewed', aiViews, '#a78bfa', bookmarkCount + ' bookmarked')}
      ${statCard('🎓', 'Courses Viewed', courseViews, '#60a5fa', '106+ available')}
      ${statCard('📅', 'Member Since', joinDate, '#f87171', CV_USER.role || 'user')}
    </div>

    <!-- CHARTS ROW -->
    <div class="an-charts-row">

      <!-- Activity Chart -->
      <div class="an-chart-card an-chart-large">
        <div class="an-chart-title">
          <span>📊 ACTIVITY — LAST 7 DAYS</span>
          <span class="an-chart-sub">Total actions per day</span>
        </div>
        <div class="an-bar-chart">
          ${last7.map((d, i) => {
            const val = dailyVals[i];
            const pct = maxDaily > 0 ? (val / maxDaily) * 100 : 0;
            const day = new Date(d).toLocaleDateString('en', { weekday:'short' });
            return `
              <div class="an-bar-col">
                <div class="an-bar-val">${val > 0 ? val : ''}</div>
                <div class="an-bar-wrap">
                  <div class="an-bar-fill" style="height:${pct}%;background:linear-gradient(to top,var(--accent),var(--accent2))"></div>
                </div>
                <div class="an-bar-label">${day}</div>
              </div>`;
          }).join('')}
        </div>
      </div>

      <!-- Donut — URL Results -->
      <div class="an-chart-card">
        <div class="an-chart-title"><span>🕵️ URL SCAN RESULTS</span></div>
        ${urlCount > 0 ? donutChart([
          { label:'Safe',       val:safe,       color:'#10b981' },
          { label:'Suspicious', val:suspicious, color:'#f59e0b' },
          { label:'Dangerous',  val:dangerous,  color:'#ef4444' },
        ], urlCount) : emptyChart('No URL scans yet')}
      </div>

      <!-- Donut — PW Strength -->
      <div class="an-chart-card">
        <div class="an-chart-title"><span>🔐 PASSWORD STRENGTH</span></div>
        ${pwCount > 0 ? donutChart([
          { label:'Very Strong', val:pwStrengths.vstrong, color:'#00d4ff' },
          { label:'Strong',      val:pwStrengths.strong,  color:'#10b981' },
          { label:'Fair',        val:pwStrengths.fair,    color:'#f59e0b' },
          { label:'Weak',        val:pwStrengths.weak,    color:'#ef4444' },
        ], pwCount) : emptyChart('No password checks yet')}
      </div>
    </div>

    <!-- RECENT SCANS TABLE -->
    <div class="an-section">
      <div class="an-section-title">🔍 RECENT PASSWORD SCANS</div>
      ${pwScans.length > 0
        ? `<div class="an-table">
            <div class="an-table-head">
              <span>PASSWORD (masked)</span><span>STRENGTH</span><span>ENTROPY</span><span>DATE</span>
            </div>
            ${pwScans.slice(0,10).map(s => `
              <div class="an-table-row">
                <span class="an-mono">${maskPw(s.pw || '●●●●●●●●')}</span>
                <span class="an-badge ${s.strength || 'fair'}">${s.strength || 'analyzed'}</span>
                <span class="an-mono" style="color:var(--text3)">${s.entropy || '–'} bits</span>
                <span style="color:var(--text3);font-size:0.72rem">${formatDate(s.createdAt)}</span>
              </div>`).join('')}
           </div>`
        : emptyTable('No password scans recorded yet. Use the Tools page!')}
    </div>

    <!-- RECENT URL SCANS -->
    <div class="an-section">
      <div class="an-section-title">🌐 RECENT URL SCANS</div>
      ${urlScans.length > 0
        ? `<div class="an-table">
            <div class="an-table-head">
              <span>URL</span><span>VERDICT</span><span>THREATS</span><span>DATE</span>
            </div>
            ${urlScans.slice(0,10).map(s => `
              <div class="an-table-row">
                <span class="an-mono" style="color:var(--text2);font-size:0.72rem;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${s.url || ''}">${truncate(s.url || 'N/A', 30)}</span>
                <span class="an-badge ${s.danger ? 'danger' : s.suspicious ? 'warn' : 'safe'}">${s.danger ? '🚨 DANGER' : s.suspicious ? '⚠️ SUSPECT' : '✅ SAFE'}</span>
                <span style="color:var(--text3);font-size:0.72rem">${s.triggers || 0} flags</span>
                <span style="color:var(--text3);font-size:0.72rem">${formatDate(s.createdAt)}</span>
              </div>`).join('')}
           </div>`
        : emptyTable('No URL scans recorded yet. Use the Tools page!')}
    </div>

    <!-- BOOKMARKS -->
    <div class="an-section">
      <div class="an-section-title">⭐ YOUR BOOKMARKS <span class="an-count">${bookmarks.length}</span></div>
      ${bookmarks.length > 0
        ? `<div class="an-bookmarks-grid">
            ${bookmarks.slice(0,12).map(b => `
              <div class="an-bookmark">
                <div class="an-bm-top">
                  <span class="an-bm-name">${b.name || 'Tool'}</span>
                  <button class="an-bm-del" onclick="removeBookmark('${b.id}','${b.uid}')" title="Remove">×</button>
                </div>
                <div class="an-bm-cat">${b.cat || 'AI Tool'}</div>
                <a href="${b.url || '#'}" target="_blank" class="an-bm-link">Open →</a>
              </div>`).join('')}
           </div>`
        : emptyTable('No bookmarks yet. Bookmark AI tools from the Finder page!')}
    </div>

    <!-- SECURITY SCORE -->
    <div class="an-section">
      <div class="an-section-title">🛡️ YOUR SECURITY SCORE</div>
      <div class="an-score-wrap">
        ${buildSecurityScore(pwCount, urlCount, bookmarkCount, courseViews)}
      </div>
    </div>
  `;

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.an-bar-fill').forEach(b => {
      b.style.transition = 'height 0.8s ease';
    });
  }, 100);
}

/* ── Helpers ── */
function getLast7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
}

function statCard(icon, label, val, color, sub) {
  return `
    <div class="an-stat-card">
      <div class="an-stat-icon" style="color:${color}">${icon}</div>
      <div class="an-stat-num" style="color:${color}">${typeof val === 'number' ? val.toLocaleString() : val}</div>
      <div class="an-stat-label">${label}</div>
      <div class="an-stat-sub">${sub}</div>
    </div>`;
}

function donutChart(segments, total) {
  const r = 60, cx = 80, cy = 80, stroke = 22;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  const paths = segments
    .filter(s => s.val > 0)
    .map(s => {
      const pct  = s.val / total;
      const dash = pct * circ;
      const gap  = circ - dash;
      const rot  = offset * 360;
      offset    += pct;
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.color}"
        stroke-width="${stroke}" stroke-dasharray="${dash} ${gap}"
        stroke-dashoffset="${circ * 0.25}"
        transform="rotate(${rot} ${cx} ${cy})"
        style="transition:stroke-dasharray 0.8s ease"/>`;
    }).join('');

  const legend = segments.filter(s => s.val > 0).map(s => `
    <div class="donut-leg-item">
      <span style="width:10px;height:10px;border-radius:50%;background:${s.color};display:inline-block"></span>
      <span>${s.label}</span>
      <span style="margin-left:auto;color:var(--text2)">${s.val}</span>
    </div>`).join('');

  return `
    <div class="donut-wrap">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="${stroke}"/>
        ${paths}
        <text x="${cx}" y="${cy}" text-anchor="middle" dy="0.35em"
          fill="var(--text)" font-family="Orbitron,monospace" font-size="16" font-weight="700">${total}</text>
      </svg>
      <div class="donut-legend">${legend}</div>
    </div>`;
}

function emptyChart(msg) {
  return `<div class="an-empty-chart">${msg}</div>`;
}
function emptyTable(msg) {
  return `<div class="an-empty-table">${msg}</div>`;
}

function maskPw(pw) {
  if (!pw) return '●●●●●●●●';
  const len = pw.length;
  return pw.slice(0,1) + '●'.repeat(Math.min(6, len-2)) + (len > 2 ? pw.slice(-1) : '');
}

function truncate(str, n) {
  return str.length > n ? str.slice(0, n) + '...' : str;
}

function formatDate(d) {
  if (!d) return 'Just now';
  const date = new Date(d.seconds ? d.seconds * 1000 : d);
  return date.toLocaleDateString('en-IN', { day:'numeric', month:'short' });
}

function buildSecurityScore(pwChecks, urlScans, bookmarks, courses) {
  const checks = [
    { label:'Password analyzer used',    done: pwChecks > 0,   pts: 20 },
    { label:'URLs scanned for phishing', done: urlScans > 0,   pts: 20 },
    { label:'AI tools bookmarked',       done: bookmarks > 0,  pts: 15 },
    { label:'Courses viewed',            done: courses > 0,    pts: 15 },
    { label:'5+ passwords analyzed',     done: pwChecks >= 5,  pts: 15 },
    { label:'Account created & secured', done: true,           pts: 15 },
  ];
  const score = checks.reduce((s, c) => c.done ? s + c.pts : s, 0);
  const color = score >= 80 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444';
  const label = score >= 80 ? 'EXCELLENT' : score >= 50 ? 'GOOD' : 'NEEDS WORK';

  return `
    <div class="an-score-card">
      <div class="an-score-circle">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="${color}" stroke-width="10"
            stroke-dasharray="${score * 3.14} 314" stroke-dashoffset="78.5"
            stroke-linecap="round" style="transition:stroke-dasharray 1s ease"/>
          <text x="60" y="55" text-anchor="middle" fill="${color}" font-family="Orbitron,monospace" font-size="20" font-weight="700">${score}</text>
          <text x="60" y="72" text-anchor="middle" fill="var(--text3)" font-family="Share Tech Mono,monospace" font-size="9" letter-spacing="1">${label}</text>
        </svg>
      </div>
      <div class="an-score-checks">
        ${checks.map(c => `
          <div class="an-score-item">
            <span class="an-score-dot" style="background:${c.done ? '#10b981' : 'var(--text3)'}"></span>
            <span style="color:${c.done ? 'var(--text)' : 'var(--text3)'}; font-size:0.82rem">${c.label}</span>
            <span style="margin-left:auto;font-family:var(--font-m);font-size:0.7rem;color:${c.done ? '#10b981':'var(--text3)'}">+${c.pts}pts</span>
          </div>`).join('')}
      </div>
    </div>`;
}

window.removeBookmark = async function(id, uid) {
  await FS.deleteRecord(CV_USER.uid, 'bookmarks', id);
  renderAnalytics();
};

// Track tool view
window.trackAIView = async function(tool) {
  if (!CV_USER) return;
  await FS.incStat(CV_USER.uid, 'ai_view');
};

window.trackCourseView = async function() {
  if (!CV_USER) return;
  await FS.incStat(CV_USER.uid, 'course_view');
};

window.trackNewsView = async function() {
  if (!CV_USER) return;
  await FS.incStat(CV_USER.uid, 'news_view');
};

// Bookmark a tool
window.bookmarkTool = async function(tool) {
  if (!CV_USER) { navigate('login'); return; }
  await FS.addRecord(CV_USER.uid, 'bookmarks', {
    name: tool.n, cat: tool.cat, url: tool.url, uid: CV_USER.uid
  });
  await FS.incStat(CV_USER.uid, 'bookmark');
  showToast('⭐ Bookmarked: ' + tool.n);
};

// Toast notification
window.showToast = function(msg) {
  const t = document.getElementById('cvToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
};
