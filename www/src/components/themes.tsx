/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import Curved from "../icons/curved"
import Listing from "./listing"

const bigHeadingStyle = {
  fontSize: [`72px`, `96px`, `144px`],
  fontFamily: `heading`,
  fontWeight: `heading`,
  lineHeight: `heading`,
  letterSpacing: `wide`,
  my: 0,
  textAlign: `center`,
  position: `relative`,
  bottom: [`2vw`, `3vw`, `3vw`, `4vw`],
}

const Themes = () => {
  const [mode] = useColorMode()

  const isStrange = mode === `strangerThings`

  return (
    <section data-name="themes">
      <div sx={{ position: `relative` }}>
        <h2
          sx={{
            ...bigHeadingStyle,
            transform: isStrange ? `matrix(1, 0, 0, -1, 0, 0)` : `none`,
            color: isStrange ? `#000114` : `light`,
          }}
        >
          Themes
        </h2>
        <Curved sx={{ position: `absolute`, bottom: `-1px`, left: 0, right: 0 }} />
      </div>
      <div sx={{ backgroundColor: `backgroundThemes` }}>
        <Listing />
      </div>
      <Curved sx={{ transform: `matrix(1, 0, 0, -1, 0, 0)`, position: `relative`, top: `-1px` }} />
    </section>
  )
}

export default Themes
