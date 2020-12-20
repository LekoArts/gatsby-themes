import { shuffle, filterBySlug } from "../resolver-templates"
import { IGridItem } from "../modify-grid"

const testString = `foobar`

const testImage = {
  childImageSharp: {
    fluid: {
      aspectRatio: 1.5,
      src: testString,
      srcSet: testString,
      sizes: testString,
      base64: testString,
      tracedSVG: testString,
      srcWebp: testString,
      srcSetWebp: testString,
    },
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
  test(`shuffle should reorder array`, () => {
    const shuffled = shuffle(data)
    expect(shuffled).not.toStrictEqual(data)
  })
  test(`shuffle should accept a custom seed`, () => {
    const shuffledDefault = shuffle(data)
    const shuffledCustom = shuffle(data, 3)
    expect(shuffledCustom).not.toStrictEqual(data)
    expect(shuffledDefault).not.toStrictEqual(shuffledCustom)
  })
  test(`filterBySlug works`, () => {
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
