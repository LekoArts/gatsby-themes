/* eslint-disable no-cond-assign */
import { visit } from "unist-util-visit"
import type { Plugin, Transformer } from "unified"

const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

const transformer: Transformer = (ast) => {
  visit(ast, `element`, (node: any) => {
    let match

    if (node.tagName === `code` && node.data && node.data.meta) {
      re.lastIndex = 0 // Reset regex.

      while ((match = re.exec(node.data.meta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || true
      }
    }
  })
}

const rehypeMetaAsAttributes: Plugin = () => transformer

export default rehypeMetaAsAttributes
