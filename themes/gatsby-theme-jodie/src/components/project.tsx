/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import { ChildImageSharp } from "../types"

type DataProps = {
  project: {
    body: string
    excerpt: string
    color: string
    date: string
    slug: string
    title: string
    shortTitle: string
    category: string
  }
  images: {
    nodes: {
      name: string
      childImageSharp: ChildImageSharp
    }[]
  }
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { project, images }, location }) => (
  <Layout color={project.color || undefined}>
    <SEO title={project.title} description={project.excerpt} pathname={location.pathname} />
    <div
      sx={{
        variant: `content.project`,
      }}
    >
      <div sx={{ fontSize: 2, textTransform: `uppercase`, letterSpacing: `wider`, mb: 2 }}>{project.category}</div>
      <Heading variant="styles.h1" sx={{ mt: 0 }}>
        {project.title}
      </Heading>
      <div sx={{ maxWidth: `600px` }}>
        <pre sx={{ maxWidth: `600px` }}>{JSON.stringify(images, null, 2)}</pre>
      </div>
      <p>
        {project.slug}, {project.excerpt}, {project.color}, {project.shortTitle}
      </p>
    </div>
  </Layout>
)

export default Project
