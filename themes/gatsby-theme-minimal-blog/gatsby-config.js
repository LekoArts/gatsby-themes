const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = options => ({
  siteMetadata: {
    siteTitle: `Lupin`,
    siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
