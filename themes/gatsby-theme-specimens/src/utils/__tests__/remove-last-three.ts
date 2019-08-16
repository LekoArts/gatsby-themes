import removeLastThree from "../remove-last-three"

describe(`removeLastThree`, () => {
  test(`should work for integers (string)`, () => {
    expect(removeLastThree(`3rem`)).toBe(3)
  })
  test(`should work for fractions (string)`, () => {
    expect(removeLastThree(`3.5rem`)).toBe(3.5)
  })
  test(`should return exact value for numbers`, () => {
    expect(removeLastThree(2)).toBe(2)
  })
})
