module.exports = {
  purge: ["./pages/**/*.ts{x}", "./components/**/*.ts{x}"],
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
