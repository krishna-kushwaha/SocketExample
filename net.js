const server = require('net').createServer();
server.on('connection',socket => {
    console.log('Connection established');
    socket.write('Welcome to new client');
    socket.on('data', data => {
        console.log('buffer data:', data);
        socket.write('Recieved data: ', data);
        socket.write(data);
    });
    socket.on('end', () => {
        console.log('Client disconnected')
    })
});

server.listen(8000, () => {
    console.log('Listening on port 8000');
})
