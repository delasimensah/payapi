module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkPink: "#ba4270",
        charmPink: "#da6d97",
        sjBlue: "#36536b",
        lsjBlue: "#6c8294",
        mirageBlue: "#1b262f",
        lwWhite: "#fbfcfe",
      },
      fontSize: {
        32: "32px",
      },
      spacing: {
        "54%": "54%",
        576: "576px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
