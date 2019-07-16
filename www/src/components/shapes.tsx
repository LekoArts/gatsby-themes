/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type CircleProps = {
  size: string
  color: string
  top: string
  left?: string
  right?: string
  className?: string
}

const Circle = ({ size, color, top, left, right, className }: CircleProps) => (
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
  size: string
  color: string
  width: string
  top: string
  left?: string
  right?: string
  className?: string
}

const Donut = ({ size, color, width, top, left, right, className }: DonutProps) => (
  <div
    sx={{
      position: `absolute`,
      height: size,
      width: size,
      backgroundColor: `transparent`,
      border: t => t.colors[color][5],
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
