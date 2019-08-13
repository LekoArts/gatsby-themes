import React from "react"
import { get } from "theme-ui"
import ColorSwatch from "./color-swatch"
import ColorRow from "./color-row"

const join = (...args) => args.filter(Boolean).join(`.`)

type PaletteProps = {
  colors: { [key: string]: any } | string[]
  name: string
  omit: string[]
  array: boolean
  single: boolean
  minimal: boolean
  [key: string]: any
}

const Palette = ({
  colors,
  name,
  mode = `list`,
  omit = [`modes`, `transparent`],
  array,
  single = false,
  minimal = false,
  ...props
}: PaletteProps) => (
  <div>
    {Object.entries(colors)
      .sort(([_, colorA]) => (typeof colorA === `string` ? -1 : 1))
      .map(([key, color]) => {
        if (!color || omit.includes(key)) return false
        const id = join(name, key)
        if (single && Array.isArray(color)) {
          return false
        }
        if (Array.isArray(color)) {
          return <Palette {...props} key={key} name={id} colors={color} omit={omit} array />
        }
        const finalColor = array ? get(colors, key) : get(colors, id)

        if (mode === `swatch`) {
          return <ColorSwatch name={id} color={finalColor} minimal={minimal} />
        }

        return <ColorRow color={finalColor} />
      })}
  </div>
)

export default Palette
