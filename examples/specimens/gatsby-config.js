const remarkGfm = require(`remark-gfm`)
const remarkSlug = require(`remark-slug`)
const { rehypeMetaAsAttributes } = require(`@lekoarts/rehype-meta-as-attributes`)

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteTitle: `Specimens for Design Systems - @lekoarts/gatsby-theme-specimens`,
    siteDescription: `Leverage the wide variety of powerful React components to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not how to showcase it. Works seamlessly with MDX.`,
    banner: `https://specimens.lekoarts.de/banner.jpg`,
    siteUrl: `https://specimens.lekoarts.de`,
  },
  trailingSlash: `never`,
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
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkSlug],
          rehypePlugins: [rehypeMetaAsAttributes],
        },
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Specimens for Design Systems - @lekoarts/gatsby-theme-specimens`,
        short_name: `Specimens`,
        description: `Leverage the wide variety of powerful React components to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not on how to showcase it. Works seamlessly with MDX.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#5a67d8`,
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
