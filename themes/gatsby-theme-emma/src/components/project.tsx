/** @jsx jsx */
import { animated, useSpring, config } from "react-spring"
import { Container, Styled, jsx, Flex } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import SEO from "./seo"
import { ChildImageSharp } from "../types"
import Hero from "./hero"

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
    sx={{
      flexDirection: `column`,
      "&:not(:last-of-type)": {
        mr: 5,
      },
      mb: 2,
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        color: `primary`,
        letterSpacing: `wider`,
        fontWeight: `semibold`,
      }}
    >
      {name}
    </div>
    <div sx={{ fontSize: 2 }}>{content}</div>
  </Flex>
)

const Project = ({ data: { project } }: Props) => {
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
      >
        <meta name="twitter:label1" value="Client" />
        <meta name="twitter:label2" value="Date" />
        <meta name="twitter:data1" value={project.client} />
        <meta name="twitter:data2" value={project.date} />
      </SEO>
      <Hero image={project.cover.childImageSharp.fluid} color={project.color}>
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
            <Styled.h1>{project.title}</Styled.h1>
          </animated.div>
          <animated.div style={infoProps}>
            <Flex sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
              <Item name="Client" content={project.client} />
              <Item name="Date" content={project.date} />
              <Item name="Service" content={project.service} />
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

export default Project
