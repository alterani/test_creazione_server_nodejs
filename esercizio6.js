//http://www.hostingtalk.it/lezione-6-creazione-di-nuovi-moduli_-c000000GM/

var mine = require('./module_01') ;
var url = 'http://www.hostingtalk.it' ;
console.log( mine.getHostName(url) ) ;
console.log( mine.getProtocol(url) ) ;
// La prossima lancia un errore!
// console.log( mine.parse(url) ) ;