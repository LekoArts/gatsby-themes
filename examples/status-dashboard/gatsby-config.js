require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    siteName: process.env.SITE_TITLE,
    siteDescription: process.env.SITE_DESCRIPTION,
  },
  plugins: [
    `@lekoarts/gatsby-theme-status-dashboard`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Status Dashboard - Netlify & CircleCI`,
        short_name: `Status`,
        description: `Status Dashboard showing the statuses of my Netlify deploys & CircleCI tests`,
        start_url: `/`,
        background_color: `#f0f2fd`,
        theme_color: `#3490dc`,
        display: `standalone`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
