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
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Specimens for Design Systems - @lekoarts/gatsby-theme-specimens`,
        short_name: `Specimens`,
        description: `Leverage the wide variety of powerful React components of '@lekoarts/gatsby-theme-specimens' to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not on how to showcase it. Works seamlessly with MDX.`,
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
