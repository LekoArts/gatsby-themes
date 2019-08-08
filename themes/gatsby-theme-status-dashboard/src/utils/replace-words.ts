import defaultFormatters from "./formatters"

/**
 * Replace single words in a string with different ones. Helpful for GitHub URLs with old usernames
 * @param {string} input
 * @param {Array.<Object>} [formatters]
 * @return {string} Sanitized string
 */
const replaceWords = (input: string, formatters: { [key: string]: string }[] = defaultFormatters): string =>
  formatters.reduce((f, s) => `${f}`.replace(Object.keys(s)[0], s[Object.keys(s)[0]]), input)

export default replaceWords
