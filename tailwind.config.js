/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl':  '0 6px 18px -9px hsl(210, 15%, 65%)'
      }
    },
  },
  plugins: [],
}
