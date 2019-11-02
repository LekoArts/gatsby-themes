/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import useSiteMetadata from "../hooks/use-site-metadata"

const Item = ({ data: { playground } }) => {
  const { graphiQLUrl } = useSiteMetadata()

  return (
    <Layout>
      <section sx={{ "pre:first-of-type": { display: `none` }, maxWidth: `900px` }}>
        <MDXRenderer>{playground.body}</MDXRenderer>
      </section>
      <section>
        <iframe
          title={playground.slug}
          src={`${graphiQLUrl}?query=${playground.query}`}
          width="100%"
          height="100%"
          style={{ minHeight: `600px` }}
        />
      </section>
    </Layout>
  )
}

export default Item

export const query = graphql`
  query ItemBySlug($slug: String!) {
    playground(slug: { eq: $slug }) {
      slug
      query
      body
    }
  }
`
