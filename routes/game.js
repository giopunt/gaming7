var express = require('express');
var gameData = require('../data/sample-game');
var router = express.Router();

/* GET game */
router.get('/:gameTitle/:gameID', function(req, res, next) {

  //make API call with param gameID
  //@Param req.params.gameID

  res.render('game', { data: gameData });
});

module.exports = router;
