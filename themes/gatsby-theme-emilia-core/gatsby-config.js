const withDefaults = require(`./utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)
  const { mdx = true } = themeOptions

  return {
    siteMetadata: {
      siteTitle: `Emilia`,
      siteTitleAlt: `Emilia - @lekoarts/gatsby-theme-emilia-core`,
      siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
      siteUrl: `https://emilia.lekoarts.de`,
      siteDescription: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
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
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {},
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-typescript`,
    ].filter(Boolean),
  }
}
