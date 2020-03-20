var express = require('express');
var router = express.Router();


router.get('/final', function (req, res, next) {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let design = fullUrl.replace("final", 'design')


        res.render('final', {
            title: "Print design",
            res: req.query,
            url: design
        })
    
});


module.exports = router;