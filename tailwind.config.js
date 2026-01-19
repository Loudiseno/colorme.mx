/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary teal palette - enriched
        teal: {
          DEFAULT: '#0D9488',
          light: '#5EEAD4',
          glow: '#B2F7EF',
          dark: '#0F766E',
        },
        cyan: '#22D3EE',
        sage: '#A7C4BC',

        // Refined paper-like backgrounds
        canvas: {
          DEFAULT: '#F8F6F3',
          soft: '#FDFCFA',
          warm: '#F5F2ED',
        },
        mist: '#F0F7F6',
        frost: '#E8F4F3',

        // Text colors - deeper, richer
        ink: '#1C1C28',
        charcoal: '#3D4852',
        slate: '#6B7A8C',
        silver: '#CBD5E1',

        // Accent
        coral: '#FB7185',
      },
      fontFamily: {
        display: ['var(--font-lora)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(13, 148, 136, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(13, 148, 136, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
