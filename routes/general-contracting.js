'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/general-contracting', (req, res) => {
    res.render('general-contracting', {title: 'general-contracting'});
  });

module.exports = router;