var http = require('http');
var fs = require('fs');


fs.readFile('meme/vegan.jpeg', function(err, data) {
    if (err) throw err;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data);
}).listen(8080);
console.log("Server is running!")
});