import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || `https://status.lekoarts.de`,
    siteName: process.env.SITE_TITLE || `Status Dashboard - LekoArts`,
    siteDescription: process.env.SITE_DESCRIPTION || `Showing the statuses of my Netlify deploys & CircleCI tests.`,
  },
  trailingSlash: `always`,
  plugins: [
    // See the theme's README for all available components
    `@lekoarts/gatsby-theme-status-dashboard`,
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
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
