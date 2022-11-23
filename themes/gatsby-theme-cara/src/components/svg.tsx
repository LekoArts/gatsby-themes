/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { hidden } from "../styles/utils"

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | string
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const viewBox = {
  triangle: `0 0 30 30`,
  circle: `0 0 30 30`,
  arrowUp: `0 0 30 42`,
  upDown: `0 0 30 44.58`,
  box: `0 0 30 30`,
  hexa: `0 0 30 30`,
  cross: `0 0 100 100`,
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={viewBox[icon]}
  >
    <use href={withPrefix(`/icons.svg#${icon}`)} />
  </svg>
)

export default Svg
