const rehypePrism = require(`@mapbox/rehype-prism`)
const withDefaults = require(`./utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)

  return {
    siteMetadata: {
      siteTitle: `GraphQL Playground`,
      siteTitleAlt: `GraphQL Playground - @lekoarts/gatsby-theme-graphql-playground`,
      siteHeadline: `GraphQL Playground - Gatsby Theme from @lekoarts`,
      siteUrl: `https://gatsby-theme-graphql-playground.netlify.com`,
      siteDescription: `GraphQL Playground to showcase the power of GraphQL. Write your queries and documentation with MDX and display queries in an interactive GraphiQL window. It can source from your localhost or a remote URL (e.g. Codesandbox).`,
      siteImage: `/banner.jpg`,
      author: `@lekoarts_de`,
      graphiQLUrl: `https://yx3py-8000.sse.codesandbox.io/___graphql`,
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
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `theme-overrides`,
          path: `./src/@lekoarts/gatsby-theme-graphql-playground`,
        },
      },
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          mdxOptions: {
            rehypePlugins: [rehypePrism],
          },
        },
      },
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
