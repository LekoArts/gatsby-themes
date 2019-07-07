const fs = require(`fs`)
const kebabCase = require(`lodash.kebabcase`)

const projectsPath = `projects`

exports.onPreBootstrap = ({ reporter }) => {
  if (!fs.existsSync(projectsPath)) {
    reporter.info(`creating the "${projectsPath}" directory`)
    fs.mkdirSync(projectsPath)
  }
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Project implements Node @dontInfer {
      slug: String!
      title: String!
      client: String!
      service: String!
      color: String!
      date: Date! @dateformat
      cover: File! @fileByRelativePath
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  const basePath = `/`

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

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type !== `Mdx`) {
    return
  }

  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

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
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

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
