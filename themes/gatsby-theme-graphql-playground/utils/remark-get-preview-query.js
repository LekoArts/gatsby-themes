const visit = require(`unist-util-visit`)

/** @type {import('unified').Plugin<Array<void>, import('hast').Root>} */
exports.remarkGetPreviewQuery = function remarkGetPreviewQuery() {
  return async function transformer(tree, file) {
    let query = ``

    visit(tree, `code`, (node) => {
      if (node.lang === `graphql` && node.meta === `preview`) {
        query = node.value
      }
    })

    const mdxFile = file
    if (!mdxFile.data.meta) {
      mdxFile.data.meta = {}
    }

    mdxFile.data.meta.previewQuery = query
  }
}
