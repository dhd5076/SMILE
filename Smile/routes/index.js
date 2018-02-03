'use strict';
var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function (req, res) {
    global.motd = fs.readFileSync('motd', 'utf8');
    res.render('index', { motd: global.motd });
});

module.exports = router;
