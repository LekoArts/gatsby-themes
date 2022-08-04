import type { HeadFC } from "gatsby"
import * as React from "react"
import Projects from "../../../components/projects"
import SEO from "../../../components/seo"

type Props = {
  data: {
    allProject: any
    [key: string]: string
  }
  [key: string]: any
}

export default function EmmaCoreProjects({ ...props }: Props) {
  const {
    data: { allProject },
  } = props

  return <Projects projects={allProject.nodes} {...props} />
}

export const Head: HeadFC = () => <SEO />
