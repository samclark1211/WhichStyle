var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

//Set up routes import
var index = require("./routes/routes")

var app = express();
var router = express.Router();
//set body parser for json
app.use(bodyParser());

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'));

app.post('/create', function(req, res){
  res.render('create/createTemplate', {layout: false, data: req.body});
});

// apply the routes to our application

app.get('/create', index.create);
app.get('/', index.index);
app.get('/guide/:nextdirectory', index.index);

app.all('*', function(req, res) {
  res.render('404');
});
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
