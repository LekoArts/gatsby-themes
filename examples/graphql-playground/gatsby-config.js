module.exports = {
  siteMetadata: {
    siteTitleAlt: `Gatsby - GraphQL Playground`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-graphql-playground`,
      options: {},
    },
    `gatsby-plugin-netlify`,
  ],
}
