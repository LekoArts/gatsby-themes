const base = require(`../../jest.config.base`)
const { name } = require(`./package`)

module.exports = {
  ...base,
  displayName: name,
}
