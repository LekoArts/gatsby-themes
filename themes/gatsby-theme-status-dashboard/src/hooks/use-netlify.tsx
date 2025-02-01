import { graphql, useStaticQuery } from "gatsby"

interface UseNetlifyProps {
	sites: {
		totalCount: number
		nodes: {
			build_settings: {
				repo_url: string
			}
			name: string
			netlify_id: string
			url: string
		}[]
	}
}

function useNetlify() {
	const data = useStaticQuery<UseNetlifyProps>(graphql`
    {
      sites: allNetlifySites(filter: { build_settings: { public_repo: { eq: true } } }, sort: { name: ASC }) {
        totalCount
        nodes {
          build_settings {
            repo_url
          }
          name
          netlify_id
          url
        }
      }
    }
  `)

	return {
		count: data.sites.totalCount,
		netlify: data.sites.nodes,
	}
}

export default useNetlify
