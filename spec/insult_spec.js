describe('insult', () => {  
    var insult = require('../front-end/js/insult.js')
    var insult_data = require('../front-end/js/insult_data.js')

    it('should return a string',
        () => expect(typeof insult(insult_data, 1, 2, 0)).toEqual('string'))
})
