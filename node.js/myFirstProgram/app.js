"use strict";

//imports the http module and references it with the http variable
const http = require("http");

//assigns the port and hostname to a constant variable
const port = 3000;
const hostname = "localhost"

//creates a server with parameters for the request and response objects
const server = http.createServer(function(req, res) {
    //code to execute when a request comes in

    //prints the request url to the console using a property of the request object
    console.log("Recieved an incoming request.");
    console.log(req.url);

    //sets the response objects statusCode property (200 means OK)
    res.statusCode = 200;
    
    //sets the response header using the setHeader method
    res.setHeader("Content-Type", "text/html");

    //uses the response.end function to send the response back to the client and close the connection
    res.end("<h1>Hello World!</h1>\n");
});



//use the server objects listen method to start it up by giving it a port to listen on and a callback function to execute
server.listen(port, function() {
    //code to execute when server starts up
    console.log('Server running at http://' + hostname + ':' + port + '/');
});