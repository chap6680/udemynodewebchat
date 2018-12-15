
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
	//puts log entry on the server console
	console.log('New user connected');
	
	//sends info on connection
  	socket.emit('newMessage', {
		from: 'd.com',
		text: 'first text message',
		createAt:123
	});
 
	//sends info on connection
 	socket.emit('welcomeMessage', {
		from: 'Admin',
		text: 'Welcome to our ChapApp'
	});

	//sends info on connection - to all but the user just connected
	socket.broadcast.emit('welcomeMessage', {
		from: 'Admin',
		text: 'somones here'
	});
	
	//listening for createMessage from client 
	socket.on('createMessage', (message) => {
		console.log('messages: ', message);
		
		//returns info 
		io.emit('returnCreatedMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});
		 
	});

	//puts log entry on the server console
	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});

server.listen(port, () => {
	console.log(`Server started on ${port}`);
});