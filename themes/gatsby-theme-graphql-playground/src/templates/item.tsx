/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import IFrame from "../components/iframe"
import Resizable from "../components/resizable"

type ItemProps = {
  data: {
    playground: {
      slug: string
      query: string
      body: string
      title: string
    }
  }
}

const Item = ({ data: { playground } }: ItemProps) => (
  <Layout title={playground.title}>
    <section sx={{ "pre:first-of-type": { display: `none` }, maxWidth: `900px` }}>
      <Heading as="h1" variant="styles.h1" data-testid="item-title">
        {playground.title}
      </Heading>
      <MDXRenderer>{playground.body}</MDXRenderer>
    </section>
    <section>
      <Resizable>
        <IFrame title={playground.title} query={playground.query} />
      </Resizable>
    </section>
  </Layout>
)

export default Item

export const query = graphql`
  query ItemBySlug($slug: String!) {
    playground(slug: { eq: $slug }) {
      slug
      query
      body
      title
    }
  }
`
