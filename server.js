var express = require('express');
var fs = require('fs');
var http= require('http');
var app = express();
var port = process.env.PORT || 3000;
var exec = require("child_process").exec;
var obj;
app.use(express.static(__dirname));

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/chart',function(req,res){
 	res.render('index',{});
});



fs.readFile(__dirname +'/chart/data/data.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  app.get('/chart/data',function(req,res){
  	res.send(obj);
  })
});


app.get('/pagephp', function(req, res){exec("php main.php", function (error, stdout, stderr) {res.send(stdout);});});
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
