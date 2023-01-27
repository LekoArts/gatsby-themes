export const withDefaults = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const projectsUrl = themeOptions.projectsUrl || `/projects`
  const projectsPrefix = themeOptions.projectsPrefix || `/`
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const formatString = themeOptions.formatString || `DD.MM.YYYY`
  const navigation = themeOptions.navigation || []
  const homepagePageLimit = themeOptions.homepagePageLimit || 9999
  const homepageProjectLimit = themeOptions.homepageProjectLimit || 3
  const mdx = typeof themeOptions.mdx === `undefined` ? true : themeOptions.mdx
  const sharp = typeof themeOptions.sharp === `undefined` ? true : themeOptions.sharp

  return {
    basePath,
    projectsPath,
    projectsUrl,
    projectsPrefix,
    pagesPath,
    formatString,
    navigation,
    homepagePageLimit,
    homepageProjectLimit,
    mdx,
    sharp,
  }
}
