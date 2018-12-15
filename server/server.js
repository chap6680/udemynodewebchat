
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
	
/* 	socket.emit('newMessage', {
		from: 'd.com',
		text: 'first text message',
		createAt:123
	});
 */
/* 	socket.emit('Welcome', {
		from: 'Admin',
		text: 'Welcome to our ChapApp'
	});
 */
	//listening for createMessage from client
	socket.on('createMessage', (message) => {
		console.log('messages: ', message);
		
		//io.emit and io.broadcast.emit
		//when newMessage is called - everyone gets this message
		 		
			io.emit('newMessage', {
				from: message.from,
				text: message.text,
				createdAt: new Date().getTime()
			});
		 

		//adding broadcast sends message to everyone except for the sender
		/* 		io.broadcast.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		}); */
	});

	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});

server.listen(port, () => {
	console.log(`Server started on ${port}`);
});