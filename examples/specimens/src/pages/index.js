import React from "react"
import { css } from "@emotion/core"
import { Alert, ColorSwatch, ColorRow, Palette, normalizeThemeUI } from "@lekoarts/gatsby-theme-specimens"
import Layout from "../components/layout"
import { colors } from "../../theme"

const Index = () => (
  <Layout>
    <main
      css={css`
        max-width: 1200px;
        margin: 3rem auto;
        padding: 1.5rem;
      `}
    >
      <h1>Specimens for Design Systems</h1>
      <p>React component utilities to build your design system!</p>
      <h2>Alerts</h2>
      <Alert type="success">Make it so! Make it so! Make it so! Make it so! Make it so!</Alert>
      <Alert type="hint">Neutral Hint</Alert>
      <Alert type="warning">Gentle warning :)</Alert>
      <Alert type="info">Super helpful information goes here</Alert>
      <Alert type="danger">nooooooooo, not this way</Alert>
      <h2>Color Swatches</h2>
      <ColorSwatch color="#2d3748" name="Blueish" />
      <ColorSwatch color="#fff" />
      <ColorSwatch color="#667eea" name="Swift" />
      <h2>Color Rows</h2>
      <ColorRow color="#000" name="Blackness" prefix="Dark - " />
      <h2>Palette: Color Swatches</h2>
      <Palette colors={normalizeThemeUI({ colors })} single mode="swatch" />
      <h2>Palette: Color Rows</h2>
      <Palette colors={normalizeThemeUI({ colors: colors.indigo })} prefix="Indigo - " />
    </main>
  </Layout>
)

export default Index
