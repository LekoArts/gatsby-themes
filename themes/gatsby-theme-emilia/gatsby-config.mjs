import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function config(options) {
	return {
		plugins: [
			{
				resolve: `@lekoarts/gatsby-theme-emilia-core`,
				options,
			},
			{
				resolve: `gatsby-source-filesystem`,
				options: {
					name: `texts`,
					path: `${__dirname}/src/texts`,
				},
			},
			`gatsby-plugin-image`,
			`gatsby-plugin-theme-ui`,
		],
	}
}

export default config
