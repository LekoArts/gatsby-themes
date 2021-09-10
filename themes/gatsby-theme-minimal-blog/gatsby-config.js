module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Gommit`,
    siteTitleAlt: `Gommit - Finnur's digital garden`,
    siteHeadline: `Gommit - Finnur's digital garden`,
    siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `A small patch of the interwebs where Finnur Pálmi Magnússon plants ideas and weeds in the form of disorganised ramblings`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@gommit`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
