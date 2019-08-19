type filterStylesType = {
  input: {
    [key: string]: any
  }
  allowed: string[]
}

const filterStyles = ({ input, allowed }: filterStylesType) =>
  allowed.reduce((obj, key) => ({ ...obj, [key]: input[key] }), {})

export default filterStyles
