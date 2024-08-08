/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['graphik', 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'],
      },

      colors: {
        primary: '#2A6CEA',
      },

      screens: {
        // MAX WIDTH
        maxMd: { max: '768px' },
        maxSm: { max: '375px' },
        maxXs: { max: '320px' },
        max450px: { max: '450px' },
        max550px: { max: '550px' },
      },
    },
  },
  plugins: [],
};
