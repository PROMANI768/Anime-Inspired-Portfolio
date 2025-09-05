/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slideUp': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        'amanojaku': ['var(--font-amanojaku)', 'serif'],
        'osake': ['var(--font-osake)', 'sans-serif'],
        'mistuki': ['var(--font-mistuki)', 'serif'],
        'modernlinebold': ['ModernlineBold', 'sans-serif'],
        'modernline': ['Modernline', 'sans-serif'],
        'geraldine': ['GERALDINE PERSONAL USE', 'cursive'],
        'eagleHorizon': ['EagleHorizonP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}