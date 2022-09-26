/* eslint-disable no-undef */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // weManageOrange: '#00CFD6',
        // weManageOrange: '#07D600',
        weManageOrange: '#E80C3B',
        weManageOrangeHover: '#BD0930',
        weManageGray: '#2C2C2C',
        weManageLightGray: '#383838',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
