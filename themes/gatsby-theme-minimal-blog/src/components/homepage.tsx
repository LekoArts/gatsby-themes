/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Hero from "../texts/hero.mdx"
import Title from "./title"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags: string[]
  }
}

const Homepage = ({ posts }: PostsProps) => (
  <Layout>
    <section sx={{ mb: [6, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
      <Hero />
    </section>
    <Title text="Latest Posts">
      <Link to="/blog">Read all posts</Link>
    </Title>
  </Layout>
)

export default Homepage
