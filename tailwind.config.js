/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './components/**/**/*.{js,jsx,ts,tsx}',
    './components/**/**/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          1: '#FABB72',
          2: '#8BD26C',
          3: '#FF5765',
          4: '#4183FD',
        },
        button: {
          1: '#FABB72',
          2: '#444444',
          3: '#8BD26C',
        },
        text: {
          1: '#FFFFFF',
          2: '#000000',
          3: '#AAAAAA',
        },
        surface: {
          1: '#1A1A1A',
          2: '#444444',
          3: '#796651',
        },
      },
      fontFamily: {
        'titilium-light': ['TitilliumWeb-Regular'],
        'titilium-bold': ['TitilliumWeb-Bold'],
        'titilium-semibold': ['TitilliumWeb-SemiBold'],
      },
    },
  },
  plugins: [],
};
