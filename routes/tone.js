'use strict';

var express = require('express');
var router = express.Router();
//var knex = require('../db/knex.js');
var watson = require('watson-developer-cloud');
//var request = require('request');

router.post('/', function(req, res){

var tone_analyzer = watson.tone_analyzer({
  username: process.env.TONEUSERNAME,
  password: process.env.TONEPASSWORD,
  version: 'v3',
  version_date: '2016-05-19 '
});

tone_analyzer.tone({ text: req.body },
  function(err, tone) {
    if (err) {
      res.status(500).json({err:err});
    } else {
      res.json(tone);
    }
  });
});
