/* ══════════════════════════════════════════════
   CYBERVAULT — AUTH.JS
   Login · Signup · Google · Logout · State
   ══════════════════════════════════════════════ */

// ── Current user (localStorage fallback) ──
let CV_USER = null;

function loadLocalUser() {
  try {
    const d = localStorage.getItem('cv_current_user');
    return d ? JSON.parse(d) : null;
  } catch { return null; }
}

function saveLocalUser(user) {
  localStorage.setItem('cv_current_user', JSON.stringify(user));
}

function clearLocalUser() {
  localStorage.removeItem('cv_current_user');
}

// ── Show alert ──
function showAlert(msg, type = 'error') {
  const el = document.getElementById('authAlert');
  if (!el) return;
  el.className = 'auth-alert ' + type;
  el.textContent = msg;
  el.style.display = 'block';
  if (type !== 'error') setTimeout(() => el.style.display = 'none', 4000);
}

// ── Set button loading ──
function setLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.disabled = loading;
  btn.querySelector('.btn-text').style.display = loading ? 'none' : 'block';
  btn.querySelector('.btn-loader').style.display = loading ? 'block' : 'none';
}

// ── Email/Password LOGIN ──
async function handleLogin(e) {
  e.preventDefault();
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const remember = document.getElementById('rememberMe')?.checked;

  if (!email || !password) { showAlert('⚠️ Please fill all fields'); return; }

  setLoading('loginBtn', true);

  try {
    if (FIREBASE_READY && auth) {
      // Firebase login
      const persistence = remember
        ? firebase.auth.Auth.Persistence.LOCAL
        : firebase.auth.Auth.Persistence.SESSION;
      await auth.setPersistence(persistence);
      const result = await auth.signInWithEmailAndPassword(email, password);
      await onLoginSuccess(result.user);
    } else {
      // Local mode
      const users = JSON.parse(localStorage.getItem('cv_users') || '[]');
      const user  = users.find(u => u.email === email && u.password === btoa(password));
      if (!user) throw new Error('Invalid email or password.');
      await onLoginSuccess({ uid: user.uid, email: user.email, displayName: user.name });
    }
  } catch(err) {
    const msgs = {
      'auth/user-not-found':   '❌ No account found with this email.',
      'auth/wrong-password':   '❌ Incorrect password.',
      'auth/too-many-requests':'⚠️ Too many attempts. Try again later.',
      'auth/network-request-failed': '❌ Network error. Check your connection.'
    };
    showAlert(msgs[err.code] || '❌ ' + (err.message || 'Login failed'));
  } finally {
    setLoading('loginBtn', false);
  }
}

// ── Email/Password SIGNUP ──
async function handleSignup(e) {
  e.preventDefault();
  const firstName = document.getElementById('signupFirstName').value.trim();
  const lastName  = document.getElementById('signupLastName').value.trim();
  const email     = document.getElementById('signupEmail').value.trim();
  const password  = document.getElementById('signupPassword').value;
  const confirm   = document.getElementById('signupConfirm').value;
  const role      = document.getElementById('signupRole').value;
  const agreed    = document.getElementById('agreeTerms').checked;

  if (!firstName || !email || !password) { showAlert('⚠️ Fill all required fields'); return; }
  if (password.length < 8) { showAlert('⚠️ Password must be at least 8 characters'); return; }
  if (password !== confirm) { showAlert('⚠️ Passwords do not match'); return; }
  if (!agreed) { showAlert('⚠️ Please accept the Terms & Privacy Policy'); return; }

  setLoading('signupBtn', true);

  try {
    const name = (firstName + ' ' + lastName).trim();
    const userData = {
      displayName: name,
      firstName, lastName, email, role,
      createdAt: new Date().toISOString(),
      bookmarks: [], stats: {}
    };

    if (FIREBASE_READY && auth) {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName: name });
      await FS.saveUser(result.user.uid, userData);
      await onLoginSuccess(result.user);
    } else {
      // Local mode
      const users = JSON.parse(localStorage.getItem('cv_users') || '[]');
      if (users.find(u => u.email === email)) throw new Error('Email already registered.');
      const uid = 'local_' + Date.now();
      users.push({ uid, email, password: btoa(password), name, ...userData });
      localStorage.setItem('cv_users', JSON.stringify(users));
      await FS.saveUser(uid, userData);
      await onLoginSuccess({ uid, email, displayName: name });
    }
  } catch(err) {
    const msgs = {
      'auth/email-already-in-use': '❌ Email already registered. Please login.',
      'auth/invalid-email':        '❌ Invalid email format.',
      'auth/weak-password':        '❌ Password is too weak.',
    };
    showAlert(msgs[err.code] || '❌ ' + (err.message || 'Signup failed'));
  } finally {
    setLoading('signupBtn', false);
  }
}

