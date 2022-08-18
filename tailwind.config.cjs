/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { primary: "#222222" },
    fontFamily: {
      pretendard: ["Pretendard", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
