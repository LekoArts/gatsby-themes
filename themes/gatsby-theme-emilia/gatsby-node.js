const path = require(`path`)
const { urlResolve } = require(`gatsby-core-utils`)
const ColorThief = require(`colorthief`)

exports.onCreateNode = async ({ node, actions, reporter }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const pathToImage = urlResolve(path.dirname(node.fileAbsolutePath), node.frontmatter.cover)

    await ColorThief.getColor(pathToImage)
      .then((color) => {
        createNodeField({ node, name: `colorThief`, value: color })
      })
      .catch((err) => {
        reporter.error(err)
      })
  }
}
