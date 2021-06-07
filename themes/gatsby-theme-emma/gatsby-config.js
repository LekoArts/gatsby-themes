module.exports = (options) => ({
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
