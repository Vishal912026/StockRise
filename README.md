# StockRise 📈

A full-stack stock trading platform inspired by Zerodha, built with the MERN stack. StockRise includes a public landing/auth site and a live trading dashboard with real-time order management.

**🔗 Live Demo:** [https://stockrise-eptt.onrender.com](https://stockrise-eptt.onrender.com)
**📊 Dashboard:** [https://stockrise-dashboard.onrender.com](https://stockrise-dashboard.onrender.com)
**💻 GitHub:** [https://github.com/Vishal912026/StockRise](https://github.com/Vishal912026/StockRise)

> ⚠️ Free-tier hosting: the backend may take ~50 seconds to wake up on the first request after inactivity.

---

## Overview

StockRise lets users sign up, log in, and trade from a Zerodha-style dashboard — complete with a live watchlist, holdings, positions, funds, and an order book. Every account's orders are private and isolated using JWT-based authentication.

## Features

- 🔐 **JWT Authentication** – Secure signup/login with bcrypt password hashing
- 📊 **Live Dashboard** – Watchlist, Holdings, Positions, Orders, and Funds pages
- 🛒 **Buy/Sell Orders** – Place trades with an instant, auto-refreshing order book (no manual refresh needed)
- 👤 **Per-User Data** – Orders are scoped to the logged-in user; no cross-account data leaks
- 💻 **Responsive UI** – Clean, Zerodha-inspired design across landing page and dashboard
- 🌐 **Fully Deployed** – Live on Render (backend + 2 static frontends)

## Tech Stack
- **Frontend:** React.js, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JSON Web Tokens (JWT), bcryptjs
- **Deployment:** Render (Web Service + 2 Static Sites)

## Project Structure

```
StockRise/
├── backend/     # Express API: auth, orders, holdings, positions
├── frontend/    # Public landing page, signup/login
└── dashboard/   # Trading dashboard (post-login)
```


## Getting Started (Local Setup)

### Prerequisites
- Node.js and npm installed
- A MongoDB connection string (local or MongoDB Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/Vishal912026/StockRise.git
cd StockRise
```

### 2. Backend setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` with:


MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


```bash
npm start
```
Runs on `http://localhost:3002`

### 3. Frontend setup
```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3000`

### 4. Dashboard setup
```bash
cd dashboard
npm install
npm start
```
Runs on `http://localhost:3001`

## Author

**Vishal Kumar Prajapati**
B.Tech CSE | MERN Stack Developer
📧 vishalprajapati6037@gmail.com
🔗 [GitHub](https://github.com/Vishal912026)

---

*This is a personal/educational project built for learning purposes and is not affiliated with, endorsed by, or connected to Zerodha in any way.*