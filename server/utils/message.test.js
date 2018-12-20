var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Gasper', 'Welcome');
        expect(message.from).toBe('Gasper');
        expect(message.text).toBe('Welcome');
        expect(message.createdAt).toBeA('number');
    });
});