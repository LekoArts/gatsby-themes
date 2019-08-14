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
        variant: `rows.default`,
      }}
    >
      <div sx={{ display: `flex`, alignItems: `center`, my: 2 }}>
        <div sx={{ backgroundColor: color, borderRadius: `lg`, height: 12, width: 12, mr: 3 }} />
        <div sx={{ fontSize: 1 }}>{`${prefix}${name}`}</div>
      </div>
      <div sx={{ display: `grid`, gridTemplateColumns: [`1fr`, `repeat(3, 1fr)`], gridGap: 2 }}>
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
