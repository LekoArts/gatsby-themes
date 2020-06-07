module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Gatsby Starter Portfolio: Jodie`,
    siteTitleAlt: `Gatsby Starter Portfolio: Jodie - @lekoarts/gatsby-theme-jodie`,
    siteHeadline: `Gatsby Starter Portfolio: Jodie - Gatsby Theme from @lekoarts`,
    siteUrl: `https://jodie.lekoarts.de`,
    siteDescription: `Stub description for jodie`,
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
