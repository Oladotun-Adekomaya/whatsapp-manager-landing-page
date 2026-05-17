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
        "wa-green": "#25D366",
        "wa-green-light": "#2EE571",
        "wa-green-dark": "#1aaa50",
        background: "#0a0a0a",
        surface: "#111111",
        card: "#1a1a1a",
        "card-border": "#2a2a2a",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A3A3A3",
        "text-muted": "#737373",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      animation: {
        "ticker": "ticker 30s linear infinite",
        "pulse-green": "pulse-green 2s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
