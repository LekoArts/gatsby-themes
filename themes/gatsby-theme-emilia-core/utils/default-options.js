module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const assetsPath = themeOptions.projectsPath || `content/assets`

  return {
    basePath,
    projectsPath,
    assetsPath,
  }
}
