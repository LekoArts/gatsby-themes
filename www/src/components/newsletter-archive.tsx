/** @jsx jsx */
import { Container, Styled, jsx, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

type NewsletterQueryProps = {
  newsletter: {
    totalCount: number
    nodes: {
      title: string
      link: string
      date: string
      excerpt: string
    }[]
  }
}

const NewsletterArchive = () => {
  const { newsletter } = useStaticQuery<NewsletterQueryProps>(graphql`
    query {
      newsletter: allNewsletterYaml(sort: { fields: date, order: DESC }) {
        totalCount
        nodes {
          title
          link
          date(formatString: "MMMM D, YYYY")
          excerpt
        }
      }
    }
  `)

  return (
    <section data-name="newsletter-archive">
      <Container>
        <Styled.h2>Newsletter Archive</Styled.h2>
        <Styled.p>
          Read previous editions online and be sure to sign up for the newsletter to not miss future ones!
        </Styled.p>
        <div sx={{ my: 5 }}>
          {newsletter.nodes.map((entry, index) => (
            <div key={`${entry.title}-${entry.date}`} sx={{ mb: [4], position: `relative` }}>
              <div
                aria-hidden
                sx={{
                  position: `absolute`,
                  left: `-2rem`,
                  fontSize: `5rem`,
                  fontWeight: `bold`,
                  color: `primary`,
                  top: `-2rem`,
                  zIndex: -1,
                  opacity: 0.06,
                }}
              >
                {newsletter.totalCount - index}
              </div>
              <Flex
                sx={{
                  mb: [3, 2],
                  flexWrap: `wrap`,
                  alignItems: [`flex-start`, `center`],
                  flexDirection: [`column`, `row`],
                }}
              >
                <Styled.a
                  href={entry.link}
                  sx={{
                    fontWeight: `semibold`,
                    mr: 3,
                    color: `text`,
                    "&:hover": { color: `primary` },
                    fontSize: [1, 2],
                  }}
                >
                  {entry.title}
                </Styled.a>
                <div sx={{ mr: 3, display: [`none`, `block`], color: `primary` }}>•</div>
                <div sx={{ fontSize: 1, fontStyle: [`italic`, `normal`], color: `text` }}>{entry.date}</div>
              </Flex>
              <div sx={{ fontSize: 1 }}>{entry.excerpt}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default NewsletterArchive
