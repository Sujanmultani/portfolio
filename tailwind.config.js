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
          cream: "#FAF7F2",        // warm off-white base (not stark white)
          paper: "#F2ECE2",        // slightly deeper warm surface for alternating sections
          ink: "#15130F",          // near-black, warm-tinted for headings/body
          inkSoft: "#4A463E",      // body text
          inkMuted: "#8A8478",     // secondary/meta text
          amber: "#C2541B",        // primary accent — deep burnt amber/terracotta
          amberDeep: "#8F3C12",    // darker amber for hover/emphasis
          amberLight: "#F3DCC4",   // light amber fill for badges/pills
          line: "#E5DDD0",         // hairline border color
        }
      },
      fontFamily: {
        display: ["Fraunces", "serif"],   // for all headlines — distinctive editorial serif
        sans: ["Inter", "system-ui", "sans-serif"],  // for body/UI text
      },
      animation: {
        "marquee-left": "marqueeLeft 30s linear infinite",
        "marquee-right": "marqueeRight 35s linear infinite",
        "marquee-left-fast": "marqueeLeft 20s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        }
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}
