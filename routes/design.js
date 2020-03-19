var express = require('express');
var router = express.Router();


router.get('/design', function(req, res, next) {
  console.log(req.query)
  res.render('design', { title: 'Jouw Design', res: req.query});
});



module.exports = router;