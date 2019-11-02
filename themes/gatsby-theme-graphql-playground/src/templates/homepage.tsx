import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"

const Homepage = () => (
  <Layout title="GraphQL Playground" query="Test123">
    <Styled.h1>GraphQL Playground</Styled.h1>
    <iframe
      title="test"
      src={`http://localhost:8000/___graphql`}
      width="100%"
      height="100%"
      style={{ minHeight: `600px` }}
    />
  </Layout>
)

export default Homepage
