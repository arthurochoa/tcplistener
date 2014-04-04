// net module which is use to communicate with our server
var net = require('net');

// create a client connection
var client_ctr = 0;

//create a server object
var server = net.createServer(function (socket) {

    client_ctr++;
    console.log("client " + client_ctr + " connected");

    // server definition
    socket.write("Connected to the server.\r\n");
    socket.pipe(socket);
});

server.listen(8080, "127.0.0.1");