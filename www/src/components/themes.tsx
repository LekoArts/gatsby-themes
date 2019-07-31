/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Curved from "../../assets/curved.svg"
import Listing from "./listing"

const bigHeadingStyle = {
  fontSize: [`72px`, `96px`, `144px`],
  color: `light`,
  fontFamily: `heading`,
  fontWeight: `heading`,
  lineHeight: `heading`,
  letterSpacing: `wide`,
  my: 0,
  textAlign: `center`,
  position: `relative`,
  bottom: [`2vw`, `3vw`, `3vw`, `4vw`],
}

const Themes = () => (
  <section data-name="themes">
    <div sx={{ position: `relative` }}>
      <h2 sx={bigHeadingStyle}>Themes</h2>
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
  </section>
)

export default Themes
