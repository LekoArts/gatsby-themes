const styleGuideTemplate = require.resolve(`./src/template.tsx`)

module.exports = ({ actions }, opts = {}) => {
  const { basePath = `/style-guide` } = opts

  actions.createPage({
    path: basePath,
    component: styleGuideTemplate,
  })
}
