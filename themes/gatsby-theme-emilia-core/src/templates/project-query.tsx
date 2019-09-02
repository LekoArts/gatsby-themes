import { graphql } from "gatsby"
import ProjectComponent from "../components/project"

export default ProjectComponent

export const query = graphql`
  query($slug: String!) {
    project(slug: { eq: $slug }) {
      body
      excerpt
      date(formatString: "DD.MM.YYYY")
      slug
      title
    }
  }
`
