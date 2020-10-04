import * as React from "react"
import { PageProps } from "gatsby"
import Homepage from "../../../components/homepage"

type DataProps = {
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
}

export default function JodieCoreHomepage({ children, ...props }: PageProps<DataProps>) {
  return <Homepage {...props}>{children}</Homepage>
}
