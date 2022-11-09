import { graphql } from "gatsby"
import ProjectsComponent, { Head } from "../components/projects"

export default ProjectsComponent

export { Head }

export const query = graphql`
  {
    allProject(sort: { date: DESC }) {
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
