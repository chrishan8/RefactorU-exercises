$(function(){
	// connect the socket.io server
	var socket = io.connect('http://localhost');
	//define socket events
	socket.on('connect', function(){
		socket.emit('message', { my: 'data' });
	});
	// attach events
});
