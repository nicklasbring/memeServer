var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

if(req.url != '/favicon.ico'){

    res.writeHead(200, {'Content-Type': 'text/html'});
    var files = fs.readdirSync('./meme/'); 
    var string = "";
    files.forEach(file => {
        string += "<a href='.?meme=" + file + "'>" + file + "</a>" + "<br>";
    });
    res.end(string);

}

}).listen(8080);
console.log("Server is running!")
