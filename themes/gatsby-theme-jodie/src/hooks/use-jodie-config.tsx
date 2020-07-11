import { graphql, useStaticQuery } from "gatsby"

type useJodieConfigProps = {
  jodieConfig: {
    navigation: {
      name: string
      slug: string
    }[]
  }
}

const useJodieConfig = () => {
  const data = useStaticQuery<useJodieConfigProps>(graphql`
    query {
      jodieConfig {
        navigation {
          name
          slug
        }
      }
    }
  `)

  return data.jodieConfig
}

export default useJodieConfig
