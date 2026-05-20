import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8edf5",
          100: "#c5d0e6",
          200: "#9fb0d5",
          300: "#7890c4",
          400: "#5a77b8",
          500: "#3c5dab",
          600: "#1a2f5e",
          700: "#152548",
          800: "#0f1b35",
          900: "#0a1122",
          950: "#060b17",
        },
        gold: {
          50: "#fdf8e7",
          100: "#faedbe",
          200: "#f7e091",
          300: "#f3d264",
          400: "#f0c73e",
          500: "#c9a227",
          600: "#a8821e",
          700: "#876315",
          800: "#66470d",
          900: "#452d06",
        },
        deep: "#0d1f3c",
        cream: "#faf8f4",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Raleway'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
