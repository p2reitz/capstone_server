'use strict';

var express = require('express');
var router = express.Router();
//var jwt = require('jsonwebtoken');
//var knex = require('../db/knex.js');
//var watson = require('watson-developer-cloud');
//var request = require('request');

// router.post('/', function(req, res){
//
//   var personality_insights = watson.personality_insights({
//     username: process.env.PIUSERNAME,
//     password: process.env.PIPASSWORD,
//     version: 'v2'
//   });
// });
//
// router.post('/authenticate', function(req, res, next) {
//   if (!(req.body.email === profile.email && req.body.password === profile.password)) {
//     res.status(401).send({message:'Wrong user or password'});
//     return;
//   }
// });
//   var profile = {
//     first_name: 'John',
//     last_name: 'Doe',
//     email: 'john@doe.com',
//     id: 123
//   };
//
//   // We are sending the profile inside the token
//   var token = jwt.sign(profile, 'secret');
//   res.status(200).json({ token: token });
// });



//
// router.get('/posts', function (req, res) {
//   knex('posts')
//   .then(function(data){
//     console.log(data);
//     res.json(data);
//   })
//   .catch(function(err){
//     res.json(err);
//   });
// });


module.exports = router;
