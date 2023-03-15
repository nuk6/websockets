const { json } = require('express');
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`💬 Server Up Realllyyy!!`);
});

const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

const totalSocketsConnected = {};

io.on('connection', (clientSocket) => {
    const clientSocketId = clientSocket.id;
    console.log(`Client Socket is ${clientSocketId} with total ${Object.keys(totalSocketsConnected).length+1} clients`);
    totalSocketsConnected[clientSocketId] = true;
    
    clientSocket.on('disconnect', () => {
        console.log(`Client with id ${clientSocketId} left`)
        delete totalSocketsConnected[clientSocketId]
    })

})