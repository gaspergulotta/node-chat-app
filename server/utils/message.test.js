var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Gasper', 'Welcome');
        expect(message.from).toBe('Gasper');
        expect(message.text).toBe('Welcome');
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var message = generateLocationMessage('Gasper', 1, 2);
        expect(message.from).toBe('Gasper');
        expect(message.url).toBe('https://www.google.com/maps?q=1,2');
        expect(message.createdAt).toBeA('number');
    });
});