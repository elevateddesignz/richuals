/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'stencil': ['Orbitron', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'olive': {
          50: '#f7f8f3',
          100: '#eef0e6',
          200: '#dde2ce',
          300: '#c6cfab',
          400: '#adb888',
          500: '#94a16b',
          600: '#7a8654',
          700: '#626a44',
          800: '#4f5539',
          900: '#434731',
        },
        'military': {
          50: '#f6f6f4',
          100: '#e8e8e4',
          200: '#d3d3ca',
          300: '#b8b8a8',
          400: '#9d9d86',
          500: '#87876e',
          600: '#6b6b58',
          700: '#56564a',
          800: '#48483f',
          900: '#3e3e37',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};