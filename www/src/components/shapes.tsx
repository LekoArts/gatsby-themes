/** @jsx jsx */
import { jsx } from "theme-ui"

type CircleProps = {
  size: string | string[]
  color:
    | `blue`
    | `orange`
    | `pink`
    | `purple`
    | `gray`
    | `black`
    | `red`
    | `yellow`
    | `green`
    | `indigo`
    | `teal`
    | `darkIndigo`
    | `strangerThings`
  top: string | string[]
  left?: string | string[]
  right?: string | string[]
  className?: string
}

const Circle = ({ size, color, top, left = ``, right = ``, className = `` }: CircleProps) => (
  <div
    sx={{
      position: `absolute`,
      height: size,
      width: size,
      variant: `gradients.${color}`,
      borderRadius: `full`,
      top,
      left,
      right,
      zIndex: -1,
    }}
    className={className}
  />
)

type DonutProps = {
  size: string | string[]
  color: string
  width: string | string[]
  top: string | string[]
  left?: string | string[]
  right?: string | string[]
  className?: string
}

const Donut = ({ size, color, width, top, left = ``, right = ``, className = `` }: DonutProps) => (
  <div
    sx={{
      position: `absolute`,
      height: size,
      width: size,
      backgroundColor: `transparent`,
      border: (t: { colors: { [x: string]: any[] } }) => t.colors[color][5],
      borderWidth: width,
      borderStyle: `solid`,
      borderRadius: `full`,
      top,
      left,
      right,
      zIndex: -1,
    }}
    className={className}
  />
)

export { Circle, Donut }
