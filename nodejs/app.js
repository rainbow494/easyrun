
var http = require('http');
var url = require('url');

var test = new Date();

var server = http.createServer(function (req,res) {

    //console.log(url.parse(req.url, true));
    console.log(2);

    var pathname = url.parse(req.url, true).pathname;

    res.writeHead(200,{'Content-Type':'application/json'});

    switch (pathname) {
        case '/api/parsetime':
        res.write(JSON.stringify({
            "hour":  "test1"
        }));
        break;
        case '/api/unixtime':
        res.write(JSON.stringify({
            "unixtime": "test2"
        }));
        break;
        default:
    }

    res.end();
})
console.log(2);
server.listen(1025);
