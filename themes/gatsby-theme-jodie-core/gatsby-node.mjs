import { mdxResolverPassthrough, slugify } from "@lekoarts/themes-utils"
import { createRequire } from "module"
import { withDefaults } from "./utils/default-options.mjs"

const require = createRequire(import.meta.url)

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
export const createSchemaCustomization = ({ actions }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions

  const { basePath, projectsPrefix } = withDefaults(themeOptions)

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve(source) {
          return slugify(source, `${basePath}/${projectsPrefix}`)
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
        resolve(source, _args, _context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createTypes(`
    interface Project implements Node {
      id: ID!
      title: String!
      shortTitle: String!
      defer: Boolean @defaultFalse
      category: String!
      slug: String! @slugify
      date: Date! @dateformat
      color: String
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 160): String!
      contentFilePath: String!
    }

    type MdxProject implements Node & Project {
      title: String!
      shortTitle: String!
      category: String!
      defer: Boolean @defaultFalse
      slug: String! @slugify
      date: Date! @dateformat
      color: String
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      contentFilePath: String!
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      defer: Boolean @defaultFalse
      title: String!
      color: String
      custom: Boolean @defaultFalse
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 160): String!
      contentFilePath: String!
    }

    type MdxPage implements Node & Page {
      slug: String!
      title: String!
      color: String
      defer: Boolean @defaultFalse
      custom: Boolean @defaultFalse
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      contentFilePath: String!
    }

    type JodieConfig implements Node {
      navigation: [navigationEntry!]
    }

    type navigationEntry {
      name: String
      slug: String
    }
  `)
}

export const onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { projectsPath, pagesPath, basePath } = withDefaults(themeOptions)

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "projectsPath" and "pagesPath"
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  // Check for "projects" and create the "Project" type
  if (node.internal.type === `Mdx` && source === projectsPath) {
    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      shortTitle: node.frontmatter.shortTitle,
      cover: node.frontmatter.cover,
      date: node.frontmatter.date,
      category: node.frontmatter.category,
      color: node.frontmatter.color ? node.frontmatter.color : undefined,
      defer: node.frontmatter.defer,
      contentFilePath: fileNode.absolutePath,
    }

    const mdxProjectId = createNodeId(`${node.id} >>> MdxProject`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxProjectId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxProject`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Project interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxProjectId) })
  }

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: `/${basePath}/${node.frontmatter.slug}`.replace(/\/\/+/g, `/`),
      color: node.frontmatter.color ? node.frontmatter.color : undefined,
      custom: node.frontmatter.custom,
      cover: node.frontmatter.cover,
      defer: node.frontmatter.defer,
      contentFilePath: fileNode.absolutePath,
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

export const sourceNodes = ({ actions, createContentDigest }, themeOptions) => {
  const { createNode } = actions

  const { projectsPrefix, basePath, formatString, navigation, pagesPath, projectsPath, projectsUrl } =
    withDefaults(themeOptions)

  const jodieConfig = {
    projectsPrefix,
    basePath,
    formatString,
    navigation,
    pagesPath,
    projectsPath,
    projectsUrl,
  }

  createNode({
    ...jodieConfig,
    id: `@lekoarts/gatsby-theme-jodie-core-config`,
    parent: null,
    children: [],
    internal: {
      type: `JodieConfig`,
      contentDigest: createContentDigest(jodieConfig),
      content: JSON.stringify(jodieConfig),
      description: `Options for @lekoarts/gatsby-theme-jodie-core`,
    },
  })
}

// These template are only data-fetching wrappers that import components
const homepageTemplate = require.resolve(`./src/templates/homepage-query.tsx`)
const projectTemplate = require.resolve(`./src/templates/project-query.tsx`)
const projectsTemplate = require.resolve(`./src/templates/projects-query.tsx`)
const pageTemplate = require.resolve(`./src/templates/page-query.tsx`)

export const createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, projectsUrl, formatString, homepagePageLimit, homepageProjectLimit } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: homepageTemplate,
    context: {
      homepagePageLimit,
      homepageProjectLimit,
    },
  })

  createPage({
    path: `/${basePath}/${projectsUrl}`.replace(/\/\/+/g, `/`),
    component: projectsTemplate,
  })

  const result = await graphql(`
    {
      allProject(sort: { date: DESC }) {
        nodes {
          slug
          defer
          contentFilePath
          ... on MdxProject {
            parent {
              ... on Mdx {
                parent {
                  ... on File {
                    relativeDirectory
                  }
                }
              }
            }
          }
        }
      }
      allPage {
        nodes {
          slug
          defer
          contentFilePath
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your projects or pages`, result.errors)
    return
  }

  const projects = result.data.allProject.nodes

  if (projects.length > 0) {
    projects.forEach((project) => {
      createPage({
        path: project.slug,
        component: `${projectTemplate}?__contentFilePath=${project.contentFilePath}`,
        context: {
          slug: project.slug,
          formatString,
          relativeDirectory: project.parent.parent.relativeDirectory,
        },
        defer: project.defer,
      })
    })
  }

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
}
