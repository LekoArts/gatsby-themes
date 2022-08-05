import * as React from "react"
import type { PageProps } from "gatsby"
import Page, { Head, JodiePageProps } from "../../../components/page"

export default function JodieCorePage({ children, ...props }: PageProps<JodiePageProps>) {
  return <Page {...props}>{children}</Page>
}

export { Head }
