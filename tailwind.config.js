import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    formsPlugin,
    typographyPlugin,
    plugin(function ({addVariant}) {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
  theme: {
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      sans: ['Source Sans 3', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1418px',
      },
    },
    extend: {
      colors: {
        primary: '#2880D1',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
