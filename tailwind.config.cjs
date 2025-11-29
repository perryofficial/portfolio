module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#020617",      // Background dark color
        bgDarkAlt: "#0b1220",   // Slightly lighter dark background
        accent: "#22d3ee",      // Cyan accent color
        accentSoft: "#0ea5e9",  // Soft blue accent
        textMain: "#e5e7eb",    // Main text color (light gray)
        textMuted: "#9ca3af",   // Muted text color (gray)
      },
    },
  },
  plugins: [],
}
