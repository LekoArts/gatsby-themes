const { compileMDXWithCustomOptions } = require(`gatsby-plugin-mdx`)
const { mdxResolverPassthrough } = require(`@lekoarts/themes-utils`)
const withDefaults = require(`./utils/default-options`)
const { remarkGetPreviewQuery } = require(`./utils/remark-get-preview-query`)

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        async resolve(source, args, context, info) {
          const result = await mdxResolverPassthrough({ fieldName, source, args, context, info })
          return result
        },
      }
    },
  })

  createTypes(`
    interface Playground implements Node {
      id: ID!
      slug: String!
      excerpt(pruneLength: Int = 160): String!
      contentFilePath: String!
      query: String!
      title: String!
    }

    type MdxPlayground implements Node & Playground {
      slug: String!
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      contentFilePath: String!
      query: String!
      title: String!
    }
  `)
}

// Find the 'graphql' code tags and add an encoded string to the field 'query'
exports.createResolvers = ({ createResolvers, getNode, getNodesByType, reporter, cache, pathPrefix, store }) => {
  const resolvers = {
    MdxPlayground: {
      query: {
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent)

          if (!fileNode) {
            return null
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: fileNode.body,
              absolutePath: fileNode.absolutePath,
            },
            {
              pluginOptions: {},
              customOptions: {
                mdxOptions: {
                  remarkPlugins: [remarkGetPreviewQuery],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            }
          )

          if (!result) {
            return null
          }

          return encodeURI(result.metadata.previewQuery)
        },
      },
    },
  }

  createResolvers(resolvers)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { docsPath, basePath } = withDefaults(themeOptions)

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "docsPath"
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  // Check for "docs" and create the "MdxPlayground" type
  if (node.internal.type === `Mdx` && source === docsPath && fileNode.name !== `navigation`) {
    const fieldData = {
      slug: `/${basePath}/${fileNode.name}`.replace(/\/\/+/g, `/`),
      title: node.frontmatter.title,
      contentFilePath: fileNode.absolutePath,
    }

    const mdxID = createNodeId(`${node.id} >>> MdxPlayground`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxID,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPlayground`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Playground interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxID) })
  }
}

// These template are only data-fetching wrappers that import components
const itemTemplate = require.resolve(`./src/templates/item.tsx`)
const homepageTemplate = require.resolve(`./src/templates/homepage.tsx`)

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: homepageTemplate,
  })

  const result = await graphql(`
    query {
      allPlayground {
        nodes {
          slug
          contentFilePath
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your playground items`, result.errors)
    return
  }

  const items = result.data.allPlayground.nodes

  if (items.length > 0) {
    items.forEach((page) => {
      createPage({
        path: page.slug,
        component: `${itemTemplate}?__contentFilePath=${page.contentFilePath}`,
        context: {
          slug: page.slug,
        },
      })
    })
  }
}
