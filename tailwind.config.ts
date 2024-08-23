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

        'bunker': {
        '50': '#f5f7fa',
        '100': '#eaeef4',
        '200': '#d1dae6',
        '300': '#a8bbd1',
        '400': '#7a97b6',
        '500': '#597a9e',
        '600': '#456184',
        '700': '#394e6b',
        '800': '#32435a',
        '900': '#2d3a4d',
        '950': '#131820',
        },
    
        'thatch-green': {
            '50': '#fbf5ea',
            '100': '#f6ebd1',
            '200': '#eddaa9',
            '300': '#e0c576',
            '400': '#d0af4b',
            '500': '#b5962d',
            '600': '#907820',
            '700': '#6e5e1d',
            '800': '#584c1c',
            '900': '#433c19',
            '950': '#29250a',
        },
        'dark-brown':'#151616',
        'beige':'#B58863',
        'light-gray':'#D3C3B9',
        'mid-gray':'#A79E9C',
        'blue-1':'#3D4D55',
        'blue-2':'#10232A',
        'red-1':'#ff0000',
        'red-2':'#541A2E',
        'red-3' :'#BE4039',
        
    
      },

      fontFamily: {
        adventbold: ['advent_bold'],
        adventthin: ['advent_thin'],
        genos: ['genos'],
        Merriweather:['Merriweather-Bold'],
        jost:['Jost','serif'],
        italianno:['italianno'],
        backto:['backto'],
      },

      fontSize: {
      
        'ssm' : '1rem',
        'llg': '1.35rem',
        '6.5xl':'5.5rem',
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

      'xl': '1290px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};

export default config;
