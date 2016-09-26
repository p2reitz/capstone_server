'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
    knex.select('email').from('users').where('email', req.body.email)
        .then(function(data) {
            if (data.length === 0) {
                console.log('data.length: ', data.length);
                console.log('req.body: ', req.body);
                bcrypt.hash(req.body.password, 8, function(err, hash) {
                    console.log('hash: ', hash);
                    if (err) {
                        console.log('error: ', err);
                    } else {
                        knex('users').insert({
                                first_name: req.body.first_name.toLowerCase(),
                                last_name: req.body.last_name.toLowerCase(),
                                email: req.body.email,
                                password: hash
                            }).returning('*')
                            .then(function(data) {
                                console.log('signup.js: data, ', data);
                                var profile = {
                                    id: data[0].id,
                                    first_name: data[0].first_name,
                                    last_name: data[0].last_name,
                                    email: data[0].email
                                };
                                console.log('signup.js: profile, ', profile);
                                var token = jwt.sign(profile, process.env.SECRET, {
                                    expiresIn: 432000
                                });
                                res.json({
                                    token: token
                                });
                            }).catch(function(err) {
                                console.log(err);
                                res.status(500).send("Oops, something went wrong");
                            });
                    }
                });

            } else {
                res.send('taken');
            }
        });
});



// router.post('/authenticate', function(req, res, next) {
//     if (!(req.body.email === profile.email && req.body.password === profile.password)) {
//         res.status(401).send({message: 'Wrong user or password'});
//         return;
//     }
//     var token = jwt.sign(profile, 'secret');
//     res.status(200).json({token: token});
// });



// router.get('/posts', function(req, res) {
//     knex('posts')
//         .then(function(data) {
//             console.log(data);
//             res.json(data);
//         })
//         .catch(function(err) {
//             res.json(err);
//         });
});



module.exports = router;
