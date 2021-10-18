var express = require('express');
var router = express.Router();

//@route  GET api/profiles/test
//@desc   Tests profiles route
//@access Public
router.get('/test', function(req, res, next) {
    res.send('posts working');
  });
module.exports = router;