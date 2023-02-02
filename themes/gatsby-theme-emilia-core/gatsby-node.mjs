import { mdxResolverPassthrough, slugify } from "@lekoarts/themes-utils"
import path from "path"
import { createRequire } from "module"
import { withDefaults } from "./utils/default-options.mjs"

const require = createRequire(import.meta.url)

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
export const createSchemaCustomization = ({ actions }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions

  const { basePath } = withDefaults(themeOptions)

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve(source) {
          return slugify(source, basePath)
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
      slug: String! @slugify
      defer: Boolean @defaultFalse
      date: Date! @dateformat
      areas: [String!]!
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 160): String!
      contentFilePath: String!
    }

    type MdxProject implements Node & Project {
      title: String!
      slug: String! @slugify
      defer: Boolean @defaultFalse
      date: Date! @dateformat
      areas: [String!]!
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      contentFilePath: String!
    }

    type EmiliaConfig implements Node {
      name: String
      location: String
      socialMedia: [socialMediaEntry!]
    }

    type socialMediaEntry {
      title: String
      href: String
    }
  `)
}

export const onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { projectsPath } = withDefaults(themeOptions)

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
      cover: node.frontmatter.cover,
      date: node.frontmatter.date,
      areas: node.frontmatter.areas,
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
}

export const sourceNodes = (
  { actions, createContentDigest },
  {
    name = `LekoArts`,
    location = `Germany`,
    socialMedia = [
      { title: `Twitter`, href: `https://twitter.com/lekoarts_de` },
      { title: `Homepage`, href: `https://www.lekoarts.de?utm_source=emilia&utm_medium=Theme` },
    ],
    showThemeAuthor = true,
    assetsPath = `content/assets`,
  }
) => {
  const { createNode } = actions

  const emiliaConfig = {
    name,
    location,
    socialMedia,
    showThemeAuthor,
    assetsPath,
  }

  createNode({
    ...emiliaConfig,
    id: `@lekoarts/gatsby-theme-emilia-core-config`,
    parent: null,
    children: [],
    internal: {
      type: `EmiliaConfig`,
      contentDigest: createContentDigest(emiliaConfig),
      content: JSON.stringify(emiliaConfig),
      description: `Options for @lekoarts/gatsby-theme-emilia-core`,
    },
  })
}

// These template are only data-fetching wrappers that import components
const projectsTemplate = require.resolve(`./src/templates/projects-query.tsx`)
const projectTemplate = require.resolve(`./src/templates/project-query.tsx`)

export const createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, formatString } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: projectsTemplate,
  })

  const result = await graphql(`
    {
      allProject(sort: { date: DESC }) {
        nodes {
          slug
          contentFilePath
          title
          cover {
            childImageSharp {
              gatsbyImageData(width: 770, quality: 90, aspectRatio: 1.777778)
            }
          }
          defer
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your projects or pages`, result.errors)
    return
  }

  const projects = result.data.allProject.nodes

  projects.forEach((project, index) => {
    const next = index === 0 ? null : projects[index - 1]
    const prev = index === projects.length - 1 ? null : projects[index + 1]

    createPage({
      path: project.slug,
      component: `${projectTemplate}?__contentFilePath=${project.contentFilePath}`,
      context: {
        slug: project.slug,
        absolutePathRegex: `/^${path.dirname(project.contentFilePath)}/`,
        prev,
        next,
        formatString,
      },
      defer: project.defer,
    })
  })
}
