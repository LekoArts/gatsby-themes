const { createFilePath } = require(`gatsby-source-filesystem`)

const mdxResolverPassthrough = (fieldName) => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      }
    },
  })

  createTypes(`
    type Thought implements Node {
      slug: String!
      title: String!
      info: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
      html: String! @mdxpassthrough(fieldName: "html")
    }

    type GithubData implements Node {
      data: GithubDataData
    }

    type GithubDataData {
      repository: GithubDataDataRepository
    }

    type GithubDataDataRepository {
      stargazers: GithubDataDataRepositoryStargazers
    }

    type GithubDataDataRepositoryStargazers {
      totalCount: Int
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type !== `Mdx`) {
    return
  }

  const fileNode = getNode(node.parent)

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `thoughts`,
    })

    const fieldData = {
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      info: node.frontmatter.info,
      slug,
    }

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Thought`),
      parent: node.id,
      children: [],
      internal: {
        type: `Thought`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Thoughts Type`,
      },
    })

    createParentChildLink({ parent: fileNode, child: node })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allThought(sort: { fields: date, order: ASC }) {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error loading your newsletters`, result.errors)
    return
  }

  const thoughts = result.data.allThought.nodes

  thoughts.forEach((thought) => {
    createPage({
      path: thought.slug,
      component: require.resolve(`./src/templates/thought.tsx`),
      context: {
        slug: thought.slug,
      },
    })
  })
}
