var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
/* 로그인 세션 */
var session = require('express-session');     // express-session 모듈 사용

var app = express();

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');


//var routes = require('./routes/index');
//var users = require('./routes/users');

// express-session 모듈 사용
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));    

// Configure mongoose
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function() {
  console.log("DB connected");
});

mongoose.connect("mongodb://scott:tiger@ds019633.mlab.com:19633/mvnoworld");
// mongoose.connect("mongodb://scott:tiger@ds011963.mlab.com:11963/testmg");

// load models
var User = require('./models/user');
//20160609 load prod models
var Prod = require('./models/prod');
//20160615 load cust models
var Cust = require('./models/cust');

// 20160707 zzihi
// 번호자원
var Numrsc = require('./models/numrsc');
// 이벤트관리_골드번호이벤트
var Evntgold = require('./models/evntgold');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);



// // Configure router
// 20160723 zzihi
var router = require('./routes/intro')(app, User);
var router_login = require('./routes/index')(app, User);
// //20160602 wonk777
// var router_cust = require('./routes/cust_info/custInfo')(app, Cust);
// //20160609 pyangru
// var router_prod = require('./routes/prod_chg/prodChg')(app, User, Prod);
// //20160712 ljw

// Configure router
//20160602 wonk777
var router_cust = require('./routes/cust_info/custInfo')(app, Cust);
//20160609 pyangru
//var router_prod = require('./routes/prod_chg/prodChg')(app, User, Prod);
//20160713 pyangru
//요금제조회
//var router_prod = require('./routes/prod_chg/prodChg')(app, Prod);
var router_prod = require('./routes/prod_chg/prodChg')(app, Cust, Prod);

//20160712 ljw
var router_main = require('./routes/main')(app, Cust);

// 20160707 zzihi
// 번호자원
var router_numMng = require('./routes/num_mng/numMng')(app, Numrsc);
// 이벤트관리_골드번호이벤트
var router_evntGoldMng = require('./routes/evnt_mng/evntGoldMng')(app, Evntgold);


// Run server
var port = process.env.PORT || '3000';

var server = app.listen(port, function() {
  console.log("Express server has startd on port " + port);
});





module.exports = app;