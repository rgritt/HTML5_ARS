var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);
console.log("Created Server and Socket variables")

io.sockets.on('connection', function (socket) {
    console.log("Connected Socket: %s", socket.id);
});

console.log("Classroom server is running at 'http://54.174.142.181:3000'");