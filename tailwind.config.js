/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "angie-sans": ["angie-sans", "sans-serif"],
        "neue-haas": ["neue-haas-grotesk-display", "sans-serif"],
        p22: ["p22-underground", "sans-serif"],
        "p22-sc": ["p22-underground-sc", "sans-serif"],
        orpheuspro: ["orpheuspro", "serif"],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
