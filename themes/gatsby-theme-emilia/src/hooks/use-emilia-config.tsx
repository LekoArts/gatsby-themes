import { graphql, useStaticQuery } from "gatsby"

type Props = {
  emiliaConfig: {
    name: string
    location: string
    socialMedia: {
      href: string
      title: string
    }[]
  }
}

const useEmiliaConfig = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      emiliaConfig {
        name
        location
        socialMedia {
          href
          title
        }
      }
    }
  `)

  return data.emiliaConfig
}

export default useEmiliaConfig
