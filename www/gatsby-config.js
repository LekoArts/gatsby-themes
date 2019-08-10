require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby Themes by LekoArts`,
    siteTitleAlt: `Free & Open Source Gatsby Themes by LekoArts`,
    siteUrl: `https://themes.lekoarts.de`,
    siteDescription: `Get high-quality and customizable Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.`,
    siteHeadline: `Get high-quality and customizable Gatsby themes to quickly bootstrap your website`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletter`,
        path: `${__dirname}/newsletter`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-smartypants`],
        // TODO: Remove once this is fixed
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-smartypants`],
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Themes`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Free & Open Source Gatsby Themes by LekoArts`,
        short_name: `GatsbyThemes`,
        description: `Get high-quality and customizable Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5A67D8`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
