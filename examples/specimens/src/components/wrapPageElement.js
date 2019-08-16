import React from "react"
import { Styled } from "theme-ui"
import Layout from "./layout"

export const wrapPageElement = ({ element }) => (
  <Layout>
    <Styled.root>{element}</Styled.root>
  </Layout>
)
