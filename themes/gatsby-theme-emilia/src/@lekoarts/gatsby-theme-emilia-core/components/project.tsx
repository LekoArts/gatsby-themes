import React from "react"
import Project from "../../../components/project"

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
}

export default ({ data, pageContext }: Props) => {
  const { project, images } = data

  return <Project data={{ ...data, project, images }} pageContext={pageContext} />
}
