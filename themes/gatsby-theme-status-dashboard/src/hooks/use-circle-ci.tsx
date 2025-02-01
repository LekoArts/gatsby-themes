import { graphql, useStaticQuery } from "gatsby"

interface UseCircleCIProps {
	me: {
		num_projects_followed: number
	}
	circleci: {
		nodes: {
			vcs_url: string
			reponame: string
			username: string
		}[]
	}
}

function useCircleCi() {
	const data = useStaticQuery<UseCircleCIProps>(graphql`
    query {
      me: circleCiMe {
        num_projects_followed
      }
      circleci: allCircleCiProjects {
        nodes {
          reponame
          username
          vcs_url
        }
      }
    }
  `)

	return {
		me: data.me,
		circleci: data.circleci.nodes,
	}
}

export default useCircleCi
