/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#343995",
        secondary: "#246700",
        lightGreen: "#E8F4EA",
        fadeGreen: "rgba(0, 128, 0, 0.1)",
        button: "#359602",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        offWhite: "#F4F4F4",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimGreen: "rgba(53, 150, 2, 0.03)",
      },
      backgroundColor: {
        'custom-color': 'rgba(36, 103, 0, 0.1)',
      },
      backgroundImage: {
        'custom-image': "url('https://source.unsplash.com/random')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "800px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};