import replaceWords from "../replace-words"

describe(`replaceWords`, () => {
  test(`should only replace the chosen word`, () => {
    expect(replaceWords(`https://github.com/LeKoArts/gatsby-themes`)).toBe(`https://github.com/LekoArts/gatsby-themes`)
  })
  test(`should accept one custom formatter`, () => {
    expect(replaceWords(`https://github.com/HogWarts/harry-potter`, [{ HogWarts: `Hogwarts` }])).toBe(
      `https://github.com/Hogwarts/harry-potter`
    )
  })
  test(`should accept multiple custom formatters`, () => {
    expect(
      replaceWords(`https://github.com/HogWarts/haRRy-potter`, [{ HogWarts: `Hogwarts` }, { haRRy: `harry` }])
    ).toBe(`https://github.com/Hogwarts/harry-potter`)
  })
})
