var http = require('http');
console.log('Il server è online');

//TASK1
// Cilco lento: ogni 3000 millisecondi esegue la funzione che scrive in console "Cliclo Lento
setInterval(function() {
    console.log('Ciclo Lento...') ;
}, 3000) ;

//TASK2
// Ciclo veloce: effettua una chiamata remota ogni secondo al sito e stampa l'header nella consola
setInterval(function() {
    http.get({host: 'www.hostingtalk.it' }, function(res) {
        console.log('HT connection: ' + res.headers.connection) ;
    }) ;
}, 1000) ;

//Crea e mette in ascolto un webserver sulla porta 8080
var server = http.Server(function(req, res) {
    res.writeHead(200) ;
    res.end('Hello World!') ;
    console.log('--> Handled HTTP request') ;
}) ;
server.listen(8080) ;

