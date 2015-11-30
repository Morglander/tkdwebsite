var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates')

app.get('/', function(req, res) {
  res.render('layout');
});

app.get('/home', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/tkd', function(req, res) {
	res.render('tkd');
});


app.get('/contact', function(req, res) {
	res.render('contact');
});

app.listen(3000, function() {
	console.log('App running: 3000')
});