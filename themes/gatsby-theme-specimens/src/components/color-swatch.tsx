/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import Badge from "./badge"

const swatchContentStyles = {
  flexBasis: `50%`,
  display: `flex`,
  flexDirection: `column`,
  fontSize: 1,
  alignItems: `flex-start`,
  span: {
    mb: 2,
  },
}

type ColorSwatchProps = {
  color: string
  name?: string
  minimal?: boolean
  className?: string
  prefix?: string
}

const ColorSwatch = ({ color, name, minimal, className, prefix }: ColorSwatchProps) => {
  const { hex, RGB, CMYK, ratings } = useColorUtils(color)
  const specimensOptions = useSpecimensConfig()

  return (
    <div
      sx={{
        display: `inline-block`,
        width: [`100%`, `265px`, `275px`],
        borderRadius: `lg`,
        overflow: `hidden`,
        boxShadow: `default`,
        mr: 3,
        mb: 3,
        variant: `swatches.specimens`,
      }}
      className={className}
    >
      <div
        data-name="color-swatch-bg"
        sx={{
          backgroundColor: hex,
          boxShadow: hex === `#ffffff` ? `inset 0 0 0 1px #a0aec0` : `none`,
          borderTopLeftRadius: `lg`,
          borderTopRightRadius: `lg`,
          display: `flex`,
          height: `125px`,
          alignItems: `flex-end`,
          justifyContent: `center`,
          pb: 3,
          position: `relative`,
        }}
      >
        {ratings.map(rating => (
          <div
            key={`${rating.color}-${rating.size}-${rating.value}`}
            sx={{ display: `flex`, flexDirection: `column`, margin: `0 3px`, width: `50px` }}
          >
            <div
              title={`${rating.title} (${rating.color}): ${rating.value ? `Pass` : `Fail`}`}
              aria-label={`${rating.title} (${rating.color}): ${rating.value ? `Pass` : `Fail`}`}
              sx={{ textAlign: `center`, color: rating.color, fontSize: rating.size, fontWeight: `medium` }}
            >
              A
            </div>
            <div
              sx={{
                textAlign: `center`,
                background: `black`,
                color: `white`,
                borderRadius: `default`,
                fontSize: 0,
                py: 0,
                px: 2,
                mt: 1,
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
          p: 3,
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridGap: 3,
          backgroundColor: `elementBG`,
          height: `100%`,
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
