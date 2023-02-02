import { createRequire } from "module"

const require = createRequire(import.meta.url)
const standardBasePath = `/`

export const createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/cara.tsx`),
  })
}
