/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      
      fontSize: {
        '5xl': '2.5rem',
      },

      colors: {
        primary: '#1A1A1A',
        secondary: '#C69657',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
