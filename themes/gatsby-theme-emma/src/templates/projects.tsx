import React from "react"
import { css } from "theme-ui"
import { useTrail } from "react-spring"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ChildImageSharp } from "../types"
import ProjectItem from "../components/project-item"

type Props = {
  data: {
    allProject: {
      nodes: {
        color: string
        slug: string
        service: string
        client: string
        cover: ChildImageSharp
      }[]
    }
  }
}

const Projects = ({
  data: {
    allProject: { nodes },
  },
}: Props) => {
  const trail = useTrail(nodes.length, {
    from: { height: `0%` },
    to: { height: `100%` },
  })

  return (
    <Layout
      css={css({
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
        width: `100%`,
      })}
    >
      {trail.map((style, index) => (
        <ProjectItem style={style} node={nodes[index]} key={nodes[index].slug} />
      ))}
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        color
        slug
        service
        client
        cover {
          childImageSharp {
            fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#e6e6e6" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
