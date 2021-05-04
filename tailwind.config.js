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
        "56%": "56%",
        300: "300px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        576: "576px",
        600: "600px",
      },
      backgroundImage: () => ({
        about: "url('/assets/about/desktop/image-team-members.jpg')",
        "about-sm": "url('/assets/about/mobile/image-team-members.jpg')",
        "about-md": "url('/assets/about/tablet/image-team-members.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
