/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "@theme-ui/components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "./layout"
import ItemTags from "./item-tags"
import CodeStyles from "../styles/code"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      body: string
      excerpt: string
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <Heading variant="h2" as="h2">
      {post.title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <span>{post.date}</span>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
    <section sx={{ ...CodeStyles, my: 5, ".gatsby-resp-image-wrapper": { my: 5, boxShadow: `lg` } }}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Post
