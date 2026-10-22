/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#090B10",
        panel: "#10141C",
        neon: "#B7FF3C",
        cyber: "#00E5FF",
        magenta: "#FF3CAC",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        neon: "0 0 45px rgba(183, 255, 60, 0.12)",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(rgba(183,255,60,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(183,255,60,.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
