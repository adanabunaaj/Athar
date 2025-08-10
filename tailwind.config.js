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
        // Palestinian Green Family
        palestine: {
          green: '#1a5f3f',      // Main Palestinian green
          'green-light': '#2d8659', // Lighter green
          'green-dark': '#0f3d26',  // Darker green
          'green-forest': '#164032', // Forest variation
          'green-olive': '#6b7c32',  // Olive green variation
        },
        // Palestinian Red Family  
        red: {
          palestine: '#c8102e',      // Main Palestinian red
          'palestine-light': '#e63946', // Brighter red
          'palestine-dark': '#a11226',  // Darker red
          crimson: '#dc143c',        // Crimson variation
          burgundy: '#800020',       // Deep burgundy
        },
        // Professional Blacks and Grays
        dark: {
          charcoal: '#2c2c2c',      // Professional charcoal
          slate: '#1e293b',         // Slate dark
          graphite: '#374151',      // Graphite gray
          midnight: '#0f172a',      // Very dark
        },
        // Clean Neutrals
        clean: {
          white: '#ffffff',
          cream: '#fefdf8',
          'light-gray': '#f8fafc',
          'warm-gray': '#64748b',
          'cool-gray': '#94a3b8',
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