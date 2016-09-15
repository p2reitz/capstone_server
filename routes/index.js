'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var watson = require('watson-developer-cloud');


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


var personality_insights = watson.personality_insights({
  username: 'lSsThtJbFWaE',
  password: 'ab4e45fc-2ea3-4ba9-87b7-47f2cee09a21',
  version: 'v2'
});


module.exports = router;
