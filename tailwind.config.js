/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  theme: {
    extend: {
      screens: {
        customHeroLogo: '1650px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'navbar': '20px',
        'hero': '61px',
        'hero-sub': '25px',
        'btn': '16px',
        'base': '16px',
        'h1': '49px',
        'h2': '31px',
        'h3': '25px',
        'header-sub': '20px',
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 600,
        'heavy': 700,
      },
      colors: {
        gold: '#D5B76E',
      },
      maxWidth: {
        '112': '28rem', /* 448px */
      },
      animation: {
        'slide-in': 'slide-in 0.5s forwards',
        'slide-out': 'slide-out 0.5s forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
