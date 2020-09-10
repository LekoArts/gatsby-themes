/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx, Container, Styled, Box } from "theme-ui"
import { useSpring, animated, config } from "react-spring"
import { graphql, useStaticQuery } from "gatsby"
import { ChildImageSharpFluid } from "../types"
import Layout from "./layout"
import Header from "./header"
import Card from "./card"

type Props = {
  projects: {
    slug: string
    title: string
    cover: {
      childImageSharp: ChildImageSharpFluid
    }
  }[]
}

type ProjecsStaticQuery = {
  allProject: {
    nodes: {
      parent: {
        fields: {
          colorThief: string[]
        }
      }
    }[]
  }
  [key: string]: string
}

const Projects = ({ projects }: Props) => {
  const data = useStaticQuery<ProjecsStaticQuery>(graphql`
    query {
      allProject(sort: { fields: date, order: DESC }) {
        nodes {
          ... on MdxProject {
            parent {
              ... on Mdx {
                fields {
                  colorThief
                }
              }
            }
          }
        }
      }
    }
  `)

  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  if (projects.length === 0) {
    return (
      <Layout>
        <Header />
        <Container>
          <Styled.p>
            Hi!{` `}
            <span role="img" aria-label="Wave emoji">
              👋
            </span>
            {` `}
            <br />
            Thanks for using <b>@lekoarts/gatsby-theme-emilia</b>. You currently don't have any content in your{` `}
            <i>projects</i> folder - that's why this page displays a placeholder text. Head over to the{` `}
            <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia">
              README
            </Styled.a>
            {` `}
            to learn how to setup them.
          </Styled.p>
          <Styled.p>
            <b>TL;DR:</b> <br />
            The starter automatically created the folder <code>content/projects</code>. Go into this folder, create a
            new folder called <code>example</code> and create an <code>index.mdx</code> file there and place an image.
            Edit the frontmatter like described in the{` `}
            <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia">
              README
            </Styled.a>
            .
          </Styled.p>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header />
      <Box as="main" variant="layout.main">
        <animated.div style={fadeUpProps}>
          <Container
            sx={{
              mt: `-8rem`,
              display: `grid`,
              gridTemplateColumns: [`1fr`, `repeat(auto-fill, minmax(350px, 1fr))`],
              gridColumnGap: 4,
            }}
          >
            {projects.map((project, index) => {
              const val = data.allProject.nodes[index].parent.fields.colorThief
              const shadow = `${val[0]}, ${val[1]}, ${val[2]}`

              const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
              const shadowArray = px.map((v) => `rgba(${shadow}, 0.15) 0px ${v} ${v} 0px`)

              return <Card key={project.slug} item={project} overlay={shadow} shadow={shadowArray} inGrid />
            })}
          </Container>
        </animated.div>
      </Box>
    </Layout>
  )
}

export default Projects
