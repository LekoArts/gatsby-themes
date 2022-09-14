/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { graphql, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import IFrame from "../components/iframe"
import Resizable from "../components/resizable"
import SEO from "../components/seo"

type ItemProps = {
  playground: {
    slug: string
    query: string
    body: string
    title: string
  }
}

const Item: React.FC<React.PropsWithChildren<PageProps<ItemProps>>> = ({ data: { playground }, children }) => (
  <Layout>
    <section sx={{ "pre:first-of-type": { display: `none` }, maxWidth: `900px` }}>
      <Heading as="h1" variant="styles.h1" data-testid="item-title">
        {playground.title}
      </Heading>
      {children}
    </section>
    <section>
      <Resizable>
        <IFrame title={playground.title} query={playground.query} />
      </Resizable>
    </section>
  </Layout>
)

export default Item

export const Head: HeadFC<ItemProps> = ({ data: { playground } }) => <SEO title={playground.title} />

export const query = graphql`
  query ($slug: String!) {
    playground(slug: { eq: $slug }) {
      slug
      query
      title
    }
  }
`
