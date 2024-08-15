import { Genos, Merriweather } from "next/font/google";
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
       'cabbage-pont': {
          '50': '#f3f5f0',
          '100': '#e5e8df',
          '200': '#ced4c2',
          '300': '#b0b99d',
          '400': '#939f7c',
          '500': '#76845e',
          '600': '#5c6749',
          '700': '#47503a',
          '800': '#3b4232',
          '900': '#343a2d',
          '950': '#1a1e15',
        },

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

        'ebony': {
            '50': '#f5f7fa',
            '100': '#eaeff4',
            '200': '#cfdce8',
            '300': '#a5bfd4',
            '400': '#759dbb',
            '500': '#5380a4',
            '600': '#406689',
            '700': '#35526f',
            '800': '#2f475d',
            '900': '#2b3d4f',
            '950': '#121921',
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

    
      },

      fontFamily: {
        adventbold: ['advent_bold'],
        adventthin: ['advent_thin'],
        genos: ['genos'],
        Merriweather:['Merriweather-Bold'],
        jost:['Jost'],
        italianno:['italianno'],
        backto:['backto']
      },
      
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
