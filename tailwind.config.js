/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': "url('./src/assets/banner-mobile.png')",
        'home-banner-int': "url('./src/assets/banner-menu.png')",
      },
      keyframes: {
        letreiro: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-40%)' },
        },
      },
      animation: {
        letreiro: 'letreiro 30s linear infinite',
      },
    },
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
      Lilita: ['Lilita One', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
