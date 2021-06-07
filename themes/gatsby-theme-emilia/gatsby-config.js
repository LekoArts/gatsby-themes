module.exports = (options) => ({
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-theme-ui`,
  ],
})
