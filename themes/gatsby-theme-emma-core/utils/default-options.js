module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const pagesPath = themeOptions.pagesPath || `content/pages`

  return {
    basePath,
    projectsPath,
    pagesPath,
  }
}
