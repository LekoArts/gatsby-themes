/** @jsx jsx */
import { graphql, Link, PageProps } from "gatsby"
import { Container, jsx, Themed, Flex } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { TwitterShareButton } from "react-share"
import Layout from "../components/layout"
import LeftArrow from "../icons/left-arrow"
import { Circle, Donut } from "../components/shapes"
import CircleGrid from "../icons/circle-grid"
import SEO from "../components/seo"

type ThoughtTemplateProps = {
  thought: {
    slug: string
    title: string
    info: string
    date: string
    body: string
    excerpt: string
  }
}

const ThoughtTemplate: React.FC<PageProps<ThoughtTemplateProps>> = ({ data: { thought } }) => (
  <Layout thought>
    <SEO
      title={`${thought.title} | Gatsby Themes by LekoArts`}
      description={thought.excerpt}
      pathname={thought.slug}
      datePublished={thought.date}
      info={thought.info}
      thought
    />
    <Container>
      <Themed.a
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
          You're reading a short post about Gatsby Themes. <br /> Go back to the homepage to view all themes & give the
          project a star if you like the content!
        </div>
      </Themed.a>
      <div className="thought-speakable">
        <MDXRenderer>{thought.body}</MDXRenderer>
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
        <div sx={{ mr: 4 }}>Published on {thought.date}</div>
        <TwitterShareButton
          url={`https://themes.lekoarts.de${thought.slug}`}
          via="lekoarts_de"
          title={thought.title}
          sx={{
            variant: `buttons.transparent`,
            color: `primary`,
            outline: `none`,
            "&:hover, &:focus": {
              boxShadow: `outline`,
              cursor: `pointer`,
              color: `primary`,
            },
            mr: 4,
          }}
        >
          Share on Twitter
        </TwitterShareButton>
        <Themed.a href="/rss.xml">RSS Feed</Themed.a>
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
        <div>Like what you're reading? Try out the available themes!</div>
        <a
          href="https://github.com/LekoArts/gatsby-themes"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            variant: `buttons.white`,
            mt: 4,
            display: `inline-block`,
          }}
        >
          View all themes
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

export default ThoughtTemplate

export const query = graphql`
  query($slug: String!) {
    thought(slug: { eq: $slug }) {
      slug
      title
      info
      date(formatString: "MMMM D, YYYY")
      body
      excerpt
    }
  }
`
