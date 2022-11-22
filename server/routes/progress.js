var express = require('express');
var router = express.Router();
var redisClient = require('../models/redis.js');

router.post('/getProgress', function (req, res, next) {
    redisClient.hget('testProgress',req.body.task, function(error, ret) {
        console.log(ret)
        if (error) {
            res.json({
                status: -1,
                msg: '删除失败',
                result: error
            })
        } else {
            res.json({
                status: 0,
                msg: '查询成功',
                result: ret
            })
        }
    })
})

module.exports = router;