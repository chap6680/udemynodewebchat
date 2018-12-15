var socket = io();

socket.on('connect', ()=>{
	console.log('connected to server');
	
/* 	socket.emit('welcomeMessage', {
		from: 'Admin',
		text: 'Welcome to our ChatRoom'
	})
 */
/* 	socket.broadcast.emit('welcomeMessage', {
		from: 'Admin',
		text: 'Hey we got a new user onboard'
	})
 */
/* 	socket.emit('createMessage', {
		from: 'talk@gmail.com',
		text: 'landed on mooon'
	}) */
});

socket.on('welcomeMessage', (welcomeMessage) => {
	console.log('welcome: ', welcomeMessage);
});


socket.on('disconnect', () => {
	console.log('disconnected from server');
});

socket.on('newMessage', (newMessage) => {
	console.log('Index message', newMessage);
});

