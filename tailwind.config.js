/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontWeight : {
      bold : '700',
      extraBold : '900',
      normal : '300'
    },
    fontFamily:{
     inter : ['Inter', 'sans-serif'],
     martianMono : ['Martian Mono', 'sans-serif'],
     jaldi : ['Jaldi', 'sans-serif']
    },
    extend: {
      colors : {
       fullStackColor : '#8598F9',
       getInTouchColor : '#151517',
       labelColor : '#54545E', 
       lineColor : '#5B5050',
       textarea : '#232324'       
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(to right, #0723B8, #8C8F9D)',
         'name-gradient' : 'linear-gradient(to right, #0723B8, #8C8F9D)',
         'cv-button': 'linear-gradient(to right, rgba(7 , 35,184,0.4), rgba(50, 79, 234, 0.4))',
      },

     boxShadow: {
        'inner-custom': 'inset 0 0 25px 5px rgba(255, 255, 255, 0.4)',
      },

    },
  },
  plugins: [],
}