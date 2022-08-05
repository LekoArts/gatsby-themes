import { graphql } from "gatsby"
import ProjectsComponent, { Head } from "../components/projects"

export default ProjectsComponent

export { Head }

export const query = graphql`
  query {
    projects: allProject(sort: { fields: date, order: DESC }) {
      nodes {
        shortTitle
        slug
        cover {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90)
          }
        }
      }
    }
  }
`
