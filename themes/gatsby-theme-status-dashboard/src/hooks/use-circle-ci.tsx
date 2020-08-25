/* eslint-disable camelcase */
import { graphql, useStaticQuery } from "gatsby"

type UseCircleCIProps = {
  me: {
    num_projects_followed: number
  }
  circleci: {
    nodes: {
      vcs_url: string
    }[]
  }
}

const useCircleCi = () => {
  const data = useStaticQuery<UseCircleCIProps>(graphql`
    query {
      me: circleCiMe {
        num_projects_followed
      }
      circleci: allCircleCiProjects {
        nodes {
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
