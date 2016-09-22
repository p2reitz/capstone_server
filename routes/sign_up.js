'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

router.post('/sign_up', function(req, res, next) {
    bcrypt.hash(req.body.password, 8, function(err, hash){
      if(err){
        console.log(err);
      } else if(hash){
        knex('users').insert({
          first_name: req.body.first_name.toLowerCase(),
          username: req.body.last_name.toLowerCase(),
          email: req.body.email,
          password: hash
          })
          .then(function(data) {
          console.log('sign_up.js: data, ', data);
          var profile = {
              id: data[0].id,
              first_name: data[0].first_name,
              last_name: data[0].last_name,
              email: data[0].email
          };
          console.log('sign_up.js: profile, ', profile);
          var token = jwt.sign(profile, process.env.SECRET, {expiresIn: 432000});
          res.status(200).json({
              token: token
          });
            res.send(data);
        })
        .catch(function(err) {
            res.send(err);
        });
      }
    });
});






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



module.exports = router;
