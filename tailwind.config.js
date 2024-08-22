/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['1.4rem', '1.6rem'],
      md: ['1.6rem', '1.9rem'],
      lg: ['2rem', '4.6rem'],
      '3xl': ['3.6rem', '4.6rem']
    },
    extend: {
      fontSize: {
        btn: ['1.5rem', '2.2rem'],
        'form-span': ['1.4rem', '2.4rem']
      },
      colors: {
        gray: {
          350: '#F1F1F1'
        }
      },
      content: {
        'show-password': 'url("../src/assets/images/show-password.svg")',
      },
    }
  },
  plugins: []
}
