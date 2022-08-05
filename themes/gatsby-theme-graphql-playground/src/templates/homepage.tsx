import type { HeadFC } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// @ts-ignore
import Index from "../data/index"

const Homepage = () => (
  <Layout>
    <Index />
  </Layout>
)

export default Homepage

export const Head: HeadFC = () => <SEO />
