import { graphql, useStaticQuery } from "gatsby"

type Props = {
  allPage: {
    nodes: {
      title: string
      slug: string
    }[]
  }
}

const useNavigation = () => {
  const data = useStaticQuery<Props>(graphql`
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
