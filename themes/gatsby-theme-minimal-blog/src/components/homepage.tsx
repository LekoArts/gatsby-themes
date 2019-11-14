/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Hero from "../texts/hero.mdx"
import Projects from "../texts/projects.mdx"
import Title from "./title"
import Listing from "./listing"
import List from "./list"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => (
  <Layout>
    <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
      <Hero />
    </section>
    <Title text="Latest Posts">
      <Link to="/blog">Read all posts</Link>
    </Title>
    <Listing posts={posts} showTags={false} />
    <List>
      <Projects />
    </List>
  </Layout>
)

export default Homepage
