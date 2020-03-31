const styleGuideTemplate = require.resolve(`./src/template.tsx`)

exports.createPages = ({ actions }, { basePath = `/style-guide` }) => {
  actions.createPage({
    path: basePath,
    component: styleGuideTemplate,
  })
}
