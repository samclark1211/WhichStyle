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
app.get('/', index.index);
app.get('/guide/:guideName', index.guide);
app.get('/create', index.create);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('WhichStyle listening at http://%s:%s', host, port);

});
