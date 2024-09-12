import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserratR: ['"MontserratR"', "sans-serif"],
        montserratB: ['"MontserratB"', "sans-serif"],
        montserratV: ['"MontserratV"', "sans-serif"], // Tambahkan nama font-mu
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        second: "#232340",
      },
    },
  },
  plugins: [],
};
export default config;
