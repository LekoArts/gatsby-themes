/* eslint-disable no-cond-assign */
const visit = require(`unist-util-visit`)

const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

/** @type {import('unified').Plugin<Array<void>, import('hast').Root>} */
function rehypeMetaAsAttributes() {
  return (tree) => {
    visit(tree, `element`, (node) => {
      let match

      if (node.tagName === `code` && node.data && node.data.meta) {
        re.lastIndex = 0 // Reset regex.

        while ((match = re.exec(node.data.meta))) {
          node.properties[match[1]] = match[2] || match[3] || match[4] || true
        }
      }
    })
  }
}

module.exports = rehypeMetaAsAttributes
