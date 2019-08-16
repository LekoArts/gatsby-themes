/**
 * Remove last three characters of a string and convert that string to a number.
 * If the input is already a number only return that value
 * @param {string | number} input
 * @return {number} Number without last three characters
 * @example removeLastThree('6rem') => 6
 */
const removeLastThree = (input: string | number) => {
  if (typeof input === `number`) {
    return input
  }

  return parseFloat(input.slice(0, -3))
}

export default removeLastThree