// ── Google OAuth ──
async function handleGoogleLogin() {
  if (!FIREBASE_READY || !auth) {
    showAlert('⚠️ Google login requires Firebase setup. See README.', 'info');
    return;
  }
  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user   = result.user;
    // Save profile if new user
    if (result.additionalUserInfo?.isNewUser) {
      await FS.saveUser(user.uid, {
        displayName:  user.displayName,
        email:        user.email,
        photoURL:     user.photoURL,
        createdAt:    new Date().toISOString(),
        provider:     'google'
      });
    }
    await onLoginSuccess(user);
  } catch(err) {
    if (err.code !== 'auth/popup-closed-by-user') {
      showAlert('❌ Google login failed: ' + err.message);
    }
  }
}

// ── Forgot Password ──
async function handleForgotPw() {
  const email = document.getElementById('loginEmail')?.value.trim();
  if (!email) { showAlert('⚠️ Enter your email first, then click Forgot Password', 'info'); return; }
  if (!FIREBASE_READY || !auth) {
    showAlert('⚠️ Firebase required for password reset. See README.', 'info');
    return;
  }
  try {
    await auth.sendPasswordResetEmail(email);
    showAlert('✅ Reset email sent! Check your inbox.', 'success');
  } catch(err) {
    showAlert('❌ ' + err.message);
  }
}

// ── On login success ──
async function onLoginSuccess(firebaseUser) {
  const profile = await FS.getUser(firebaseUser.uid) || {};
  CV_USER = {
    uid:         firebaseUser.uid,
    email:       firebaseUser.email,
    displayName: firebaseUser.displayName || profile.displayName || 'User',
    photoURL:    firebaseUser.photoURL || profile.photoURL || null,
    role:        profile.role || 'user',
    createdAt:   profile.createdAt || new Date().toISOString(),
  };
  saveLocalUser(CV_USER);
  window.CV_USER = CV_USER;
  showAlert('✅ Welcome back, ' + CV_USER.displayName + '!', 'success');
  setTimeout(() => { window.location.href = 'index.html'; }, 1200);
}

// ── LOGOUT ──
async function handleLogout() {
  if (FIREBASE_READY && auth) {
    try { await auth.signOut(); } catch(e) {}
  }
  clearLocalUser();
  CV_USER = null;
  window.CV_USER = null;
  window.location.href = 'auth.html';
}

// ── Auth State Guard (for index.html) ──
function requireAuth() {
  CV_USER = loadLocalUser();
  window.CV_USER = CV_USER;

  if (!CV_USER) {
    window.location.href = 'auth.html';
    return false;
  }

  // Sync with Firebase if available
  if (FIREBASE_READY && auth) {
    auth.onAuthStateChanged(user => {
      if (!user) {
        clearLocalUser();
        window.location.href = 'auth.html';
      } else {
        // Refresh local user
        onSilentRefresh(user);
      }
    });
  }
  return true;
}

async function onSilentRefresh(firebaseUser) {
  const profile = await FS.getUser(firebaseUser.uid) || {};
  CV_USER = {
    uid:         firebaseUser.uid,
    email:       firebaseUser.email,
    displayName: firebaseUser.displayName || profile.displayName || 'User',
    photoURL:    firebaseUser.photoURL || null,
    role:        profile.role || 'user',
    createdAt:   profile.createdAt || new Date().toISOString(),
  };
  saveLocalUser(CV_USER);
  window.CV_USER = CV_USER;
  updateNavUser();
}

// ── Update nav user UI ──
function updateNavUser() {
  if (!CV_USER) return;
  const nameEl = document.getElementById('navUserName');
  const avaEl  = document.getElementById('navUserAva');
  if (nameEl) nameEl.textContent = CV_USER.displayName.split(' ')[0];
  if (avaEl) {
    if (CV_USER.photoURL) {
      avaEl.innerHTML = `<img src="${CV_USER.photoURL}" style="width:28px;height:28px;border-radius:50%;object-fit:cover">`;
    } else {
      avaEl.textContent = CV_USER.displayName.charAt(0).toUpperCase();
    }
  }
}

window.handleLogin     = handleLogin;
window.handleSignup    = handleSignup;
window.handleGoogleLogin = handleGoogleLogin;
window.handleForgotPw  = handleForgotPw;
window.handleLogout    = handleLogout;
window.requireAuth     = requireAuth;
window.updateNavUser   = updateNavUser;
window.CV_USER         = CV_USER;
