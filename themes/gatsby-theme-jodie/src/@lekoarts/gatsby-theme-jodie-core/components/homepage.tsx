import * as React from "react"
import { PageProps } from "gatsby"
import Homepage from "../../../components/homepage"
import { ChildImageSharp } from "../../../types"

type DataProps = {
  projects: {
    nodes: {
      slug: string
      title: string
      cover: ChildImageSharp
      __typename: "MdxProject"
    }[]
  }
  pages: {
    nodes: {
      slug: string
      title: string
      cover: ChildImageSharp
      __typename: "MdxPage"
    }[]
  }
}

export default function JodieCoreHomepage({ children, ...props }: PageProps<DataProps>) {
  return <Homepage {...props}>{children}</Homepage>
}
