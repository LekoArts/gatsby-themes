/** @jsx jsx */
import { jsx } from "theme-ui"
import useColorUtils from "../hooks/useColorUtils"

const swatchContentStyles = {
  flexBasis: `50%`,
  display: `flex`,
  flexDirection: `column`,
  mb: 3,
  fontSize: 1,
  mt: 1,
  span: {
    color: `gray.7`,
    letterSpacing: `wide`,
    fontWeight: `medium`,
    fontSize: `0.75rem`,
    mb: 2,
    textTransform: `uppercase`,
  },
}

type ColorSwatchProps = {
  color: string
  name?: string
  minimal?: boolean
}

const ColorSwatch = ({ color, name, minimal }: ColorSwatchProps) => {
  const { hex, RGB, CMYK, ratings, specimensOptions } = useColorUtils(color)

  return (
    <div
      sx={{
        variant: `swatches.default`,
      }}
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
            <div sx={{ textAlign: `center`, color: rating.color, fontSize: rating.size }}>A</div>
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
      <div sx={{ p: 3, display: `flex`, flexWrap: `wrap`, backgroundColor: `gray.1` }}>
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
