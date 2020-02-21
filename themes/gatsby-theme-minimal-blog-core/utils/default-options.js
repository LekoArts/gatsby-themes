module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`;
  const blogPath = themeOptions.blogPath || `/blog`;
  const postsPath = themeOptions.postsPath || `content/posts`;
  const pagesPath = themeOptions.pagesPath || `content/pages`;
  const tagsPath = themeOptions.tagsPath || `/tags`;
  const additionalPostsFolders = themeOptions.additionalPostsFolders || [];
  const externalLinks = themeOptions.externalLinks || [];
  const navigation = themeOptions.navigation || [];
  const showLineNumbers = themeOptions.showLineNumbers || true;

  return {
    basePath,
    blogPath,
    postsPath,
    pagesPath,
    tagsPath,
    additionalPostsFolders,
    externalLinks,
    navigation,
    showLineNumbers
  };
};
