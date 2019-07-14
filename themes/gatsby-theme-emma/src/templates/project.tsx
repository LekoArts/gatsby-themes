import React from "react"
import { graphql } from "gatsby"
import { animated, useSpring, config } from "react-spring"
import { Container, Styled, css, Flex } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ChildImageSharp } from "../types"
import Hero from "../components/hero"
import "./project.css"

type Props = {
  data: {
    project: {
      body: string
      excerpt: string
      client: string
      color: string
      date: string
      service: string
      slug: string
      title: string
      cover: ChildImageSharp
    }
  }
}

type ItemProps = {
  name: string
  content: string
}

const Item = ({ name, content }: ItemProps) => (
  <Flex
    css={css({
      flexDirection: `column`,
      "&:not(:last-of-type)": {
        mr: 5,
      },
      mb: 2,
    })}
  >
    <div
      css={css({
        textTransform: `uppercase`,
        color: `primary`,
        letterSpacing: `wider`,
        fontWeight: `semibold`,
      })}
    >
      {name}
    </div>
    <div css={css({ fontSize: 2 })}>{content}</div>
  </Flex>
)

const ProjectTemplate = ({ data: { project } }: Props) => {
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.excerpt}
        pathname={project.slug}
        image={project.cover.childImageSharp.resize!.src}
      />
      <Hero image={project.cover.childImageSharp.fluid} color={project.color}>
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
            <Styled.h1>{project.title}</Styled.h1>
          </animated.div>
          <animated.div style={infoProps}>
            <Flex css={css({ mt: 4, mb: [2, 4], flexWrap: `wrap` })}>
              {[`Client`, `Date`, `Service`].map(i => (
                <Item key={i} name={i} content={project.client} />
              ))}
            </Flex>
          </animated.div>
        </Flex>
      </Hero>
      <Container>
        <animated.div style={contentProps}>
          <MDXRenderer>{project.body}</MDXRenderer>
        </animated.div>
      </Container>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($slug: String!) {
    project(slug: { eq: $slug }) {
      body
      excerpt
      client
      color
      date(formatString: "DD.MM.YYYY")
      service
      slug
      title
      cover {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
          resize(width: 800) {
            src
          }
        }
      }
    }
  }
`
