/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"
import { ChildImageSharp } from "../types"
import SEO from "./seo"
import GridItem from "./grid-item"

type DataProps = {
  projects: {
    nodes: {
      shortTitle: string
      slug: string
      cover: ChildImageSharp
    }[]
  }
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { projects }, location }) => (
  <Layout>
    <SEO title="Projects" pathname={location.pathname} />
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `1fr 1fr`],
        gridAutoRows: `50vw`,
      }}
    >
      {projects.nodes.map((project) => (
        <GridItem to={project.slug} key={project.slug} aria-label={`View project: ${project.shortTitle}`}>
          <Img fluid={project.cover.childImageSharp.fluid} />
          <span>{project.shortTitle}</span>
        </GridItem>
      ))}
    </div>
  </Layout>
)

export default Project
