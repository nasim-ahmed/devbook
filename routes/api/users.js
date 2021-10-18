var express = require('express');
var router = express.Router();

//@route  GET api/users/test
//@desc   Tests users route
//@access Public

router.get('/test', function(req, res, next) {
    res.send('users working');
  });
module.exports = router;