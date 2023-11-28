/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': "url('./src/assets/banner-mobile.png')",
        'home-banner-int': "url('./src/assets/banner-menu.png')",
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
