/////////////////
// simplemath.js
/////////////////

var sum = function(a,b) {
	//si definisce una fuzione
	return a+b;
}

var product = function(a,b){
	return a*b;

}

var private = function(a,b){
	return "funzione privata";
}

exports.sum = sum;
exports.product = product;