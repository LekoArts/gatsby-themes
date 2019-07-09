const fs = require(`fs`)
const kebabCase = require(`lodash.kebabcase`)
const mkdirp = require(`mkdirp`)
const path = require(`path`)

const standardProjectsPath = `content/projects`
const standardPagesPath = `content/pages`
const standardBasePath = `/`

exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState()

  const projectsPath = themeOptions.projectsPath || standardProjectsPath
  const pagesPath = themeOptions.pagesPath || standardPagesPath

  const dirs = [path.join(program.directory, projectsPath), path.join(program.directory, pagesPath)]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Creating the "${dir}" directory`)
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

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions

  const typeDefs = [
    schema.buildObjectType({
      name: `Project`,
      fields: {
        slug: { type: `String!` },
        title: { type: `String!` },
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
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    }),
    schema.buildObjectType({
      name: `Page`,
      fields: {
        slug: { type: `String!` },
        title: { type: `String!` },
        cover: { type: `File!`, extensions: { fileByRelativePath: {} } },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    }),
  ]

  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const basePath = themeOptions.basePath || standardBasePath

  const slugify = str => {
    const slug = kebabCase(str)

    return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`)
  }

  createResolvers({
    Project: {
      slug: {
        resolve: source => slugify(source.title),
      },
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const projectsPath = themeOptions.projectsPath || standardProjectsPath
  const pagesPath = themeOptions.pagesPath || standardPagesPath

  if (node.internal.type !== `Mdx`) {
    return
  }

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

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Project`),
      parent: node.id,
      children: [],
      internal: {
        type: `Project`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Projects`,
      },
    })

    createParentChildLink({ parent: fileNode, child: node })
  }

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      cover: node.frontmatter.cover,
    }

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Page`),
      parent: node.id,
      children: [],
      internal: {
        type: `Page`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Pages`,
      },
    })

    createParentChildLink({ parent: fileNode, child: node })
  }
}

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/index.tsx`),
  })

  const result = await graphql(`
    query {
      allProject(sort: { fields: date, order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error loading your projects`, result.errors)
    return
  }

  const projects = result.data.allProject.nodes

  projects.forEach(project => {
    createPage({
      path: project.slug,
      component: require.resolve(`./src/templates/project.tsx`),
      context: {
        slug: project.slug,
      },
    })
  })
}
