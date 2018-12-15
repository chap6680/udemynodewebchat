var socket = io();

socket.on('connect', ()=>{
	console.log('connected to server');


/* 	socket.emit('createMessage', {
		from: 'talk@gmail.com',
		text: 'landed on mooon'
	}) */
});

socket.on('disconnect', () => {
	console.log('disconnected from server');
});

socket.on('newMessage', (newMessage) => {
	console.log('Index message', newMessage);
});

