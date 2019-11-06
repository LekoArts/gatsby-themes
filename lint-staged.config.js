module.exports = {
  "*.{js,ts,tsx}": [`eslint --ignore-path .gitignore --ignore-path .prettierignore --fix`, `git add`],
  "*.{md,mdx,json,yaml}": [`prettier "**/*.{md,mdx,json,yaml}" --write`, `git add`],
}
