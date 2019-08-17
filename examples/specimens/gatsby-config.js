require(`dotenv`).config({
  path: `.env`,
})

// eslint-disable-next-line global-require
const remarkPlugins = [require(`remark-slug`)]

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Specimens for Design Systems - TODO`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-specimens`,
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
        extensions: [`.mdx`],
        remarkPlugins,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `specimens - @lekoarts/gatsby-theme-specimens`,
        short_name: `specimens`,
        description: `Stub description for specimens`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
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
  ],
}
