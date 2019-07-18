module.exports = ({ projectsPath = `content/projects`, pagesPath = `content/pages`, basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `Emma`,
    siteTitleAlt: `Emma - @lekoarts/gatsby-theme-emma`,
    siteHeadline: `Emma - Gatsby Theme from @lekoarts`,
    siteUrl: `https://emma.lekoarts.de`,
    siteDescription: `Minimalistic portfolio with full-width grid, page transitions, support for additional MDX pages, and a focus on large images`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
    basePath,
    projectsPath,
    pagesPath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: projectsPath,
        path: projectsPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: pagesPath,
        path: pagesPath,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {
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
        plugins: [
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
})
