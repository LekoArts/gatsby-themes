/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./layout"

type PostsProps = {
  projects: {
    slug: string
    title: string
    shortTitle: string
  }[]
  pages: {
    slug: string
    title: string
  }[]
}

const Homepage = ({ projects, pages }: PostsProps) => (
  <Layout>
    <h1>Projects</h1>
    <pre>{JSON.stringify(projects, null, 2)}</pre>
    <h1>Pages</h1>
    <pre>{JSON.stringify(pages, null, 2)}</pre>
  </Layout>
)

export default Homepage
