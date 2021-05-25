const express = require('express');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 7791);


app.get('/', function(req, res) {
  res.render("main.handlebars")
});
app.get('/snackList', function(req, res) {
  res.render("snackList.handlebars")
});
app.get('/snackLife', function(req, res) {
  res.render("snackLife.handlebars")
});
app.get('/snackSubmit', function(req, res) {
  res.render("snackSubmit.handlebars")
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on port:' + app.get('port') + '; press Ctrl-C to terminate.');
});
