const fs = require(`fs`)
const kebabCase = require(`lodash.kebabcase`)
const mkdirp = require(`mkdirp`)
const path = require(`path`)
const withDefaults = require(`./utils/default-options`)

// Ensure that content directories exist at site-level
// If non-existent they'll be created here (as empty folders)
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState()

  const { projectsPath, pagesPath } = withDefaults(themeOptions)

  const dirs = [path.join(program.directory, projectsPath), path.join(program.directory, pagesPath)]

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
  const { createTypes } = actions

  const { basePath } = withDefaults(themeOptions)

  createTypes(`
    interface Project @nodeInterface {
      id: ID!
      slug: String!
      title: String!
      client: String!
      service: String!
      color: String!
      date: Date! @dateformat
      cover: File! @fileByRelativePath
      excerpt: String!
      body: String!
    }
    
    interface Page @nodeInterface {
      id: ID!
      slug: String!
      title: String!
      cover: File! @fileByRelativePath
      excerpt: String!
      body: String!
    }
  `)

  const slugify = source => {
    const slug = kebabCase(source.title)

    return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`)
  }

  const typeDefs = [
    schema.buildObjectType({
      name: `MdxProject`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!`, resolve: slugify },
        client: { type: `String!` },
        service: { type: `String!` },
        color: { type: `String!` },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        cover: { type: `File!`, extensions: { fileByRelativePath: {} } },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 160,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `Project`],
    }),
    schema.buildObjectType({
      name: `MdxPage`,
      fields: {
        id: { type: `ID!` },
        slug: { type: `String!` },
        title: { type: `String!` },
        cover: { type: `File!`, extensions: { fileByRelativePath: {} } },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 160,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `Page`],
    }),
  ]

  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { projectsPath, pagesPath } = withDefaults(themeOptions)

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
      title: node.frontmatter.title,
      client: node.frontmatter.client,
      cover: node.frontmatter.cover,
      date: node.frontmatter.date,
      service: node.frontmatter.service,
      color: node.frontmatter.color,
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
      slug: node.frontmatter.slug,
      cover: node.frontmatter.cover,
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
const projectsTemplate = require.resolve(`./src/templates/projects-query.tsx`)
const projectTemplate = require.resolve(`./src/templates/project-query.tsx`)
const pageTemplate = require.resolve(`./src/templates/page-query.tsx`)

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: projectsTemplate,
  })

  const result = await graphql(`
    query {
      allProject(sort: { fields: date, order: DESC }) {
        nodes {
          id
          slug
        }
      }
      allPage {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error loading your projects or pages`, result.errors)
    return
  }

  const projects = result.data.allProject.nodes

  projects.forEach(project => {
    createPage({
      path: project.slug,
      component: projectTemplate,
      context: {
        id: project.id,
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
}
