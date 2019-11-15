module.exports = options => {
  const showLineNumbers = options.showLineNumbers || true

  return {
    siteMetadata: {
      siteTitle: `Lupin`,
      siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
      siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
      siteUrl: `https://minimal-blog.lekoarts.de`,
      siteDescription: `TODO`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@lekoarts_de`,
      externalLinks: [
        {
          name: `Twitter`,
          url: `https://twitter.com/lekoarts_de`,
        },
        {
          name: `Instagram`,
          url: `https://www.instagram.com/lekoarts.de/`,
        },
      ],
      navigation: [
        {
          title: `Blog`,
          slug: `/blog`,
        },
        {
          title: `About`,
          slug: `/about`,
        },
      ],
      showLineNumbers,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ],
  }
}
