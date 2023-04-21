---
"@lekoarts/gatsby-theme-emilia": patch
"@lekoarts/gatsby-theme-jodie": patch
"@lekoarts/gatsby-theme-cara": patch
---

This theme had a fixed `font-size` of `18px` on the `<html>` element. This is a **bad** accessibility practice.
This explicitly set `font-size` is removed now.

This will make the overall font sizes and spacing for the theme smaller (since all other font sizes and padding/margin are derived from the root `font-size` through `rem`).

If you need the old font styles, you can adjust the [`fontSizes` inside the Theme UI configuration](https://theme-ui.com/theme-spec#font-sizes-typographic-scale).

Currently, the `fontSizes` array inside the Theme UI configuration you're using is:

```js
const fontSizes = [
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.875rem',
  '2.25rem',
  '3rem',
  '4rem',
  '4.5rem',
]
```

Previously, the `font-size` was set like this:

```css
html {
  font-size: 18px;
}
```

So for the normal base of `16px`, `18px` is `1.125rem`. So you could change it to this:

```js
const fontSizes = [
  '1rem',
  '1.125rem',
  '1.375rem',
  '1.625rem',
  '2rem',
  '2.375rem',
  '3.125rem',
  '4.125rem',
  '4.625rem',
]
```
