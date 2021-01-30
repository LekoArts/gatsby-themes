/** @jsx jsx */
import { PageProps, Link } from "gatsby"
import { jsx, Themed, Container } from "theme-ui"
import Layout from "../components/layout"

const Index: React.FC<PageProps> = () => (
  <Layout>
    <Container sx={{ my: 6, textAlign: `center` }}>
      <Themed.h1>404</Themed.h1>
      <Themed.p>
        Page not found <br />
        Go back to{` `}
        <Themed.a as={Link} to="/">
          Home
        </Themed.a>
      </Themed.p>
    </Container>
  </Layout>
)

export default Index
