import { graphql, useStaticQuery } from "gatsby"

type UseBuildTimeProps = {
  site: {
    buildTime: string
  }
}

const useBuildTime = () => {
  const data = useStaticQuery<UseBuildTimeProps>(graphql`
    query {
      site {
        buildTime(formatString: "DD/MM/YYYY")
      }
    }
  `)

  return data.site.buildTime
}

export default useBuildTime
