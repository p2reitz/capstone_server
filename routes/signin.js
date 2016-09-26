
'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


router.post('/', function(req, res, next){
  console.log('at the server');
  console.log('req.body.email: ', req.body.email);
  knex('users')
  .where('email', req.body.email)
  .then(function(data){
    bcrypt.compare(req.body.password, data[0].password, function(err, result){
      if(result){
        var profile= {
          id: data[0].id,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          email:data[0].email
      };
      var token =jwt.sign(profile, process.env.SECRET);
      res.status(200).json({
        token:token
        });
      }
      else {
        console.log('post-error: ', err);
      }
    });
  })
  .catch(function(err){
    console.log('catch-error: ', err);
  });
});




module.exports = router;
