var R = require('ramda')

module.exports = R.curry((object, property) =>
    R.compose(
        R.length,
        R.prop(property))
            (object))
