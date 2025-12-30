/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'neon-green-dark': '#32CD32',
        'cyber-black': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'alert-red': '#FF3131',
        'alert-orange': '#FF6B35',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'border-flow': 'border-flow 3s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 20px #39FF14' },
          '50%': { boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px #39FF14, 0 0 10px #39FF14' },
          '100%': { textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14' },
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
