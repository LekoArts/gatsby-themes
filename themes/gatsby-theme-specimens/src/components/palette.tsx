/** @jsx jsx */
import { jsx } from "theme-ui"
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

const Palette = ({ colors, mode = `list`, single = false, minimal = false, prefix = `` }: PaletteProps) => {
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
    <div sx={{ ...wrapperStyles }}>
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
          return (
            <ColorSwatch
              color={color}
              name={name}
              key={name}
              minimal={minimal}
              sx={{ variant: `swatches.default`, flexBasis: `100%`, maxWidth: `100%`, display: `block` }}
            />
          )
        }

        return <ColorRow color={color} name={name} prefix={prefix} key={name} />
      })}
    </div>
  )
}

export default Palette
