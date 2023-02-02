import { createRequire } from "module"

const require = createRequire(import.meta.url)
const styleGuideTemplate = require.resolve(`./src/template.tsx`)

export const createPages = ({ actions }, { basePath = `/style-guide` }) => {
  actions.createPage({
    path: basePath,
    component: styleGuideTemplate,
  })
}
