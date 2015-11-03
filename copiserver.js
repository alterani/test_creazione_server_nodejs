var server = require("net") ;
server.createServer(onRequest).listen(8080) ;
console.log("Server is up and running") ;
var clients = new Array() ;
function onRequest(socket) {
    clients.push(socket) ;
    socket.on('data', function(data) {
        for (var i = 0 ; i < clients.length ; i ++) {
            if (clients[i] == socket) continue ;
            clients[i].write(data) ;
        }
    }) ;
    socket.on('end', function() {
        var i = clients.indexOf(socket) ;
        clients.splice(i, 1) ;
    }) ;
}