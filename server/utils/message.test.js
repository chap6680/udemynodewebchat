var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => { 
	it('should generate correct message object', () => {
		var from = 'jen';
		var text = 'test message';
		var message = generateMessage(from, text);
		console.log('message: ', message);
//		expect(message.createdAt).toBeA('number');
		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({
			from,
			text
		})
			
//store res in var
		// aseert from match
		// assert text matcch
		//assert create at is number
	});
})