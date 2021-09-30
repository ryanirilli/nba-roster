module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      sm: "0px",
      md: "640px",
      lg: "960px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        zero: "0",
      },
      colors: {
        brand: {
          blue: "#17408B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
