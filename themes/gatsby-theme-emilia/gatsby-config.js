module.exports = options => ({
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia-core`,
      options,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
})
