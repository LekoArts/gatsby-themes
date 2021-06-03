/* eslint arrow-body-style: 0 */

module.exports = {
  feeds: [
    {
      serialize: ({ query: { site, allThought } }) => {
        return allThought.nodes.map((thought) => {
          const url = site.siteMetadata.siteUrl + thought.slug
          const content = `<p>${thought.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

          return {
            title: thought.title,
            date: thought.date,
            excerpt: thought.excerpt,
            url,
            guid: url,
            custom_elements: [{ "content:encoded": content }],
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
            }
          }
        }
      `,
      output: `rss.xml`,
      title: `News about Gatsby Themes by LekoArts`,
    },
  ],
}
