import { graphql } from "gatsby"
import PostComponent from "../components/post"

export default PostComponent

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "DD.MM.YYYY")
      tags
      description
      body
      excerpt
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`
