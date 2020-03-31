module.exports = (options) => ({
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
})
