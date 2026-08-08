# 🔥 ABTalks — Redesign

A mobile-first redesign of ABTalks, a 60-day coding challenge platform for Indian college students. Students pick a track, build something every day, and maintain a public learning streak by submitting a GitHub commit and a LinkedIn post.

This repo contains the redesigned frontend, built with mocked data (no auth, no backend, no database — per project scope).

---

## 🧭 Route Map

| Route | Description | Status |
|---|---|---|
| `/` | Landing page | **Required** |
| `/dashboard` | Student dashboard | **Required** |
| `/day/:id` (e.g. `/day/12`) | Challenge day | **Required** |
| `/tracks` | Browse all tracks | Bonus |
| `/leaderboard` | Public streak leaderboard | Bonus |
| `/profile` | Student's public profile (bio, badges, streak history) | Bonus |

Live deployment: `https://abtalks-app.vercel.app`

---

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **React Router (`react-router-dom`)** for client-side routing
- **Tailwind CSS** for styling
- Mocked data via local JSON (no real backend/auth/database)
- Dark mode (default) + Light mode toggle

---

## 📦 Getting Started

### 1. Install dependencies

```bash
npm install
```

If you're pulling this repo fresh and see missing-module errors related to routing, make sure `react-router-dom` and its types are installed:

```bash
npm install react-router-dom @types/react-router-dom
```

(Swap `npm install` for `pnpm add` or `yarn add` depending on your package manager.)

### 2. Run the dev server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── TopBar.tsx          # Single shared navbar used across all pages
│   ├── BottomNav.tsx       # Sticky mobile bottom tab bar
│   └── ...                 # Shared UI components (cards, badges, progress rings, etc.)
├── pages/
│   ├── Landing.tsx          → /
│   ├── Dashboard.tsx        → /dashboard
│   ├── ChallengeDay.tsx     → /day/:id
│   ├── Tracks.tsx           → /tracks
│   ├── Leaderboard.tsx      → /leaderboard
│   └── Profile.tsx          → /profile
├── data/
│   └── mock.json           # All mocked student/track/leaderboard/badge data
├── App.tsx                 # Route definitions + global layout (TopBar/BottomNav rendered here)
└── main.tsx
```

> **Note:** `TopBar` is a single shared component rendered globally inside `App.tsx`. Older page-local imports like `../components/dashboard/TopBar` or `../components/leaderboard/TopBar` have been removed/consolidated — always import it from `../components/TopBar`, or omit the import entirely on pages where it's already rendered globally.

---

## 🎨 Design System

**Dark mode (default)**
| Token | Value |
|---|---|
| Canvas | `#090A0F` |
| Card/Panel | `#12151E` |
| Border | `#1E2330` |
| Primary accent (CTA/streak) | `#FF5A36` |
| GitHub accent | `#00FF85` |
| LinkedIn accent | `#00E5E5` |
| Header text | `#FFFFFF` |
| Body text | `#94A3B8` |

**Light mode**
| Token | Value |
|---|---|
| Canvas | `#F7F7FA` |
| Card/Panel | `#FFFFFF` |
| Border | `#E4E7EE` |
| Primary accent | `#FF5A36` |
| GitHub accent | `#00B368` |
| LinkedIn accent | `#0090A8` |
| Header text | `#0B0D12` |
| Body text | `#5B6472` |

Toggle lives in the top navbar and persists across pages.

---

## ✅ Features

- **Mobile-first** design, tested at 390px width, with desktop as a secondary layout
- **Dark/light mode** toggle
- **Streak system** with a progress ring, weekly activity chart, and non-punishing edge-case states
- **Daily challenge flow**: task description, requirements, GitHub + LinkedIn submission with validation states
- **Track browsing** with read-only track previews for tracks the student isn't currently on
- **Leaderboard** with a pinned "your rank" card and weekly/all-time toggle
- **Profile** with a GitHub-style 60-day contribution/streak calendar and full badge case

### Edge cases handled
- First day / zero streak → encouraging "start" state instead of a bare "0"
- Missed day → non-punishing messaging, dimmed streak indicator
- Empty profile (new user) → all badges locked with a clear "how to unlock" prompt

### Thoughtful addition
✨ **AI-assisted LinkedIn caption generator** on the Challenge Day page — auto-suggests a post based on the day's task, reducing the daily friction of writing a good public post from scratch.

---

## 📊 Mock Data

All data (student profile, streak history, tracks, daily tasks, leaderboard entries, badges) lives in `src/data/mock.json` and is loaded client-side. No real accounts, authentication, or persistence layer is used, per project scope.

---

## 📌 Out of Scope

- Authentication / real user accounts
- Production database
- Recruiter dashboard / admin panel
- Matching ABTalks' original tech stack
