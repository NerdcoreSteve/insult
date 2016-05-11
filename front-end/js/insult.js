//TODO Your mother is elderberries!
var R = require('ramda')
var subject = require('./subject.js')


var verb_lens =
    R.lens(
        R.prop('verbs'),
        R.assoc('verb'))

var verb = R.curry((verb_index, insult_data) =>
    R.compose(
        R.omit(['verbs']),
        R.assoc('plural', insult_data.verbs[verb_index].plural),
        R.over(
            verb_lens,
            R.compose(
                R.ifElse(
                    () => insult_data.first_person,
                    R.prop('first_person'),
                    R.prop('third_person')),
                R.nth(verb_index))))
                    (insult_data))

var object_lens =
    R.lens(
        R.prop('objects'),
        R.assoc('object'))

var object = R.curry((object_index, insult_data) =>
    R.compose(
        R.over(
            object_lens,
            R.nth(object_index)))
                (insult_data))

var insult = (insult_data, subject_index, verb_index, object_index) =>
    R.compose(
        (insult_object) =>
            `${insult_object.subject} ${insult_object.verb} ${insult_object.object}!`,
        object(object_index),
        verb(verb_index),
        subject(subject_index))
            (insult_data)

module.exports = insult
