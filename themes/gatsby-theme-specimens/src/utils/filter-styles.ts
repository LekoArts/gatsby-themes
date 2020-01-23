import { Theme } from "theme-ui"

type filterStylesType = {
  input: Theme["styles"]
  allowed: string[]
}

const filterStyles = ({ input, allowed }: filterStylesType) =>
  allowed.reduce((obj, key) => ({ ...obj, [key]: input[key] }), {})

export default filterStyles
