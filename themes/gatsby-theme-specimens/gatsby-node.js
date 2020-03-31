exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SpecimensConfig implements Node {
      contrastGuidelines: String
      CMYK: Boolean
      codeExample: Boolean
      rootFontSize: Int
    }
  `)
}

exports.sourceNodes = (
  { actions, createContentDigest },
  { contrastGuidelines = `AA`, CMYK = true, codeExample = true, rootFontSize = 16 }
) => {
  const { createNode } = actions

  const specimensConfig = {
    contrastGuidelines,
    CMYK,
    codeExample,
    rootFontSize,
  }

  createNode({
    ...specimensConfig,
    id: `@lekoarts/gatsby-theme-specimens-config`,
    parent: null,
    children: [],
    internal: {
      type: `SpecimensConfig`,
      contentDigest: createContentDigest(specimensConfig),
      content: JSON.stringify(specimensConfig),
      description: `Options for @lekoarts/gatsby-theme-specimens`,
    },
  })
}
