module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const blogPath = themeOptions.blogPath || `/blog`
  const postsPath = themeOptions.postsPath || `content/posts`
  const pagesPath = themeOptions.pagesPath || `content/pages`

  return {
    basePath,
    blogPath,
    postsPath,
    pagesPath,
  }
}
