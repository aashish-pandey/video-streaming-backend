# 🎬 JaalChitra Backend

This is the Express.js backend for **JaalChitra**, a full-stack video streaming platform. It handles user authentication, subscriptions, video and banner uploads, watch history, admin functionalities, and chat features.

---

## 🛠 Tech Stack

- **Node.js + Express**
- **MongoDB (Mongoose)**
- **EJS** (view engine, though rarely used)
- **CORS**, **Cookies**, **Body-parser**, **File Upload**

---

## 📦 Features

### ✅ User Routes
- **Auth**: `/register`, `/login`, `/logout`, password reset flow
- **Subscription**: `/activatesubscription`, `/availablePlan`, `/subscriptionStatus`
- **Videos**: `/uploadvideo`, `/getVideo/:id`, `/getThumbnail/:id`
- **Movies**: `/uploadMovie`, `/getMovies`, `/getMoviesByID/:id`
- **Banners**: `/bannerUpload`, `/getBanner`, `/getBannerMovie/:id`
- **Watch History**: `/saveWatchHistory`, `/getWatchHistory`
- **Profile**: `/getMyProfile/:email`, `/getMySubscription/:email`

### 🛡 Admin Routes
- `/registerAdmin`, `/loginAdmin`, `/deleteAdmin`, `/editAdmin`
- `/getAllUsers`, `/getAllAdmins`, `/getAllSubscriptionPlans`
- `/deleteMovie`, `/deleteUser`, `/changeAdminDepartment`

### 💬 Global Chat
- `/saveGlobalChat`, `/getGlobalChat`

### 🧠 Other
- **Online tracking**: `/saveOnlineStatus`, background inactive user cleanup
- **Health check**: `/health` (liveness probe)

---

## 🌐 Database

MongoDB Atlas is used.
---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start server

```bash
node app.js
```

Runs on: `http://localhost:3560`

---

## 🔄 Background Jobs

- Every 10 seconds: `SetInactiveUsersOffline` is called to update user online status.

---

## 📬 Mail

Mail sending handled via `MailHandler/SendMail.js` and `HandleMailSend`.

---

## 💡 Environment Variables (Recommended)

Move sensitive info like DB URI and mail credentials to `.env`.

```
MONGO_URI=...
PORT=3560
```

---

## 📁 Folder Structure Highlights

- `controllers/`: All route handlers
- `MailHandler/`: Email services
- `models/`: Mongoose models (if any, not shown in main file)
