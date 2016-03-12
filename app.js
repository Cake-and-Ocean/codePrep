var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').load();


var app = express();

// ======================================================
// database connection
// ======================================================
mongoose.connect(process.env.MONGO_URI);


// ======================================================
// set up directory access
// ======================================================
app.use('/public', express.static(process.cwd() + '/public'));


// ======================================================
// configure middleware for express application
// ======================================================
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/// ================================================================
// passport configuration and initialization
// ================================================================
require('./config/passport')(passport);
app.use(session({
    secret: 'secretCodeprepSecret',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// ================================================================
// setup routes and pass in app and passport
// ================================================================
require('./routes/index.js')(app, passport);


// ======================================================
// catch 404 and forward to error handler
// ======================================================
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// ======================================================
// error handler
// ======================================================
var path = process.cwd();
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.sendfile(path + '/public/error.html');
});


module.exports = app;
