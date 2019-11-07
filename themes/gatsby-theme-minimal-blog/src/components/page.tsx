import React from "react"
import { Heading } from "@theme-ui/components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
}

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <Heading variant="h2" as="h2">
      {page.title}
    </Heading>
    <MDXRenderer>{page.body}</MDXRenderer>
  </Layout>
)

export default Page
