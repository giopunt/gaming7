var express = require('express');
var gameData = require('../data/sample-game');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('game', { data: gameData });
});

module.exports = router;
