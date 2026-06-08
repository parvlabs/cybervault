/* ══════════════════════════════════════════════
   CYBERVAULT — TIPS.JS
   15+ Cyber Security Tips · Level Filter
   ══════════════════════════════════════════════ */

const TIPS = [
  {
    icon: '🔑',
    title: 'Use Strong Passwords',
    level: 'beginner',
    desc: 'Create passwords with 16+ characters mixing uppercase, lowercase, numbers and symbols. Never reuse passwords across different sites. A strong password is your first line of defence.'
  },
  {
    icon: '🔒',
    title: 'Enable 2FA Everywhere',
    level: 'beginner',
    desc: 'Two-factor authentication adds an extra security layer. Even if your password leaks, attackers cannot access your account without the second factor (OTP, authenticator app, or hardware key).'
  },
  {
    icon: '🔄',
    title: 'Update Software Regularly',
    level: 'beginner',
    desc: 'Software updates patch known security vulnerabilities. Enable auto-updates for your OS, browser, and apps. Outdated software is the #1 entry point for hackers worldwide.'
  },
  {
    icon: '🌐',
    title: 'Always Use HTTPS',
    level: 'beginner',
    desc: 'Always check for "https://" and the padlock icon before entering sensitive info. HTTP connections are unencrypted — anyone on the same network can read your data like an open book.'
  },
  {
    icon: '📧',
    title: 'Spot Phishing Emails',
    level: 'beginner',
    desc: 'Never click links in unexpected emails. Verify sender email addresses carefully. Look for urgent language, spelling mistakes, mismatched logos, and suspicious attachments before clicking anything.'
  },
  {
    icon: '🛡️',
    title: 'Use a Password Manager',
    level: 'beginner',
    desc: 'Tools like Bitwarden (free), 1Password, or Dashlane generate and store unique strong passwords for every site. You only remember one master password — they handle the rest securely.'
  },
  {
    icon: '🌍',
    title: 'VPN on Public WiFi',
    level: 'intermediate',
    desc: 'Public WiFi at cafes, airports & hotels is a goldmine for hackers doing man-in-the-middle attacks. A VPN encrypts all your traffic so nobody on the same network can intercept your data.'
  },
  {
    icon: '🔐',
    title: 'Encrypt Sensitive Files',
    level: 'intermediate',
    desc: 'Use VeraCrypt, BitLocker (Windows), or FileVault (Mac) to encrypt sensitive files and drives. Encryption renders data completely unreadable without the correct key — even if your device is stolen.'
  },
  {
    icon: '🧹',
    title: 'Audit App Permissions',
    level: 'intermediate',
    desc: 'Regularly review which apps have access to your camera, mic, location, contacts, and messages. Revoke any permissions that the app doesn\'t genuinely need for its core function.'
  },
  {
    icon: '💾',
    title: 'Backup with 3-2-1 Rule',
    level: 'intermediate',
    desc: 'Keep 3 copies of your data, on 2 different storage media types, with 1 copy stored offsite or in the cloud. This protects against ransomware, hardware failure, fire, and natural disasters.'
  },
  {
    icon: '🕵️',
    title: 'Monitor Your Digital Footprint',
    level: 'intermediate',
    desc: 'Use haveibeenpwned.com to check if your email appeared in data breaches. Set Google Alerts for your name. Regularly search yourself online to see what personal data is publicly exposed.'
  },
  {
    icon: '🧱',
    title: 'Network Segmentation',
    level: 'intermediate',
    desc: 'Isolate IoT devices (smart TVs, speakers, cameras) on a separate guest WiFi network. If any device gets compromised, attackers can\'t pivot to your main devices containing sensitive data.'
  },
  {
    icon: '⚡',
    title: 'Zero Trust Architecture',
    level: 'advanced',
    desc: '"Never trust, always verify." Every access request must be authenticated and authorized regardless of whether it originates inside or outside your network perimeter. Assume breach at all times.'
  },
  {
    icon: '🔍',
    title: 'Threat Hunting Mindset',
    level: 'advanced',
    desc: 'Proactively hunt for signs of compromise instead of waiting for alerts. Look for unusual outbound connections, unknown processes, new user accounts, or unexpected file modifications in system logs.'
  },
  {
    icon: '🧪',
    title: 'Run Security Audits',
    level: 'advanced',
    desc: 'Regularly scan your systems with tools like Nmap, OpenVAS, or Burp Suite. Know your attack surface by listing all open ports, services, and dependencies. Patch findings before attackers find them.'
  },
  {
    icon: '🌑',
    title: 'Dark Web Monitoring',
    level: 'advanced',
    desc: 'Use services like Firefox Monitor or SpyCloud to monitor if your credentials appear on dark web marketplaces. Set up breach alerts so you know immediately when your data is being traded.'
  },
  {
    icon: '🔏',
    title: 'Use End-to-End Encryption',
    level: 'intermediate',
    desc: 'Use Signal for messages, ProtonMail for email, and WhatsApp (with E2EE enabled) for calls. E2EE means only you and your recipient can read messages — not even the service provider can access them.'
  },
  {
    icon: '🎭',
    title: 'Separate Digital Identities',
    level: 'advanced',
    desc: 'Use different email addresses for banking, shopping, social media, and newsletters. This way, if one gets compromised, it doesn\'t expose all your accounts. Use aliases for sign-ups when possible.'
  },
];

let activeLevel = 'all';

window.renderTips = function() {
  const levelBar = document.getElementById('levelBar');
  const levels   = ['all', 'beginner', 'intermediate', 'advanced'];

  levelBar.innerHTML = levels.map(l => `
    <button class="level-btn${l === activeLevel ? ' active' : ''}"
      onclick="setLevel('${l}')">
      ${l === 'all'          ? '🌐 All Tips'    :
        l === 'beginner'     ? '🟢 Beginner'    :
        l === 'intermediate' ? '🟡 Intermediate' : '🔴 Advanced'}
    </button>
  `).join('');

  const filtered = activeLevel === 'all'
    ? TIPS
    : TIPS.filter(t => t.level === activeLevel);

  const grid = document.getElementById('tipsGrid');
  grid.innerHTML = filtered.map((tip, i) => `
    <div class="tip-card reveal" style="transition-delay:${i * 0.06}s">
      <div class="tip-big-num">${String(i + 1).padStart(2, '0')}</div>
      <span class="tip-icon">${tip.icon}</span>
      <div class="tip-title">${tip.title}</div>
      <p class="tip-desc">${tip.desc}</p>
      <span class="tip-badge ${
        tip.level === 'beginner'     ? 'tb-beg' :
        tip.level === 'intermediate' ? 'tb-int' : 'tb-adv'
      }">
        ${tip.level === 'beginner' ? '🟢' : tip.level === 'intermediate' ? '🟡' : '🔴'}
        ${tip.level}
      </span>
    </div>
  `).join('');

  // Trigger reveal animations
  setTimeout(() => {
    if (window.initReveal) initReveal();
    else {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('in');
      });
    }
  }, 50);
};

window.setLevel = function(l) {
  activeLevel = l;
  renderTips();
};

// Auto-render on load
document.addEventListener('DOMContentLoaded', renderTips);
