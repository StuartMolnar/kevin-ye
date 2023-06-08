/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        customHeroLogo: '1975px'
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
    },
  },
  plugins: [],
}
