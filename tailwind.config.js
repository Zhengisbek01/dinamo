/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1A33',
          deep: '#071023',
          light: '#122448',
        },
        crimson: {
          DEFAULT: '#D91C24',
          dark: '#B0141B',
        },
        surface: '#F3F4F6',
        ink: '#101827',
        muted: '#5B6472',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'stripe-diagonal':
          'repeating-linear-gradient(135deg, #D91C24 0px, #D91C24 14px, transparent 14px, transparent 28px)',
      },
    },
  },
  plugins: [],
}
