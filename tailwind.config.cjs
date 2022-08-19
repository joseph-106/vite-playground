/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pretendard: ["Pretendard", ...defaultTheme.fontFamily.sans],
    },
    extend: { colors: { primary: "#222222" } },
  },
  plugins: [],
};
