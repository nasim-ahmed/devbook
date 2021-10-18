var express = require('express');
var router = express.Router();

//@route  GET api/posts/test
//@desc   Tests posts route
//@access Public
router.get('/test', function(req, res, next) {
    res.send('posts working');
  });
module.exports = router;