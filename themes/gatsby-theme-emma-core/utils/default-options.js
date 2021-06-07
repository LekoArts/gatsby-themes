module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const formatString = themeOptions.formatString || `DD.MM.YYYY`
  const mdx = themeOptions.mdx ?? true
  const sharp = themeOptions.sharp ?? true

  return {
    basePath,
    projectsPath,
    pagesPath,
    formatString,
    mdx,
    sharp,
  }
}
