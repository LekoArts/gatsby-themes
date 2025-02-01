import { graphql, useStaticQuery } from "gatsby"

type ContrastTypes = `AA` | `AAA`

interface specimensOptionsType {
	specimensConfig: {
		contrastGuidelines: ContrastTypes
		CMYK: boolean
		codeExample: boolean
		rootFontSize: number
	}
}

function useSpecimensConfig() {
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
