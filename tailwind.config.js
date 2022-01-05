

// const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#2ebb18',
      brand:'#1690ed',
      red: '#ED303D',
      lightGray: '#EDEDED',
      deepGary: '#C5C9CB',
      dark: '#2B2D2F',
      black:'#000000',
      white:'#ffffff'
      // ...
    },
    cursor: {
      ewresize: 'ew-resize',
      auto: 'auto',
        default: 'default',
        pointer: 'pointer',
       wait: 'wait',
        text: 'text',
       move: 'move',
       grab: 'grab',
        'not-allowed': 'not-allowed',
       crosshair: 'crosshair',
       'zoom-in': 'zoom-in',
  
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}