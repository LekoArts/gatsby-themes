module.exports = ({ projectsPath = `content/projects`, pagesPath = `content/pages`, basePath = `/` }) => ({
  siteMetadata: {
    siteTitle: `Emma`,
    siteTitleAlt: `Emma - @lekoarts/gatsby-theme-emma`,
    siteHeadline: `Emma - Gatsby Theme from @lekoarts`,
    siteUrl: `https://emma.lekoarts.de`,
    siteDescription: `Minimalistic bright portfolio with full-width grid and large images`,
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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
})
