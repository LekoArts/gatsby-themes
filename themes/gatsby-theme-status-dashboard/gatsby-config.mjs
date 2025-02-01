import "dotenv/config"

function config({ netlifyOptions = {} }) {
	return {
		plugins: [
			{
				resolve: `gatsby-source-netlify`,
				options: {
					apiKey: process.env.NETLIFY_ACCESS_KEY,
					opts: netlifyOptions,
				},
			},
			{
				resolve: `gatsby-source-circleci`,
				options: {
					apiKey: process.env.CIRCLECI_KEY,
				},
			},
			`gatsby-plugin-theme-ui`,
		],
	}
}

export default config
