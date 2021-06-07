// eslint-disable-next-line global-require
const remarkPlugins = [require(`remark-slug`)]

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Specimens for Design Systems - @lekoarts/gatsby-theme-specimens`,
    siteDescription: `Leverage the wide variety of powerful React components to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not how to showcase it. Works seamlessly with MDX.`,
    banner: `https://specimens.lekoarts.de/banner.jpg`,
    siteUrl: `https://specimens.lekoarts.de`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-specimens`,
      // See the theme's README for all available options
      options: {
        CMYK: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
        extensions: [`.mdx`],
        remarkPlugins,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Specimens for Design Systems - @lekoarts/gatsby-theme-specimens`,
        short_name: `Specimens`,
        description: `Leverage the wide variety of powerful React components to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not on how to showcase it. Works seamlessly with MDX.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5a67d8`,
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
