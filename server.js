var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/style1.css', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'style1.css'));
});
app.get('/Dishes.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'Dishes.html'));
});
app.get('/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'style2.css'));
});
app.get('/Mutta Mala.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'Mutta Mala.html'));
});
app.get('/Prawn Roast.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'Prawn Roast.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
