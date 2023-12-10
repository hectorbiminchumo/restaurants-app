const express = require('express');

const router = express.Router();

//to register different routes handlers

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/about', function(req,res) {
    res.render('about');
});

// router is an object we now just added our configuration
// with this line we are exporting this configured router object.
module.exports = router;