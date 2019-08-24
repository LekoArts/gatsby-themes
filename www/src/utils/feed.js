/* eslint arrow-body-style: 0 */

module.exports = {
  feeds: [
    {
      serialize: ({ query: { site, allNewsletter } }) => {
        return allNewsletter.nodes.map(newsletter => {
          return {
            title: newsletter.title,
            date: newsletter.date,
            excerpt: newsletter.excerpt,
            url: site.siteMetadata.siteUrl + newsletter.slug,
            guid: site.siteMetadata.siteUrl + newsletter.slug,
            custom_elements: [{ "content:encoded": newsletter.html }],
          }
        })
      },
      query: `
        {
          allNewsletter(sort: { fields: date, order: DESC }) {
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
      title: `Gatsby Themes by LekoArts - Newsletter`,
    },
  ],
}
