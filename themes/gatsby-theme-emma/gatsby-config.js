module.exports = ({ projectsPath = `content/projects`, pagesPath = `content/pages`, basePath = `/` }) => ({
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
