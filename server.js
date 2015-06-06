var express = require('express'),
    path = require('path'),
    port = process.env.PORT || 3000,
    app = express();

app.use(express.static(__dirname + '/'));

app.get('*', function(request, response){
  response.sendFile(path.join(__dirname, './', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
