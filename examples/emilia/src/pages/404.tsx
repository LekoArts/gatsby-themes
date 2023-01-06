import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import { Container, Link as TLink } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import Header from "@lekoarts/gatsby-theme-emilia/src/components/header"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emilia/src/components/seo"

const NotFound = (_props: PageProps) => (
  <Layout>
    <Header />
    <Container>
      <Themed.p>
        Oh, no!
        <br />
        You found a page that doesn't exist.{` `}
        <TLink as={Link} to="/">
          Do you want to visit the homepage?
        </TLink>
      </Themed.p>
    </Container>
  </Layout>
)

export default NotFound

export const Head: HeadFC = () => <Seo title="404 - Not Found" />
