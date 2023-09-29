const io = require('socket.io')(8000)
const cors = require('cors'); // Require the cors package

// Use cors middleware to allow requests from all origins
io.use(cors());

const users = {};
io.on('connection',(socket) => {
    socket.on('new-user-joined',(name) => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    })
    socket.on('send',(message) => {
        socket.broadcast.emit('receive',{message: message,name:users[socket.id]})
    })
})