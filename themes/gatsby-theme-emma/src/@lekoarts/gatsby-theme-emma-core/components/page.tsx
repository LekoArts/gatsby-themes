import type { HeadFC } from "gatsby"
import * as React from "react"
import Page from "../../../components/page"
import SEO from "../../../components/seo"

type Props = {
  data: {
    page: any
    [key: string]: any
  }
  [key: string]: any
}

export default function EmmaCorePage({ ...props }: Props) {
  return <Page {...props} />
}

export const Head: HeadFC<Props["data"]> = ({ data: { page } }) => (
  <SEO title={page.title} description={page.excerpt} pathname={page.slug} />
)
