import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"

const NotFound = (_props: PageProps) => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  </Layout>
)

export default NotFound
