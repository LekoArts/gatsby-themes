/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import Badge from "./badge"
import theme from "../theme"

const swatchContentStyles = {
  flexBasis: `50%`,
  display: `flex`,
  flexDirection: `column`,
  fontSize: theme.fontSizes[1],
  alignItems: `flex-start`,
  color: theme.colors.black,
  span: {
    mb: theme.space[2],
  },
}

type ColorSwatchProps = {
  color: string
  name?: string
  minimal?: boolean
  className?: string
  prefix?: string
}

const ColorSwatch = ({ color, name = ``, minimal = false, className = ``, prefix = `` }: ColorSwatchProps) => {
  const { hex, RGB, CMYK, ratings } = useColorUtils(color)
  const specimensOptions = useSpecimensConfig()

  return (
    <div
      sx={{
        display: `inline-block`,
        width: [`100%`, `265px`, `275px`],
        borderRadius: theme.radii.lg,
        overflow: `hidden`,
        boxShadow: theme.shadows.default,
        mr: theme.space[3],
        mb: theme.space[3],
        ...theme.swatches.specimens,
      }}
      className={className}
    >
      <div
        data-name="color-swatch-bg"
        sx={{
          backgroundColor: hex,
          boxShadow: hex === `#ffffff` ? `inset 0 0 0 1px #a0aec0` : `none`,
          borderTopLeftRadius: theme.radii.lg,
          borderTopRightRadius: theme.radii.lg,
          display: `flex`,
          height: `125px`,
          alignItems: `flex-end`,
          justifyContent: `center`,
          pb: theme.space[3],
          position: `relative`,
        }}
      >
        {ratings.map((rating) => (
          <div
            key={`${rating.color}-${rating.size}-${rating.value}`}
            sx={{ display: `flex`, flexDirection: `column`, margin: `0 3px`, width: `50px` }}
          >
            <div
              title={`${rating.title} (${rating.color}): ${rating.value ? `Pass` : `Fail`}`}
              aria-label={`${rating.title} (${rating.color}): ${rating.value ? `Pass` : `Fail`}`}
              sx={{
                textAlign: `center`,
                color: rating.color,
                fontSize: rating.size,
                fontWeight: theme.fontWeights.medium,
              }}
            >
              A
            </div>
            <div
              sx={{
                textAlign: `center`,
                background: theme.colors.black,
                color: theme.colors.white,
                borderRadius: theme.radii.default,
                fontSize: theme.fontSizes[0],
                py: theme.space[0],
                px: theme.space[2],
                mt: theme.space[1],
              }}
            >
              {rating.value ? `Pass` : `Fail`}
            </div>
          </div>
        ))}
      </div>
      <div
        data-name="color-swatch-content"
        sx={{
          p: theme.space[3],
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridGap: theme.space[3],
          backgroundColor: theme.colors.elementBG,
          height: `100%`,
          gridAutoRows: `min-content`,
        }}
      >
        {name && (
          <div sx={{ ...swatchContentStyles }}>
            <Badge>Name</Badge>
            {prefix}
            {name}
          </div>
        )}
        <div sx={{ ...swatchContentStyles }}>
          <Badge>Hex</Badge>
          {hex}
        </div>
        {!minimal && (
          <div sx={{ ...swatchContentStyles }}>
            <Badge>RGB</Badge>
            {RGB}
          </div>
        )}
        {!minimal && specimensOptions.CMYK && (
          <div sx={{ ...swatchContentStyles }}>
            <Badge>CMYK</Badge>
            {CMYK}
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorSwatch
