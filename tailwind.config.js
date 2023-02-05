/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius:{
          'fine': '30px',
          'large': '12px',
      },
      colors:{
          primary:'#199CC5'
      },
  },
  },
  plugins: [
 
  ],
}