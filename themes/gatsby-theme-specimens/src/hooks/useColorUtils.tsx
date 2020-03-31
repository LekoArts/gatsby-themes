import { meetsContrastGuidelines } from "polished"
import chroma from "chroma-js"
import RGBToCMYK from "../utils/rgb-to-cmyk"
import useSpecimensConfig from "./useSpecimensConfig"

const useColorUtils = (color: string) => {
  const specimensOptions = useSpecimensConfig()

  let white
  let black
  let hex
  let RGB
  let CMYK

  // @ts-ignore
  if (chroma.valid(color)) {
    hex = chroma(color).hex()
    RGB = `${chroma(color).rgb()[0]}, ${chroma(color).rgb()[1]}, ${chroma(color).rgb()[2]}`
    const CMYK_O = RGBToCMYK(chroma(color).rgb()[0], chroma(color).rgb()[1], chroma(color).rgb()[2])
    CMYK = `${CMYK_O!.C}, ${CMYK_O!.M}, ${CMYK_O!.Y}, ${CMYK_O!.K}`
    white = meetsContrastGuidelines(color, `#fff`)
    black = meetsContrastGuidelines(color, `#000`)
  } else {
    hex = `unknown`
    RGB = `unknown`
    CMYK = `unknown`
    white = { AAA: false, AAALarge: false, AA: false, AALarge: false }
    black = { AAA: false, AAALarge: false, AA: false, AALarge: false }
  }

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

  return {
    hex,
    RGB,
    CMYK,
    ratings,
  }
}

export default useColorUtils
