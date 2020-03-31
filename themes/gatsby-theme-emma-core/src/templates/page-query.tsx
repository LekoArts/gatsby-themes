import { graphql } from "gatsby"
import PageComponent from "../components/page"

export default PageComponent

export const query = graphql`
  query($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
      cover {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
