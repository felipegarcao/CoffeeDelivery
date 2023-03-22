/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.png')",
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'card-order': '6px 44px;'
      },
      colors: {
        'yellow-dark': '#C47F17',
        'yellow': '#DBAC2C',
        'yellow-light': '#F1E9C9',

        'purple-dark': '#4B2995',
        'purple': '#8047F8',
        'purple-light': '#EBE5F9',

        'base': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',

        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': "#EDEDED",
        'base-card': "#F3F2F2",

        'white': '#FFFFFF',
        'background': '#FAFAFA'

      }
    },
  },
  plugins: [],
};
