import { get } from "theme-ui"

const normalizeThemeUI = ({ colors, omit = [`modes`, `transparent`] }) => {
  const arr = []

  Object.entries(colors)
    .sort(([_, colorA]) => (typeof colorA === `string` ? -1 : 1))
    .forEach(([key, color]) => {
      if (!color || omit.includes(key)) return false

      arr.push({
        name: key,
        color: get(colors, key),
      })
    })

  return arr
}

export default normalizeThemeUI
