'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var watson = require('watson-developer-cloud');
var request = require('request');

router.post('/', function(req, res){
var personality_insights = watson.personality_insights({
    username: process.env.PIUSERNAME,
    password: process.env.PIPASSWORD,
    version: 'v2'
 });

 personality_insights.profile(params, function(error, response) {
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);

});

// router.post('/', function(req, res){
//   console.log('index.js: ', req.body);
// request('https://gateway.watsonplatform.net/personality-insights/api', function (error, response, body) {
//   if (!error && response.statusCode === 200) {
//     console.log(body); // Show the HTML for the Google homepage.
//     res.json({body:body});
//   }
// });
// });


router.get('/posts', function (req, res) {
  knex('posts')
  .then(function(data){
    console.log(data);
    res.json(data);
  })
  .catch(function(err){
    res.json(err);
  });
});


// var personality_insights = watson.personality_insights({
//   username: 'lSsThtJbFWaE',
//   password: 'ab4e45fc-2ea3-4ba9-87b7-47f2cee09a21',
//   version: 'v2'
// });


module.exports = router;
