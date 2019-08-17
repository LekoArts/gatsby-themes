import normalizeThemeUIColors from "../normalize-theme-ui-colors"

const exampleTheme = {
  transparent: `transparent`,
  black: `#000`,
  indigo: [null, `#ebf4ff`, `#c3dafe`, `#a3bffa`, `#7f9cf5`, `#667eea`, `#5a67d8`, `#4c51bf`, `#434190`, `#3c366b`],
  modes: {
    dark: {
      black: `#fff`,
    },
  },
}

describe(`Normalize ThemeUI`, () => {
  test(`should transform with default options (omitting values)`, () => {
    expect(normalizeThemeUIColors({ colors: exampleTheme })).toMatchInlineSnapshot(`
      Array [
        Object {
          "color": "#000",
          "name": "black",
        },
        Object {
          "color": Array [
            null,
            "#ebf4ff",
            "#c3dafe",
            "#a3bffa",
            "#7f9cf5",
            "#667eea",
            "#5a67d8",
            "#4c51bf",
            "#434190",
            "#3c366b",
          ],
          "name": "indigo",
        },
      ]
    `)
  })
  test(`should transform without omitting fields`, () => {
    expect(normalizeThemeUIColors({ colors: exampleTheme, omit: [] })).toMatchInlineSnapshot(`
      Array [
        Object {
          "color": "transparent",
          "name": "transparent",
        },
        Object {
          "color": "#000",
          "name": "black",
        },
        Object {
          "color": Object {
            "dark": Object {
              "black": "#fff",
            },
          },
          "name": "modes",
        },
        Object {
          "color": Array [
            null,
            "#ebf4ff",
            "#c3dafe",
            "#a3bffa",
            "#7f9cf5",
            "#667eea",
            "#5a67d8",
            "#4c51bf",
            "#434190",
            "#3c366b",
          ],
          "name": "indigo",
        },
      ]
    `)
  })
})
