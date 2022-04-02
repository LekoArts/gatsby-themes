import { describe, it, expect, vi } from "vitest"
import RGBToCMYK from "../rgb-to-cmyk"

describe(`rgb-to-cymk`, () => {
  it(`should convert white correctly`, () => {
    expect(RGBToCMYK(255, 255, 255)).toStrictEqual({ C: 0, M: 0, Y: 0, K: 0 })
  })
  it(`should convert black correctly`, () => {
    expect(RGBToCMYK(0, 0, 0)).toStrictEqual({ C: 0, M: 0, Y: 0, K: 100 })
  })
  it(`should convert RGB color (84,142,204) correctly`, () => {
    // Used https://www.rapidtables.com/convert/color/rgb-to-cmyk.html to convert
    expect(RGBToCMYK(84, 142, 204)).toStrictEqual({ C: 59, M: 30, Y: 0, K: 20 })
  })
  it(`should warn for invalid RGB color (non-numeric value)`, () => {
    const warn = vi.spyOn(global.console, `warn`).mockImplementation(() => {})
    // @ts-ignore
    RGBToCMYK(`84`, `test`, 204)
    // @ts-ignore
    expect(RGBToCMYK(`84`, `test`, 204)).toEqual(undefined)
    expect(warn).toHaveBeenCalledWith(`Please enter numeric RGB values!`)

    warn.mockRestore()
  })
  it(`should warn for invalid RGB color (value outside of 0 & 255)`, () => {
    const warn = vi.spyOn(global.console, `warn`).mockImplementation(() => {})
    // @ts-ignore
    RGBToCMYK(-5, 300, 204)
    // @ts-ignore
    expect(RGBToCMYK(-5, 300, 204)).toEqual(undefined)
    expect(warn).toHaveBeenCalledWith(`RGB values must be in the range 0 to 255.`)

    warn.mockRestore()
  })
})
