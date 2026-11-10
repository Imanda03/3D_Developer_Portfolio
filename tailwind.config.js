/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0d1c",
        elev: "#141834",
        fg: "#f4efe6",
        muted: "#9a9cb8",
        accent: "#ff6b2c",
        cobalt: "#3a5cff",
        ice: "#8be9ff",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
