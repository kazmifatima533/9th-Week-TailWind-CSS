/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    
    extend: {
      colors:{
      "basit": "#ec4899",
      "fatima" : "#991b1b",
      "age": "#ef4444",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
          },
        },
      }),
      gridTemplateColumns: {
        'custom-layout': '200px 1fr 2fr',
      },
      gap: {
        '18': '4.5rem',
      },
    },
    spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        '8xl': '96rem',
      },
    },
    plugins: [],
  };
    