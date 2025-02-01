import { graphql, useStaticQuery } from "gatsby"

interface UseNavigationProps {
	allPage: {
		nodes: {
			title: string
			slug: string
		}[]
	}
}

function useNavigation() {
	const data = useStaticQuery<UseNavigationProps>(graphql`
    query {
      allPage {
        nodes {
          title
          slug
        }
      }
    }
  `)

	return data.allPage.nodes
}

export default useNavigation
