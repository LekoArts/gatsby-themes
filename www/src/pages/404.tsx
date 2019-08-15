/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import Layout from "../components/layout"

const Index = () => (
  <Layout>
    <Container sx={{ my: 6, textAlign: `center` }}>
      <Styled.h1>404</Styled.h1>
      <Styled.p>Page not found</Styled.p>
    </Container>
  </Layout>
)

export default Index
