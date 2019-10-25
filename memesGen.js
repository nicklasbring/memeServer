var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {

if(req.url != '/favicon.ico'){
    var q = url.parse(req.url, true);
    console.log(q);

    if(req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var files = fs.readdirSync('./meme/'); 
    var string = "";
    files.forEach(file => {
        string += "<a href='.?meme=" + file + "'>" + file + "</a>" + "<br>";
    });
    res.end(string);
    }else if(q.search != null){
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        fs.readFile('meme/' + q.query.meme, (err, image)=>{
            res.end(image)
        });
    }
    
    else if(req.url != '/') {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        fs.readFile(req.url.substring(1), (err, image)=>{
            res.end(image)
    });
}

}

}).listen(8080);
console.log("Server is running!")
