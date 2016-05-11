describe('property_list_length', () => {  
    var property_list_length = require('../front-end/js/property_list_length.js')

    it('should return an int',
        () => expect(
            typeof property_list_length(
                {array: [1, 2, 3, 4]},
                'array'))
            .toEqual('number'))
})
