const http = require("http");
// const os = require("os");
const text = require("./personalmodule.js");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/html"});
    response.write(`<h2>${text}</h2>`);
    response.end();
}).listen(8000);
console.log("Server is listening to port http://localhost:8000/");

