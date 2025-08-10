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
        // Custom brand colors from your palette
        brand: {
          'dark-green': '#001514',
          'cream': '#FBFFFE', 
          'orange': '#FD9635',
          'deep-red': '#6B0504',
        },
        // Extended variations for better design
        custom: {
          'green-dark': '#001514',
          'green-light': '#003a36',
          'cream-pure': '#FBFFFE',
          'cream-warm': '#f8f6f3',
          'orange-bright': '#FD9635',
          'orange-light': '#ffb366',
          'red-deep': '#6B0504',
          'red-light': '#8b1008',
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