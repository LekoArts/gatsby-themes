module.exports = ({ projectsPath = `content/projects`, pagesPath = `content/pages`, basePath = `/` }) => ({
  siteMetadata: {
    siteTitle: `Emma`,
    siteTitleAlt: `Emma - @lekoarts/gatsby-theme-emma`,
    siteHeadline: `Emma - Gatsby Theme from @lekoarts`,
    siteUrl: `https://emma.lekoarts.de`,
    siteDescription: `Minimalistic bright portfolio with full-width grid and large images`,
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
    {
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
