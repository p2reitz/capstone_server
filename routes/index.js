'use strict';

var express = require('express');
var router = express.Router();
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
//
//   var text = req.body;
//     console.log('req.body: ', req.body);
//
//   personality_insights.profile(text, function(error, response) {
//     if (error){
//       res.status(500).json({err:error});
//     }else{
//       res.json(response);
//     }
//   });
//
// });
//
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
