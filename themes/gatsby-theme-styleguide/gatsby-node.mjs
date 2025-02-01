import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const styleGuideTemplate = require.resolve(`./src/template.tsx`)

export function createPages({ actions }, { basePath = `/style-guide` }) {
	actions.createPage({
		path: basePath,
		component: styleGuideTemplate,
	})
}
