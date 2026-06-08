/* ══════════════════════════════════════════════
   CYBERVAULT — PHISHING.JS
   URL Detector · 15 Signatures · Hash Encoder
   ══════════════════════════════════════════════ */

const SIGNATURES = [
  { key: 'ip-url',       label: 'IP-based URL',          desc: 'URL uses raw IP instead of domain', regex: /https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ },
  { key: 'punycode',     label: 'Punycode / IDN',         desc: 'Internationalized domain (spoofing)', regex: /xn--/ },
  { key: 'at-sign',      label: '@ Symbol redirect',      desc: 'Redirects using @ in URL', regex: /@/ },
  { key: 'double-slash', label: 'Double slash redirect',   desc: 'Suspicious path redirection', regex: /\/\/.+\/\// },
  { key: 'suspicious-kw',label: 'Phishing keywords',      desc: 'Common phishing bait words', regex: /secure|account|update|verify|banking|signin|paypal|amazon|microsoft|apple|google-login|support-ticket|confirm|winner|prize|claim/i },
  { key: 'long-url',     label: 'Abnormal URL length',    desc: 'Unusually long URL (>80 chars)', fn: u => u.length > 80 },
  { key: 'http-only',    label: 'HTTP (not HTTPS)',        desc: 'Unencrypted connection', fn: u => u.startsWith('http://') },
  { key: 'many-dots',    label: 'Excessive subdomains',   desc: 'Too many dots = suspicious', fn: u => (u.match(/\./g) || []).length > 4 },
  { key: 'redirect',     label: 'Redirect parameter',     desc: 'Param trying to redirect you', regex: /redirect=|url=|link=|goto=|return=|next=/i },
  { key: 'data-uri',     label: 'Data URI scheme',        desc: 'Dangerous embedded content', regex: /^data:/ },
  { key: 'encoded',      label: 'Excessive URL encoding', desc: 'Obfuscated characters', regex: /(%[0-9a-f]{2}.*){3,}/i },
  { key: 'hyphen-brand', label: 'Hyphenated brand name',  desc: 'Brand name with hyphens to fool users', regex: /paypal-|amazon-|google-|apple-|microsoft-|bank-/i },
  { key: 'free-host',    label: 'Free hosting domain',    desc: 'Often used for phishing', regex: /\.tk$|\.ml$|\.ga$|\.cf$|\.gq$|\.top$|\.xyz$|\.buzz$|\.club$/i },
  { key: 'port-num',     label: 'Non-standard port',      desc: 'Suspicious port number in URL', regex: /:\d{4,5}\// },
  { key: 'multipath',    label: 'Deep path with brand',   desc: 'Fake login pages in deep folders', regex: /\/(login|signin|secure|account|verify|update|confirm|auth)\//i },
];

window.renderSigs = function() {
  const grid = document.getElementById('sigGrid');
  if (!grid) return;
  grid.innerHTML = SIGNATURES.map(s => `
    <div class="sig-pill" id="sig-${s.key}" title="${s.desc}">
      ${s.label}
    </div>
  `).join('');
};

window.checkURL = function() {
  const url     = document.getElementById('urlInput').value.trim();
  const resultEl = document.getElementById('urlResult');
  const detailEl = document.getElementById('urlDetails');

  // Reset sig highlights
  SIGNATURES.forEach(s => {
    const el = document.getElementById('sig-' + s.key);
    if (el) el.classList.remove('triggered');
  });

  if (!url) {
    resultEl.innerHTML = `<div class="result-box res-warn" style="margin-top:1rem">
      ⚠️ Please paste a URL to scan.
    </div>`;
    detailEl.innerHTML = '';
    return;
  }

  // Run signatures
  const triggered = SIGNATURES.filter(s => {
    if (s.regex) return s.regex.test(url);
    if (s.fn)    return s.fn(url);
    return false;
  });

  // Highlight triggered sigs
  triggered.forEach(s => {
    const el = document.getElementById('sig-' + s.key);
    if (el) el.classList.add('triggered');
  });

  // Verdict
  let html = '';
  if (triggered.length === 0) {
    html = `<div class="result-box res-safe" style="margin-top:1rem">
      ✅ <strong>SAFE</strong> — No phishing signatures detected.<br>
      <span style="opacity:0.7;font-size:0.75rem;display:block;margin-top:6px">
        ℹ️ Always verify the domain manually before entering credentials.
      </span>
    </div>`;
  } else if (triggered.length <= 2) {
    html = `<div class="result-box res-warn" style="margin-top:1rem">
      ⚠️ <strong>SUSPICIOUS</strong> — ${triggered.length} warning signal${triggered.length > 1 ? 's' : ''} detected.<br>
      <span style="opacity:0.8;font-size:0.75rem;display:block;margin-top:6px">
        Proceed with caution. Do not enter passwords or personal data.
      </span>
    </div>`;
  } else {
    html = `<div class="result-box res-danger" style="margin-top:1rem">
      🚨 <strong>PHISHING DETECTED</strong> — ${triggered.length} malicious patterns found!<br>
      <span style="opacity:0.8;font-size:0.75rem;display:block;margin-top:6px">
        ⛔ DO NOT visit this URL. Close immediately & report it.
      </span>
    </div>`;
  }

  resultEl.innerHTML = html;

  // Detail list
  if (triggered.length > 0) {
    detailEl.innerHTML = `
      <div style="margin-top:1rem;padding:14px 18px;background:rgba(0,0,0,0.2);border-radius:8px;border:1px solid var(--border)">
        <div style="font-family:var(--font-m);font-size:0.65rem;color:var(--text3);letter-spacing:2px;margin-bottom:10px">TRIGGERED SIGNATURES</div>
        ${triggered.map(s => `
          <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0;border-bottom:1px solid var(--border)">
            <span style="color:var(--danger);font-size:0.8rem;margin-top:1px">⚡</span>
            <div>
              <div style="font-family:var(--font-m);font-size:0.75rem;color:var(--danger);letter-spacing:0.5px">${s.label}</div>
              <div style="font-size:0.72rem;color:var(--text3);margin-top:2px">${s.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>`;
  } else {
    detailEl.innerHTML = '';
  }
};

// Enter key support
document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('urlInput');
  if (urlInput) {
    urlInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') checkURL();
    });
  }
  renderSigs();
});

/* ── TEXT ENCODER TOOL ── */
window.encodeText = function() {
  const input = document.getElementById('hashInput').value.trim();
  const resultEl = document.getElementById('hashResult');
  if (!input) {
    resultEl.innerHTML = `<div class="result-box res-warn" style="margin-top:1rem">⚠️ Please enter some text to encode.</div>`;
    return;
  }

  const b64     = btoa(unescape(encodeURIComponent(input)));
  const rot13   = input.replace(/[A-Za-z]/g, c =>
    String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13)));
  const hex     = Array.from(input).map(c => c.charCodeAt(0).toString(16).padStart(2,'0')).join(' ');
  const binary  = Array.from(input).map(c => c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
  const reversed = input.split('').reverse().join('');
  const charCount = input.length;
  const wordCount = input.trim().split(/\s+/).filter(Boolean).length;

  resultEl.innerHTML = `
    <div style="margin-top:1rem;display:flex;flex-direction:column;gap:10px">
      ${row('Base64', b64)}
      ${row('ROT13',  rot13)}
      ${row('HEX',    hex)}
      ${row('Binary (first 8 chars)', binary.split(' ').slice(0,8).join(' ') + (binary.split(' ').length > 8 ? '...' : ''))}
      ${row('Reversed', reversed)}
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <div style="padding:10px 16px;background:rgba(0,212,255,0.06);border:1px solid var(--border);border-radius:8px;font-family:var(--font-m);font-size:0.75rem;color:var(--accent)">
          ${charCount} <span style="color:var(--text3)">chars</span>
        </div>
        <div style="padding:10px 16px;background:rgba(0,212,255,0.06);border:1px solid var(--border);border-radius:8px;font-family:var(--font-m);font-size:0.75rem;color:var(--accent)">
          ${wordCount} <span style="color:var(--text3)">words</span>
        </div>
      </div>
    </div>`;
};

function row(label, value) {
  return `
    <div style="padding:12px 14px;background:rgba(0,0,0,0.25);border:1px solid var(--border);border-radius:8px">
      <div style="font-family:var(--font-m);font-size:0.62rem;color:var(--text3);letter-spacing:2px;margin-bottom:6px">${label}</div>
      <div style="font-family:var(--font-m);font-size:0.78rem;color:var(--accent);word-break:break-all;line-height:1.5">${value}</div>
    </div>`;
}

// ── Stat tracking ──
const _origCheckURL = window.checkURL;
window.checkURL = async function() {
  _origCheckURL();
  const url = document.getElementById('urlInput').value.trim();
  if(!url||!window.CV_USER) return;
  const resultEl = document.getElementById('urlResult');
  const isDanger = resultEl?.innerHTML.includes('res-danger');
  const isWarn   = resultEl?.innerHTML.includes('res-warn');
  const triggers = document.querySelectorAll('.sig-pill.triggered').length;
  await FS.incStat(CV_USER.uid,'url_scan');
  await FS.addRecord(CV_USER.uid,'url_scans',{
    url:url.slice(0,200), danger:isDanger, suspicious:isWarn, triggers
  });
};
