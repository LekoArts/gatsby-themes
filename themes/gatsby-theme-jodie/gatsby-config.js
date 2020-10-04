module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Jodie`,
    siteTitleAlt: `Jodie - @lekoarts/gatsby-theme-jodie`,
    siteHeadline: `Jodie - Gatsby Theme from @lekoarts`,
    siteUrl: `https://jodie.lekoarts.de`,
    siteDescription: `Stub description for Jodie`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
})
