//http://www.hostingtalk.it/lezione-9-smistamento-delle-richieste-http_-c000000H2/
//module-02.js

var HttpDispatcher = function() {
    this.leadingName = "Dispatcher >> " ;
    this.list = { get: [], post: [] } ;
    this.addListener = function(method, url, cb) {
        this.list[method].push( {cb: cb, url: url} ) ;
    }
}
HttpDispatcher.prototype.showList = function() {
    console.log(this.leadingName + "Registered listeners :n") ;
    for (method in this.list) {
        console.log(method + " --> " + this.list[method].length + " listeners") ;
        for (listener in this.list[method]) {
            console.log(listener + " : " + this.list[method][listener].url +
                " --> " + this.list[method][listener].cb) ;
        }
    }
}

HttpDispatcher.prototype.dispatch = function(req, res) {
    var parsedUrl = require('url').parse(req.url, true).pathname ;
    var method = req.method.toLowerCase() ;
    for (i in this.list[method]) if (this.list[method][i].url == parsedUrl) {
        this.list[method][i].cb(req, res) ;
    }
}


module.exports = new HttpDispatcher() ;
