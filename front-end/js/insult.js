//TODO Your mother is elderberries!

var R = require('ramda')
var tap = require('./tap.js')

var property_list_length = R.curry((object, property) =>
    R.compose(
        R.length,
        R.prop(property))
            (object))


var subject_lens =
    R.lens(
        R.prop('subjects'),
        R.assoc('subject'))

var first_person_lens =
    R.lens(
        R.prop('subjects'),
        R.assoc('first_person'))

var subject = R.curry((subject_index, insult_data) =>
    R.compose(
        R.omit(['subjects']),
        R.over(
            first_person_lens,
            R.compose(
                R.prop('first_person'),
                R.nth(subject_index))),
        R.over(
            subject_lens,
            R.compose(
                R.prop('part'),
                R.nth(subject_index))))
                    (insult_data))

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
        tap,
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