module.exports = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `Cara`,
    siteTitleAlt: `Cara - @lekoarts/gatsby-theme-cara`,
    siteHeadline: `Cara - Gatsby Theme from @lekoarts`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `theme-overrides`,
        path: `./src/@lekoarts/gatsby-theme-cara`,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
})
