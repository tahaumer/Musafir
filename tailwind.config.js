/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9DE793',
        secondary: '#252525',
      },
      screens: {
        'custom-xl': '1350px',
      },
    },
  },
  plugins: [],
}