/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d2743',
        navy: '#102f50',
        gold: '#c49a5a',
        cream: '#f7f2e9',
        paper: '#fcfaf6',
        mist: '#eef3f6',
        slateText: '#52606d',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(13,39,67,.08)',
        card: '0 12px 32px rgba(13,39,67,.07)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(13,39,67,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(13,39,67,.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
