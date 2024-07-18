import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroBg: "url('/images/homeHero.webp')",
        homeForthSectionBg: "url('/images/homeImg2.webp')",
        attorneyheroBg: "url('/images/attorneyHero.webp')",
        servicesHeroBg: "url('/images/servicesBg.jpg')",
        blogHeroBg: "url('/images/blogHero.webp')",
      },
      colors: {
        primary: "#9E101C",
        secondary: "#ddebf9",
        black: "#213753",
        dark: "#000",
      },
    },
  },
  plugins: [],
};
export default config;
