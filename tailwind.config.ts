import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13161A",
        secondary: "#606A73",
        disabled: "#818D99",

        danger: "#EA1246",
        dangerLight: "#FFEEF2",

        success: "#0ACE88",
        successLight: "#EEFFF9",

        highlight: "#695ACC",
        HighlightAux: "#2CB8E0",

        borderPrimary: "#DDE4EB",
        "gray-scale-50": "#F5F7FA"
      }
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      rethink: ["var(--rethink-sans)"]
    }
  },
  plugins: []
};
export default config;
