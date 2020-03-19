var express = require('express');
var router = express.Router();


router.get('/final', function (req, res, next) {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let design = fullUrl.replace("final", 'design')

    if (req.query.state == "save") {
        res.render('save', {title: "Save design", url: design})
    } 
    else {
        res.render('final', {
            title: "Print design",
            values: req.query,
            url: fullUrl
        })
    }
});


module.exports = router;