import modifyGrid, { IGridItem } from "../modify-grid"
import { onlyPages, onlyProjects } from "../resolver-templates"

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
    slug: `/project-01`,
    title: `Project 01`,
    cover: testImage,
    __typename: `MdxProject`,
  },
]

describe(`modifyGrid`, () => {
  test(`should return original in default configuration`, () => {
    expect(modifyGrid(data)).toStrictEqual(data)
  })
  test(`should accept custom resolver`, () => {
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
