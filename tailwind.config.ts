import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#fbf7ed',
          500: '#d4af37',
          600: '#aa8c2c',
          700: '#806921',
        },
        luxury: {
          black: '#0b0c10',
          dark: '#1f2833',
          gray: '#c5c6c7',
        }
      },
    },
  },
  plugins: [],
};
export default config;