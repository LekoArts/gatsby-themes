import { graphql } from "gatsby"
import ProjectComponent from "../components/project"

export default ProjectComponent

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    project(slug: { eq: $slug }) {
      body
      excerpt
      color
      date(formatString: $formatString)
      slug
      title
      shortTitle
      category
    }
  }
`
