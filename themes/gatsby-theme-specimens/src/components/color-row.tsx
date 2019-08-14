/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"
import useSpecimensConfig from "../hooks/useSpecimensConfig"

type ColorRowProps = {
  color: string
  name: string
  prefix?: string
}

const infoItemStyles = {
  "span:first-of-type": {
    backgroundColor: `gray.3`,
    color: `gray.7`,
    fontSize: `0.65rem`,
    padding: `3px 6px`,
    borderRadius: `default`,
    letterSpacing: `wider`,
    mr: 2,
  },
}

const ColorRow = ({ color, name, prefix = `` }: ColorRowProps) => {
  const { hex, RGB, CMYK } = useColorUtils(color)
  const specimensOptions = useSpecimensConfig()

  return (
    <div
      sx={{
        boxShadow: `default`,
        backgroundColor: `elementBG`,
        p: 3,
        mb: 3,
        borderRadius: `lg`,
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        alignItems: `center`,
        variant: `rows.default`,
      }}
    >
      <div data-name="color-row-color" sx={{ display: `flex`, alignItems: `center`, my: 2 }}>
        <div
          sx={{
            backgroundColor: color,
            borderRadius: `full`,
            height: 12,
            width: 12,
            mr: 3,
            boxShadow: `0 10px 15px -3px rgba(${RGB}, 0.3), 0 4px 6px -2px rgba(${RGB}, 0.15)`,
          }}
        />
        <div sx={{ fontSize: 1 }}>{`${prefix}${name}`}</div>
      </div>
      <div
        data-name="color-row-values"
        sx={{ display: `grid`, gridTemplateColumns: [`1fr`, `repeat(3, 1fr)`], gridGap: 2 }}
      >
        <div sx={{ ...infoItemStyles }}>
          <span>HEX</span>
          <span>{hex}</span>
        </div>
        <div sx={{ ...infoItemStyles }}>
          <span>RGB</span>
          <span>{RGB}</span>
        </div>
        {specimensOptions.CMYK && (
          <div sx={{ ...infoItemStyles }}>
            <span>CMYK</span>
            <span>{CMYK}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorRow
