/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        card: "var(--card)",
        elevatedCard: "var(--elevated-card)",
        customBorder: "var(--border-color)",
        primaryAccent: "var(--primary-accent)",
        githubAccent: "var(--github-accent)",
        linkedinAccent: "var(--linkedin-accent)",
        textHeader: "var(--text-header)",
        textBody: "var(--text-body)",
        textDisabled: "var(--text-disabled)",
      },
    },
  },
  plugins: [],
};