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
        "danger-light": "#FFEEF2",

        success: "#0ACE88",
        "success-light": "#EEFFF9",

        highlight: "#695ACC",
        "Highlight-aux": "#2CB8E0",

        "primary-border": "#C9D0D6",
        "gray-scale-50": "#F5F7FA",

        "hovered-light": "#FFFFFF29",
        "hovered-dark": "#00000014"
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
