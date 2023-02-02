---
"@lekoarts/rehype-meta-as-attributes": major
---

This package is ESM-only now. If you need to continue using the CommonJS version, stick to the previous major version.

The export was also change from a named export to a default export.

```js
// Previous version
const {
  rehypeMetaAsAttributes,
} = require("@lekoarts/rehype-meta-as-attributes");

// Latest version
import rehypeMetaAsAttributes from "@lekoarts/rehype-meta-as-attributes";
```

Learn more about ESM in [this guide](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
