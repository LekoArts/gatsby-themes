module.exports = {
  preset: `ts-jest`,
  verbose: true,
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `../../jest/__mocks__/file-mock.js`,
    "^@reach/router(.*)": `<rootDir>/node_modules/@gatsbyjs/reach-router$1`,
  },
  setupFilesAfterEnv: [`../../jest/loadershim.js`],
  globals: {
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [2322],
      },
    },
  },
}
