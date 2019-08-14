/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"
import useSpecimensConfig from "../hooks/useSpecimensConfig"

const swatchContentStyles = {
  flexBasis: `50%`,
  display: `flex`,
  flexDirection: `column`,
  mb: 3,
  fontSize: 1,
  mt: 1,
  alignItems: `flex-start`,
  span: {
    backgroundColor: `gray.3`,
    color: `gray.7`,
    letterSpacing: `wider`,
    fontSize: `0.65rem`,
    padding: `3px 6px`,
    borderRadius: `default`,
    mb: 2,
    textTransform: `uppercase`,
  },
}

type ColorSwatchProps = {
  color: string
  name?: string
  minimal?: boolean
  className?: string
}

const ColorSwatch = ({ color, name, minimal, className }: ColorSwatchProps) => {
  const { hex, RGB, CMYK, ratings } = useColorUtils(color)
  const specimensOptions = useSpecimensConfig()

  return (
    <div
      sx={{
        variant: `swatches.default`,
      }}
      className={className}
    >
      <div
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
              sx={{ textAlign: `center`, color: rating.color, fontSize: rating.size }}
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
                padding: `2px 5px`,
                mt: 1,
              }}
            >
              {rating.value ? `Pass` : `Fail`}
            </div>
          </div>
        ))}
      </div>
      <div sx={{ p: 3, pb: 1, display: `flex`, flexWrap: `wrap`, backgroundColor: `elementBG` }}>
        {name && (
          <div sx={{ ...swatchContentStyles }}>
            <span>Name</span>
            {name}
          </div>
        )}
        <div sx={{ ...swatchContentStyles }}>
          <span>Hex</span>
          {hex}
        </div>
        {!minimal && (
          <div sx={{ ...swatchContentStyles }}>
            <span>RGB</span>
            {RGB}
          </div>
        )}
        {!minimal && specimensOptions.CMYK && (
          <div sx={{ ...swatchContentStyles }}>
            <span>CMYK</span>
            {CMYK}
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorSwatch
