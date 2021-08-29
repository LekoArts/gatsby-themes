import * as React from "react"
import Header from "@lekoarts/gatsby-theme-emma/src/components/header"
import Layout from "@lekoarts/gatsby-theme-emma/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emma/src/components/seo"
import { Container, Themed, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import useNavigation from "../hooks/use-navigation"
import useSiteMetadata from "../hooks/use-site-metadata"

const NotFound = () => (
  <Layout>
    <Seo title="404 - Not found" />
    <Header meta={useSiteMetadata()} nav={useNavigation()} />
    <Container>
      <Themed.p>
        Oh, no!
        <br />
        You found a page that doesn't exist.{` `}
        <TLink as={Link} to="/">
          To you want to visit the homepage?
        </TLink>
        .
      </Themed.p>
    </Container>
  </Layout>
)

export default NotFound
