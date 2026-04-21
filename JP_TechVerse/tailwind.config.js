export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:      '#080d2a',
          surface: '#0d1440',
          deep:    '#050919',
          blue:    '#2563eb',
          cyan:    '#3b82f6',
          neon:    '#60a5fa',
          muted:   '#94a3b8',
          border:  'rgba(37,99,235,0.18)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':        'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.25), transparent)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'scroll':     'scroll 30s linear infinite',
      },
      keyframes: {
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-16px)' } },
        scroll:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      boxShadow: {
        'glow':    '0 0 30px rgba(37,99,235,0.25)',
        'glow-lg': '0 0 60px rgba(37,99,235,0.35)',
        'card':    '0 4px 24px rgba(0,0,0,0.4)',
        'blue':    '0 8px 32px rgba(37,99,235,0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
