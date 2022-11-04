/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '481px',
        md: '769px',
        lg: '976px',
        xl: '1201px'
      }
    },
  },
  plugins: [],
}
