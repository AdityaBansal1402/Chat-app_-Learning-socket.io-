/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          50: 'var(--primary-50)', // 248, 243, 237)
          100: 'var(--primary-100)', // 240, 231, 219)
          200: 'var(--primary-200)', // 226, 207, 182)
          300: 'var(--primary-300)', // 211, 183, 146)
          400: 'var(--primary-400)', // 197, 159, 109)
          500: 'var(--primary-500)', // 182, 135, 73)
          600: 'var(--primary-600)', // 146, 108, 58)
          700: 'var(--primary-700)', // 109, 81, 44)
          800: 'var(--primary-800)', // 73, 54, 29)
          900: 'var(--primary-900)', // 36, 27, 15)
          950: 'var(--primary-950)', // 18, 13, 7)
        },
        'secondary': {
          50: 'var(--secondary-50)', // 254, 244, 231)
          100: 'var(--secondary-100)', // 252, 233, 207)
          200: 'var(--secondary-200)', // 250, 210, 158)
          300: 'var(--secondary-300)', // 247, 188, 110)
          400: 'var(--secondary-400)', // 245, 165, 61)
          500: 'var(--secondary-500)', // 242, 143, 13)
          600: 'var(--secondary-600)', // 194, 114, 10)
          700: 'var(--secondary-700)', // 145, 86, 8)
          800: 'var(--secondary-800)', // 97, 57, 5)
          900: 'var(--secondary-900)', // 48, 29, 3)
          950: 'var(--secondary-950)', // 24, 14, 1)
        }
      }
    },
  },
  plugins: [],
}

