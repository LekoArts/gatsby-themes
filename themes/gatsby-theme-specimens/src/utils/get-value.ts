/**
 * Get value out of string (e.g. rem => px)
 * If value is px strip the px part
 * If the input is already a number only return that value
 * @param {string | number} input
 * @return {number} Number without last three characters
 * @example removeLastThree('6rem') => 6
 */
const getValue = (input: string | number) => {
  if (typeof input === `number`) {
    return input
  }

  const isPxValue = input.slice(-2) === `px`

  if (isPxValue) {
    return parseFloat(input.slice(0, -2))
  }

  return parseFloat(input.slice(0, -3))
}

export default getValue
