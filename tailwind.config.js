/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#6C757D",
        lightgray: "#f0f0f0",
        lightred: "#FEEDEE",
        lightgreen: "rgba(137, 200, 38, 0.1)",
        lightblue: "rgba(2, 94, 222, 0.1)",
      },
    },
  },
  plugins: [],
};
