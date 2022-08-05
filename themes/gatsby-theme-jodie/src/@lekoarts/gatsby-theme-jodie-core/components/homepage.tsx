import * as React from "react"
import type { PageProps } from "gatsby"
import Homepage, { Head, JodieHomepageProps } from "../../../components/homepage"

export default function JodieCoreHomepage({ children, ...props }: PageProps<JodieHomepageProps>) {
  return <Homepage {...props}>{children}</Homepage>
}

export { Head }
