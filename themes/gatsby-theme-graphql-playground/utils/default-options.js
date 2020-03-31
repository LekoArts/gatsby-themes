module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const docsPath = themeOptions.docsPath || `docs`

  return {
    basePath,
    docsPath,
  }
}
