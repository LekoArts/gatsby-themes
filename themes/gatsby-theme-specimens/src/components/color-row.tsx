/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import Badge from "./badge"

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
        boxShadow: `default`,
        backgroundColor: `elementBG`,
        px: 3,
        py: 2,
        mb: 3,
        borderRadius: `lg`,
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        alignItems: `center`,
        variant: `rows.specimens`,
      }}
    >
      <div data-name="color-row-color" sx={{ display: `flex`, alignItems: `center`, my: [3, 2] }}>
        <div
          aria-label={`Color preview: ${prefix}${name}`}
          sx={{
            backgroundColor: color,
            borderRadius: `full`,
            height: 12,
            width: 12,
            mr: 3,
            boxShadow: `0 10px 15px -3px rgba(${RGB}, 0.3), 0 4px 6px -2px rgba(${RGB}, 0.15)`,
          }}
        />
        <div sx={{ fontSize: 1, mr: 3 }}>{`${prefix}${name}`}</div>
      </div>
      <div
        data-name="color-row-values"
        sx={{
          display: `grid`,
          gridTemplateColumns: [`1fr`, `130px 160px 170px`],
          gridGap: 2,
          "span:last-of-type": { ml: 2 },
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
