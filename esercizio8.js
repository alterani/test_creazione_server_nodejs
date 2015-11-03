var http = require('http') ;

//Crea e mette in ascolto un webserver sulla porta 8080
var server = http.Server(function(req, res) {
    res.writeHead(200) ;
    res.end('Hello World!') ;
    console.log('--> Handled HTTP request') ;

    getData('www.hostingtalk.it', function(data) {
        console.log('--> User final result : ' + data) ;
    }) ;

}) ;
server.listen(8080) ;

/*getData('www.hostingtalk.it', function(data) {
    console.log('--> User final result : ' + data) ;
}) ;*/

function getData(target, cb) {
    http.get({host:target}, function(res) {
        afterHTTP(res, cb) ;
    }) ;
} ;
function afterHTTP(res, cb) {
    console.log('Server date : ' + res.headers.date) ;
    queryDB1(res.headers.date, function(db1_res) {
        afterDB1(res, db1_res, cb) ;
    }) ;
} ;
function afterDB1(res, db1_res, cb) {
    console.log('DB1 result  : ' + db1_res) ;
    queryDB2(res.headers.date, function(db2_res) {
        afterDB2(db2_res, cb) ;
    }) ;
} ;
function afterDB2(db2_res, cb) {
    console.log('DB2 result  : ' + db2_res) ;
    cb(db2_res) ;
} ;


function queryDB1(params, callback) {
    callback('Timestamp "' + params + '" is valid') ;
} ;
function queryDB2(params, callback) {
    callback('Inserted new record using timestamp: ' + params) ;
} ;
1