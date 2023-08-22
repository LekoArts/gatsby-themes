import type { GatsbyConfig, PluginRef } from "gatsby"
import path from "path"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const githubToken = process.env.GITHUB_TOKEN

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Themes by LekoArts`,
    titleAlt: `Free & Open Source Gatsby Themes by LekoArts`,
    siteUrl: `https://themes.lekoarts.de`,
    description: `Get high-quality and customizable Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.`,
    headline: `Get high-quality and customizable Gatsby themes to quickly bootstrap your website`,
    image: `/banner.png`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.resolve(`data`),
      },
    },
    githubToken && {
      resolve: `gatsby-source-github-api`,
      options: {
        token: githubToken,
        variables: {},
        graphQLQuery: `
          query {
            repository(owner: "LekoArts", name: "gatsby-themes") {
              stargazers {
                totalCount
              }
            }
          }
        `,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Themes`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Free & Open Source Gatsby Themes by LekoArts`,
        short_name: `GatsbyThemes`,
        description: `Get high-quality and customizable Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
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
  ].filter(Boolean) as PluginRef[],
}

export default config
