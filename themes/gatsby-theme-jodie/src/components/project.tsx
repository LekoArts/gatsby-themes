import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "./layout"

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
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { project } }) => (
  <Layout color={project.color || undefined}>
    <h1>{project.title}</h1>
    <p>
      {project.slug}, {project.excerpt}, {project.color}, {project.shortTitle}
    </p>
  </Layout>
)

export default Project
