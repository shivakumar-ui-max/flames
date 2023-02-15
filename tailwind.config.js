/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yello: "rgba(245,177,97,1)",
        pink: "rgba(236,54,110,1) ",
      },
      fontFamily: {
        roboto: 'Roboto',
      }
    },
  },
  plugins: [],
}
