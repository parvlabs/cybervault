# ⬡ CyberVault Pro — Full Stack Digital Security Hub

> Complete full-stack web app with Authentication, Database, Analytics, SEO & beautiful UI/UX

---

## 🗂️ Project Structure

```
CyberVaultPro/
├── auth.html               ← Login / Signup page
├── index.html              ← Main app (8 pages, auth-protected)
├── css/
│   ├── style.css           ← Main app styles (matrix, cursor, all pages)
│   └── auth.css            ← Auth page styles
├── js/
│   ├── firebase-config.js  ← Firebase init + Firestore helpers
│   ├── auth.js             ← Login, Signup, Google, Logout
│   ├── main.js             ← Navigation, cursor, matrix, dashboard
│   ├── analytics.js        ← Charts, stats, scan history
│   ├── ai-tools.js         ← 500+ AI tools + finder + bookmarks
│   ├── password.js         ← Password analyzer (with tracking)
│   ├── phishing.js         ← URL detector (with tracking)
│   ├── tips.js             ← 18 cyber tips
│   ├── courses.js          ← 106+ free courses
│   └── news.js             ← Cyber news + sources
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

---

## 🚀 Quick Start (No Firebase — Works Immediately)

1. **Extract** the ZIP file
2. **Open** the folder in VS Code
3. **Install** Live Server extension (Ctrl+Shift+X → search "Live Server")
4. **Open** `auth.html` → Right click → **Open with Live Server**
5. **Sign up** with any email + password (stored locally)
6. Done! ✅

> All data saved to localStorage. No Firebase needed to get started.

---

## 🔥 Firebase Setup (Optional — For Real Backend)

### Step 1 — Create Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add Project** → Name it `CyberVault`
3. Disable Google Analytics (optional) → **Create Project**

### Step 2 — Add Web App
1. Click the `</>` Web icon
2. Register app as `CyberVault`
3. Copy the `firebaseConfig` object

### Step 3 — Update Config
Open `js/firebase-config.js` and replace:
```javascript
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY_HERE",        // ← paste yours
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

### Step 4 — Enable Authentication
1. Firebase Console → **Authentication** → Get Started
2. Enable **Email/Password**
3. Enable **Google** (add your domain as authorized)

### Step 5 — Enable Firestore
1. Firebase Console → **Firestore Database** → Create database
2. Select **Start in test mode** → Choose region → Done

### Step 6 — Deploy (Optional)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## ✨ Features

### 🔐 Authentication
- Email + Password signup/login
- Google OAuth (requires Firebase)
- Forgot password email reset
- Persistent login (remember me)
- Auth-protected routes (redirect to login if not authenticated)

### 👤 User Dashboard
- Profile card with avatar
- Quick stats (passwords, URL scans, AI views, bookmarks)
- Quick navigation to all tools
- Member since date, security score

### 📊 Analytics Dashboard
- Activity chart (last 7 days)
- URL scan results donut chart
- Password strength distribution chart
- Recent scan history table
- Bookmarks manager
- Personal security score (0-100)

### 🤖 AI Finder
- 500+ tools across 28 categories
- Free / Freemium / Paid / Student filter
- Search by name, category, description
- ⭐ Bookmark any tool to dashboard

### 🔐 Password Analyzer
- Real-time strength scoring (5 levels)
- Entropy bits calculation
- Crack time estimation
- 8-point security checklist
- Strong password generator
- Scan history saved to analytics

### 🕵️ Phishing Detector
- 15 detection signatures
- Triggered signatures highlighted
- Safe / Suspicious / Danger verdict
- Scan history saved to analytics

### 🎓 Free Courses (106+)
- Cybersecurity (28), Web Dev (20), AI/ML (18)
- Data Science (14), Cloud (14), Programming (12)
- Search + topic filter + platform badges

### 📡 Cyber News
- Breaking news featured card
- 18 curated articles by category
- Active threat feed (12 threats)
- Top 12 news sources
- 2024 threat statistics

### 🛡️ Cyber Tips
- 18 expert tips
- Beginner / Intermediate / Advanced filter

---

## ⌨️ Keyboard Shortcuts

| Key | Page       |
|-----|------------|
| `1` | Home       |
| `2` | AI Finder  |
| `3` | Tools      |
| `4` | Tips       |
| `5` | Courses    |
| `6` | News       |
| `7` | Dashboard  |
| `8` | Analytics  |

---

## 🛣️ Next Steps (Roadmap)

- [ ] Deploy to Vercel (`vercel --prod`)
- [ ] Custom domain setup
- [ ] Email notifications for breaches
- [ ] Dark/Light theme toggle
- [ ] PWA (installable app)
- [ ] More security tools (hash cracker, SSL checker)

---

## 🔧 Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Frontend    | HTML5, CSS3, Vanilla JS |
| Auth        | Firebase Auth (Email + Google) |
| Database    | Firestore + localStorage fallback |
| Fonts       | Orbitron, Share Tech Mono, Inter |
| Hosting     | Any static host (Vercel, Netlify, Firebase Hosting) |
| Analytics   | Custom Canvas + SVG charts |
| SEO         | Meta tags, OG, Twitter Card, JSON-LD |

---

Built with 🔥 · Stay Secure · Stay Smart
