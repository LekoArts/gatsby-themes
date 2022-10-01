import { describe, it, expect } from "vitest"
import type { Theme } from "theme-ui"
import normalizeThemeUIColors from "../normalize-theme-ui-colors"

const exampleTheme: Theme["colors"] = {
  transparent: `transparent`,
  black: `#000`,
  indigo: [``, `#ebf4ff`, `#c3dafe`, `#a3bffa`, `#7f9cf5`, `#667eea`, `#5a67d8`, `#4c51bf`, `#434190`, `#3c366b`],
  blue: {
    50: `#eff6ff`,
    100: `#dbeafe`,
    200: `#bfdbfe`,
    300: `#93c5fd`,
    400: `#60a5fa`,
    500: `#3b82f6`,
    600: `#2563eb`,
    700: `#1d4ed8`,
    800: `#1e40af`,
    900: `#1e3a8a`,
  },
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
            "",
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
            "100": "#dbeafe",
            "200": "#bfdbfe",
            "300": "#93c5fd",
            "400": "#60a5fa",
            "50": "#eff6ff",
            "500": "#3b82f6",
            "600": "#2563eb",
            "700": "#1d4ed8",
            "800": "#1e40af",
            "900": "#1e3a8a",
          },
          "name": "blue",
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
            "",
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
            "100": "#dbeafe",
            "200": "#bfdbfe",
            "300": "#93c5fd",
            "400": "#60a5fa",
            "50": "#eff6ff",
            "500": "#3b82f6",
            "600": "#2563eb",
            "700": "#1d4ed8",
            "800": "#1e40af",
            "900": "#1e3a8a",
          },
          "name": "blue",
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
