/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Montserrat", "Open-Sans", "sans-serif"],
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      medium: "20px",
      lg: "25px",
      xl: "30px",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#A55EEA", dark: "#273444" },
        secondary: { DEFAULT: "#ff49db", dark: "#273444" },
        transparent: "transparent",
        current: "currentColor",
        danger: { DEFAULT: "#E74C3C" },
      },
    },
  },
  plugins: [],
};
