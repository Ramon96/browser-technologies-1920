var express = require('express');
var router = express.Router();


router.get('/save', function (req, res, next) {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let design = fullUrl.replace("save", 'design')


    res.render('save', {title: "Save design", url: design})
});


module.exports = router;