import { graphql, useStaticQuery } from "gatsby"

interface UseEmiliaConfigProps {
	emiliaConfig: {
		name: string
		location: string
		socialMedia: {
			href: string
			title: string
		}[]
		showThemeAuthor: boolean
		assetsPath: string
	}
}

function useEmiliaConfig() {
	const data = useStaticQuery<UseEmiliaConfigProps>(graphql`
    query {
      emiliaConfig {
        name
        location
        socialMedia {
          href
          title
        }
        showThemeAuthor
        assetsPath
      }
    }
  `)

	return data.emiliaConfig
}

export default useEmiliaConfig
