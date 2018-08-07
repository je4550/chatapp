const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.emit('newMessage', {
        from: 'Jeff',
        text: 'Hey',
        createdAt: 456
    });

    socket.on('createMessage', (newMessage) => {
        console.log(newMessage);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is listening on ${port}.`);
});