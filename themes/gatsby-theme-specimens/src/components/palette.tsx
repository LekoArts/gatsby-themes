/** @jsx jsx */
import { jsx } from "theme-ui"
import ColorSwatch from "./color-swatch"
import ColorRow from "./color-row"

const join = (...args: any) => args.filter(Boolean).join(`.`)

type ModeTypes = "list" | "swatch"

type PaletteProps = {
  colors: {
    name: string
    color: string
  }[]
  mode?: ModeTypes
  single?: boolean
  minimal?: boolean
  prefix?: string
  className?: string
}

const Palette = ({ colors, mode = `list`, single = false, minimal = false, prefix = ``, className }: PaletteProps) => {
  let wrapperStyles = {}

  if (mode === `list`) {
    wrapperStyles = {
      display: `grid`,
      overflow: `hidden`,
      borderRadius: `lg`,
      boxShadow: `default`,
      "> div": {
        mb: 0,
        borderRadius: 0,
        boxShadow: `none`,
      },
      "> div:not(:last-child)": {
        borderBottomWidth: `1px`,
        borderBottomStyle: `solid`,
        borderBottomColor: `gray.3`,
      },
    }
  } else {
    wrapperStyles = {
      display: `grid`,
      gridTemplateColumns: `repeat(auto-fit,minmax(265px,1fr))`,
      gridGap: 3,
      "> div": {
        mb: 0,
        mr: 0,
      },
    }
  }

  return (
    <div sx={{ ...wrapperStyles }} className={className}>
      {colors.map(({ name, color }) => {
        if (!color) return false

        if (single && Array.isArray(color)) {
          return false
        }

        if (Array.isArray(color)) {
          const arr: { name: string; color: string }[] = []

          color.forEach((colorValue, index) => {
            if (colorValue == null) return false

            arr.push({
              name: join(name, index),
              color: colorValue,
            })
          })
          const inverted = arr.reverse()

          return (
            <Palette
              colors={inverted}
              key={name}
              minimal={minimal}
              mode={mode}
              prefix={prefix}
              sx={{ gridColumn: `-1 / 1` }}
            />
          )
        }

        if (mode === `swatch`) {
          return (
            <ColorSwatch
              color={color}
              name={name}
              key={name}
              minimal={minimal}
              prefix={prefix}
              sx={{ width: `100% !important`, display: `block !important` }}
            />
          )
        }

        return <ColorRow color={color} name={name} prefix={prefix} key={name} />
      })}
    </div>
  )
}

export default Palette
