import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        site: {
          primary: "#0A211F",
          btnPrimary: "#D8FF85",
          textHeadingLight: "#8DFDBA",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-serif", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(10, 33, 31, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
