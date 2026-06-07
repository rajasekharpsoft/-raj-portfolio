/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080810',
          secondary: '#0d0d18',
          card: '#0f0f1a',
          cardHover: '#141428',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          glow: 'rgba(124,58,237,0.4)',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#67e8f9',
          glow: 'rgba(6,182,212,0.4)',
        },
        pink: {
          neon: '#ec4899',
          glow: 'rgba(236,72,153,0.3)',
        },
        text: {
          primary: '#f0f0ff',
          muted: '#94a3b8',
          subtle: '#475569',
        },
        border: {
          DEFAULT: '#1e1e35',
          accent: 'rgba(124,58,237,0.5)',
          cyan: 'rgba(6,182,212,0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'particle': 'particle 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        neonPulse: {
          '0%, 100%': {
            boxShadow: '0 0 5px #7c3aed, 0 0 20px #7c3aed, 0 0 40px rgba(124,58,237,0.3)',
          },
          '50%': {
            boxShadow: '0 0 10px #06b6d4, 0 0 30px #06b6d4, 0 0 60px rgba(6,182,212,0.3)',
          },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(50px)', opacity: '0' },
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 50%, #ec4899 100%)',
        'hero-radial': 'radial-gradient(ellipse 100% 70% at 50% -10%, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
