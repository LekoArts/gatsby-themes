import * as React from "react"
import { Link } from "gatsby"
import { Container, Themed, Link as TLink } from "theme-ui"
import Header from "@lekoarts/gatsby-theme-emma/src/components/header"
import Layout from "@lekoarts/gatsby-theme-emma/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emma/src/components/seo"

const NotFound = () => (
  <Layout>
    <Seo title="404 - Not found" />
    <Header />
    <Container>
      <Themed.p>
        Oh, no!
        <br />
        You found a page that doesn't exist.{` `}
        <TLink as={Link} to="/">
          Jump to the homepage?
        </TLink>
        .
      </Themed.p>
    </Container>
  </Layout>
)

export default NotFound
