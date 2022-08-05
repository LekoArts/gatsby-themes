import type { PageProps } from "gatsby"
import * as React from "react"
import Page, { Head, EmmaPageProps } from "../../../components/page"

export default function EmmaCorePage({ ...props }: PageProps<EmmaPageProps>) {
  return <Page {...props} />
}

export { Head }
