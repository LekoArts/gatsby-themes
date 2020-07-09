/** @jsx jsx */
import { jsx } from "theme-ui"
import ColorSwatch from "./color-swatch"
import ColorRow from "./color-row"
import theme from "../theme"

const join = (...args: any) => args.filter(Boolean).join(`.`)

type ModeTypes = "list" | "swatch"

type PaletteProps = {
  colors: {
    name: string
    color: string | []
  }[]
  mode?: ModeTypes
  single?: boolean
  minimal?: boolean
  prefix?: string
  className?: string
}

const Palette = ({
  colors,
  mode = `list`,
  single = false,
  minimal = false,
  prefix = ``,
  className = ``,
}: PaletteProps) => {
  let wrapperStyles: Record<string, unknown>

  if (mode === `list`) {
    wrapperStyles = {
      display: `grid`,
      overflow: `hidden`,
      borderRadius: theme.radii.lg,
      boxShadow: theme.shadows.default,
      "> div": {
        mb: theme.space[0],
        borderRadius: 0,
        boxShadow: `none`,
      },
      "> div:not(:last-child)": {
        borderBottomWidth: `1px`,
        borderBottomStyle: `solid`,
        borderBottomColor: theme.colors.gray[3],
      },
    }
  } else {
    wrapperStyles = {
      display: `grid`,
      gridTemplateColumns: `repeat(auto-fit,minmax(265px,1fr))`,
      gridGap: theme.space[3],
      "> div": {
        mb: theme.space[0],
        mr: theme.space[0],
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

          return (
            <Palette
              colors={arr}
              key={`${name}-${color}-${prefix}-palette`}
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
              key={`${name}-${color}-${prefix}-swatch`}
              minimal={minimal}
              prefix={prefix}
              sx={{ width: `100% !important`, display: `block !important` }}
            />
          )
        }

        return <ColorRow color={color} name={name} prefix={prefix} key={`${name}-${color}-${prefix}-row`} />
      })}
    </div>
  )
}

export default Palette
