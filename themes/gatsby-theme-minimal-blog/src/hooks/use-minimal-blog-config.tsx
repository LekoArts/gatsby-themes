import { graphql, useStaticQuery } from "gatsby"

interface UseMinimalBlogConfigProps {
	minimalBlogConfig: {
		basePath: string
		blogPath: string
		postsPath: string
		pagesPath: string
		tagsPath: string
		externalLinks: {
			name: string
			url: string
		}[]
		navigation: {
			title: string
			slug: string
		}[]
		showLineNumbers: boolean
		showCopyButton: boolean
	}
}

function useMinimalBlogConfig() {
	const data = useStaticQuery<UseMinimalBlogConfigProps>(graphql`
    query {
      minimalBlogConfig {
        basePath
        blogPath
        postsPath
        pagesPath
        tagsPath
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
        showLineNumbers
        showCopyButton
      }
    }
  `)

	return data.minimalBlogConfig
}

export default useMinimalBlogConfig
