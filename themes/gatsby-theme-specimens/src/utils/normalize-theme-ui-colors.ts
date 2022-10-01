import { get } from "@styled-system/css"
import type { Theme } from "theme-ui"

interface INormalizeProps extends Theme {
  omit?: string[]
}

export interface INormalizeResult {
  name: string
  color: string | Array<string>
}

/**
 * Normalize a Theme UI theme file to use with "@lekoarts/gatsby-theme-specimens"
 * @param colors {Object}
 * @param omit {Array.<string>}
 */
const normalizeThemeUIColors = ({ colors, omit = [`modes`, `transparent`] }: INormalizeProps) => {
  const arr: INormalizeResult[] = []

  if (colors) {
    Object.entries(colors).forEach(([key, color]) => {
      if (!color || omit.includes(key)) return false

      arr.push({
        name: key,
        color: get(colors, key),
      })
    })
  }

  return arr.sort((a, b) => {
    if (typeof a.color === `string` && typeof b.color !== `string`) {
      return -1
    }
    if (typeof a.color !== `string` && typeof b.color === `string`) {
      return 1
    }
    return 0
  })
}

export default normalizeThemeUIColors
