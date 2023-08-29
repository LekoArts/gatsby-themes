import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Styleguide`,
    siteTitleAlt: `Theme UI Styleguide`,
    siteHeadline: `Styleguide - Gatsby Theme from @lekoarts`,
    siteUrl: `https://theme-ui-styleguide.netlify.app`,
    siteDescription: `Instantly create a styleguide page based on your Theme UI configuration. Zero-config — just install the theme and see your Theme UI config displayed in a beautiful manner.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@lekoarts_de`,
  },
  trailingSlash: `always`,
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `@lekoarts/gatsby-theme-styleguide`,
      // See the theme's README for all available options
      options: {
        basePath: `/`,
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
