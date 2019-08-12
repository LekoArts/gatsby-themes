import RGBToCMYK from "../rgb-to-cmyk"

describe(`rgb-to-cymk`, () => {
  test(`should convert white correctly`, () => {
    expect(RGBToCMYK(255, 255, 255)).toStrictEqual({ C: 0, M: 0, Y: 0, K: 0 })
  })
  test(`should convert black correctly`, () => {
    expect(RGBToCMYK(0, 0, 0)).toStrictEqual({ C: 0, M: 0, Y: 0, K: 100 })
  })
  test(`should convert RGB color (84,142,204) correctly`, () => {
    // Used https://www.rapidtables.com/convert/color/rgb-to-cmyk.html to convert
    expect(RGBToCMYK(84, 142, 204)).toStrictEqual({ C: 59, M: 30, Y: 0, K: 20 })
  })
})
