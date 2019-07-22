import formatters from "./formatters"

function replaceWords(input: string): string {
  let modified: string

  formatters.forEach(pair => {
    modified = input.split(pair[0]).join(pair[1])
  })

  return modified
}

export default replaceWords
