var R = require('ramda')

// eslint-disable-next-line immutable/no-mutation
module.exports = R.curry((min, max) => Math.round(Math.random() * (max - min) + min))
