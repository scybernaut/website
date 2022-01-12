module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        white: "#f3f4f6", // gray-100
        dark: "#111827", // gray-900
      },
      fontSize: {
        "8xl": "6rem",
      },
      maxWidth: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "2/5": "40%",
      },
      maxHeight: {
        "1/4": "25%",
      },
      minWidth: {
        "1/4": "25%",
        "1/3": "33.333333%",
      },
      minHeight: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  plugins: [],
};
