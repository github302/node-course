const cp = require('child_process');
const net = require('net');
const child1 = cp.fork('./net-child.js');
const child2 = cp.fork('./net-child.js');

const server = net.createServer();
server.on("connection", function(socket) {
    socket.end('handled by parent');
})

server.listen(1337, function() {
    console.log('net server is listen at 1337')
    child1.send('server', server);
    child2.send('server', server);
})