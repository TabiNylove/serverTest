//http require
var http = require('http');

//specify port to listen on
var port1 = 8000;
var port2 = 8010;
//===================================================
// SERVER 1
// when localhost:8000 is hit by traffic, run this---
function handler1(request, response) {
	response.end("You're awesome!" + request.url);
}
// create a server that functions with requestHandler as the main function
var server1 = http.createServer(handler1);

// Directs the server to listen for http request on PORT(1001)
// Also prints the server
server1.listen(port1, function() {
	console.log('server1 is listening on localhost:%s', port1);
});
//===================================================
// SERVER 2
function handler2(request, response) {
	response.end("You suck");
}
var server2 = http.createServer(handler2);

server2.listen(port2, function() {
	console.log('server2 is listening on localhost:%s', port2);
});
//===================================================
