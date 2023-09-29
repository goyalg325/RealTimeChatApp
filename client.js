const socket = io('http://localhost:8000');
console.group(`server started`)
const form = document.getElementById('send-box');
const msg = document.getElementById('msg')
const msgcontainer = document.querySelector(".container")
const apend = (msg,pos) => {
    console.log('server run')
    const msgElement = document.createElement("div")
    msgElement.innerText = msg;
    // msgElement.classList.add('msg');
    msgElement.classList.add(pos);
    msgcontainer.append(msgElement);

}
const name = prompt("Username");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = msg.value;
    apend(`You: ${message}`, 'right');
    socket.emit('send', message);
    msg.value = ''; // Clear the input field after sending the message
});

socket.emit('new-user-joined', name);

socket.on('user-joined',name => {
    apend(`${name} has joined the chat`,'left');
})