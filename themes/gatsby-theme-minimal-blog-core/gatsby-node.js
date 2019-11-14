const fs = require(`fs`)
const kebabCase = require(`lodash.kebabcase`)
const mkdirp = require(`mkdirp`)
const path = require(`path`)
const withDefaults = require(`./utils/default-options`)

// Ensure that content directories exist at site-level
// If non-existent they'll be created here (as empty folders)
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState()

  const { postsPath, pagesPath } = withDefaults(themeOptions)

  const dirs = [path.join(program.directory, postsPath), path.join(program.directory, pagesPath)]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Initializing "${dir}" directory`)
      mkdirp.sync(dir)
    }
  })
}

const mdxResolverPassthrough = fieldName => async (source, args, context, info) => {
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

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions

  const { basePath } = withDefaults(themeOptions)

  const slugify = source => {
    const slug = kebabCase(source.title)

    return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`)
  }

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: slugify,
      }
    },
  })

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
    interface Post @nodeInterface {
      id: ID!
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 160): String!
      body: String!
      tags: [PostTag]
      banner: File @fileByRelativePath
      description: String
    }
    
    type PostTag {
      name: String
      slug: String
    }
    
    interface Page @nodeInterface {
      id: ID!
      slug: String!
      title: String!
      excerpt(pruneLength: Int = 160): String!
      body: String!
    }
    
    type MdxPost implements Node & Post {
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
      tags: [PostTag]
      banner: File @fileByRelativePath
      description: String
    }
    
    type MdxPage implements Node & Page {
      slug: String!
      title: String!
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { postsPath, pagesPath } = withDefaults(themeOptions)

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsPath" and "pagesPath"
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  // Check for "projects" and create the "Project" type
  if (node.internal.type === `Mdx` && source === postsPath) {
    let modifiedTags

    if (node.frontmatter.tags) {
      modifiedTags = node.frontmatter.tags.map(tag => ({
        name: tag,
        slug: kebabCase(tag),
      }))
    } else {
      modifiedTags = null
    }

    const fieldData = {
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: modifiedTags,
      banner: node.frontmatter.banner,
    }

    const mdxPostId = createNodeId(`${node.id} >>> MdxPost`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Post interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxPostId) })
  }

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
    }

    const mdxPageId = createNodeId(`${node.id} >>> MdxPage`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPageId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Page interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxPageId) })
  }
}

// These template are only data-fetching wrappers that import components
const homepageTemplate = require.resolve(`./src/templates/homepage-query.tsx`)
const blogTemplate = require.resolve(`./src/templates/blog-query.tsx`)
const postTemplate = require.resolve(`./src/templates/post-query.tsx`)
const pageTemplate = require.resolve(`./src/templates/page-query.tsx`)
const tagTemplate = require.resolve(`./src/templates/tag-query.tsx`)
const tagsTemplate = require.resolve(`./src/templates/tags-query.tsx`)

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, blogPath, tagsPath } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: homepageTemplate,
  })

  createPage({
    path: `/${basePath}/${blogPath}`.replace(/\/\/+/g, `/`),
    component: blogTemplate,
  })

  createPage({
    path: `/${basePath}/${tagsPath}`.replace(/\/\/+/g, `/`),
    component: tagsTemplate,
  })

  const result = await graphql(`
    query {
      allPost(sort: { fields: date, order: DESC }) {
        nodes {
          slug
        }
      }
      allPage {
        nodes {
          slug
        }
      }
      tags: allPost(sort: { fields: tags___slug, order: DESC }) {
        group(field: tags___slug) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error loading your posts or pages`, result.errors)
    return
  }

  const posts = result.data.allPost.nodes

  posts.forEach(post => {
    createPage({
      path: post.slug,
      component: postTemplate,
      context: {
        slug: post.slug,
      },
    })
  })

  const pages = result.data.allPage.nodes

  if (pages.length > 0) {
    pages.forEach(page => {
      createPage({
        path: page.slug,
        component: pageTemplate,
        context: {
          slug: page.slug,
        },
      })
    })
  }

  const tags = result.data.tags.group

  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/${tagsPath}/${tag.fieldValue}`.replace(/\/\/+/g, `/`),
        component: tagTemplate,
        context: {
          slug: tag.fieldValue,
        },
      })
    })
  }
}
