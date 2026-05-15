module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'rgba(var(--color-bg-rgb), <alpha-value>)',
        'card-bg': 'rgba(var(--color-card-rgb), <alpha-value>)',
        'text-primary': 'rgba(var(--color-text-rgb), <alpha-value>)',
        'accent-cyan': 'rgba(var(--color-accent-cyan-rgb), <alpha-value>)',
        'accent-pink': 'rgba(var(--color-accent-pink-rgb), <alpha-value>)',
        'accent-purple': 'rgba(var(--color-accent-purple-rgb), <alpha-value>)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'blob': 'blob 20s infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(100px, -150px) scale(1.2)' },
          '66%': { transform: 'translate(-100px, 100px) scale(0.8)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
