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
        "disabled-gray": "#818D99",

        danger: "#EA1246",
        "danger-light": "#FFEEF2",

        success: "#0ACE88",
        "success-light": "#EEFFF9",

        highlight: "#695ACC",
        "highlight-aux": "#2CB8E0",

        "primary-border": "#DDE4EB",
        "gray-scale-50": "#F5F7FA",

        "hovered-light": "#FFFFFF29",
        "hovered-dark": "#00000014"
      }
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      rethink: ["var(--rethink-sans)"]
    },
    animation: {
      "bg-ball": "bg-ball 30s linear infinite alternate"
    },
    keyframes: {
      "bg-ball": {
        "10%": { top: "5%", left: "10%" },
        "20%": { top: "10%", left: "20%" },
        "30%": { top: "15%", left: "30%" },
        "40%": { top: "15%", left: "40%" },
        "50%": { top: "20%", left: "50%" },
        "60%": { top: "20%", left: "60%" },
        "70%": { top: "15%", left: "70%" },
        "80%": { top: "15%", left: "80%" },
        "90%": { top: "5%", left: "90%" },
        "100%": { top: "0%", left: "100%" }
      }
    }
  },
  plugins: []
};
export default config;
