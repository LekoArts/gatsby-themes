/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { transparentize } from "polished"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import Layout from "./layout"
import Seo from "./seo"

export type JodieProjectProps = {
  project: {
    excerpt: string
    color: string
    date: string
    slug: string
    title: string
    shortTitle: string
    category: string
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
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }[]
  }
}

const Project: React.FC<React.PropsWithChildren<PageProps<JodieProjectProps>>> = ({
  data: { project, images },
  children,
}) => (
  <Layout color={project.color || undefined}>
    <div sx={{ variant: `content.project` }}>
      <div sx={{ fontSize: 2, textTransform: `uppercase`, letterSpacing: `wider`, mb: 2 }}>{project.category}</div>
      <Heading as="h1" variant="styles.h1" sx={{ mt: 0 }}>
        {project.title}
      </Heading>
      <div sx={{ maxWidth: `70ch`, my: 4 }}>{children}</div>
    </div>
    <div sx={{ backgroundColor: transparentize(0.9, project.color) }}>
      <div sx={{ variant: `content.imageList` }}>
        {images.nodes.map((image) => (
          <GatsbyImage key={image.name} alt={image.name} image={image.childImageSharp.gatsbyImageData} />
        ))}
      </div>
    </div>
  </Layout>
)

export default Project

export const Head: HeadFC<JodieProjectProps> = ({ data: { project }, location }) => (
  <Seo
    title={project.title}
    description={project.excerpt}
    pathname={location.pathname}
    image={project.cover.childImageSharp.resize.src}
  />
)
