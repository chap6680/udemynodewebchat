var socket = io();

socket.on('connect', ()=>{
	console.log('connected to server');

	//send info to the server
	socket.emit('createEmail', {
		to: 'asdf@dasd.com',
		text: 'text'
	});

	socket.emit('createMessage', {
		from: 'talk@gmail.com',
		text: 'landed on mooon'
	})
});

socket.on('disconnect', () => {
	console.log('disconnected from server');
});

socket.on('newMessage', (newMessage) => {
	console.log('Index message', newMessage);
});

socket.on('newEmail', (email) => {
	console.log('new log', email);
});

