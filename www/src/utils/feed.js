/* eslint arrow-body-style: 0 */

module.exports = {
  feeds: [
    {
      serialize: ({ query: { site, allThought } }) => {
        return allThought.nodes.map((thought) => {
          return {
            title: thought.title,
            date: thought.date,
            excerpt: thought.excerpt,
            url: site.siteMetadata.siteUrl + thought.slug,
            guid: site.siteMetadata.siteUrl + thought.slug,
            custom_elements: [{ "content:encoded": thought.html }],
          }
        })
      },
      query: `
        {
          allThought(sort: { fields: date, order: DESC }) {
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
      title: `Gatsby Themes by LekoArts - Thoughts`,
    },
  ],
}
