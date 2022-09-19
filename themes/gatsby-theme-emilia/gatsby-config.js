module.exports = (options) => ({
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia-core`,
      options,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `texts`,
        path: `${__dirname}/src/texts`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-theme-ui`,
  ],
})
