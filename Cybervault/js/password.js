/* ══════════════════════════════════════════════
   CYBERVAULT — PASSWORD.JS
   Strength Analyzer · Entropy · Crack Time · Generator
   ══════════════════════════════════════════════ */

const COMMON_WORDS = [
  'password','123456','qwerty','abc123','letmein','monkey','master',
  'dragon','hello','football','iloveyou','admin','welcome','shadow',
  'sunshine','princess','passw0rd','superman','batman','trustno1',
  'login','test','guest','user','root','default','pass','access'
];

let pwVisible = false;

window.togglePw = function() {
  const inp = document.getElementById('pwInput');
  pwVisible  = !pwVisible;
  inp.type   = pwVisible ? 'text' : 'password';
  document.getElementById('pwToggle').textContent = pwVisible ? '🙈' : '👁';
};

window.generatePw = function() {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
  let pw = '';
  // Guarantee at least one of each type
  const must = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
    '!@#$%^&*()-_=+[]{}|;:,.<>?'
  ];
  must.forEach(s => {
    pw += s[Math.floor(Math.random() * s.length)];
  });
  for (let i = pw.length; i < 20; i++) {
    pw += charset[Math.floor(Math.random() * charset.length)];
  }
  // Shuffle
  pw = pw.split('').sort(() => 0.5 - Math.random()).join('');
  const inp = document.getElementById('pwInput');
  inp.type  = 'text';
  pwVisible = true;
  document.getElementById('pwToggle').textContent = '🙈';
  inp.value = pw;
  checkPassword();
};

window.checkPassword = function() {
  const pw = document.getElementById('pwInput').value;

  const bars  = ['sb1','sb2','sb3','sb4','sb5'];
  const checks = {
    'ck-len':    pw.length >= 8,
    'ck-upper':  /[A-Z]/.test(pw),
    'ck-lower':  /[a-z]/.test(pw),
    'ck-num':    /[0-9]/.test(pw),
    'ck-sym':    /[^A-Za-z0-9]/.test(pw),
    'ck-len2':   pw.length >= 16,
    'ck-nodict': !COMMON_WORDS.some(w => pw.toLowerCase().includes(w)),
    'ck-norep':  !/(.)\1{2,}/.test(pw),
  };

  // Update check items
  Object.entries(checks).forEach(([id, pass]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('pass', pass);
    el.querySelector('.chk-ico').textContent = pass ? '✓' : '○';
  });

  if (!pw) {
    bars.forEach(b => {
      const el = document.getElementById(b);
      if (el) el.className = 's-bar';
    });
    document.getElementById('strengthLabel').textContent = 'WAITING FOR INPUT';
    document.getElementById('strengthLabel').style.color = 'var(--text3)';
    document.getElementById('strengthHint').textContent  = 'Start typing to analyze';
    document.getElementById('entropyBadge').textContent  = '';
    document.getElementById('crackTime').textContent     = '';
    return;
  }

  const passCount = Object.values(checks).filter(Boolean).length;

  // Determine level 0-5
  let level = 0;
  if (pw.length >= 4)                           level = 1;
  if (pw.length >= 8 && passCount >= 3)         level = 2;
  if (pw.length >= 10 && passCount >= 5)        level = 3;
  if (pw.length >= 14 && passCount >= 6)        level = 4;
  if (pw.length >= 18 && passCount === 8)       level = 5;

  const configs = [
    { color:'weak',    label:'TOO WEAK',     hint:'Extremely easy to crack',        hex:'#ef4444' },
    { color:'weak',    label:'WEAK',         hint:'Crackable in seconds',           hex:'#ef4444' },
    { color:'fair',    label:'FAIR',         hint:'Could be stronger',              hex:'#f59e0b' },
    { color:'strong',  label:'STRONG',       hint:'Good password',                  hex:'#10b981' },
    { color:'vstrong', label:'VERY STRONG',  hint:'Excellent — hard to crack',      hex:'#00d4ff' },
    { color:'vstrong', label:'UNBREAKABLE',  hint:'Fortress-level security! 💪',    hex:'#00d4ff' },
  ];
  const cfg = configs[level];

  // Update bars
  bars.forEach((b, i) => {
    const el = document.getElementById(b);
    if (!el) return;
    if (i < level) {
      el.className = `s-bar on ${cfg.color}`;
    } else {
      el.className = 's-bar';
    }
  });

  const lblEl = document.getElementById('strengthLabel');
  lblEl.textContent = cfg.label;
  lblEl.style.color = cfg.hex;
  document.getElementById('strengthHint').textContent = cfg.hint;

  // Entropy
  let charset = 0;
  if (/[a-z]/.test(pw)) charset += 26;
  if (/[A-Z]/.test(pw)) charset += 26;
  if (/[0-9]/.test(pw)) charset += 10;
  if (/[^A-Za-z0-9]/.test(pw)) charset += 32;
  const entropy = Math.round(pw.length * Math.log2(charset || 1));

  const badge = document.getElementById('entropyBadge');
  badge.textContent = `~${entropy} bits`;
  badge.style.borderColor = cfg.hex;
  badge.style.color = cfg.hex;

  // Crack time estimate
  const crackEl = document.getElementById('crackTime');
  crackEl.textContent = `⏱ Estimated crack time: ${estimateCrackTime(entropy)}`;
  crackEl.style.color = cfg.hex;
};

function estimateCrackTime(entropy) {
  // Assuming 1 billion guesses/sec (GPU cracking)
  const guesses = Math.pow(2, entropy);
  const gpuSpeed = 1e10; // 10 billion/sec
  const seconds = guesses / gpuSpeed;

  if (seconds < 1)         return 'Instantly';
  if (seconds < 60)        return `${Math.round(seconds)} seconds`;
  if (seconds < 3600)      return `${Math.round(seconds/60)} minutes`;
  if (seconds < 86400)     return `${Math.round(seconds/3600)} hours`;
  if (seconds < 2592000)   return `${Math.round(seconds/86400)} days`;
  if (seconds < 31536000)  return `${Math.round(seconds/2592000)} months`;
  if (seconds < 3.15e9)    return `${Math.round(seconds/31536000)} years`;
  if (seconds < 3.15e12)   return `${(seconds/3.15e9).toFixed(1)} thousand years`;
  if (seconds < 3.15e15)   return `${(seconds/3.15e12).toFixed(1)} million years`;
  return 'Heat death of the universe 🌌';
}

// ── Stat tracking ──
const _origCheck = window.checkPassword;
window.checkPassword = async function() {
  _origCheck();
  const pw = document.getElementById('pwInput').value;
  if (!pw || !window.CV_USER) return;
  const bars=['sb1','sb2','sb3','sb4','sb5'];
  let level=0;
  bars.forEach((b,i)=>{ if(document.getElementById(b)?.classList.contains('on')) level=i+1; });
  const strengths=['','weak','weak','fair','strong','vstrong'];
  let charset=0;
  if(/[a-z]/.test(pw))charset+=26;
  if(/[A-Z]/.test(pw))charset+=26;
  if(/[0-9]/.test(pw))charset+=10;
  if(/[^A-Za-z0-9]/.test(pw))charset+=32;
  const entropy=Math.round(pw.length*Math.log2(charset||1));
  if(pw.length>=4){
    await FS.incStat(CV_USER.uid,'pw_check');
    await FS.addRecord(CV_USER.uid,'pw_scans',{
      pw: pw.slice(0,1)+'*'.repeat(Math.min(6,pw.length-1)),
      strength:strengths[level]||'analyzed',
      entropy:entropy,
      len:pw.length
    });
  }
};
