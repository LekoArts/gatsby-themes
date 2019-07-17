/** @jsx jsx */
import React from "react"
import { jsx, Container, Styled } from "theme-ui"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Curved from "../../assets/curved.svg"
import Listing from "../components/listing"

const Index = () => (
  <Layout>
    <Hero />
    <div sx={{ position: `relative` }}>
      <h2
        sx={{
          fontSize: [`72px`, `96px`, `144px`],
          color: `light`,
          fontFamily: `heading`,
          fontWeight: `heading`,
          lineHeight: `heading`,
          my: 0,
          textAlign: `center`,
          position: `relative`,
          bottom: [`2vw`, `3vw`, `3vw`, `4vw`],
        }}
      >
        Themes
      </h2>
      <img
        src={Curved}
        alt=""
        sx={{ position: `absolute`, bottom: 0, left: 0, right: 0, width: `100%`, height: `auto` }}
      />
    </div>
    <div sx={{ backgroundColor: `white` }}>
      <Listing />
    </div>
    <img src={Curved} alt="" sx={{ width: `100%`, height: `auto`, transform: `matrix(1, 0, 0, -1, 0, 0)` }} />
  </Layout>
)

export default Index
