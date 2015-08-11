
var http = require('http');
var url = require('url');

var apiKey = 'key-ea2e3ab5ee11c200168588fc18acf3a3';
var domain = 'easyrun.hk';
//var apiBaseUrl = 'https://api.mailgun.net/v3/easyrun.hk';

var mailgun = require('mailgun-js')({apiKey: apiKey,domain:domain});
var sendmail = function(){
    var data = {
      from: 'paul.huang@easyrun.hk',
      to: 'paul.huang@easyrun.hk',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
    };

    mailgun.messages().send(data, function (error, body) {
      console.log(error);
      console.log(body);
    });
}

var server = http.createServer(function (req,res) {

    //console.log(url.parse(req.url, true));
    var pathname = url.parse(req.url, true).pathname;

    res.writeHead(200,{'Content-Type':'application/json'});

    switch (pathname) {
        case '/api/parsetime':
        sendmail();
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

server.listen(1025);
