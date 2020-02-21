module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const blogPath = themeOptions.blogPath || `/blog`
  const postsPath = themeOptions.postsPath || `content/posts`
  const additionalPostsFolders = themeOptions.additionalPostsFolders || [];
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const tagsPath = themeOptions.tagsPath || `/tags`
  const externalLinks = themeOptions.externalLinks || []
  const navigation = themeOptions.navigation || []
  const showLineNumbers = themeOptions.showLineNumbers || true

  return {
    basePath,
    blogPath,
    postsPath,
    additionalPostsFolders,
    pagesPath,
    tagsPath,
    externalLinks,
    navigation,
    showLineNumbers,
  }
}
