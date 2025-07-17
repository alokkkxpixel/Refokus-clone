/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css", // ✅ make sure to include custom CSS
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  ins: [],
};
