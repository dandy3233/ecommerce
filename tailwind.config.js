/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shadow-cycle': 'shadow-cycle 2s infinite', // Animation duration and loop
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'shadow-cycle': {
          '0%': { 
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.4)',  // Cyan shadow with low opacity
            transform: 'scale(1)',  // Normal size
          },
          '25%': { 
            boxShadow: '0 0 15px rgba(255, 0, 255, 0.5)',  // Magenta shadow with increased opacity
            transform: 'scale(1.1)',  // Slightly larger
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.6)',  // Yellow shadow with even more intensity
            transform: 'scale(1.2)',  // Even larger
          },
          '75%': { 
            boxShadow: '0 0 25px rgba(0, 255, 0, 0.7)',    // Green shadow with high intensity
            transform: 'scale(1.1)',  // Slightly larger
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)',  // Cyan shadow with maximum intensity
            transform: 'scale(1)',  // Back to normal size
          },
        },
      },
    },
  },
  darkMode: 'class', // Enables dark mode
  plugins: [],
}
