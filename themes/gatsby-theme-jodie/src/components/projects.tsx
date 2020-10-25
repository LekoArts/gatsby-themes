/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"
import { ChildImageSharp } from "../types"
import SEO from "./seo"
import GridItem from "./grid-item"
import locales from "../locales"
import { visuallyHidden } from "../styles/utils"

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
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.projects}
    </h1>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `1fr 1fr`],
        gridAutoRows: `50vw`,
      }}
    >
      {projects.nodes.length > 0 ? (
        projects.nodes.map((project) => (
          <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
            <Img fluid={project.cover.childImageSharp.fluid} />
            <span>{project.shortTitle}</span>
          </GridItem>
        ))
      ) : (
        <div sx={{ padding: 3 }}>No projects found at the location defined for "projectsPath"</div>
      )}
    </div>
  </Layout>
)

export default Project
