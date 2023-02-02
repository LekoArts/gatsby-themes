const config = (options) => ({
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma-core`,
      options,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})

export default config
