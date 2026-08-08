import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0C",
        "bg-elevated": "#18181B",
        "bg-secondary": "#202024",
        line: "#2B2B31",
        text: "#F5F2EC",
        "text-muted": "#B3AEA6",
        accent: "#E76F51",
        "accent-hover": "#F28463",
        success: "#2FBF71",
        error: "#E5484D",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee-infinite": "marquee 50s linear infinite",
        "aurora-glow": "auroraGlow 10s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        auroraGlow: {
          "0%": {
            transform: "translate3d(0px, 0px, 0) scale(0.95)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translate3d(6px, -4px, 0) scale(1.08)",
            opacity: "0.75",
          },
          "100%": {
            transform: "translate3d(-6px, 4px, 0) scale(0.98)",
            opacity: "0.5",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
