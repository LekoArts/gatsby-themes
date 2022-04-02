import { describe, it, expect } from "vitest"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import { shuffle, filterBySlug } from "../resolver-templates"
import { IGridItem } from "../modify-grid"

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
    slug: `/page-03`,
    title: `Page 03`,
    cover: testImage,
    __typename: `MdxPage`,
  },
  {
    slug: `/page-04`,
    title: `Page 04`,
    cover: testImage,
    __typename: `MdxPage`,
  },
  {
    slug: `/project-01`,
    title: `Project 01`,
    cover: testImage,
    __typename: `MdxProject`,
  },
  {
    slug: `/project-02`,
    title: `Project 02`,
    cover: testImage,
    __typename: `MdxProject`,
  },
  {
    slug: `/project-03`,
    title: `Project 03`,
    cover: testImage,
    __typename: `MdxProject`,
  },
  {
    slug: `/project-04`,
    title: `Project 04`,
    cover: testImage,
    __typename: `MdxProject`,
  },
]

describe(`resolver-templates`, () => {
  it(`shuffle should reorder array`, () => {
    const shuffled = shuffle(data)
    expect(shuffled).not.toStrictEqual(data)
  })
  it(`shuffle should accept a custom seed`, () => {
    const shuffledDefault = shuffle(data)
    const shuffledCustom = shuffle(data, 3)
    expect(shuffledCustom).not.toStrictEqual(data)
    expect(shuffledDefault).not.toStrictEqual(shuffledCustom)
  })
  it(`filterBySlug works`, () => {
    expect(filterBySlug(data, [`/page-01`])).toStrictEqual([
      {
        slug: `/page-01`,
        title: `Page 01`,
        cover: testImage,
        __typename: `MdxPage`,
      },
    ])
  })
})
