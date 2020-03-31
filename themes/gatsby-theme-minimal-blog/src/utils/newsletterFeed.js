/* eslint arrow-body-style: 0 */

module.exports = (title) => ({
  query: `
    {
      site {
        siteMetadata {
          title: siteTitle
          description: siteDescription
          siteUrl
          site_url: siteUrl
        }
      }
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allPost } }) => {
        return allPost.nodes.map((post) => {
          return {
            title: post.title,
            date: post.date,
            excerpt: post.excerpt,
            url: site.siteMetadata.siteUrl + post.slug,
            guid: site.siteMetadata.siteUrl + post.slug,
            custom_elements: [{ "content:encoded": post.html }],
          }
        })
      },
      query: `
        {
          allPost(sort: { fields: date, order: DESC }) {
            nodes {
              title
              date(formatString: "MMMM D, YYYY")
              excerpt
              slug
              html
            }
          }
        }
      `,
      output: `rss.xml`,
      title,
    },
  ],
})
