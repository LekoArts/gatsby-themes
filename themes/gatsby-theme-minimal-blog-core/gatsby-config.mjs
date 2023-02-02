import remarkGfm from "remark-gfm"
import rehypeMetaAsAttributes from "@lekoarts/rehype-meta-as-attributes"
import { withDefaults } from "./utils/default-options.mjs"

const config = (themeOptions) => {
  const options = withDefaults(themeOptions)

  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.postsPath,
          path: options.postsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.pagesPath,
          path: options.pagesPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `theme-overrides`,
          path: `./src/@lekoarts`,
        },
      },
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeMetaAsAttributes],
          },
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: `transparent`,
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
