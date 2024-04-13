/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#DAC0A3',
        lightningblue: '#102C57',
        fadegold: '#F8F0E5',
        darkgold: '#E2B37D'
      }
    },
    
  },
  plugins: [],
}

