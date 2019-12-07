require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Styleguide`,
    siteTitleAlt: `Theme UI Styleguide`,
    siteHeadline: `Styleguide - Gatsby Theme from @lekoarts`,
    siteUrl: `https://www.google.de`,
    siteDescription: `TODO`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-styleguide`,
      options: {
        basePath: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `styleguide - @lekoarts/gatsby-theme-styleguide`,
        short_name: `styleguide`,
        description: `Stub description for styleguide`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
