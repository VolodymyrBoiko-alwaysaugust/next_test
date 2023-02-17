/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': "#FFFFFF",
      'black': "#000000",
      'blue': "#1B9BFF",
      'lightBlue': "#43ADFF",
      'darkBlue': "#1F2351",
      'gray': "#DDE3EA",
      'lightGray': "#F1F4F6",
      'darkGray': "#9DA6AD",
      'fadedGray': "#00000099",
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      cooper: ['Cooper', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
