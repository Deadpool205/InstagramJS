var http = require("http");
var fs   = require('fs');

var data = fs.readFileSync('input.txt');
console.log("Synchronus read: ",data.toString());

http.createServer(function(request, response)
    {
        response.writeHead(200, 
            {
                'Content-Type': 'text/plain'
            });
            response.end('Hello\n');
    }).listen(8080);

    console.log('Server is running on port 8080');