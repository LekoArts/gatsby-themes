<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-specimens
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-specimens is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-specimens">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-specimens.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-specimens?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-specimens.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-specimens?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-specimens.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Leverage the wide variety of powerful React components to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not on how to showcase it. Works seamlessly with MDX.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://specimens.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-specimens).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- Theme UI-based theming
- Suitable for MDX
- Offers React components specifically designed for design systems. You can display:
  - Colors as swatches and rows. Individually placed or automated from an object/array in your theme file
  - Typography e.g. font-family, font-size, font-weight and headings
  - Spacing scales
  - Audio files and downloads
  - border-radius or box-shadow
  - Alerts to emphasize important messages

## Installation

```sh
npm install @lekoarts/gatsby-theme-specimens theme-ui
```

This theme has `theme-ui` defined as a `peerDependency` so make sure to also install it if you don't use it already.

### Install as a starter

This will generate a new site that pre-configures use of the theme. Replace the `theme.js` file with your theme file and you have a living style-guide!

```sh
gatsby new specimens LekoArts/gatsby-starter-specimens
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-specimens)

## Usage

### Theme options

| Key                  | Default Value | Description                                                                                                                                                                                                                                                                    |
| -------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `contrastGuidelines` | `AA`          | The color swatches display in their top section whether white/black text has sufficient color contrast with the respective color. By default the function determines that Pass/Fail by 'AA' (ratio at least 4.5:1). You can also set this value to 'AAA' (ratio at least 7:1). |
| `CMYK`               | `true`        | The color swatch and color row component display their values in HEX, RGB, and CMYK. You can optionally disable the CMYK field.                                                                                                                                                |
| `codeExample`        | `true`        | The heading component displays Theme UI code implementation examples below the different headings. You can disable those by setting it to `false`.                                                                                                                             |
| `rootFontSize`       | `16`          | Values for spacing, border-radius, font-size mostly can be defined as `rem` values. As the examples shouldn't be influenced by the root font size of the website, but the design system itself you can define your theme's rootFontSize here.                                  |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-specimens`,
      options: {
          contrastGuidelines: `AAA`,
          codeExample: false,
          rootFontSize: 16,
        }
      }
    }
  ]
};
```

## Components

The heart of this theme are the reusable React components that you can use to fill your design system with content. Every component has mandatory (and sometimes optional) fields. Some components such as the ones for color require the input in a specific format, please keep that in mind. Visit the [**Demo Website**](https://specimens.lekoarts.de) to see how to use the components.

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme!

### Modifications

As with every Gatsby theme you can of course shadow the files (e.g. `src/@lekoarts/gatsby-theme-specimens/alert.js`) but if you only want to change some styles, not the whole structure of the component you can get away with another approach. Since all components are styled with a Theme UI/System UI compatible theme file, you are able to override it.

Every component has a `variant` defined in its styles, e.g. the mentioned "Alert" component:

```jsx
const Alert = ({ children, type = `hint` }: AlertProps) => (
  <div
    data-alert-type={type}
    sx={{ ...commonAlertStyles, ...alerts[type], ...theme.alerts[type] }}
  >
    {dict[type]}
    {children}
  </div>
);
```

Here: `...theme.alerts[type]`

You can use the variant to add additional styles / override styles. Create a new file at `src/@lekoarts/gatsby-theme-specimens/theme.js` with the following content:

```js
import baseTheme from "@lekoarts/gatsby-theme-specimens/src/theme";

export default {
  ...baseTheme,
  alerts: {
    hint: {
      padding: `3rem`,
    },
  },
};
```

The [**Demo Website**](https://specimens.lekoarts.de) tells you the respective variant names you can use to change styles. Normally the variant is defined on the outermost HTML element of the component, if you want to change elements inside those you are able to use CSS selectors. In doubt have a look at the source file :)

### Using together with existing Theme UI config

Since this theme uses a local file with the [`@theme-ui/presets` tailwind](https://theme-ui.com/presets/) your Theme UI config you e.g. set up with `gatsby-plugin-theme-ui` won't affect the styles of this theme.

### MDX Shortcodes

In order to be able to use these components without importing them every time in your MDX files, you should define them as components / shortcodes. MDX has [documentation](https://mdxjs.com/blog/shortcodes/) on that, and also [Theme UI](https://theme-ui.com/gatsby-plugin#components).

When you use `gatsby-plugin-theme-ui` in your project, create a new file at `src/gatsby-plugin-theme-ui/components.js` and insert this content:

```jsx
import {
  Alert,
  Audio,
  BorderRadius,
  ColorFamilies,
  ColorRow,
  ColorSwatch,
  Download,
  FontFamily,
  FontSize,
  FontWeight,
  Heading,
  Palette,
  Shadow,
  Space,
  Table,
  Video,
} from "@lekoarts/gatsby-theme-specimens";

export default {
  Alert: ({ type, children }) => <Alert type={type}>{children}</Alert>,
  Audio: ({ autoplay, loop, name, desc, src }) => (
    <Audio autoplay={autoplay} loop={loop} name={name} desc={desc} src={src} />
  ),
  BorderRadius: ({ radii }) => <BorderRadius radii={radii} />,
  ColorFamilies: ({ colors }) => <ColorFamilies colors={colors} />,
  ColorRow: ({ color, name, prefix }) => (
    <ColorRow color={color} name={name} prefix={prefix} />
  ),
  ColorSwatch: ({ color, name, minimal, prefix }) => (
    <ColorSwatch color={color} name={name} minimal={minimal} prefix={prefix} />
  ),
  Download: ({ name, src, bg, preview, notes }) => (
    <Download name={name} src={src} bg={bg} preview={preview} notes={notes} />
  ),
  FontFamily: ({ fonts, previewText }) => (
    <FontFamily fonts={fonts} previewText={previewText} />
  ),
  FontSize: ({ fontSizes }) => <FontSize fontSizes={fontSizes} />,
  FontWeight: ({ fontWeights, previewText }) => (
    <FontWeight fontWeights={fontWeights} previewText={previewText} />
  ),
  Heading: ({ styles, theme, previewText }) => (
    <Heading styles={styles} theme={theme} previewText={previewText} />
  ),
  Palette: ({ colors, mode, single, minimal, prefix }) => (
    <Palette
      colors={colors}
      mode={mode}
      single={single}
      minimal={minimal}
      prefix={prefix}
    />
  ),
  Shadow: ({ shadows }) => <Shadow shadows={shadows} />,
  Space: ({ space }) => <Space space={space} />,
  Table: ({ columns, titles, children, className }) => (
    <Table columns={columns} titles={titles} className={className}>
      {children}
    </Table>
  ),
  Video: ({ autoplay, loop, muted, name, poster, src }) => (
    <Video
      autoplay={autoplay}
      loop={loop}
      muted={muted}
      name={name}
      poster={poster}
      src={src}
    />
  ),
};
```

This way you are able to use the components directly in your MDX file without importing them:

```md
<Alert type="success">Make it so!</Alert>
```

## 🌟Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
