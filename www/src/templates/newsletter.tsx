/** @jsx jsx */
import { graphql, Link } from "gatsby"
import { Container, jsx, Styled, Flex } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { TwitterShareButton } from "react-share"
import Layout from "../components/layout"
import LeftArrow from "../icons/left-arrow"
import { Circle, Donut } from "../components/shapes"
import CircleGrid from "../icons/circle-grid"
import SEO from "../components/seo"

type NewsletterTemplateProps = {
  data: {
    newsletter: {
      slug: string
      title: string
      info: string
      date: string
      body: string
      excerpt: string
    }
  }
}

const NewsletterTemplate = ({ data: { newsletter } }: NewsletterTemplateProps) => (
  <Layout newsletter>
    <SEO
      title={`${newsletter.title} | Gatsby Themes by LekoArts`}
      description={newsletter.excerpt}
      pathname={newsletter.slug}
      datePublished={newsletter.date}
      info={newsletter.info}
      newsletter
    />
    <Container>
      <Styled.a
        as={Link}
        to="/"
        sx={{
          display: `grid`,
          gridTemplateColumns: `35px 1fr`,
          gridColumnGap: 3,
          backgroundColor: `indigo.1`,
          borderRadius: `lg`,
          boxShadow: `md`,
          p: 3,
          mt: 4,
          mb: [5, 6],
          alignItems: `center`,
          color: `indigo.7`,
          svg: {
            height: `35px`,
            width: `35px`,
            transition: `transform 0.3s ease-in-out`,
          },
          "&:hover": { textDecoration: `none`, color: `indigo.9`, svg: { transform: `translateX(-4px)` } },
          ".primary": {
            color: `indigo.2`,
          },
          ".secondary": {
            color: `indigo.6`,
          },
        }}
      >
        <LeftArrow />
        {` `}
        <div sx={{ fontSize: 1, fontWeight: `medium` }}>
          You're reading an archived newsletter. <br /> Go back to the homepage to view all themes & sign up for the
          newsletter to receive new ones directly to your inbox!
        </div>
      </Styled.a>
      <div className="newsletter-speakable">
        <MDXRenderer>{newsletter.body}</MDXRenderer>
      </div>
      <div
        sx={{
          fontSize: 0,
          borderTopWidth: `1px`,
          borderTopStyle: `solid`,
          borderTopColor: `light`,
          mt: 5,
          pt: 3,
          color: `textMuted`,
          display: `flex`,
          flexWrap: `wrap`,
        }}
      >
        <div sx={{ mr: 4 }}>Originally published on {newsletter.date}</div>
        <TwitterShareButton
          url={`https://themes.lekoarts.de${newsletter.slug}`}
          via="lekoarts_de"
          title={newsletter.title}
          sx={{
            variant: `buttons.transparent`,
            color: `primary`,
            "&:hover, &:focus": {
              boxShadow: `none`,
              cursor: `pointer`,
              textDecoration: `underline`,
              color: `primary`,
            },
            mr: 4,
          }}
        >
          Share on Twitter
        </TwitterShareButton>
        <Styled.a href="/rss.xml">RSS Feed</Styled.a>
      </div>
      <Flex
        sx={{
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          backgroundColor: `primary`,
          borderRadius: `xl`,
          boxShadow: (t: { colors: { [key: string]: any[] } }) => `0px 20px 25px ${t.colors.shadow}`,
          p: 4,
          mt: [5, 6],
          mb: 4,
          color: `white`,
          fontWeight: `medium`,
          position: `relative`,
        }}
      >
        <div>Get monthly information about Gatsby themes right to your inbox!</div>
        <a
          href="https://leko.io/newsletter-themes"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            variant: `buttons.newsletter`,
            mt: 4,
            display: `inline-block`,
            color: `primary`,
            backgroundColor: `white`,
          }}
        >
          Subscribe to the newsletter
        </a>
        <Donut
          width="20px"
          color="orange"
          size={[`60px`, `80px`, `130px`]}
          top={[`-20px`, `-60px`, `-80px`]}
          right={[`20px`, `40px`]}
          sx={{ zIndex: 10 }}
        />
        <Circle
          color="teal"
          size={[`20px`, `25px`, `30px`]}
          top={[`-10px`, `-40px`, `-80px`]}
          right={[`100px`, `170px`, `220px`]}
          sx={{ zIndex: 10 }}
        />
        <CircleGrid color="green" size={260} top="-20px" left={[`-180px`, `-120px`, `-120px`]} />
      </Flex>
    </Container>
  </Layout>
)

export default NewsletterTemplate

export const query = graphql`
  query($slug: String!) {
    newsletter(slug: { eq: $slug }) {
      slug
      title
      info
      date(formatString: "MMMM D, YYYY")
      body
      excerpt
    }
  }
`
