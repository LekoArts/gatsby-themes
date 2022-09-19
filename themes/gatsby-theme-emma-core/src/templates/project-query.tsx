import { graphql } from "gatsby"
import ProjectComponent, { Head } from "../components/project"

export default ProjectComponent

export { Head }

export const query = graphql`
  query ($slug: String!, $formatString: String!) {
    project(slug: { eq: $slug }) {
      excerpt
      client
      color
      date(formatString: $formatString)
      service
      slug
      title
      cover {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          resize(width: 800) {
            src
          }
        }
      }
    }
  }
`
