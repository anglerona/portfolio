// tailwind.config.ts
import type { Config } from "tailwindcss";

/**
 * Simple mode design tokens, taken from the Figma "Theme" variables
 * (https://www.figma.com/design/6rfw6aq6bTrZz6bz6hlt7t/portfolio, page "Simple Mode").
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        ink: "#0b0b14", // text/primary, border/strong
        muted: "#5b6275", // text/secondary
        paper: "#ffffff", // bg/page
        sky: "#7ccbf4", // page-title accent shape
        mist: "#f2f5fb", // bg/surface (image frames, placeholders)
        line: "#e3e8f2", // border/default
        brand: "#1a48cc", // text/link, accent/default
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "18px", // radius/lg
      },
      maxWidth: {
        page: "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
