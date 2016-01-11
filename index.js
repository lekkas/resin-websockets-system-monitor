var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = 80;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


setInterval(function() {
  io.emit('data', Math.random());
}, 200)

setInterval(function() {
  io.emit('cpu', Math.floor(Math.random() * 100));
}, 200)

http.listen(PORT, function() {
  console.log('listening on *:' + PORT);
});
