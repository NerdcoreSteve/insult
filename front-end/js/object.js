var R = require('ramda')

var object_lens =
    R.lens(
        R.prop('objects'),
        R.assoc('object'))

// eslint-disable-next-line immutable/no-mutation
module.exports = R.curry((object_index, insult_data) =>
    R.compose(
        R.omit(['objects']),
        R.over(
            object_lens,
            R.compose(
                R.prop(insult_data.plural ? 'plural' : 'singular'),
                R.nth(object_index))))
                    (insult_data))
