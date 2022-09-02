/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container : {
      center: false,
    },
    // screens: {
    //   mobile: "640px",
    //   tablet: "960px",
    //   desktop: "1280px",
    // },
    extend: {
      fontFamily:{
        poppins: "Poppins"
      },
      colors :{
        primary :"#0F1624",
        secondary : 'orange'
      }
    },
  },
  plugins: [],
}
