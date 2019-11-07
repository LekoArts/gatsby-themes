module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const postsPath = themeOptions.postsPath || `content/posts`
  const pagesPath = themeOptions.pagesPath || `content/pages`

  return {
    basePath,
    postsPath,
    pagesPath,
  }
}
