import { createRequire } from "module"
import readingTime from "reading-time"
import { mdxResolverPassthrough, slugify, kebabCase } from "@lekoarts/themes-utils"
import { withDefaults } from "./utils/default-options.mjs"

const require = createRequire(import.meta.url)

const roundReadingTime = (minutesFloat) => (minutesFloat < 1 ? Math.ceil(minutesFloat) : Math.round(minutesFloat))

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
export const createSchemaCustomization = ({ actions }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions

  const { basePath, postsPrefix } = withDefaults(themeOptions)

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve(source) {
          return slugify(source, `${basePath}/${postsPrefix}`)
        },
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

  createFieldExtension({
    name: `defaultFalse`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createTypes(`
    interface Post implements Node {
      id: ID!
      slug: String! @slugify
      title: String!
      defer: Boolean @defaultFalse
      date: Date! @dateformat
      excerpt(pruneLength: Int = 160): String!
      contentFilePath: String!
      html: String
      timeToRead: Float
      wordCount: Int
      tags: [PostTag]
      banner: File @fileByRelativePath
      description: String
      canonicalUrl: String
    }

    type PostTag {
      name: String
      slug: String
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      defer: Boolean @defaultFalse
      title: String!
      excerpt(pruneLength: Int = 160): String!
      contentFilePath: String!
      timeToRead: Float
      wordCount: Int
    }

    type MdxPost implements Node & Post {
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      defer: Boolean @defaultFalse
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      contentFilePath: String!
      html: String! @mdxpassthrough(fieldName: "html")
      timeToRead: Float
      wordCount: Int
      tags: [PostTag]
      banner: File @fileByRelativePath
      description: String
      canonicalUrl: String
    }

    type MdxPage implements Node & Page {
      slug: String!
      title: String!
      defer: Boolean @defaultFalse
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      contentFilePath: String!
      timeToRead: Float
      wordCount: Int
    }

    type MinimalBlogConfig implements Node {
      basePath: String
      blogPath: String
      postsPath: String
      pagesPath: String
      postsPrefix: String
      tagsPath: String
      externalLinks: [ExternalLink]
      navigation: [NavigationEntry]
      showLineNumbers: Boolean
      showCopyButton: Boolean
    }

    type ExternalLink {
      name: String!
      url: String!
    }

    type NavigationEntry {
      title: String!
      slug: String!
    }
  `)
}

export const sourceNodes = ({ actions, createContentDigest }, themeOptions) => {
  const { createNode } = actions
  const {
    basePath,
    blogPath,
    postsPath,
    pagesPath,
    postsPrefix,
    tagsPath,
    externalLinks,
    navigation,
    showLineNumbers,
    showCopyButton,
  } = withDefaults(themeOptions)

  const minimalBlogConfig = {
    basePath,
    blogPath,
    postsPath,
    pagesPath,
    postsPrefix,
    tagsPath,
    externalLinks,
    navigation,
    showLineNumbers,
    showCopyButton,
  }

  createNode({
    ...minimalBlogConfig,
    id: `@lekoarts/gatsby-theme-minimal-blog-core-config`,
    parent: null,
    children: [],
    internal: {
      type: `MinimalBlogConfig`,
      contentDigest: createContentDigest(minimalBlogConfig),
      content: JSON.stringify(minimalBlogConfig),
      description: `Options for @lekoarts/gatsby-theme-minimal-blog-core`,
    },
  })
}

export const onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { postsPath, pagesPath, basePath } = withDefaults(themeOptions)

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  let readingTimeResult

  if (node.internal.type === `Mdx`) {
    readingTimeResult = readingTime(node.body)
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsPath" and "pagesPath"
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  // Check for "posts" and create the "Post" type
  if (node.internal.type === `Mdx` && source === postsPath) {
    let modifiedTags

    if (node.frontmatter.tags) {
      modifiedTags = node.frontmatter.tags.map((tag) => ({
        name: tag,
        slug: kebabCase(tag),
      }))
    } else {
      modifiedTags = null
    }

    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: modifiedTags,
      banner: node.frontmatter.banner,
      description: node.frontmatter.description,
      canonicalUrl: node.frontmatter.canonicalUrl,
      defer: node.frontmatter.defer,
      contentFilePath: fileNode.absolutePath,
      timeToRead: roundReadingTime(readingTimeResult.minutes),
      wordCount: readingTimeResult.words,
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
      slug: `/${basePath}/${node.frontmatter.slug}`.replace(/\/\/+/g, `/`),
      defer: node.frontmatter.defer,
      contentFilePath: fileNode.absolutePath,
      timeToRead: roundReadingTime(readingTimeResult.minutes),
      wordCount: readingTimeResult.words,
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

export const createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, blogPath, tagsPath, formatString } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: homepageTemplate,
    context: {
      formatString,
    },
  })

  createPage({
    path: `/${basePath}/${blogPath}`.replace(/\/\/+/g, `/`),
    component: blogTemplate,
    context: {
      formatString,
    },
  })

  createPage({
    path: `/${basePath}/${tagsPath}`.replace(/\/\/+/g, `/`),
    component: tagsTemplate,
  })

  const result = await graphql(`
    {
      allPost(sort: { date: DESC }) {
        nodes {
          slug
          defer
          contentFilePath
        }
      }
      allPage {
        nodes {
          slug
          defer
          contentFilePath
        }
      }
      tags: allPost(sort: { tags: { name: DESC } }) {
        group(field: { tags: { name: SELECT } }) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your posts or pages`, result.errors)
    return
  }

  const posts = result.data.allPost.nodes

  posts.forEach((post) => {
    createPage({
      path: post.slug,
      component: `${postTemplate}?__contentFilePath=${post.contentFilePath}`,
      context: {
        slug: post.slug,
        formatString,
      },
      defer: post.defer,
    })
  })

  const pages = result.data.allPage.nodes

  if (pages.length > 0) {
    pages.forEach((page) => {
      createPage({
        path: page.slug,
        component: `${pageTemplate}?__contentFilePath=${page.contentFilePath}`,
        context: {
          slug: page.slug,
        },
        defer: page.defer,
      })
    })
  }

  const tags = result.data.tags.group

  if (tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `/${basePath}/${tagsPath}/${kebabCase(tag.fieldValue)}`.replace(/\/\/+/g, `/`),
        component: tagTemplate,
        context: {
          slug: kebabCase(tag.fieldValue),
          name: tag.fieldValue,
          formatString,
        },
      })
    })
  }
}
