/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        twitterBlue: "#1D9BF0",
        grayBackground: "#16181C",
        borderGray: "#333",
        red: "#DE3163",
        green: "#008000",
      },
    },
  },
  plugins: [],
};
