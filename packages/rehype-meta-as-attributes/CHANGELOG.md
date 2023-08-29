# @lekoarts/rehype-meta-as-attributes

## 3.0.1

### Patch Changes

- [`5393b80b`](https://github.com/LekoArts/gatsby-themes/commit/5393b80b41b5291b35573a89926b8a8d1945e327) Thanks [@LekoArts](https://github.com/LekoArts)! - Update unified and unist-util-visit dependencies

## 3.0.0

### Major Changes

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - This package is ESM-only now. If you need to continue using the CommonJS version, stick to the previous major version.

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

## 2.0.0

### Major Changes

- [#1045](https://github.com/LekoArts/gatsby-themes/pull/1045) [`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5) Thanks [@LekoArts](https://github.com/LekoArts)! - Updating minimum required Node.js version to 18.

## 1.1.1

### Patch Changes

- [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2) Thanks [@LekoArts](https://github.com/LekoArts)! - Update README information and change some `package.json` details.

## 1.1.0

### Minor Changes

- [#1012](https://github.com/LekoArts/gatsby-themes/pull/1012) [`3893ea4`](https://github.com/LekoArts/gatsby-themes/commit/3893ea4f7a8c3bceba8b9b67923ce7ccf6ee0346) Thanks [@LekoArts](https://github.com/LekoArts)! - Convert library to TypeScript. Output CJS and ESM. Also includes TypeScript types.

## 1.0.0

### Major Changes

[#967](https://github.com/LekoArts/gatsby-themes/pull/967) [`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)

Moving this utility from v0.x version range to proper semver range. No changes between 0.0.1 and 1.0.0 were made.
