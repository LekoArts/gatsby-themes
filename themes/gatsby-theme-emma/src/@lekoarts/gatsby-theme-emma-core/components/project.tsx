import type { HeadFC } from "gatsby"
import * as React from "react"
import Project from "../../../components/project"
import SEO from "../../../components/seo"

type Props = {
  data: {
    project: any
    [key: string]: any
  }
  [key: string]: any
}

export default function EmmaCoreProject({ ...props }: Props) {
  return <Project {...props} />
}

export const Head: HeadFC<Props["data"]> = ({ data: { project } }) => (
  <SEO
    title={project.title}
    description={project.excerpt}
    pathname={project.slug}
    image={project.cover.childImageSharp.resize!.src}
  >
    <meta name="twitter:label1" value="Client" />
    <meta name="twitter:label2" value="Date" />
    <meta name="twitter:data1" value={project.client} />
    <meta name="twitter:data2" value={project.date} />
  </SEO>
)
