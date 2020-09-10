/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import Img from "gatsby-image"
import { ChildImageSharpFluid } from "../types"
import Layout from "./layout"
import HeaderProject from "./header-project"
import ProjectPagination from "./project-pagination"
import SEO from "./seo"

type ProjectProps = {
  data: {
    project: {
      body: string
      excerpt: string
      date: string
      slug: string
      title: string
      areas: string[]
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      nodes: {
        name: string
        childImageSharp: ChildImageSharpFluid
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
      cover: {
        childImageSharp: ChildImageSharpFluid
      }
    }
    next: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: {
        childImageSharp: ChildImageSharpFluid
      }
    }
  }
  [key: string]: any
}

const Project = ({ data: { project, images }, pageContext: { prev, next } }: ProjectProps) => {
  const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.excerpt}
        pathname={project.slug}
        image={project.cover.childImageSharp.resize.src}
      />
      <HeaderProject title={project.title} description={project.body} areas={project.areas} date={project.date} />
      <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`] }}>
        {images.nodes.map((image) => (
          <animated.div key={image.name} style={imageFade}>
            <Img fluid={image.childImageSharp.fluid} alt={image.name} sx={{ mb: [4, 4, 5], boxShadow: `xl` }} />
          </animated.div>
        ))}
        <ProjectPagination prev={prev} next={next} />
      </Container>
    </Layout>
  )
}

export default Project
