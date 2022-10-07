var express = require('express');
var router = express.Router();
const fs = require('fs')
const getFiles = require('../utils/getFiles')
const path = require('path')

router.get('/voice', function (req, res, next) {
    var filesList = new Array
    getFiles(path.join(__dirname,'..','..','src/voice'),filesList)
    res.json({
        status: 0,
        msg: '查询成功',
        result:filesList
    })

})

router.get('/noise', function (req, res, next) {
    var filesList = new Array
    getFiles(path.join(__dirname,'..','..','src/noise'),filesList)
    res.json({
        status: 0,
        msg: '查询成功',
        result:filesList
    })

})

module.exports = router;