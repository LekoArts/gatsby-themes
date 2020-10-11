/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { transparentize } from "polished"
import Layout from "./layout"
import SEO from "./seo"
import { ChildImageSharp } from "../types"

type DataProps = {
  project: {
    body: string
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
      childImageSharp: ChildImageSharp["childImageSharp"]
    }[]
  }
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { project, images }, location }) => (
  <Layout color={project.color || undefined}>
    <SEO
      title={project.title}
      description={project.excerpt}
      pathname={location.pathname}
      image={project.cover.childImageSharp.resize.src}
    />
    <div sx={{ variant: `content.project` }}>
      <div sx={{ fontSize: 2, textTransform: `uppercase`, letterSpacing: `wider`, mb: 2 }}>{project.category}</div>
      <Heading as="h1" variant="styles.h1" sx={{ mt: 0 }}>
        {project.title}
      </Heading>
      <div sx={{ maxWidth: `70ch`, my: 4 }}>
        <MDXRenderer>{project.body}</MDXRenderer>
      </div>
    </div>
    <div sx={{ backgroundColor: transparentize(0.9, project.color) }}>
      <div sx={{ variant: `content.imageList` }}>
        {images.nodes.map((image) => (
          <Img key={image.name} alt={image.name} fluid={image.childImageSharp.fluid} />
        ))}
      </div>
    </div>
  </Layout>
)

export default Project
