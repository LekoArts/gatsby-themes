module.exports = {
  "*.{js,ts,tsx}": [`eslint --ignore-path .gitignore --ignore-path .prettierignore --fix`, `git add`],
  "*.{md,mdx,json}": [`prettier "**/*.{md,mdx,json}" --write`, `git add`],
}
