import { useStaticQuery, graphql } from "gatsby"

// TODO: https://github.com/typescript-eslint/typescript-eslint/pull/762 Change quotes setup so that type can also use double quotes
// eslint-disable-next-line
type ContrastTypes = 'AA' | 'AAA'

type specimensOptionsType = {
  specimensConfig: {
    contrastGuidelines: ContrastTypes
    CMYK: boolean
    codeExample: boolean
    rootFontSize: number
  }
}

const useSpecimensConfig = () => {
  const data = useStaticQuery<specimensOptionsType>(graphql`
    query {
      specimensConfig(id: { eq: "@lekoarts/gatsby-theme-specimens-config" }) {
        contrastGuidelines
        CMYK
        codeExample
        rootFontSize
      }
    }
  `)

  return data.specimensConfig
}

export default useSpecimensConfig
