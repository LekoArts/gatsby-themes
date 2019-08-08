module.exports = {
  preset: `ts-jest`,
  verbose: true,
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  setupFilesAfterEnv: [`@testing-library/react/cleanup-after-each`, `<rootDir>/jest/loadershim.js`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  reporters: [`jest-junit`],
}
