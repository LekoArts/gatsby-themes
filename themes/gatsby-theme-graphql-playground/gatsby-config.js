const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  const { mdx = true } = themeOptions

  return {
    siteMetadata: {
      siteTitle: `GraphQL Playground`,
      siteTitleAlt: `GraphQL Playground - @lekoarts/gatsby-theme-graphql-playground`,
      siteHeadline: `GraphQL Playground - Gatsby Theme from @lekoarts`,
      siteUrl: `https://graphql-playground.lekoarts.de`,
      siteDescription: `Stub description for graphql-playground`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@lekoarts_de`,
      basePath: options.basePath,
      docsPath: options.docsPath,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.docsPath,
          path: options.docsPath,
        },
      },
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {},
      },
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-typescript`,
    ].filter(Boolean),
  }
}
