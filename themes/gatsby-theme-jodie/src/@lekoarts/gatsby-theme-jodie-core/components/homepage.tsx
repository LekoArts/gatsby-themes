import React from "react"
import Homepage from "../../../components/homepage"

type Props = {
  data: {
    allProject: {
      nodes: {
        slug: string
        title: string
        shortTitle: string
      }[]
    }
    allPage: {
      nodes: {
        slug: string
        title: string
      }[]
    }
    [key: string]: any
  }
}

export default function MinimalBlogCoreHomepage({ data }: Props) {
  const { allProject, allPage } = data

  return <Homepage projects={allProject.nodes} pages={allPage.nodes} />
}
