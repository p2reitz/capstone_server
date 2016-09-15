var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


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
