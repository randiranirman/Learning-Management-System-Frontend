/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5038ED',     
        secondary: '#10B981',  
        accent: '#FF5722',     
        background: '#F3F3F9', 
        text: '#374151',       
      },
    },
  },
  plugins: [],
};
