import remarkGfm from "remark-gfm"
import { withDefaults } from "./utils/default-options.mjs"

const config = (themeOptions) => {
  const options = withDefaults(themeOptions)

  return {
    siteMetadata: {
      siteTitle: `Emma`,
      siteTitleAlt: `Emma - @lekoarts/gatsby-theme-emma`,
      siteHeadline: `Emma - Gatsby Theme from @lekoarts`,
      siteUrl: `https://emma.lekoarts.de`,
      siteDescription: `Minimalistic portfolio with full-width grid, page transitions, support for additional MDX pages, and a focus on large images`,
      siteImage: `/banner.jpg`,
      siteLanguage: `en`,
      author: `@lekoarts_de`,
      basePath: options.basePath,
      projectsPath: options.projectsPath,
      pagesPath: options.pagesPath,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.projectsPath,
          path: options.projectsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.pagesPath,
          path: options.pagesPath,
        },
      },
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
      `gatsby-transformer-sharp`,
      options.sharp && {
        resolve: `gatsby-plugin-sharp`,
        options: {},
      },
    ].filter(Boolean),
  }
}

export default config
