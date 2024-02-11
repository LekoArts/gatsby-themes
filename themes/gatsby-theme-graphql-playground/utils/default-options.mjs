export const withDefaults = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const docsPath = themeOptions.docsPath || `docs`
  const mdx = typeof themeOptions.mdx === `undefined` ? true : themeOptions.mdx

  return {
    basePath,
    docsPath,
    mdx,
  }
}
