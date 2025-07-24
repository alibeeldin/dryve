/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'ultra-wide': '0.15em',
        'mega-wide': '0.2em',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.1',
        'snug': '1.2',
        'normal': '1.3',
        'relaxed': '1.4',
        'loose': '1.5',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        'alcatraz': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(220, 38, 38, 0.3)',
        'glow-lg': '0 0 30px rgba(220, 38, 38, 0.4)',
        'glow-xl': '0 0 40px rgba(220, 38, 38, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(220, 38, 38, 0.2)',
        'alcatraz': '0 15px 35px rgba(0, 0, 0, 0.3)',
        'alcatraz-lg': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.5)',
        'xl': '0 8px 16px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(220, 38, 38, 0.8)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 20px rgba(220, 38, 38, 0.8)',
        },
        '.text-shadow-glow-white': {
          textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};