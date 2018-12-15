
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

console.log(publicpath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicpath));

io.on('connection', (socket) => { 
	console.log('New user connected');

	socket.emit('newEmail', {
		from: 'd3@gmail.com',
		text: 'tasdfsald',
		createAt:123
	});
	
	socket.emit('newMessage', {
		from: 'd.com',
		text: 'first text message',
		createAt:123
	});

	//listening for createEmail from client
	socket.on('createEmail', (newEmail) => {
		console.log('createEmail', newEmail);
	});

	//listening for createMessage from client
	socket.on('createMessage', (createMessage) => {
		console.log('messages: ', createMessage);
	});

	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});

server.listen(port, () => {
	console.log(`Server started on ${port}`);
});