/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Flex"', 'system-ui', '-apple-system', 'sans-serif'],
        code: ['"Google Sans Code"', 'monospace'],
      },
      colors: {
        srilin: {
          red: '#c5283d',
          gold: '#e6a100',
          dark: '#070e1e',
        },
        antigravity: {
          surface: '#ffffff',
          surfaceContainer: '#f0f4f9',
          outlineVariant: 'rgba(0, 0, 0, 0.08)',
          primary: '#1a73e8',
          onSurface: '#1f1f1f',
          onSurfaceVariant: '#444746',
        }
      },
      borderRadius: {
        'pill': '999px',
        '2xl': '24px',
        '3xl': '28px',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'wave': 'wave 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
