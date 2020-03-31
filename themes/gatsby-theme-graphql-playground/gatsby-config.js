const withDefaults = require(`./utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)
  const { mdx = true } = themeOptions

  return {
    siteMetadata: {
      siteTitle: `GraphQL Playground`,
      siteTitleAlt: `GraphQL Playground - @lekoarts/gatsby-theme-graphql-playground`,
      siteHeadline: `GraphQL Playground - Gatsby Theme from @lekoarts`,
      siteUrl: `https://gatsby-theme-graphql-playground.netlify.com`,
      siteDescription: `GraphQL Playground to showcase the power of GraphQL. Write your queries and documentation with MDX and display queries in an interactive GraphiQL window. It can source from your localhost or a remote URL (e.g. Codesandbox).`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@lekoarts_de`,
      graphiQLUrl: `https://711808k40x.sse.codesandbox.io/___graphql`,
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
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-typescript`,
    ].filter(Boolean),
  }
}
