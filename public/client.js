const socket = io("http://localhost:4000");

socket.on('clients-total', (data) => {
    const elem = document.getElementById('client-total');
    elem.textContent = `Total CLients = ${data}`;
    console.log(data);
})