module.exports = ({ contrastGuidelines = `AA`, CMYK = true }) => ({
  siteMetadata: {
    siteTitle: `Specimens for Design Systems`,
    siteTitleAlt: `Specimens for Design Systems - @lekoarts/gatsby-theme-specimens`,
    siteHeadline: `Specimens for Design Systems - Gatsby Theme from @lekoarts`,
    siteUrl: `https://specimens.lekoarts.de`,
    siteDescription: `Stub description for specimens`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
    specimensOptions: {
      contrastGuidelines,
      CMYK,
    },
  },
  plugins: [`gatsby-plugin-typescript`, `gatsby-plugin-theme-ui`],
})
