/** @jsx jsx */
import { Container, Styled, jsx, Flex } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import RSS from "../icons/rss"

type NewsletterQueryProps = {
  newsletter: {
    totalCount: number
    nodes: {
      title: string
      slug: string
      date: string
      info: string
    }[]
  }
}

const NewsletterArchive = () => {
  const { newsletter } = useStaticQuery<NewsletterQueryProps>(graphql`
    query {
      newsletter: allNewsletter(sort: { fields: date, order: DESC }) {
        totalCount
        nodes {
          slug
          title
          info
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  `)

  return (
    <section data-name="newsletter-archive">
      <Container>
        <div sx={{ display: `flex`, alignItems: `center`, flexWrap: `wrap` }}>
          <Styled.h2 sx={{ mr: 3 }}>Newsletter Archive</Styled.h2>
          <a
            href="/rss.xml"
            title="RSS Feed of 'Newsletter Archive'"
            aria-label="RSS Feed of 'Newsletter Archive'"
            sx={{
              width: `36px`,
              height: `36px`,
              backgroundColor: `primary`,
              display: `inline-flex`,
              alignItems: `center`,
              justifyContent: `center`,
              padding: `0.45rem`,
              borderRadius: `lg`,
              border: `2px solid transparent`,
              borderColor: `primary`,
              svg: {
                color: `white`,
              },
              "&:hover, &:focus": {
                backgroundColor: `transparent`,
                svg: {
                  color: `primary`,
                },
              },
            }}
          >
            <RSS />
          </a>
        </div>
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
                  as={Link}
                  to={entry.slug}
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
              <div sx={{ fontSize: 1 }}>{entry.info}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default NewsletterArchive
