/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f9',
          100: '#d1f0f0',
          500: '#1a3b3a',
          600: '#15302f',
          700: '#112625',
          800: '#0d1d1c',
          900: '#081312',
        },
        accent: {
          gold: '#d4a853',
          'gold-light': '#e2bb6a',
          'gold-dark': '#c19642',
        },
        secondary: {
          terracotta: '#c65d32',
          burgundy: '#8b2635',
          'burnt-orange': '#b85c2e',
        },
        neutral: {
          cream: '#f8f6f3',
          'warm-gray': '#6b5b5b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}