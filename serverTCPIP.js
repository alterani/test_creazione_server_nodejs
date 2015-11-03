//serverTCPIP.js
var server = require("net") ;

// Questa istruzione avvia il servizio
server.createServer(onRequest).listen(8080) ;

console.log("Il Server NodeJs è attivo e avviato!") ;
console.log("//////////////////////////////////////////////") ;
console.log("/// SERVER TCP IP CREATO DA ENRICO ALTERANI //");
console.log("///   TEST FUNZIONI SOCKET NODE.JS ///////////");
console.log("//////////////////////////////////////////////") ;

var clients = new Array() ;

function onRequest(socket) {

    clients.push(socket);

    socket.on('data', function(data) {

        for(var i = 0; i < clients.length; i++){

           // stiamo facendo un loop sull'array dei socket
           // se siamo sul socket che ha generato l'evento salta l'istruzine
           if(clients[i] == socket) continue;
           clients[i].write(data);

       }
        //socket.write(data) ;
    }) ;
    socket.on('end', function(){
        var i = clients.indexOf(socket);
        clients.slice(i,1);
    });
}