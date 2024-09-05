import { Genos, Merriweather,Jost } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {

        'dark-brown':'#151616',
        'beige':'#B58863',
        'light-gray':'#D3C3B9',
        'mid-gray':'#A79E9C',
        'blue-1':'#3D4D55',
        'blue-2':'#10232A',
        'red-1':'#DD2010',
        'red-2':'#541A2E',
        'red-3' :'#BE4039',
        
    
      },

      fontFamily: {

        jost:['Jost','serif'],
        righteous:['Righteous','serif'],
        orbitron : ['Orbitron','serif'],
        bellota :['Bellota+Text','serif'],
        magra : ['Magra','serif'],
        pavanam : ['Pavanam','serif'],

      },

      fontSize: {
        'sssm' : '0.7rem',
        'ssm' : '1rem',
        'llg': '1.35rem',
        '2.5xl':'1.7rem',
        '3.5xl':'1.75rem',
        '4.5xl':'1.8rem',
        '4.6xl':'2rem',
        '6.5xl':'4.5rem',
        '7xl': '6rem',
      }
      
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 800px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
