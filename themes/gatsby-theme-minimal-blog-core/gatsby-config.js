const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  const { mdx = true } = themeOptions

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
      basePath: options.basePath,
      blogPath: options.blogPath,
      postsPath: options.postsPath,
      pagesPath: options.pagesPath,
      tagsPath: options.tagsPath,
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
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.postsPath,
          path: options.postsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.pagesPath,
          path: options.pagesPath,
        },
      },
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-typescript`,
    ].filter(Boolean),
  }
}
