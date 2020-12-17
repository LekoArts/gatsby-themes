import { Theme } from "theme-ui"
import filterStyles from "../filter-styles"

const exampleStyles: Theme["styles"] = {
  root: {
    fontFamily: `body`,
    lineHeight: `body`,
    fontWeight: `body`,
  },
  a: {
    color: `primary`,
    textDecoration: `none`,
    ":hover": {
      textDecoration: `underline`,
    },
  },
  h1: {
    fontFamily: `heading`,
    fontWeight: `heading`,
    lineHeight: `heading`,
    fontSize: 6,
  },
  h2: {
    fontFamily: `heading`,
    fontWeight: `heading`,
    lineHeight: `heading`,
    fontSize: 5,
  },
  h3: {
    fontFamily: `heading`,
    fontWeight: `heading`,
    lineHeight: `heading`,
    fontSize: 4,
  },
  code: {},
  pre: {},
  hr: {
    bg: `muted`,
    border: 0,
    height: `1px`,
    m: 3,
  },
  single: {
    key: `harry-potter`,
  },
}

describe(`filter styles`, () => {
  test(`should only return filtered keys with nested children`, () => {
    expect(filterStyles({ input: exampleStyles, allowed: [`h1`, `h2`, `a`] })).toStrictEqual({
      h1: {
        fontFamily: `heading`,
        fontWeight: `heading`,
        lineHeight: `heading`,
        fontSize: 6,
      },
      h2: {
        fontFamily: `heading`,
        fontWeight: `heading`,
        lineHeight: `heading`,
        fontSize: 5,
      },
      a: {
        color: `primary`,
        textDecoration: `none`,
        ":hover": {
          textDecoration: `underline`,
        },
      },
    })
  })
  test(`should return empty when no filter is specified`, () => {
    expect(filterStyles({ input: exampleStyles, allowed: [] })).toStrictEqual({})
  })
  test(`should return key-value pairs`, () => {
    expect(filterStyles({ input: exampleStyles, allowed: [`single`] })).toStrictEqual({
      single: { key: `harry-potter` },
    })
  })
})
