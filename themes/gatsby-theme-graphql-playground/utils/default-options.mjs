export const withDefaults = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const docsPath = themeOptions.docsPath || `docs`
  const mdx = themeOptions.mdx ?? true

  return {
    basePath,
    docsPath,
    mdx,
  }
}
