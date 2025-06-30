/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ]
  ,
  theme: {
    extend: {
      colors: {
        themeY: 'rgba(240, 215, 132, 1)',
        themeYDark: 'rgba(195, 163, 73, 1)',
        themeYTwo: 'rgba(237, 213, 105, 1)',
        themeYDarkTwo: 'rgba(151, 118, 25, 1)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        assistant: ['Assistant', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

