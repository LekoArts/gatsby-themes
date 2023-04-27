---
"@lekoarts/gatsby-theme-graphql-playground": patch
"@lekoarts/gatsby-theme-minimal-blog": patch
"@lekoarts/gatsby-theme-emilia": patch
"@lekoarts/gatsby-theme-cara": patch
"@lekoarts/gatsby-theme-emma": patch
---

Ensure that the color mode toggle (light/dark mode) works correctly. This is done through adding the current color mode to the `<html>` element like so:

```html
<html class="theme-ui-light">
```

When the button is pressed it'll change to:

```html
<html class="theme-ui-dark">
```

In theory this shouldn't be necessary, but there is a weird interaction between [Theme UI](https://theme-ui.com/) and [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) that I currently don't have the time to deeply investigate.
