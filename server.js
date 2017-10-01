var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var stringify = require('json-stringify');

var config={
  user:'rahulppkrpp',
  database:'rahulppkrpp',
  host:'localhost',
  port:'5432',
  password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var Pool=new Pool(config);
app.get('/test-db', function (req, res) {
  Pool.query('SELECT * FROM info',function (err,result){
    if(err){
      res.status(500).send(err.toString());
    }else{
      res.send(JSON.stringify(result));
    }
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/img.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img.jpg'));
});

app.get('/ui/picture2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'picture2.png'));
});

app.get('/ui/picture1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'picture1.png'));
});

app.get('connect.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'connect.php'));
});

app.get('/1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.html'));
});

app.get('/2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.html'));
});

var counter=0;
app.get('/counter', function (req, res){
  counter=counter+10;
  while(counter==100)
  {res.sendFile(path.join(__dirname, 'ui', 'index.html'));return;}
  res.send(counter.toString());
});

app.get('/login', function (req, res) {
  res.send('hello');
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 82;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

/*var express = require('express');
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
*/