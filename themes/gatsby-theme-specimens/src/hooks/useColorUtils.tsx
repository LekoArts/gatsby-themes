import { meetsContrastGuidelines } from "polished"
import chroma from "chroma-js"
import RGBToCMYK from "../utils/rgb-to-cmyk"
import useSpecimensConfig from "./useSpecimensConfig"

const useColorUtils = (color: string) => {
  const specimensOptions = useSpecimensConfig()

  const white = meetsContrastGuidelines(color, `#fff`)
  const black = meetsContrastGuidelines(color, `#000`)

  let ratings: { color: string; size: number; value: boolean; title: string }[] = []

  if (specimensOptions.contrastGuidelines === `AAA`) {
    ratings = [
      { color: `white`, size: 1, value: white.AAA, title: `AAA` },
      { color: `white`, size: 2, value: white.AAALarge, title: `AAA Large` },
      { color: `black`, size: 1, value: black.AAA, title: `AAA` },
      { color: `black`, size: 2, value: black.AAALarge, title: `AAA Large` },
    ]
  } else {
    ratings = [
      { color: `white`, size: 1, value: white.AA, title: `AA` },
      { color: `white`, size: 2, value: white.AALarge, title: `AA Large` },
      { color: `black`, size: 1, value: black.AA, title: `AA` },
      { color: `black`, size: 2, value: black.AALarge, title: `AA Large` },
    ]
  }

  const hex = chroma(color).hex()
  const RGB = `${chroma(color).rgb()[0]}, ${chroma(color).rgb()[1]}, ${chroma(color).rgb()[2]}`
  const CMYK_O = RGBToCMYK(chroma(color).rgb()[0], chroma(color).rgb()[1], chroma(color).rgb()[2])
  const CMYK = `${CMYK_O!.C}, ${CMYK_O!.M}, ${CMYK_O!.Y}, ${CMYK_O!.K}`

  return {
    hex,
    RGB,
    CMYK,
    ratings,
  }
}

export default useColorUtils
