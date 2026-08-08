# ⚡ Vibe Coding Log — ABTalks Redesign & Challenge Platform

This log documents the end-to-end prompt engineering, raw iterations, and vibe-coding sessions used to build, polish, and deploy the ABTalks platform.

---

## 🎨 1. Ideation & Mobile Design Vibe
* **User:** "I'm building a redesign for ABTalks, a 60-day challenge platform for Indian college students. It needs to be mobile-first because students code and check tasks late at night on their phones (390px target width). Give me a high-energy React + Tailwind setup."
* **AI:** Scaffolding mobile-first layout with high-contrast dark theme, touch-friendly buttons, and compact vertical cards.
* **User:** "Make the navbar sticky on mobile, add a streak counter with a fire icon at the top right, and ensure there's no horizontal scroll anywhere on 390px screens."
* **AI:** Updated header styling with `sticky top-0`, `overflow-hidden` wrappers, and Lucide icons.

---

## 🛣️ 2. Route Map & Core Pages Construction
* **User:** "I need 3 specific routes: `/` for landing, `/dashboard` for student progress, and `/day/12` for the challenge detail view. Set up React Router for this."
* **AI:** Generated route configuration and page component structure.
* **User:** "On `/day/12`, add a dual submission form where students paste both a GitHub Commit URL and a LinkedIn Post URL as proof of work before marking the day complete."
* **AI:** Built `DayView.tsx` with dual-input validation states and submission feedback.

---

## 🧪 3. Demo State Switcher (Edge Cases)
* **User:** "Evaluators need to test edge cases without creating accounts. Create a floating 'Demo Switcher' control panel."
* **AI:** Drafted React Context provider and floating toggle drawer.
* **User:** "Add options for Day 1 (Zero Streak), Day 12 (Active Streak), Missed Day (Streak Repair workflow), and Day 60 (Completed Challenge)."
* **AI:** Hooked state management to dynamically update dashboard badges, progress bars, and alerts based on selected demo mode.

---

## 🐛 4. Live Debugging & Refinement
* **User:** "When I refresh `/day/12` on Vercel, I get a 404 error. How do I fix client-side routing?"
* **AI:** Created a `vercel.json` file with rewrite rules pointing all routes to `index.html`.
* **User:** "`npm run build` failed with `error TS6133: 'AlertTriangle' is declared but its value is never read in TodayChallengeHero.tsx`."
* **AI:** Identified and removed the unused icon import from `lucide-react`.

---

## 🚀 5. Deployment & Final Polish
* **User:** "Vercel CLI gave `Directory name error` and `fetch failed` timeouts."
* **AI:** Provided step-by-step fix using `npm run build` locally, setting lowercase project name `abtalks-app`, and executing `npx vercel --prod`.
* **User:** "Generate a complete `README.md` and route map for submission."
* **AI:** Outputted documentation structure tailored to hackathon guidelines.