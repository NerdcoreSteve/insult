var insult = require('./insult')
var rand = require('./rand.js')

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

//Impure app code
//TODO keyboard bindings
document.querySelector('.insult-button').onclick = () =>
    document.querySelector('.insult').innerHTML =
        insult(
            insult_data,
            rand(0, insult_data.subjects.length - 1),
            rand(0, insult_data.verbs.length - 1),
            rand(0, insult_data.objects.length - 1))
