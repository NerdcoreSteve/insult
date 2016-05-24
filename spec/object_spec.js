var R = require('ramda')

describe('object', () => {  
    var object = require('../front-end/js/object.js')

    var insult_data = {
        subject: 'Your potato',
        first_person: false,
        verb: 'smells like',
        plural: true,
        objects: [
            {
                singular: 'a hamster',
                plural: 'hamsters'
            },
            {
                singular: 'a fuzzy bunny',
                plural: 'fuzzy bunnies'
            },
            {
                singular: 'an elderberry',
                plural: 'elderberries'
            },
            {
                singular: 'a beehive',
                plural: 'beehives'
            }
        ]
    }

    var non_plural_insult_data =
        R.evolve(
            {
                subject: () => 'You',
                first_person: () => true,
                verb: () => 'are',
                plural: () => false,
            },
            insult_data)

    it('should return an object',
        () => expect(typeof object(0, insult_data)).toEqual('object'))

    it('should remove objects property',
        () => expect(typeof object(1, insult_data).objects).toEqual('undefined'))

    it('should add an object part from the given index (plural when the plural property is true)',
        () => expect(object(0, insult_data).object).toEqual('hamsters'))

    it('should add an object part from the given index (non-plural when the plural property is false)',
        () => expect(object(0, non_plural_insult_data).object).toEqual('a hamster'))
})
