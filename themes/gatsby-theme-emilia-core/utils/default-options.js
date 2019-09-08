module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`

  return {
    basePath,
    projectsPath,
  }
}
