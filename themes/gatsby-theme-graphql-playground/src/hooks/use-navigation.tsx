import { graphql, useStaticQuery } from "gatsby"

type Props = {
  mdx: {
    body: string
  }
}

const useNavigation = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      mdx(fileAbsolutePath: { regex: "/navigation.mdx/" }) {
        body
      }
    }
  `)

  return data.mdx.body
}

export default useNavigation
