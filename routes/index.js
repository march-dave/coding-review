const express = require('express');
const router = express.Router();

const Mail = require('../config/mail');

/* GET home page. */
router.get('/', function(req, res, next) {

  Mail.sendVerify();

  res.render('index', { title: 'Express' });
});

module.exports = router;
