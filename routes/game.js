var express = require('express');
var gameData = require('../data/sample-game');
var router = express.Router();
var geoip = require('geoip-lite');
var publicIp = require('public-ip');
var session = require('express-session');

/* GET game */
router.get('/:gameID/:gameTitle', function(req, res, next) {
  //make API call with game id: req.params.gameID
  //or by game title req.params.gameTitle

  function sendResponse (){
    res.render('game', { data: gameData, country: req.session.country });
  }

  if(!req.session.country){
    publicIp.v4().then(ip => {
      var geo = geoip.lookup(ip);
      if(geo === null){
        geo = { country: 'US' };
      }
      req.session.country = geo.country;
      sendResponse();
    });
  } else {
    sendResponse();
  }

});

module.exports = router;
