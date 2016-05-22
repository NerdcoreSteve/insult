var R = require('ramda')

describe('verb', () => {  
    var verb = require('../front-end/js/verb.js')

    var insult_data_third_person = {
        subject: 'Your potato',
        first_person: false,
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
        ]
    }

    var insult_data_first_person = R.assoc('first_person', true, insult_data_third_person)

    it('should return an object',
        () => expect(typeof verb(0, insult_data_third_person)).toEqual('object'))

    it('should leave the subject property alone',
        () => expect(verb(0, insult_data_third_person).subject).toEqual('Your potato'))

    it('should leave the first_person property alone',
        () => expect(verb(0, insult_data_third_person).first_person).toEqual(false))

    it('should add a "verb" property who\'s value is a string',
        () => expect(typeof verb(0, insult_data_third_person).verb).toEqual('string'))

    it('should add the verb part from the given index (third_person when first_person is false)',
        () => expect(verb(1, insult_data_third_person).verb).toEqual('is'))

    it('should add the verb part from the given index (first_person when first_person is true)',
        () => expect(verb(0, insult_data_first_person).verb).toEqual('smell like'))

    it('should add the plural value from the given index',
        () => expect(verb(2, insult_data_first_person).plural).toEqual(true))

    it('should remove the verbs property',
        () => expect(typeof verb(2, insult_data_first_person).verbs === 'undefined').toEqual(true))
})
