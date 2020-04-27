import { graphql, useStaticQuery } from "gatsby"

type UseEmiliaConfigProps = {
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

const useEmiliaConfig = () => {
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
