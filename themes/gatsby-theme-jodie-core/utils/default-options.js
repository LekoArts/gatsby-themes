module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const projectsUrl = themeOptions.projectsUrl || `/projects`
  const projectsPrefix = themeOptions.projectsPrefix || `/`
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const formatString = themeOptions.formatString || `DD.MM.YYYY`

  return {
    basePath,
    projectsPath,
    projectsUrl,
    projectsPrefix,
    pagesPath,
    formatString,
  }
}
