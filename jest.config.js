module.exports = {
  preset: `ts-jest`,
  verbose: true,
  coverageDirectory: `<rootDir>/coverage`,
  projects: [`<rootDir>/themes/*/jest.config.js`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  reporters: [[`jest-junit`, { suiteName: `Unit Tests`, outputDirectory: `results/jest`, outputName: `result.xml` }]],
}
