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
        ivory: "#F5F0E7",
        charcoal: "#292622",
        terracotta: "#8B4A2F",
        mauve: "#A9828D",
        sage: "#7D8968",
        blue: "#718A98",
        sand: "#C8B59B",
        gold: "#B99A5B",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(41, 38, 34, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
