var insult = require('./insult')
var rand = require('./rand.js')
var insult_data = require('./insult_data')

//Impure app code
//TODO keyboard bindings

var new_insult = () =>
    // eslint-disable-next-line immutable/no-mutation
    document.querySelector('.insult').innerHTML =
        insult(
            insult_data,
            rand(0, insult_data.subjects.length - 1),
            rand(0, insult_data.verbs.length - 1),
            rand(0, insult_data.objects.length - 1))

new_insult()

// eslint-disable-next-line immutable/no-mutation
document.querySelector('.insult-button').onclick = new_insult
