const standardBasePath = `/`

exports.onPreBootstrap = ({ reporter }) => {
  if (!process.env.NETLIFY_ACCESS_KEY || !process.env.CIRCLECI_KEY) {
    reporter.panicOnBuild(`
      Please define both environment variables "NETLIFY_ACCESS_KEY" and "CIRCLECI_KEY".
      They are mandatory for the source plugin to work.
      
      Read the documentation on how to set environment variables locally or in your build tool:
      
      https://www.gatsbyjs.org/docs/environment-variables/
      
      If you're using Netlify to host your website you can also have a look at their documentation:
      
      https://www.netlify.com/docs/continuous-deployment/#environment-variables
    `)
  }
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
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    }),
    schema.buildObjectType({
      name: `Page`,
      fields: {
        slug: { type: `String` },
        title: { type: `String` },
        cover: { type: `File`, extensions: { fileByRelativePath: {} } },
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
    component: require.resolve(`./src/templates/projects.tsx`),
  })

  const result = await graphql(`
    query {
      allProject(sort: { fields: date, order: DESC }) {
        nodes {
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
      component: require.resolve(`./src/templates/project.tsx`),
      context: {
        slug: project.slug,
      },
    })
  })

  const pages = result.data.allPage.nodes

  if (pages.length > 0) {
    pages.forEach(page => {
      createPage({
        path: page.slug,
        component: require.resolve(`./src/templates/page.tsx`),
        context: {
          slug: page.slug,
        },
      })
    })
  }
}
