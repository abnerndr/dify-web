const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#000000",
        'dark-900': '#161616',
        'dark-800': '#434343',
        'dark-700': '#1C1C1C',
        'dark-600': '#858585',
        'cinza-50': '#EEEEEE',
        'cinza-100': '#F4F4F4',
        'cinza-200': '#F9F9F9',
      }
    },
  },
  plugins: [],
}