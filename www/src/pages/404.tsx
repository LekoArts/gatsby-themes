/** @jsx jsx */
import { PageProps, Link } from "gatsby"
import { jsx, Styled, Container } from "theme-ui"
import Layout from "../components/layout"

const Index: React.FC<PageProps> = () => (
  <Layout>
    <Container sx={{ my: 6, textAlign: `center` }}>
      <Styled.h1>404</Styled.h1>
      <Styled.p>
        Page not found <br />
        Go back to{` `}
        <Styled.a as={Link} to="/">
          Home
        </Styled.a>
      </Styled.p>
    </Container>
  </Layout>
)

export default Index
