//server.js

// Loadin modules and creating the HTTP server
var url = require("url") ;
var http = require("http") ;
var server = http.createServer(onRequest).listen(8080) ;
var fs = require('fs') ;
console.log("Il Server NodeJs è attivo e avviato!") ;
console.log("///////////////////////////////////////") ;
console.log("/// SERVER CREATO DA ENRICO ALTERANI //");
console.log("///   TEST FUNZIONI NODE.JS //////////");
console.log("///////////////////////////////////////") ;
// 1st callback: on success
function onRequest(req, res) {
    var path = url.parse(req.url).pathname ;

    ///////////////////////////////////////
    //STAMPA PROPRIETA URL
    //////////////////////////////////////
    //in questa variabile metto dentro l'url
    /*
    var parsed = url.parse(req.url);
    //con questo comando scorriamo tutte le proprietà e le stampo in console
    for (e in parsed) console.log('parsed url property -> ' + e);
    */
    ///////////////////////////////////////
    // FINE STAMPA PROPRIETA URL
    //////////////////////////////////////

    console.log("Server parsed path: "  + path) ;
    switch (path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'}) ;
            res.end('Questa è la index') ;
            break;
        case '/prova.html':
            fs.readFile(__dirname + '/prova.html', function (err, content) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading file') ;
                }
            res.writeHead(200, {'Content-Type': 'text/html'}) ;
            res.end(content);  }) ;

            break;
        default: pageNotFound(res);
    }
}

// 2nd callback: on failure
function pageNotFound(res) {
    res.writeHead(404) ;
    res.end('404 - Not Found') ;
}




/* // ESEMPIO DI ACCESSO AL FILE
var fs = require('fs') ;
var app = require('http').createServer(mainHandler).listen(8080) ;
function mainHandler(req, res) {
    fs.readFile(__dirname + '/prova.html', function (err, content) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading file') ;
        }
        res.writeHead(200) ;
        res.end(content) ;
    }) ;
}
*/