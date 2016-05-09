'use strict';

requirejs(['node_modules/ramda/dist/ramda'], function (R) {
    //Impure helpers
    var rand = R.curry(function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    });

    var tap = function tap(x) {
        console.log(x);
        return x;
    };

    //Pure code
    var property_list_length = R.curry(function (object, property) {
        return R.compose(R.length, R.prop(property))(object);
    });

    var insult = function insult(insult_data, insult_object) {
        var subject = insult_data.subjects[insult_object.subject],
            object = insult_data.objects[insult_object.object],
            verb = insult_data.verbs[insult_object.verb];
        return ' ' + subject + ' ' + verb + ' ' + object;
    };

    //Impure app code
    var insult_data = {
        subjects: ['You', 'Your mother', 'Your father'],
        verbs: ['smells like', 'is a', 'consorts with'],
        objects: ['a hamster', 'elderberries']
    };

    //TODO I can make this pure by returning a function that is impure
    var rand_insult_data_el = function rand_insult_data_el(property) {
        return rand(0, property_list_length(insult_data, property) - 1);
    };

    document.querySelector('.insult-button').onclick = function () {
        return document.querySelector('.insult').innerHTML = insult(insult_data, {
            subject: rand_insult_data_el('subjects'),
            verb: rand_insult_data_el('verbs'),
            object: rand_insult_data_el('objects')
        });
    };
});