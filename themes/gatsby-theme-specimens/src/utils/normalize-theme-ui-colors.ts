import { get } from "@styled-system/css"
import { Theme } from "theme-ui"

interface NormalizeProps extends Theme {
  omit?: string[]
}

/**
 * Normalize a Theme UI theme file to use with "@lekoarts/gatsby-theme-specimens"
 * @param colors {Object}
 * @param omit {Array.<string>}
 */
const normalizeThemeUIColors = ({ colors, omit = [`modes`, `transparent`] }: NormalizeProps) => {
  const arr: { name: string; color: string }[] = []

  if (colors) {
    Object.entries(colors)
      .sort(([_, colorA]) => (typeof colorA === `string` ? -1 : 1))
      .forEach(([key, color]) => {
        if (!color || omit.includes(key)) return false

        arr.push({
          name: key,
          color: get(colors, key),
        })
      })
  }

  return arr
}

export default normalizeThemeUIColors
