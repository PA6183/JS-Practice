const http = require("http");
const os = require("os");
const path = require("path");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/html"});
    response.write(`<h1>System info</h1>
    <p>Current user name: ${os.userInfo().username}</p>
    <p>OS type: ${os.type()}</p>
    <p>System work time: ${(os.uptime()/60).toFixed(2)} minutes</p>
    <p>Current work directory: ${path.dirname(__filename)}</p>
    <p>Server file name: ${path.basename(__filename)}</p>`);
    response.end();
}).listen(5000);
console.log("Server is listening to port http://localhost:5000/");

