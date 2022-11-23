/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"

type IconType = "bgPattern" | "leftArrow" | "location"

type SVGProps = {
  id: IconType
  [x: string]: any
}

const Svg = ({ id, ...props }: SVGProps) => (
  <svg {...props}>
    <use href={withPrefix(`/icons.svg#${id}`)} />
  </svg>
)

export default Svg
