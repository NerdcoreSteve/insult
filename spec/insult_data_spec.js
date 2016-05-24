var R = require('ramda')

describe('subject', () => {  
    var insult_data = require('../front-end/js/insult_data.js')

    it('is an object',
        () => expect(typeof insult_data).toEqual('object'))

    it('has the property "subjects" which has an array as its value',
        () => expect(Array.isArray(insult_data.subjects)).toEqual(true))

    it('has the property "verbs" which has an array as its value',
        () => expect(Array.isArray(insult_data.verbs)).toEqual(true))

    it('has the property "objects" which has an array as its value',
        () => expect(Array.isArray(insult_data.objects)).toEqual(true))

    it('has a subjects array, each element of which has the properties:'
            + '"part" (string),'
            + '"first_person" (boolean),',
        () => expect(
            R.all(
                subject =>
                    R.is(String, subject.part) && R.is(Boolean, subject.first_person),
                insult_data.subjects))
                    .toEqual(true))

    it('has a verbs array, each element of which has the properties:'
            + ' "first_person" (string),'
            + ' "third_person" (string),'
            + ' "plural" (boolean)',
        () => expect(
            R.all(
                verb =>
                    R.all(
                        R.identity,
                        [
                            typeof verb.first_person === 'string',
                            typeof verb.third_person === 'string',
                            typeof verb.plural === 'boolean',
                        ]),
                insult_data.verbs))
                    .toEqual(true))

    it('has an objects array, each element of which has the properties:'
            + ' "singular" (string),'
            + ' "plural" (string),',
        () => expect(
            R.all(
                object =>
                    R.all(
                        R.identity,
                        [
                            typeof object.singular === 'string',
                            typeof object.plural === 'string'
                        ]),
                insult_data.objects))
                    .toEqual(true))
})
