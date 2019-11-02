const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  const { mdx = true, yaml = true } = themeOptions

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
      projectsPath: options.docsPath,
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
      yaml && {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: ({ node }) => {
            if (node.name === `navigation`) {
              return `Navigation`
            }
            return `Yaml`
          },
        },
      },
      `gatsby-plugin-typescript`,
    ].filter(Boolean),
  }
}
