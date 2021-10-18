require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || `https://status.lekoarts.de`,
    siteName: process.env.SITE_TITLE || `Status Dashboard - LekoArts`,
    siteDescription: process.env.SITE_DESCRIPTION || `Showing the statuses of my Netlify deploys & CircleCI tests.`,
  },
  plugins: [
    // See the theme's README for all available components
    `@lekoarts/gatsby-theme-status-dashboard`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_URL,
        short_name: `Status`,
        description: process.env.SITE_DESCRIPTION,
        start_url: `/`,
        background_color: `#f0f2fd`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3490dc`,
        display: `standalone`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
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
