module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const assetsPath = themeOptions.projectsPath || `content/assets`
  const formatString = themeOptions.formatString || `DD.MM.YYYY`
  const mdx = themeOptions.mdx ?? true
  const sharp = themeOptions.sharp ?? true

  return {
    basePath,
    projectsPath,
    assetsPath,
    formatString,
    mdx,
    sharp,
  }
}
