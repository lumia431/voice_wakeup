var express = require('express');
var router = express.Router();
const fs = require('fs')
const getFiles = require('../utils/getFiles')
const path = require('path')

router.get('/train', function (req, res, next) {
    var filesList = new Array
    getFiles(path.join(__dirname,'..','/train'),filesList)
    var arr = new Array
    filesList.forEach(item => arr.push({
        voice:item
    }))
    res.json({
        status: 0,
        msg: '查询成功',
        result:arr
    })

})


router.get('/db', function (req, res, next) {
    var filesList = new Array
    getFiles(path.join(__dirname,'..','/db'),filesList)
    res.json({
        status: 0,
        msg: '查询成功',
        result:filesList
    })
})

module.exports = router;