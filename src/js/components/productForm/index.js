module.exports = function (location, callback) {
  require.ensure([], function (require) {
    callback(null, require('./components/Form').default)
  })
}
