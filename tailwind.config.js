/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom-large': '32px',
      },
      colors: {
        'green-jds': '#009d57',
        'yellow-jds': '#ffcc29',
        'blue-jds': '#00b8f1'
      },
      borderColor: {
        'green-jds': '#009d57',
        'yellow-jds': '#ffcc29',
        'blue-jds': '#00b8f1'
      },
      textColor: {
        'green-jds': '#009d57',
        'yellow-jds': '#ffcc29',
        'blue-jds': '#00b8f1'
      },
      borderColor: {
        'green-jds': '#009d57',
        'yellow-jds': '#ffcc29',
        'blue-jds': '#00b8f1'
      },
      accentColor: {
        'green-jds': '#009d57',
        'yellow-jds': '#ffcc29',
        'blue-jds': '#00b8f1'
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}