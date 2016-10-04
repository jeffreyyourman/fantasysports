var express = require('express');
var router = express.Router();

//connection to model files
var userdata = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

//connection to database;
var connection = require('../config/connection.js')

router.get('/NFL', function(req,res){
  fantasydata.allNFLmatchups(function(allNFLmatchups){
    fantasydata.allFantasyDataQB(function(fantasydataQB){
      var hbsObject = {
        logged_in:req.session.logged_in,
        fantasydataQB:fantasydataQB,
        allNFLmatchups:allNFLmatchups
      }
      res.render('fantasydata/fantasy_data', hbsObject);
    });
  });
});
router.get('/NFL/QB', function(req,res){
  fantasydata.allNFLmatchups(function(allNFLmatchups){
    fantasydata.allFantasyDataQB(function(fantasydataQB){
      var hbsObject = {
        logged_in:req.session.logged_in,
        fantasydataQB:fantasydataQB,
        allNFLmatchups:allNFLmatchups
      }
      res.render('fantasydata/fantasy_data', hbsObject);

    });
  });
});
router.get('/NFL/RB', function(req,res){
  fantasydata.allNFLmatchups(function(allNFLmatchups){
    fantasydata.allFantasyDataRB(function(fantasydataRB){
      var hbsObject = {
        logged_in: req.session.logged_in,
        fantasydataRB:fantasydataRB,
        allNFLmatchups:allNFLmatchups
      }
      res.render('fantasydata/fantasy_data', hbsObject);
    });
  });
});
router.get('/NFL/WR', function(req,res){
  fantasydata.allNFLmatchups(function(allNFLmatchups){
    fantasydata.allFantasyDataWR(function(fantasydataWR){
      var hbsObject = {
        logged_in: req.session.logged_in,
        fantasydataWR:fantasydataWR,
        allNFLmatchups:allNFLmatchups
      }
      res.render('fantasydata/fantasy_data', hbsObject);
    });
  });
});
router.get('/NFL/TE', function(req,res){
  fantasydata.allNFLmatchups(function(allNFLmatchups){
    fantasydata.allFantasyDataTE(function(fantasydataTE){
      var hbsObject = {
        logged_in: req.session.logged_in,
        fantasydataTE:fantasydataTE,
        allNFLmatchups:allNFLmatchups
      }
      res.render('fantasydata/fantasy_data', hbsObject);
    });
  });
});
router.get('/NFL/K', function(req,res){
  fantasydata.allNFLmatchups(function(allNFLmatchups){
    fantasydata.allFantasyDataK(function(fantasydataK){
      var hbsObject = {
        logged_in: req.session.logged_in,
        fantasydataK:fantasydataK,
        allNFLmatchups:allNFLmatchups
      }
      res.render('fantasydata/fantasy_data', hbsObject);
    });
  });
});
router.get('/NFL/Def', function(req,res){
  fantasydata.allNFLmatchups(function(allNFLmatchups){
    fantasydata.allFantasyDataDef(function(fantasydataDef){
      var hbsObject = {
        logged_in: req.session.logged_in,
        fantasydataDef:fantasydataDef,
        allNFLmatchups:allNFLmatchups
      }
      res.render('fantasydata/fantasy_data', hbsObject);
    });
  });
});

module.exports = router;
