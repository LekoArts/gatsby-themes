import { graphql } from "gatsby"
import ProjectsComponent from "../components/projects"

export default ProjectsComponent

export const query = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        color
        slug
        service
        client
        title
        cover {
          childImageSharp {
            gatsbyImageData(width: 850, quality: 90)
          }
        }
      }
    }
  }
`
