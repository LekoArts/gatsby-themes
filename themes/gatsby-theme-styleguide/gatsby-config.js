module.exports = themeOptions => ({
  siteMetadata: {
    siteTitle: `Styleguide`,
    siteTitleAlt: `Styleguide - @lekoarts/gatsby-theme-styleguide`,
    siteHeadline: `Styleguide - Gatsby Theme from @lekoarts`,
    siteUrl: `https://styleguide.lekoarts.de`,
    siteDescription: `Stub description for styleguide`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-typescript`, `gatsby-plugin-theme-ui`],
})
