/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "@theme-ui/components"
import Layout from "./layout"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags: string[]
  }
}

const Blog = ({ posts }: PostsProps) => (
  <Layout>
    <Heading variant="h2" as="h2">
      Blog
    </Heading>
  </Layout>
)

export default Blog
