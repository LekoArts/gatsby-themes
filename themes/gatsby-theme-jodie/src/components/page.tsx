/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import SEO from "./seo"

type DataProps = {
  page: {
    title: string
    slug: string
    excerpt: string
    body: string
    color: string
    custom: boolean
  }
}

const Page: React.FC<PageProps<DataProps>> = ({ data: { page }, location }) => (
  <Layout color={page.color || undefined}>
    <SEO title={page.title} description={page.excerpt} pathname={location.pathname} />
    <div
      sx={{
        variant: `content.page`,
      }}
    >
      <MDXRenderer>{page.body}</MDXRenderer>
    </div>
  </Layout>
)

export default Page
