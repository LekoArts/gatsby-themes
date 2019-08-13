import { meetsContrastGuidelines } from "polished"
import chroma from "chroma-js"
import RGBToCMYK from "../utils/rgb-to-cmyk"
import useSpecimensOptions from "./useSpecimensOptions"

const useColorUtils = color => {
  const specimensOptions = useSpecimensOptions()

  const white = meetsContrastGuidelines(color, `#fff`)
  const black = meetsContrastGuidelines(color, `#000`)

  let ratings = [{ color: `default`, size: 1, value: false }]

  if (specimensOptions.contrastGuidelines === `AAA`) {
    ratings = [
      { color: `white`, size: 1, value: white.AAA },
      { color: `white`, size: 2, value: white.AAALarge },
      { color: `black`, size: 1, value: black.AAA },
      { color: `black`, size: 2, value: black.AAALarge },
    ]
  } else {
    ratings = [
      { color: `white`, size: 1, value: white.AA },
      { color: `white`, size: 2, value: white.AALarge },
      { color: `black`, size: 1, value: black.AA },
      { color: `black`, size: 2, value: black.AALarge },
    ]
  }

  const hex = chroma(color).hex()
  const RGB = `${chroma(color).rgb()[0]}, ${chroma(color).rgb()[1]}, ${chroma(color).rgb()[2]}`
  const CMYK_O = RGBToCMYK(chroma(color).rgb()[0], chroma(color).rgb()[1], chroma(color).rgb()[2])
  const CMYK = `${CMYK_O.C}, ${CMYK_O.M}, ${CMYK_O.Y}, ${CMYK_O.K}`

  return {
    hex,
    RGB,
    CMYK,
    ratings,
  }
}

export default useColorUtils
