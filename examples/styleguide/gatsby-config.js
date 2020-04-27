module.exports = {
  siteMetadata: {
    siteTitle: `Styleguide`,
    siteTitleAlt: `Theme UI Styleguide`,
    siteHeadline: `Styleguide - Gatsby Theme from @lekoarts`,
    siteUrl: `https://theme-ui-styleguide.netlify.com`,
    siteDescription: `Instantly create a styleguide page based on your Theme UI configuration. Zero-config — just install the theme and see your Theme UI config displayed in a beautiful manner.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `@lekoarts/gatsby-theme-styleguide`,
      // See the theme's README for all available options
      options: {
        basePath: `/`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
