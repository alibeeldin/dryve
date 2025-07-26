/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': '#FAF5E5',
        'neon-blue': '#00BFFF',
      },
      fontFamily: {
        'impact': ['Impact', 'Arial Black', 'sans-serif'],
        'bold': ['Arial Black', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'draw': 'draw 2s ease-in-out infinite',
        'vhs': 'vhs 0.1s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        draw: {
          '0%': { strokeDasharray: '0 100' },
          '100%': { strokeDasharray: '100 0' },
        },
        vhs: {
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(-1px)' },
          '20%': { transform: 'translateX(1px)' },
          '30%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px #00BFFF',
        'neon-glow': '0 0 40px #00BFFF, 0 0 80px #00BFFF',
      },
    },
  },
  plugins: [],
};