/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Img from "gatsby-image"
import { ChildImageSharp } from "../types"
import Layout from "./layout"
import HeaderProject from "./header-project"
import ProjectPagination from "./project-pagination"
import SEO from "./seo"

type Props = {
  data: {
    project: {
      body: string
      excerpt: string
      date: string
      slug: string
      title: string
      areas: string[]
      cover: ChildImageSharp
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }[]
    }
  }
  pageContext: {
    prev: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: ChildImageSharp
    }
    next: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: ChildImageSharp
    }
  }
}

const Project = ({ data: { project, images }, pageContext: { prev, next } }: Props) => (
  <Layout>
    <SEO
      title={project.title}
      description={project.excerpt}
      pathname={project.slug}
      image={project.cover.childImageSharp.resize!.src}
    />
    <HeaderProject title={project.title} description={project.body} areas={project.areas} date={project.date} />
    <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`], zIndex: 10 }}>
      {images.nodes.map(image => (
        <Img
          fluid={image.childImageSharp.fluid}
          key={image.name}
          alt={image.name}
          sx={{ zIndex: 10, mb: [4, 4, 5], boxShadow: `xl` }}
        />
      ))}
      <ProjectPagination prev={prev} next={next} />
    </Container>
  </Layout>
)

export default Project
