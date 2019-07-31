module.exports = {
  "*.{js,jsx}": [`eslint './themes/**/*' './examples/**/*'`],
  "*.mdx": [`prettier --parser mdx "{examples,themes}/**/*.mdx" --write`],
  "*.md": [`prettier "{examples,themes}/**/*.md" --write`, `git add`],
}
