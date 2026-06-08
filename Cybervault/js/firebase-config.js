/* ══════════════════════════════════════════════
   CYBERVAULT — FIREBASE CONFIG
   ══════════════════════════════════════════════

   HOW TO SETUP YOUR OWN FIREBASE:
   1. Go to https://console.firebase.google.com
   2. Click "Add Project" → Name it "CyberVault"
   3. Go to Project Settings → Your Apps → Add Web App
   4. Copy the config object below and replace values
   5. Enable Authentication → Email/Password + Google
   6. Enable Firestore Database → Start in test mode

   ══════════════════════════════════════════════ */

// ⚠️ REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY_HERE",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "YOUR_MEASUREMENT_ID"
};

// ── Firebase Init ──
let db = null, auth = null, analytics = null;
let FIREBASE_READY = false;

try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db        = firebase.firestore();
    auth      = firebase.auth();
    FIREBASE_READY = true;

    // Enable persistence (offline support)
    db.enablePersistence().catch(err => {
      if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open — persistence disabled');
      }
    });

    console.log('%c⬡ CyberVault Firebase Connected', 'color:#00d4ff;font-weight:bold');
  }
} catch(e) {
  console.warn('Firebase not loaded — running in local mode');
}

// ── Auth Providers ──
let googleProvider = null;
if (FIREBASE_READY) {
  googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
}

// ── Firestore helpers ──
const FS = {
  // Save user profile
  async saveUser(uid, data) {
    if (!db) return localStorage.setItem('cv_user_' + uid, JSON.stringify(data));
    try {
      await db.collection('users').doc(uid).set({
        ...data,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch(e) { console.error('saveUser:', e); }
  },

  // Get user profile
  async getUser(uid) {
    if (!db) {
      const d = localStorage.getItem('cv_user_' + uid);
      return d ? JSON.parse(d) : null;
    }
    try {
      const doc = await db.collection('users').doc(uid).get();
      return doc.exists ? doc.data() : null;
    } catch(e) { return null; }
  },

  // Save to user's collection (bookmarks, scans, etc.)
  async addRecord(uid, collection, data) {
    const key = `cv_${collection}_${uid}`;
    if (!db) {
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      arr.unshift({ ...data, id: Date.now(), createdAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(arr.slice(0, 200))); // max 200
      return;
    }
    try {
      await db.collection('users').doc(uid)
        .collection(collection).add({
          ...data,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch(e) { console.error('addRecord:', e); }
  },

  // Get user's records
  async getRecords(uid, collection, limit = 50) {
    const key = `cv_${collection}_${uid}`;
    if (!db) {
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      return arr.slice(0, limit);
    }
    try {
      const snap = await db.collection('users').doc(uid)
        .collection(collection)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { return []; }
  },

  // Delete a record
  async deleteRecord(uid, collection, id) {
    const key = `cv_${collection}_${uid}`;
    if (!db) {
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      localStorage.setItem(key, JSON.stringify(arr.filter(r => r.id != id)));
      return;
    }
    try {
      await db.collection('users').doc(uid).collection(collection).doc(id).delete();
    } catch(e) { console.error('deleteRecord:', e); }
  },

  // Increment stat counter
  async incStat(uid, stat) {
    const key = `cv_stats_${uid}`;
    const stats = JSON.parse(localStorage.getItem(key) || '{}');
    stats[stat] = (stats[stat] || 0) + 1;
    stats['total'] = (stats['total'] || 0) + 1;
    // Track daily
    const today = new Date().toISOString().split('T')[0];
    if (!stats.daily) stats.daily = {};
    stats.daily[today] = (stats.daily[today] || 0) + 1;
    localStorage.setItem(key, JSON.stringify(stats));

    if (db && uid) {
      try {
        await db.collection('users').doc(uid).set({
          stats: { [stat]: firebase.firestore.FieldValue.increment(1) }
        }, { merge: true });
      } catch(e) {}
    }
  },

  // Get stats
  getStats(uid) {
    const key = `cv_stats_${uid}`;
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
};

window.FS = FS;
window.FIREBASE_READY = FIREBASE_READY;
