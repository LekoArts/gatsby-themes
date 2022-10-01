import { describe, it, expect } from "vitest"
import type { Theme } from "theme-ui"
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
  it(`should return undefined for no input styles`, () => {
    // @ts-ignore - Want to test no input styles
    expect(filterStyles({})).toStrictEqual(undefined)
  })
  it(`should only return filtered keys with nested children`, () => {
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
  it(`should return empty when no filter is specified`, () => {
    expect(filterStyles({ input: exampleStyles, allowed: [] })).toStrictEqual({})
  })
  it(`should return key-value pairs`, () => {
    expect(filterStyles({ input: exampleStyles, allowed: [`single`] })).toStrictEqual({
      single: { key: `harry-potter` },
    })
  })
  it(`should ignore allowed keys that are not in the input`, () => {
    expect(filterStyles({ input: exampleStyles, allowed: [`single`, `other`] })).toStrictEqual({
      single: { key: `harry-potter` },
    })
  })
})
