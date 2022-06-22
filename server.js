// here all our server code shall go 

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const path = require('path');

app.use(express.static(__dirname + '/public'));
// the problem was we shouldn't have given ./

const io = require('socket.io')(server);
const PORT = 5000;

io.on('connection', (socket) => {
    socket.on('join-user', (userMsg) => {
        io.emit('join-user',userMsg);
    });
    //we had called this function in the script.js which gave us the id of the user who has joined
});
io.on('connection', (socket) => {
    socket.on('chat message', (user, msg) => {
        io.emit('chat message', user, msg);
    })
})

server.listen(PORT, () => {
    console.log(`Server is Listening On Port ${PORT}`);
});