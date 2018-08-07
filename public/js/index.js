var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        to: 'steven@example.com',
        text: 'Hey this is Jeff again'
    });    
});

socket.on('disconnected', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log(message);
});