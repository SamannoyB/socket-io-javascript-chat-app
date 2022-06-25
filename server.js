// here all our server code shall go 
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/public');

const io = require('socket.io')(server);


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
});

server.listen(5000);
