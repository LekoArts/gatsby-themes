import { graphql, useStaticQuery } from "gatsby"

type UseNavigationProps = {
  allPage: {
    nodes: {
      title: string
      slug: string
    }[]
  }
}

const useNavigation = () => {
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
