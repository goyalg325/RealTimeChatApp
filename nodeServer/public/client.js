// const socket = io('http://localhost:8000');
// console.group(`server started`)
// const form = document.getElementById('send-box');
// const msg = document.getElementById('msg')
// const msgcontainer = document.querySelector(".container")
// const apend = (msg,pos) => {
//     console.log('server run')
//     const msgElement = document.createElement("div")
//     msgElement.innerText = msg;
//     // msgElement.classList.add('msg');
//     msgElement.classList.add(pos);
//     msgcontainer.append(msgElement);

// }
// const name = prompt("Username");
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const message = msg.value;
//     apend(`You: ${message}`, 'right');
//     socket.emit('send', message);
//     msg.value = ''; // Clear the input field after sending the message
// });

// socket.emit('new-user-joined', name);

// socket.on('user-joined',name => {
//     apend(`${name} has joined the chat`,'left');
// })
const apend = (msg, pos) => {
    const msgElement = document.createElement("div");
    msgElement.innerText = msg; // Remove the quotes around "msg"
    msgElement.classList.add(pos); // Use the variable 'pos' instead of the string "pos"

    const msgContainer = document.getElementById('msgcontainer'); // Use 'getElementById' instead of 'getElementsByID'
    msgContainer.appendChild(msgElement); // Correct the variable name to 'msgContainer'
}


const socket = io() 
const sendBtn = document.getElementById('sendBtn')
const messageInput = document.getElementById('message')
socket.on("message",(message) => {
    // jo bhi message aaya hai uska kya krna hai
    apend(message,'left');
})
sendBtn.addEventListener("click",(e) => {
    const message = messageInput.value ;
    messageInput.value = '';
    
    console.log(message);
    // my own expt code
    // emit se hmne sbke sys pe message bhej diya 
    //but apne system pe kaise dikhega wo message vo part shayad yahan
    apend(message,'right')
    socket.emit("user-message",message);
   
})