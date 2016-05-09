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

    var insult = function insult(insult_object) {
        return insult_object.subject + ' ' + insult_object.verb + ' ' + insult_object.object + '!';
    };

    //Impure app code
    var insult_data = {
        subjects: [{ part: 'You' }, { part: 'Your mother' }, { part: 'Your father' }],
        verbs: ['smells like', 'is', 'consorts with'],
        objects: ['a hamster', 'elderberries']
    };

    var subject_lens = R.lens(R.prop('subjects'), R.assoc('subject'));

    var verb_lens = R.lens(R.prop('verbs'), R.assoc('verb'));

    var object_lens = R.lens(R.prop('objects'), R.assoc('object'));

    var subject = R.curry(function (subject_index, insult_data) {
        return R.over(subject_lens, R.compose(R.prop('part'), R.nth(subject_index)))(insult_data);
    });

    var insult_object = function insult_object(insult_data, subject_index, verb_index, object_index) {
        return R.compose(R.over(object_lens, R.nth(object_index)), R.over(verb_lens, R.nth(verb_index)), subject(subject_index))(insult_data);
    };

    //Impure app code
    //TODO keyboard bindings
    document.querySelector('.insult-button').onclick = function () {
        return document.querySelector('.insult').innerHTML = insult(insult_object(insult_data, rand(0, insult_data.subjects.length - 1), rand(0, insult_data.verbs.length - 1), rand(0, insult_data.objects.length - 1)));
    };
});