import { HeadFC } from "gatsby"
import * as React from "react"
import Project from "../../../components/project"
import SEO from "../../../components/seo"

type Props = {
  data: {
    project: any
    images: any
    [key: string]: any
  }
  pageContext: {
    prev: any
    next: any
  }
  [key: string]: any
}

export default function EmiliaCoreProject({ ...props }: Props) {
  return <Project {...props} />
}

export const Head: HeadFC<Props["data"]> = ({ data: { project } }) => (
  <SEO
    title={project.title}
    description={project.excerpt}
    pathname={project.slug}
    image={project.cover.childImageSharp.resize.src}
  />
)
