'use strict';

var express = require('express');
var router = express.Router();


router.get('/restricted', function (req, res) {
  res.json(req.user);
});



module.exports = router;
