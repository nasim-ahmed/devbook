var express = require('express');
var router = express.Router();

//@route  GET api/profiles/test
//@desc   Tests profiles route
//@access Public
router.get('/test', function(req, res, next) {
    res.json({msg: 'profiles working'});
  });
module.exports = router;