import React from "react"
import { graphql } from "gatsby"
import { animated, useSpring, config } from "react-spring"
import { Container, Styled, css, Flex } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ChildImageSharp } from "../types"
import Hero from "../components/hero"

type Props = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
      cover: ChildImageSharp
    }
  }
}

const PageTemplate = ({ data: { page } }: Props) => {
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <SEO title={page.title} description={page.excerpt} pathname={page.slug} />
      <Hero image={page.cover.childImageSharp.fluid} slim>
        <Flex
          css={css({
            position: `absolute`,
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: `5xl`,
            margin: `0 auto`,
            padding: 4,
            zIndex: 2,
            flexDirection: `column`,
          })}
        >
          <animated.div style={titleProps}>
            <Styled.h1>{page.title}</Styled.h1>
          </animated.div>
        </Flex>
      </Hero>
      <Container>
        <animated.div style={contentProps}>
          <MDXRenderer>{page.body}</MDXRenderer>
        </animated.div>
      </Container>
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
      cover {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
