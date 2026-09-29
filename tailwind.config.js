/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      boxShadow: {
        glow: "0 0 45px rgba(99,102,241,.18)"
      }
    }
  },
  plugins: []
}