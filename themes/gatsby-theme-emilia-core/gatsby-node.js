const kebabCase = require(`lodash.kebabcase`)
const path = require(`path`)
const withDefaults = require(`./utils/default-options`)

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

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions

  const { basePath } = withDefaults(themeOptions)

  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title)

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
    interface Project @nodeInterface {
      id: ID!
      title: String!
      slug: String! @slugify
      date: Date! @dateformat
      areas: [String!]!
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 160): String!
      body: String!
    }
    
    type MdxProject implements Node & Project {
      title: String!
      slug: String! @slugify
      date: Date! @dateformat
      areas: [String!]!
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
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

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
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

exports.sourceNodes = (
  { actions, createContentDigest },
  {
    name = `LekoArts`,
    location = `Germany`,
    socialMedia = [
      { title: `Twitter`, href: `https://twitter.com/lekoarts_de` },
      { title: `Instagram`, href: `https://www.instagram.com/lekoarts.de/` },
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

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, formatString } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: projectsTemplate,
  })

  const result = await graphql(`
    query {
      allProject(sort: { fields: date, order: DESC }) {
        nodes {
          slug
          ... on MdxProject {
            parent {
              ... on Mdx {
                fileAbsolutePath
              }
            }
          }
          title
          cover {
            childImageSharp {
              fluid(maxWidth: 770, quality: 90) {
                aspectRatio
                base64
                src
                srcSet
                srcSetWebp
                srcWebp
                sizes
              }
            }
          }
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
    const { fileAbsolutePath } = project.parent

    const next = index === 0 ? null : projects[index - 1]
    const prev = index === projects.length - 1 ? null : projects[index + 1]

    createPage({
      path: project.slug,
      component: projectTemplate,
      context: {
        slug: project.slug,
        absolutePathRegex: `/^${path.dirname(fileAbsolutePath)}/`,
        prev,
        next,
        formatString,
      },
    })
  })
}
