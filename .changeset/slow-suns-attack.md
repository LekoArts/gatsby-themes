---
"@lekoarts/gatsby-theme-minimal-blog": minor
---

This theme uses [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) for its code blocks. The version was updated from `1.3.5` to `2.0.6` and it contains some breaking changes in regards to the API surface.

If you modified the theme in any way (e.g. by shadowing or adding additional Prism languages) you need to apply those changes, too.

## Change of module imports

```diff
- import Highlight, { defaultProps } from "prism-react-renderer";
+ import { Highlight } from "prism-react-renderer"

const Content = (
-  <Highlight {...defaultProps} code={exampleCode} language="jsx">
+  <Highlight code={exampleCode} language="jsx">
```

## Custom languages

```js
import { Highlight, Prism } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism
await import("prismjs/components/prism-applescript")
/** or **/
require("prismjs/components/prism-applescript")
```

## Theme imports

```diff
- import vsDark from "prism-react-renderer/themes/vsDark"
+ import { themes } from "prism-react-renderer"
+ const { vsDark } = themes

- const theme = require('prism-react-renderer/themes/vsDark')
+ const theme = require('prism-react-renderer').themes.vsDark
```
