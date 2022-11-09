import { graphql } from "gatsby"
import ProjectComponent, { Head } from "../components/project"

export default ProjectComponent

export { Head }

export const query = graphql`
  query ($slug: String!, $absolutePathRegex: String!, $formatString: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { name: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 1600, quality: 90)
        }
      }
    }
    project(slug: { eq: $slug }) {
      excerpt
      date(formatString: $formatString)
      slug
      title
      areas
      cover {
        childImageSharp {
          resize(width: 800, quality: 90) {
            src
          }
        }
      }
    }
  }
`
