var socket = io();

//puts message in the browser's console

socket.on('connect', () => {
	console.log('connected to server');
});

socket.on('welcomeMessage', (welcomeMessage) => {
	console.log('welcome: ', welcomeMessage);
});

socket.on('newMessage', (newMessage) => {
	console.log('Index message', newMessage);
});

socket.on('returnCreatedMessage', (newMessage) => {
	console.log('returning message', newMessage);
});

socket.on('disconnect', () => {
	console.log('disconnected from server');
});
