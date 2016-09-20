'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressJwt=require('express-jwt');
var logger = require('morgan');
var index = require('./routes/index');
require('dotenv').config();

var users = require('./routes/users');
var submit = require('./routes/submit');
var insight = require('./routes/insight');
var tone = require('./routes/tone');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


// app.use(function(req, res, next){
//   console.log(req.url, req.method);
//   next();
// });
app.use('/', index);
app.use('/insights', insight);
app.use('/tone', tone);
app.use('/submit', submit);
app.use('/users', expressJwt({secret:process.env.SECRET}), users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
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
