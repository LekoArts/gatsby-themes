import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"
import rehypeMetaAsAttributes from "@lekoarts/rehype-meta-as-attributes"
import "dotenv/config"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config = {
  siteMetadata: {
    siteTitle: `Specimens for Design Systems - @lekoarts/gatsby-theme-specimens`,
    siteDescription: `Leverage the wide variety of powerful React components to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not how to showcase it. Works seamlessly with MDX.`,
    banner: `https://specimens.lekoarts.de/banner.jpg`,
    siteUrl: `https://specimens.lekoarts.de`,
    siteLanguage: `en`,
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
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean),
}

export default config
