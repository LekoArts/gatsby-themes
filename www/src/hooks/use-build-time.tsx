import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    buildTime: string
  }
}

const useBuildTime = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        buildTime(formatString: "DD/MM/YYYY")
      }
    }
  `)

  return data.site.buildTime
}

export default useBuildTime
