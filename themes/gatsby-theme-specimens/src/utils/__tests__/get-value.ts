import getValue from "../get-value"

describe(`removeLastThree`, () => {
  test(`should work for integers (string)`, () => {
    expect(getValue(`3rem`)).toBe(3)
  })
  test(`should work for fractions (string)`, () => {
    expect(getValue(`3.5rem`)).toBe(3.5)
  })
  test(`should return number value divided by rootFontSize (default)`, () => {
    expect(getValue(16)).toBe(1)
  })
  test(`should return number value divided by custom rootFontSize`, () => {
    expect(getValue(18, 18)).toBe(1)
  })
  test(`should return px value as number`, () => {
    expect(getValue(`20px`)).toBe(20)
  })
  test(`should return 16 for undefined`, () => {
    expect(getValue(undefined)).toBe(16)
  })
  test(`should return 0 for 0 input`, () => {
    expect(getValue(0)).toBe(0)
  })
})
