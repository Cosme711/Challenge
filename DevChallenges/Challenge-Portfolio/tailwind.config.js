module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'sm': '663px',
      'md': '768px',
      'lg': '1024px',
      '2lg': '1150px',
      'xl': '1280px',
      '1xl': '1345px',
      '2xl': '1536px',
      '3xl': '1620px'
    },
    extend: {
      gridTemplateRows: {
        'lg': '20rem 17rem auto',
        'xl': '20rem 16rem auto',
        '1xl': '20rem 13rem auto',
        '2xl': '20rem 14rem auto',
        '3xl': '20rem 16rem auto'
      },
      gridTemplateColumns: {
        'lg': '1fr 1.5fr',
        '2lg': '0.7fr 1.5fr',
        '1xl': '0.5fr 1.5fr'
      }
    }
  },
  variants: {},
  plugins: [],
}
