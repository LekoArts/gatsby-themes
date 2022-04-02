import { describe, it, expect } from "vitest"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import modifyGrid, { IGridItem } from "../modify-grid"
import { onlyPages, onlyProjects } from "../resolver-templates"

const gatsbyImageData: IGatsbyImageData = {
  layout: `fullWidth`,
  width: 600,
  height: 600,
  images: {
    sources: [],
  },
  placeholder: {
    sources: [],
  },
}

const testImage = {
  childImageSharp: {
    gatsbyImageData,
  },
}

const data: IGridItem[] = [
  {
    slug: `/page-01`,
    title: `Page 01`,
    cover: testImage,
    __typename: `MdxPage`,
  },
  {
    slug: `/page-02`,
    title: `Page 02`,
    cover: testImage,
    __typename: `MdxPage`,
  },
  {
    slug: `/project-01`,
    title: `Project 01`,
    cover: testImage,
    __typename: `MdxProject`,
  },
]

describe(`modifyGrid`, () => {
  it(`should return original in default configuration`, () => {
    expect(modifyGrid(data)).toStrictEqual(data)
  })
  it(`should accept custom resolver`, () => {
    expect(modifyGrid(data, onlyPages)).toStrictEqual([
      {
        slug: `/page-01`,
        title: `Page 01`,
        cover: testImage,
        __typename: `MdxPage`,
      },
      {
        slug: `/page-02`,
        title: `Page 02`,
        cover: testImage,
        __typename: `MdxPage`,
      },
    ])
    expect(modifyGrid(data, onlyProjects)).toStrictEqual([
      {
        slug: `/project-01`,
        title: `Project 01`,
        cover: testImage,
        __typename: `MdxProject`,
      },
    ])
  })
})
