import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#8df7d3",
        light: "#f8fafc",
        dark: {
          bg: "#061018",
          card: "#0d1822",
          border: "#203445",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        serif: ["var(--font-syne)"],
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
