const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  plugins: [addVariablesForColors],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        customBlue: 'rgb(5, 38, 99)',
        customIndigo: 'rgb(0, 66, 166)',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
      },
      fontFamily: {
        sans: ["NeueMontrealRegular","NeueMontrealBold", "NeueMontrealMedium", "NeueMontrealLight"]
      },
      screens: {
        xs: "450px",
      }, 
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-align-last-center': {
          textAlignLast: 'center',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
  
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}