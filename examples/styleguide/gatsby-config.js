require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

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
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
