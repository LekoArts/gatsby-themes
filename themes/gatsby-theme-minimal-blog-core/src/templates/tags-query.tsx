import { graphql } from "gatsby"
import TagsComponent, { Head } from "../components/tags"

export default TagsComponent

export { Head }

export const query = graphql`
  {
    allPost(sort: { tags: { name: DESC } }) {
      group(field: { tags: { name: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
