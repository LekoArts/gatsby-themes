import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}

function defaultResolver(data: IGridItem[]): IGridItem[] {
  return data
}

function modifyGrid(data: IGridItem[], resolver = defaultResolver): IGridItem[] {
  return resolver(data)
}

/**
 * Examples:
 *
 * You can import the onlyPages() function to filter out everything but pages:
 *
 * const modifyGrid = data => onlyPages(data)
 *
 * You can also do more sophisticated filtering, like the filterBySlug() function that also takes in a second parameter (an array of slugs)
 * You'll need to pass the data in the second argument:
 *
 * const modifyGrid = (data) => filterBySlug(data, ["/about"])
 */

export default modifyGrid
