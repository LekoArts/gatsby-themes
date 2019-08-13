import { get } from "@styled-system/css"

type normalizeProps = {
  colors: {
    [key: string]: string | (string | null)[] | any
  }
  omit?: string[]
}

const normalizeThemeUI = ({ colors, omit = [`modes`, `transparent`] }: normalizeProps) => {
  const arr: { name: string; color: string }[] = []

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
