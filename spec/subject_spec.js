describe('subject', () => {  
    var subject = require('../front-end/js/subject.js')
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
        ]
    }

    it('should return an object',
        () => expect(typeof subject(0, insult_data)).toEqual('object'))

    it('should add a "subject" property who\'s value is a string',
        () => expect(typeof subject(0, insult_data).subject).toEqual('string'))

    it('should add a "first_person" property who\'s value is a boolean',
        () => expect(
            typeof subject(0, insult_data).first_person).toEqual('boolean'))

    it('should remove "subjects" property',
        () => expect(typeof subject(0, insult_data).subjects).toEqual('undefined'))

    it('should add the subject part from the given index',
        () => expect(subject(1, insult_data).subject).toEqual('Your mother'))

    it('should add the first_person value from the given index',
        () => expect(subject(2, insult_data).first_person).toEqual(false))
})
