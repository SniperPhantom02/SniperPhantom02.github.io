/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'garrison-black': '#050505', // Deep Apple-style black
        'shelby-gold': '#C5A059',   // Industrial gold accent
        'industrial-grey': '#1D1D1F', // Card background
      },
      fontFamily: {
        'apple': ['Inter', 'SF Pro Display', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.05em',
      }
    },
  },
  plugins: [],
}
