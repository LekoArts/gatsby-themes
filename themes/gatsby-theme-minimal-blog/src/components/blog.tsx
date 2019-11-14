/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Heading, Flex } from "@theme-ui/components"
import Layout from "./layout"
import Listing from "./listing"
import useSiteMetadata from "../hooks/use-site-metadata"

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

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useSiteMetadata()

  return (
    <Layout>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Heading variant="h2" as="h2">
          Blog
        </Heading>
        <Styled.a as={Link} sx={{ variant: `links.secondary` }} to={`/${basePath}/${tagsPath}`.replace(/\/\/+/g, `/`)}>
          View all tags
        </Styled.a>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Blog
