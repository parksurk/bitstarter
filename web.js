var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var data = fs.readFileSync('index.html', 'utf8');
console.log("index.html data : " + data);

var buffer = new Buffer(fs.readFileSync('index.html', 'utf8'), 'utf-8');

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
