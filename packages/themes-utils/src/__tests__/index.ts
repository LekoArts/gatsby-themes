import { describe, it, expect } from "vitest"
import { getLanguage, calculateLinesToHighlight, preToCodeBlock, GetLanguageInput, slugify } from "../index"

const preProps = {
  children: {
    props: {
      children: `This is the code string`,
      className: `language-javascript` as GetLanguageInput,
      otherProps: `Hello World`,
    },
  },
}

describe(`getLanguage`, () => {
  it(`gets the language`, () => {
    expect(getLanguage(`language-js`)).toBe(`js`)
  })
  it(`returns empty string fro now result`, () => {
    expect(getLanguage()).toBe(``)
  })
})

describe(`calculateLinesToHighlight`, () => {
  it(`returns false if nothing can be found`, () => {
    const shouldHighlight = calculateLinesToHighlight(``)
    expect(shouldHighlight(1)).toBe(false)
  })
  it(`returns true for valid cases`, () => {
    // The result of calculateLinesToHighlight is zero-indexed
    const sh1 = calculateLinesToHighlight(`2`)
    expect(sh1(0)).toBe(false)
    expect(sh1(1)).toBe(true)
    const sh2 = calculateLinesToHighlight(`2-4`)
    expect(sh2(1)).toBe(true)
    expect(sh2(2)).toBe(true)
    expect(sh2(3)).toBe(true)
    expect(sh2(4)).toBe(false)
    const sh3 = calculateLinesToHighlight(`1-2,6`)
    expect(sh3(0)).toBe(true)
    expect(sh3(1)).toBe(true)
    expect(sh3(5)).toBe(true)
  })
})
describe(`preToCodeBlock`, () => {
  it(`returns undefined for invalid input`, () => {
    // @ts-ignore - Intentially passing in invalid props
    expect(preToCodeBlock({ foo: `bar` })).toBe(undefined)
  })
  it(`handles full shape`, () => {
    expect(preToCodeBlock(preProps)).toStrictEqual({
      codeString: preProps.children.props.children,
      className: preProps.children.props.className,
      language: `javascript`,
      otherProps: preProps.children.props.otherProps,
    })
  })
  it(`handles minimal shape`, () => {
    expect(preToCodeBlock({ children: { props: { children: `This is the code string` } } })).toStrictEqual({
      className: ``,
      codeString: preProps.children.props.children,
      language: ``,
    })
  })
})

describe(`slugify`, () => {
  it(`uses slug if given`, () => {
    expect(slugify({ slug: `custom-slug`, title: `Custom Slug` }, `/`)).toStrictEqual(`/custom-slug`)
  })
  it(`falls back to title if no slug given`, () => {
    expect(slugify({ title: `Custom Slug` }, `/`)).toStrictEqual(`/custom-slug`)
  })
  it(`handles duplicate slashes`, () => {
    expect(slugify({ slug: `/custom-slug`, title: `Custom Slug` }, `/`)).toStrictEqual(`/custom-slug`)
    expect(slugify({ slug: `/custom-slug`, title: `Custom Slug` }, `/path/`)).toStrictEqual(`/path/custom-slug`)
    expect(slugify({ title: `Custom Slug` }, `//`)).toStrictEqual(`/custom-slug`)
  })
})
