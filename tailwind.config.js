/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F3',
        sand: '#F5EDE4',
        blush: '#E8D5D5',
        sage: '#C5CFC6',
        mist: '#D4DFE6',
        terracotta: '#C4A484',
        clay: '#8B7355',
        charcoal: '#3D3D3D',
        ink: '#2A2A2A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
