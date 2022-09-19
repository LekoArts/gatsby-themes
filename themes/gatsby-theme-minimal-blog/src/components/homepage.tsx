/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
import { visuallyHidden } from "../styles/utils"
import Seo from "./seo"
import Hero from "../texts/hero.mdx"
import Bottom from "../texts/bottom.mdx"

export type MBHomepageProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
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

export const Head: HeadFC = () => <Seo />
