import { withDefaults } from "./utils/default-options.mjs"

const config = (themeOptions) => {
  const options = withDefaults(themeOptions)

  return {
    siteMetadata: {
      siteTitle: `Emilia`,
      siteTitleAlt: `Emilia - @lekoarts/gatsby-theme-emilia-core`,
      siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
      siteUrl: `https://emilia.lekoarts.de`,
      siteDescription: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.`,
      siteImage: `/banner.jpg`,
      siteLanguage: `en`,
      author: `@lekoarts_de`,
      basePath: options.basePath,
      projectsPath: options.projectsPath,
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
          name: options.assetsPath,
          path: options.assetsPath,
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
        options: {},
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
