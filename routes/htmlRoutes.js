//requiring express, path 
const path = require('path');
const express = require('express');
const router = express.Router();


//get index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

router.get('/exercise',(req,res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
