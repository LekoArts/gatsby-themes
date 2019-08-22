import { graphql } from "gatsby"
import ProjectComponent from "../components/project"

export default ProjectComponent

export const query = graphql`
  query($id: String!) {
    project(id: { eq: $id }) {
      body
      excerpt
      client
      color
      date(formatString: "DD.MM.YYYY")
      service
      slug
      title
      cover {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
          resize(width: 800) {
            src
          }
        }
      }
    }
  }
`
