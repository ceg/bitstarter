var express = require('express');
var fs  =  require('fs')
var app = express.createServer(express.logger());
var bufferIndexHtml = fs.readFileSync("index.html")
var stringOfBuffer  = bufferIndexHtml.toString("utf-8")


app.get('/', function(request, response) {
  response.send(stringOfBuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
