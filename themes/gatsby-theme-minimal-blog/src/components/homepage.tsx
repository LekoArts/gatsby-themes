/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Hero from "../texts/hero.mdx"
import Bottom from "../texts/bottom.mdx"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useSiteMetadata()

  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage
