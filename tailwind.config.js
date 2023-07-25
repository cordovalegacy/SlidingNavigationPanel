/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        navbg: '#1e1e1e',
        mainbg: '#303030',
        darkblades: '#1e1e1e',
        orangeheaders: '#fb6223',
        breadcrumbbox: '#1e1e1e',
        yellowheaders: '#f7b500',
        buttonblue: '#3F5B86',
        buttonyellow: '#FFB224',
      },
      screens: {
        'phone': {'max': '640px'},
        'super': {'max': '1279px'},
        'ultrawide': { 'raw': '(min-aspect-ratio: 16/9)' },
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}
