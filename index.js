var express = require('express');
var app = express();
var port = 8080;

app.get('/', function (req, res) {
    res.send('Hello World from second test!')
});

app.listen(port, function () {
    console.log("Port:", port);
});
