var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//expose the files in the public folder so that the HTML can use it
app.use(express.static('public'));

//this is to show a route that will be handled by node
app.get('/test', function(req, res){
  res.send('test');
});

app.post('/signin', function(req, res){
  console.log(req.body.email);
  console.log(req.body.password);
  res.sendStatus(200);
});

//any request that doesn't match the specified routes made in node will be
//handled by angular in the frontend.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Listen for requests at this port
app.listen(9001, function(){
  console.log('listening on localhost:9001');
});
