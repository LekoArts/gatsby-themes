const filterStyles = ({ input, allowed }) =>
  Object.keys(input)
    .filter(key => allowed.includes(key))
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: input[key],
      }),
      {}
    )

export default filterStyles
