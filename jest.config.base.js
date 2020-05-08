module.exports = {
  preset: `ts-jest`,
  verbose: true,
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `../../jest/__mocks__/file-mock.js`,
  },
  setupFilesAfterEnv: [`../../jest/loadershim.js`],
  globals: {
    __PATH_PREFIX__: ``,
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [2322],
      },
    },
  },
}
