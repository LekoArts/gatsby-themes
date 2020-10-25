import { graphql, useStaticQuery } from "gatsby"

type useJodieConfigProps = {
  jodieConfig: {
    projectsPrefix: string
    basePath: string
    formatString: string
    navigation: {
      name: string
      slug: string
    }[]
    pagesPath: string
    projectsPath: string
    projectsUrl: string
  }
}

const useJodieConfig = () => {
  const data = useStaticQuery<useJodieConfigProps>(graphql`
    query {
      jodieConfig {
        projectsPrefix
        basePath
        formatString
        navigation {
          name
          slug
        }
        pagesPath
        projectsPath
        projectsUrl
      }
    }
  `)

  return data.jodieConfig
}

export default useJodieConfig
