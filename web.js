var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(32);
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    buffer.write(data, "utf-8");
  });
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});