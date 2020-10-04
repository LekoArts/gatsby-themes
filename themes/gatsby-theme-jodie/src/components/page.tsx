import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "./layout"

type DataProps = {
  page: {
    title: string
    slug: string
    excerpt: string
    body: string
    color: string
    custom: boolean
  }
}

const Page: React.FC<PageProps<DataProps>> = ({ data: { page } }) => (
  <Layout color={page.color || undefined}>
    <h1>{page.title}</h1>
    <div>
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>
  </Layout>
)

export default Page
