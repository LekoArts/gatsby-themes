import { describe, it, expect } from "vitest"
import { Theme } from "theme-ui"
import normalizeThemeUIColors from "../normalize-theme-ui-colors"

const exampleTheme: Theme["colors"] = {
  transparent: `transparent`,
  black: `#000`,
  // @ts-ignore
  indigo: [null, `#ebf4ff`, `#c3dafe`, `#a3bffa`, `#7f9cf5`, `#667eea`, `#5a67d8`, `#4c51bf`, `#434190`, `#3c366b`],
  white: `#fff`,
  modes: {
    dark: {
      black: `#fff`,
    },
  },
}

describe(`Normalize ThemeUI`, () => {
  it(`should transform with default options (omitting values and ordering arrays to bottom)`, () => {
    expect(normalizeThemeUIColors({ colors: exampleTheme })).toMatchInlineSnapshot(`
      [
        {
          "color": "#000",
          "name": "black",
        },
        {
          "color": "#fff",
          "name": "white",
        },
        {
          "color": [
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
  it(`should transform without omitting fields`, () => {
    expect(normalizeThemeUIColors({ colors: exampleTheme, omit: [] })).toMatchInlineSnapshot(`
      [
        {
          "color": "transparent",
          "name": "transparent",
        },
        {
          "color": "#000",
          "name": "black",
        },
        {
          "color": "#fff",
          "name": "white",
        },
        {
          "color": [
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
        {
          "color": {
            "dark": {
              "black": "#fff",
            },
          },
          "name": "modes",
        },
      ]
    `)
  })
})
