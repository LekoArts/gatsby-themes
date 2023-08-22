/** @jsx jsx */
import * as React from "react"
import { PageProps, Link, HeadFC } from "gatsby"
import { jsx, Container, get } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index: React.FC<PageProps> = () => {
  React.useEffect(() => {
    window.plausible(`404`, { props: { path: document.location.pathname } })
  }, [])

  return (
    <Layout>
      <Container sx={{ my: 6, textAlign: `center` }}>
        <Themed.h1>404</Themed.h1>
        <Themed.p>
          Page not found <br />
          Go back to{` `}
          <Link sx={(t) => get(t, `styles.a`)} to="/">
            Home
          </Link>
        </Themed.p>
      </Container>
    </Layout>
  )
}

export default Index

export const Head: HeadFC = () => <SEO title="404 - Page Not Found" />
