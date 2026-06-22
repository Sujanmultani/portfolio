/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050506",
          darker: "#020203",
          card: "rgba(10, 10, 12, 0.4)",
          cardHover: "rgba(16, 16, 20, 0.55)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.16)",
          accent: "#6366f1", // Electric Indigo
          accentGlow: "rgba(99, 102, 241, 0.15)",
          violet: "#8b5cf6",
          emerald: "#10b981",
          gold: "#E8B95D",
          goldGlow: "rgba(232, 185, 93, 0.15)",
          textPrimary: "#f3f4f6", // Gray 100
          textSecondary: "#d1d5db", // Gray 300 (bumped from 9ca3af for higher contrast / WCAG compliance)
          textMuted: "#9ca3af", // Gray 400 (bumped from 888f9c for higher contrast / WCAG compliance)
        }
      },
      fontFamily: {
        sans: ["Inter", "Outfit", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.12, transform: "scale(1)" },
          "50%": { opacity: 0.28, transform: "scale(1.08)" },
        }
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}
