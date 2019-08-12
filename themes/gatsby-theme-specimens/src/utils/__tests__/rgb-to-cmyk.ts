import RGBToCMYK from "../rgb-to-cmyk"

describe(`rgb-to-cymk`, () => {
  test(`should convert white correctly`, () => {
    expect(RGBToCMYK(255, 255, 255)).toStrictEqual({ C: 0, M: 0, Y: 0, K: 0 })
  })
})
