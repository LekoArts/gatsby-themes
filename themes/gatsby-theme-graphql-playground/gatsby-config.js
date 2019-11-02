module.exports = themeOptions => ({
  siteMetadata: {
    siteTitle: `GraphQL Playground`,
    siteTitleAlt: `GraphQL Playground - @lekoarts/gatsby-theme-graphql-playground`,
    siteHeadline: `GraphQL Playground - Gatsby Theme from @lekoarts`,
    siteUrl: `https://graphql-playground.lekoarts.de`,
    siteDescription: `Stub description for graphql-playground`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [`gatsby-plugin-typescript`, `gatsby-plugin-theme-ui`],
})
