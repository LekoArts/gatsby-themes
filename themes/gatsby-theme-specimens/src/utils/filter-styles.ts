const filterStyles = ({ input, allowed }) => allowed.reduce((obj, key) => ({ ...obj, [key]: input[key] }), {})

export default filterStyles
