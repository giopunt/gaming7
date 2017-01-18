var express = require('express');
var catData = require('../data/sample-cat');
var router = express.Router();
var geoip = require('geoip-lite');
var publicIp = require('public-ip');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  function sendResponse (){
    res.render('index', { data: catData, country: req.session.country });
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
