var express = require('express');
var exphbs  = require('express-handlebars');

//Set up routes import
var index = require("./routes/routes")

var app = express();
var router = express.Router();

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views')
// apply the routes to our application
app.get('/', index.index);


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('WhichStyle listening at http://%s:%s', host, port);

});
