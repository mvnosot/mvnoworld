var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');


//var routes = require('./routes/index');
//var users = require('./routes/users');

// Configure mongoose
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function() {
  console.log("DB connected");
});

mongoose.connect("mongodb://scott:tiger@ds019633.mlab.com:19633/mvnoworld");

// load models
var User = require('./models/user');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// add bodyParser - get data from body(view) by json
app.use(bodyParser.json());

//app.use('/', routes);
//app.use('/users', users);


// Configure router
var router = require('./routes')(app, User);

// Run server
var port = process.env.PORT || '3000';

var server = app.listen(port, function() {
  console.log("Express server has startd on port " + port);
});


module.exports = app;