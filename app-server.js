var express = require('express');
var app = express();

var connections = [];
var title = 'Default Classroom Session'

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

	socket.once('disconnect', function() {
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Socket Has Disconnected: %s sockets remaining.", connections.length);
	});

	socket.emit('welcome_user', {
		title: title
	});

	connections.push(socket);
    console.log("Socket Has Connected: %s sockets connected.", connections.length);
});

console.log("Classroom Server Running on Port 3000");