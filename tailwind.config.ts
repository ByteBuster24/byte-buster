import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-rotate": "spin 4s linear infinite",
        "gradient-action": "gradientAction 4s ease infinite",
        "gradient-secondary": "gradientSecondary 4s ease infinite",
      },
      backgroundImage: {
        "dark-lg": "url(/assets/background/dark-lg.webp)",
        "dark-sm": "url(/assets/background/dark-sm.webp)",
        "light-lg": "url(/assets/background/light-lg.webp)",
        "light-sm": "url(/assets/background/light-sm.webp)",
        "gradient-hero":
          "linear-gradient(theme(colors.fuchsia.950) -10%, theme(colors.transparent) 10%, theme(colors.transparent) 90%, theme(colors.fuchsia.950) 110%)",
        "gradient-courses":
          "linear-gradient(10deg, transparent 40%, white 110%)",
        "gradient-courses-dark":
          "linear-gradient(10deg, transparent 40%, black 110%)",
        "gradient-secondary":
          "linear-gradient(to right, #261043D9, #B744EDC2, #4744BED9)",
        "gradient-primary":
          "conic-gradient(rgba(0,0,0,0) 120deg, #EA2AFB 150deg, #04DEF9 200deg, rgba(0,0,0,0) 240deg)",
        "gradient-action":
          "linear-gradient(to right, #5C54A1, #E42AFB, #1877F7, #04DEF9)",
      },
      colors: {
        slate: {
          550: "#94A3C0",
        },
        primary: "#E42AFB",
      },
      keyframes: {
        spin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        gradientAction: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientSecondary: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
