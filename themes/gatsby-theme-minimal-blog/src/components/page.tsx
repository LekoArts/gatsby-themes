/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import Seo from "./seo"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
}

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <Seo title={page.title} description={page.excerpt} />
    <Heading as="h1" variant="styles.h1">
      {page.title}
    </Heading>
    <section sx={{ my: 5, variant: `layout.content` }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Page
