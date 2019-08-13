/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"

type ColorRowProps = {
  color: string
  name: string
  prefix?: string
}

const infoItemStyles = {
  "span:first-of-type": {
    backgroundColor: `gray.3`,
    color: `gray.7`,
    fontSize: `0.7rem`,
    padding: `3px 5px`,
    borderRadius: `default`,
    mr: 2,
  },
}

const ColorRow = ({ color, name, prefix = `` }: ColorRowProps) => {
  const { hex, RGB, CMYK, specimensOptions } = useColorUtils(color)

  return (
    <div
      sx={{
        boxShadow: `default`,
        backgroundColor: `gray.1`,
        p: 3,
        mb: 3,
        borderRadius: `lg`,
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        alignItems: `center`,
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
