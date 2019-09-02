module.exports = themeOptions => ({
  siteMetadata: {
    siteTitle: `Emilia`,
    siteTitleAlt: `Emilia - @lekoarts/gatsby-theme-emilia-core`,
    siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
    siteUrl: `https://emilia-core.lekoarts.de`,
    siteDescription: `Stub description for emilia-core`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [`gatsby-plugin-typescript`, `gatsby-plugin-theme-ui`],
})
