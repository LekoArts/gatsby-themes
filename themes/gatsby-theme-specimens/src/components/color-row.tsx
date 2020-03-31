/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import Badge from "./badge"
import theme from "../theme"

type ColorRowProps = {
  color: string
  name: string
  prefix?: string
}

const ColorRow = ({ color, name, prefix = `` }: ColorRowProps) => {
  const { hex, RGB, CMYK } = useColorUtils(color)
  const specimensOptions = useSpecimensConfig()

  return (
    <div
      sx={{
        boxShadow: theme.shadows.default,
        backgroundColor: theme.colors.elementBG,
        px: theme.space[3],
        py: theme.space[2],
        mb: theme.space[3],
        borderRadius: theme.radii.lg,
        display: `flex`,
        color: theme.colors.black,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        alignItems: `center`,
        ...theme.rows.specimens,
      }}
    >
      <div
        data-name="color-row-color"
        sx={{ display: `flex`, alignItems: `center`, my: [theme.space[3], theme.space[2]] }}
      >
        <div
          aria-label={`Color preview: ${prefix}${name}`}
          sx={{
            backgroundColor: color,
            borderRadius: theme.radii.full,
            height: theme.sizes[`12`],
            width: theme.sizes[`12`],
            mr: theme.space[3],
            boxShadow: `0 10px 15px -3px rgba(${RGB}, 0.3), 0 4px 6px -2px rgba(${RGB}, 0.15)`,
          }}
        />
        <div sx={{ fontSize: theme.fontSizes[1], mr: theme.space[3] }}>{`${prefix}${name}`}</div>
      </div>
      <div
        data-name="color-row-values"
        sx={{
          display: `grid`,
          gridTemplateColumns: [`1fr`, `130px 160px 170px`],
          gridGap: theme.space[2],
          "span:last-of-type": { ml: theme.space[2] },
        }}
      >
        <div>
          <Badge>Hex</Badge>
          <span>{hex}</span>
        </div>
        <div>
          <Badge>RGB</Badge>
          <span>{RGB}</span>
        </div>
        {specimensOptions.CMYK && (
          <div>
            <Badge>CMYK</Badge>
            <span>{CMYK}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorRow
