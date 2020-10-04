import * as React from "react"
import { PageProps } from "gatsby"
import Project from "../../../components/project"

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
  }
}

export default function JodieCoreProject({ children, ...props }: PageProps<DataProps>) {
  return <Project {...props}>{children}</Project>
}
