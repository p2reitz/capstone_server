'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressJwt=require('express-jwt');
var logger = require('morgan');
var favicon = require('favicon');
var index = require('./routes/index');
var api = require('./routes/api');
require('dotenv').config();

var users = require('./routes/users');
var signup = require('./routes/signup');
var insight = require('./routes/insight');
var tone = require('./routes/tone');
var signin = require('./routes/signin');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//app.use(cors());

app.use('/', index);
app.use('/api', expressJwt({secret:'secret'}), api);
app.use('/insights', insight);
app.use('/tone', tone);
app.use('/signup', signup);
app.use('/users', expressJwt({secret:process.env.SECRET}), users);
app.use('/signin', signin);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log(err);
        res.status(err.status || 500).json(err);
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Application is running on port:', port);
});
