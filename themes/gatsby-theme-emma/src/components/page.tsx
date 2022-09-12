/** @jsx jsx */
import { animated, useSpring, config } from "react-spring"
import { Container, jsx, Flex, Heading } from "theme-ui"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { HeadFC, PageProps } from "gatsby"
import Layout from "./layout"
import Hero from "./hero"
import SEO from "./seo"

export type EmmaPageProps = {
  page: {
    title: string
    slug: string
    excerpt: string
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const Page: React.FC<React.PropsWithChildren<PageProps<EmmaPageProps>>> = ({ data: { page }, children }) => {
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <Hero image={page.cover.childImageSharp.gatsbyImageData} slim>
        <Flex
          sx={{
            position: `absolute`,
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: `5xl`,
            margin: `0 auto`,
            padding: 4,
            zIndex: 2,
            flexDirection: `column`,
          }}
        >
          <animated.div style={titleProps}>
            <Heading as="h1" variant="styles.h1">
              {page.title}
            </Heading>
          </animated.div>
        </Flex>
      </Hero>
      <Container>
        <animated.div style={contentProps}>{children}</animated.div>
      </Container>
    </Layout>
  )
}

export default Page

export const Head: HeadFC<EmmaPageProps> = ({ data: { page } }) => (
  <SEO title={page.title} description={page.excerpt} pathname={page.slug} />
)
