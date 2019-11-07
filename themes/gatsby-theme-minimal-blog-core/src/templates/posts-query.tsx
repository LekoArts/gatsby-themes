import { graphql } from "gatsby"
import PostsComponent from "../components/posts"

export default PostsComponent

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "DD.MM.YYYY")
        categories
      }
    }
  }
`
