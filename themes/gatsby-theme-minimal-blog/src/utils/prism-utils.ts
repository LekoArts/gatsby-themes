// Modified from https://github.com/FormidableLabs/prism-react-renderer/pull/160/

import type { PrismTheme } from "prism-react-renderer"

type StyleObj = { [key: string]: string }

const flattenThemeTypes = (theme: PrismTheme): PrismTheme => {
  const { plain, styles } = theme

  return {
    plain: { ...plain },
    styles: styles.reduce((acc: PrismTheme["styles"], x) => {
      const { types, style, ...rest } = x
      const flatStyle = types.map((type) => ({
        types: [type],
        style: { ...style },
        ...rest,
      }))
      acc.push(...flatStyle)
      return acc
    }, []),
  }
}

/**
 * Returns a PrismTheme that is visually equivalent to `theme`
 * but with CSS Variables instead of fixed values (e.g.
 * `var(--plain-color)` instead of `"#F8F8F2"`).
 *
 * Also returns a mapping from CSS Variable to value (i.e. an
 * object with key `--plain-color` and value `"#F8F8F2"`)
 */
export const themeWithCssVariables = (theme: PrismTheme): { theme: PrismTheme; variables: StyleObj } => {
  const flatTheme = flattenThemeTypes(theme)
  const variables: StyleObj = {}

  const { plain, styles } = flatTheme

  Object.entries(plain).forEach(([key, value]) => {
    const varName = `--plain-${key}`
    variables[varName] = value as string
    // Will not modify `theme` because `flattenThemeTypes`
    // deep clones the original `theme` object
    plain[key] = `var(${varName})`
  })

  // `types` should have length 1
  styles.forEach(({ style, types }) => {
    Object.entries(style).forEach(([key, value]) => {
      const varName = `--${types[0]}-${key}`
      variables[varName] = value as string
      // Will not modify `theme` because `flattenThemeTypes`
      // deep clones the original `theme` object
      style[key] = `var(${varName})`
    })
  })

  return { theme: flatTheme, variables }
}
