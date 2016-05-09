//TODO Your mother is elderberries!
//TODO keyboard bindings
requirejs([
    'node_modules/ramda/dist/ramda'
], function (R) {
    //Impure helpers
    var rand =
        R.curry((min, max) => Math.round(Math.random() * (max - min) + min))

    var tap = (x) => {
        console.log(x)
        return x
    }

    //Pure code
    var property_list_length = R.curry((object, property) =>
        R.compose(
            R.length,
            R.prop(property))
                (object))

    var insult = (insult_object) =>
        `${insult_object.subject} ${insult_object.verb} ${insult_object.object}!`

    //Impure app code
    var insult_data = {
        subjects: [
            {
                part: 'You',
                first_person: true
            },
            {
                part: 'Your mother',
                first_person: false
            },
            {
                part: 'Your father',
                first_person: false
            },
        ],
        verbs: [
            {
                first_person: 'smell like',
                third_person: 'smells like',
                plural: true
            },
            {
                first_person: 'are',
                third_person: 'is',
                plural: false
            },
            {
                first_person: 'consort with',
                third_person: 'consorts with',
                plural: true
            },
        ],
        objects: [
            'a hamster',
            'elderberries'
        ]
    }

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

    var insult_object = (insult_data, subject_index, verb_index, object_index) =>
        R.compose(
            object(object_index),
            verb(verb_index),
            subject(subject_index))
                (insult_data)

    //Impure app code
    document.querySelector('.insult-button').onclick = () =>
        document.querySelector('.insult').innerHTML =
            insult(
                insult_object(
                    insult_data,
                    rand(0, insult_data.subjects.length - 1),
                    rand(0, insult_data.verbs.length - 1),
                    rand(0, insult_data.objects.length - 1)))
})
