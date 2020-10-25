import * as React from "react"
import { PageProps } from "gatsby"
import Homepage from "../../../components/homepage"

type DataProps = {
  projects: {
    nodes: {
      slug: string
      title: string
      shortTitle: string
    }[]
  }
  pages: {
    nodes: {
      slug: string
      title: string
    }[]
  }
}

export default function JodieCoreHomepage({ children, ...props }: PageProps<DataProps>) {
  return <Homepage {...props}>{children}</Homepage>
}
