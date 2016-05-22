var R = require('ramda')

describe('object', () => {  
    var object = require('../front-end/js/object.js')

    var insult_data = {
        subject: 'Your potato',
        first_person: false,
        verb: 'smells like',
        plural: true,
        objects: [
            'a hamster',
            'elderberries'
        ]
    }

    it('should return an object',
        () => expect(typeof object(0, insult_data)).toEqual('object'))

    it('should remove objects property',
        () => expect(typeof object(1, insult_data).objects).toEqual('undefined'))

    it('should add an object part from the given index',
        () => expect(object(0, insult_data).object).toEqual('a hamster'))
})
