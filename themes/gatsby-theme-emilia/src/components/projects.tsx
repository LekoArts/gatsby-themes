/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx, Container, Styled, Main } from "theme-ui"
import { useTransition, animated } from "react-spring"
import { graphql, useStaticQuery } from "gatsby"
import { ChildImageSharp } from "../types"
import Layout from "./layout"
import Header from "./header"
import useMedia from "../utils/useMedia"
import useMeasure from "../utils/useMeasure"
import Card from "./card"

type Props = {
  projects: {
    slug: string
    title: string
    areas: string[]
    date: string
    cover: ChildImageSharp
  }[]
}

const Projects = ({ projects }: Props) => {
  const data = useStaticQuery(graphql`
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

  // Tie media queries to the number of columns
  const columns = useMedia([`(min-width: 758px)`], [2], 1)

  // Measure the width of the container element
  const [bind, { width }] = useMeasure()

  // Form a grid of stacked items
  const heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  const gridItems = projects.map(project => {
    const projectHeight = project.cover.childImageSharp.fluid.presentationHeight

    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [(width / columns) * column, (heights[column] += projectHeight / 2) - projectHeight / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...project, xy, width: width / columns, height: projectHeight / 2 }
  })

  // Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.slug, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
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
      <Main>
        <Container sx={{ px: `0px !important` }}>
          <div
            sx={{
              position: `relative`,
              width: `100%`,
              height: `100%`,
              mt: `-8rem`,
              zIndex: 10,
              "> div": {
                position: `absolute`,
                willChange: `transform, width, height, opacity`,
                padding: `1.5rem`,
                a: {
                  position: `absolute`,
                  top: `1.5rem`,
                  left: `1.5rem`,
                  right: 0,
                  bottom: 0,
                  height: `calc(100% - 3rem)`,
                  width: `calc(100% - 3rem)`,
                  "> div": {
                    position: `absolute !important`,
                    height: `100%`,
                    width: `100%`,
                  },
                },
              },
            }}
            {...bind}
            style={{ height: Math.max(...heights) }}
          >
            {transitions.map(({ item, props: { xy, ...rest }, key }, index) => {
              const val = data.allProject.nodes[index].parent.fields.colorThief
              const shadow = `${val[0]}, ${val[1]}, ${val[2]}`

              const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
              const shadowArray = px.map(v => `rgba(${shadow}, 0.15) 0px ${v} ${v} 0px`)

              return (
                <animated.div
                  key={key}
                  style={{
                    transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
                    ...rest,
                  }}
                >
                  <Card item={item} overlay={shadow} shadow={shadowArray} />
                </animated.div>
              )
            })}
          </div>
        </Container>
      </Main>
    </Layout>
  )
}

export default Projects
