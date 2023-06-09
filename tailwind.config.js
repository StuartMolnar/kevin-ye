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
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-in-out',
        'slide-out-right': 'slide-out-right 0.5s ease-in-out',
        'slide-out-left': 'slide-out-left 0.5s ease-in-out',
      },
      translate: {
        'full': '100%',
        '-full': '-100%',
      },
    },
  },
  plugins: [],
}
