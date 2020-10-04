/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { PageProps } from "gatsby"
import Layout from "./layout"

type DataProps = {
  projects: {
    nodes: {
      slug: string
      title: string
      shortTitle: string
    }[]
  }
  pages: {
    nodes: {
      slug: string
      title: string
    }[]
  }
}

const Homepage: React.FC<PageProps<DataProps>> = ({ data: { pages, projects } }) => (
  <Layout>
    <h1>Projects</h1>
    <pre>{JSON.stringify(projects, null, 2)}</pre>
    <h1>Pages</h1>
    <pre>{JSON.stringify(pages, null, 2)}</pre>
  </Layout>
)

export default Homepage
