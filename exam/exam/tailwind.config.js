/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      inset: {
        '90px': '90px',
        '565px':'565px',
        '350px':'350px',
        '310px':'310px',
      },
      gap: {
        '450': '28rem',
        '500':'37rem',
      },
      colors: {
        'r-blue': '#2203E4',
        'r-w': '#FFFFFF',
        'r-b': '#0062FF',
        'r-p': ' #575757',
        'r-y': '#DEA405',
        'r-o': '#FFBE0B',
        'r-h': '#3A86FF33',
        'r-e':'#F3F3F3',
      },
      width: {
        '4500': '28rem',
        '508': '32rem',
        '1000':'80rem',
        '1250':'78rem',
      },
      height: {
        '45000': '28rem',
      },
      margin: {
        'm': '30.5rem',
        'b': '22rem',
      }
    },
  },
  plugins: [],
}
