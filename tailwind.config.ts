import type { Config } from "tailwindcss";
const rem = (num: number) => ({ [num]: `${num / 16}rem` });
const per = (num: string) => ({ [num]: `${num.slice(0, num.length - 1)}%` });
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#333333",
        secondary: "#313132",
        primarySoftPink:"#F7F1F0",
        roseWood:"#C16452"
      },
      fontFamily: {
        futura: ["var(--font-geist-mono)"],
        century: ["var(--font-geist-sans)"],
      },width: {
        ...rem(14),
        ...per("95p"),
      },
    },
  },
  plugins: [],
} satisfies Config;
