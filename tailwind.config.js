/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['1.4rem', '1.6rem'],
      md: ['1.6rem', '1.9rem'],
      lg: ['2rem', '4.6rem'],
    },
    extend: {
      fontSize: {
        btn: ['1.5rem', '2.2rem'],
        'form-span': ['1.4rem', '2.4rem'],
        '10' : ['1rem', '1.4rem'],
        '12' : ['1.2rem', '1.6rem'],
        '14' : ['1.4rem', '1.8rem'],
        '15' : ['1.5rem', '2.2rem'],
        '16' : ['1.6rem', '2.1rem'],
        '20' : ['2rem', '2.6rem'],
        '22' : ['2.2rem', '2.9rem'],
        '24' : ['2.4rem', '3.1rem'],
        '32' : ['3.2rem', '4.2rem'],
        '36' : ['3.6rem', '4.6rem']
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
