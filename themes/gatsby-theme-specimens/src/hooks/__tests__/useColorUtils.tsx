import useColorUtils from "../useColorUtils"

jest.mock(`../useSpecimensConfig`, () =>
  jest.fn(() => ({
    contrastGuidelines: `AAA`,
    CMYK: true,
    codeExample: true,
    rootFontSize: 16,
  }))
)

describe(`useColorUtils`, () => {
  it(`should return fallback values for non-valid colors`, () => {
    const data = useColorUtils(`#0`)

    expect(data).toStrictEqual({
      hex: `unknown`,
      RGB: `unknown`,
      CMYK: `unknown`,
      ratings: [
        { color: `white`, size: 1, value: false, title: `AAA` },
        { color: `white`, size: 2, value: false, title: `AAA Large` },
        { color: `black`, size: 1, value: false, title: `AAA` },
        { color: `black`, size: 2, value: false, title: `AAA Large` },
      ],
    })
  })
  it(`should return and convert color correctly`, () => {
    const data = useColorUtils(`#fff`)

    expect(data).toStrictEqual({
      hex: `#ffffff`,
      RGB: `255, 255, 255`,
      CMYK: `0, 0, 0, 0`,
      ratings: [
        { color: `white`, size: 1, value: false, title: `AAA` },
        { color: `white`, size: 2, value: false, title: `AAA Large` },
        { color: `black`, size: 1, value: true, title: `AAA` },
        { color: `black`, size: 2, value: true, title: `AAA Large` },
      ],
    })
  })
})
