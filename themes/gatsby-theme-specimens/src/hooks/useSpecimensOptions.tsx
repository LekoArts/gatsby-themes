import { useStaticQuery, graphql } from "gatsby"

// TODO: https://github.com/typescript-eslint/typescript-eslint/pull/762 Change quotes setup so that type can also use double quotes
// eslint-disable-next-line
type ContrastTypes = 'AA' | 'AAA'

type specimensOptionsType = {
  site: {
    siteMetadata: {
      specimensOptions: {
        contrastGuidelines: ContrastTypes
      }
    }
  }
}

const useSpecimensOptions = () => {
  const data = useStaticQuery<specimensOptionsType>(graphql`
    query {
      site {
        siteMetadata {
          specimensOptions {
            contrastGuidelines
            CMYK
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.specimensOptions
}

export default useSpecimensOptions
