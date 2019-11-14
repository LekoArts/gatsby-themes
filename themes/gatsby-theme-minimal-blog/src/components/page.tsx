/** @jsx jsx */
import { jsx } from "theme-ui"
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
    <section sx={{ my: 5 }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Page
