import type { IGatsbyImageData } from "gatsby-plugin-image"

interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}

const modifyGrid = (data: Array<IGridItem>): Array<IGridItem> => data

export default modifyGrid
