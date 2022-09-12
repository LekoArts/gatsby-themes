module.exports = {
  "*.{js,ts,tsx,mdx}": [`eslint --ignore-path .gitignore --ignore-path .prettierignore --fix`],
  "*.{md,mdx,json,yaml}": [`prettier "**/*.{md,mdx,json,yaml}" --write`],
}
