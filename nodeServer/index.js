const http = require("http")
const express = require("express")
const {Server} = require("socket.io")
const path = require('path')
const cors = require('cors');
const app = express()
const server = http.createServer(app)
const io = new Server(server)
// socket.io
io.on("connection",(socket) => {
    console.log("a new user has connected",socket.id)
    socket.on("user-message",(message) => {
        socket.broadcast.emit("message",message)
    })
})
app.use(cors());
app.use(express.static(path.resolve("./public")))
app.get("/",(req,res) => {
    return res.sendFile(path.resolve("./public/index.html"))
})
server.listen(8000,() => {
    console.log('server started at port 8000')
})

// const io = require('socket.io')(8000)
// const cors = require('cors'); // Require the cors package

// // Use cors middleware to allow requests from all origins
// io.use(cors());

// const users = {};
// io.on('connection',(socket) => {
//     socket.on('new-user-joined',(name) => {
//         users[socket.id] = name;
//         socket.broadcast.emit('user-joined',name);
//     })
//     socket.on('send',(message) => {
//         socket.broadcast.emit('receive',{message: message,name:users[socket.id]})
//     })
// })