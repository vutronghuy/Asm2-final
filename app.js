var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var homeRouter = require('./routes/home');
var app = express();

// khai báo router
var legoRouter = require('./routes/lego');
var neftRouter = require('./routes/neft');
var app = express();

//5. create dateformat
var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat')); 
hbs.registerHelper('equal', require('handlebars-helper-equal'))

//1. cấu hình body-parser(lấy input data từ form)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
// cần khai báo db name trong url. vd : "gch1103"
var db = "mongodb+srv://huyvtgch211136:vutronghuydeptrai@herry01.cxdxdld.mongodb.net/Product";
mongoose.connect(db)
.then(() => console.log('connect to db successed'))
.catch(() => console.log('connect to db failed'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/lego', legoRouter );
app.use('/neft', neftRouter);
// app.use('/home', homeRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 4001);

module.exports = app;
