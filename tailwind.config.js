/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1121px' },
      sm: { max: '767px' },
    },
    extend: {
      maxWidth: {
        'desktop-full': '1168px',
        'desktop-header': '1440px',
      },
      colors: {
        white: '#ffffff',
        'white-200': 'rgba(255,255,255,.2)',
        'white-800': 'rgba(255,255,255,.8)',
        lightGray: '#F4F3F1',
        lightGray2: '#D9D9D9',
        lightGray3: '#F8F8FA',
        gray: '#7A7A79',
        black: '#000000',
        'black-400': 'rgba(0, 0, 0, .4)',
        'black-500': 'rgba(0, 0, 0, .5)',
        lightGreen: '#A6D05D',
        purple: '#875DD0',
      }
    },
  },
  plugins: [],
}
