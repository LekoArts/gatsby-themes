import React from "react"
import ColorSwatch from "./color-swatch"
import ColorRow from "./color-row"

const join = (...args) => args.filter(Boolean).join(`.`)

// TODO: https://github.com/typescript-eslint/typescript-eslint/pull/762 Change quotes setup so that type can also use double quotes
// eslint-disable-next-line
type ModeTypes = 'list' | 'swatch'

type PaletteProps = {
  colors: {
    name: string
    color: string
  }[]
  mode?: ModeTypes
  single?: boolean
  minimal?: boolean
  prefix?: string
}

const Palette = ({ colors, mode = `list`, single = false, minimal = false, prefix = `` }: PaletteProps) => (
  <div>
    {colors.map(({ name, color }) => {
      if (!color) return false

      if (single && Array.isArray(color)) {
        return false
      }

      if (Array.isArray(color)) {
        const arr = []

        color.forEach((colorValue, index) => {
          if (colorValue == null) return false

          arr.push({
            name: join(name, index),
            color: colorValue,
          })
        })
        const inverted = arr.reverse()

        return <Palette colors={inverted} key={name} minimal={minimal} mode={mode} prefix={prefix} />
      }

      if (mode === `swatch`) {
        return <ColorSwatch color={color} name={name} key={name} minimal={minimal} />
      }

      return <ColorRow color={color} name={name} prefix={prefix} />
    })}
  </div>
)

export default Palette

/**
 * {Object.entries(colors)
      .map(([key, color]) => {
        if (!color) return false
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
 */
