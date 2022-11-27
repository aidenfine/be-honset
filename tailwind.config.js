/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    // colors: {
    //   whiteText: '##ffffffe2'
    // },
    extend: {
      fontFamily: {
        raleway: 'Raleway',
      }
    },
  },
  plugins: [],
}