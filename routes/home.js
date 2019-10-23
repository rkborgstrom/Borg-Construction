'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/home', (req, res) => {
  res.render('home', {title: 'home'});
});

router.post('/home', (req, res, next) => {
    knex('all_data')
    .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        message: req.body.message,
    }, '*')
  
    .then((all_data) => {
        res.render('index', {all_data});
    })
  
    .catch((err) => {
        next(err);
    });
  });

module.exports = router;