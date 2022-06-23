// here all our server code shall go 

const io = require('socket.io')('http://spotchat-chat-app.herokuapp.com');


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
