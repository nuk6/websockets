const socket = io("http://localhost:4000");

const elem = document.getElementById('client-total');
const send = document.getElementById('message-form');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');

const messageContainer = document.getElementById('message-container');

socket.on('clients-total', (data) => {
    elem.textContent = `Total CLients = ${data}`;
    console.log(data);
})

const handleSubmit = () => {
    const whatToSend = {
        sender : nameInput.value,
        message: formInput.value,
        dateTime: new Date()
    }
    socket.emit('messageFromAClient', whatToSend);
}

send.addEventListener('submit', handleSubmit);


socket.on('messageFromAnotherClient', (data) => {
    const elem = document.createElement('p');
    elem.innerText = `${data.sender} says ${data.message}`;
    messageContainer.appendChild(elem);
})