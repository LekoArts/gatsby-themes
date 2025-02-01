import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const standardBasePath = `/`

export async function createPages({ actions }, themeOptions) {
	const { createPage } = actions

	const basePath = themeOptions.basePath || standardBasePath

	createPage({
		path: basePath,
		component: require.resolve(`./src/templates/cara.tsx`),
	})
}
