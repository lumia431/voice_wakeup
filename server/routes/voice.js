var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
var dbmysql = require('../models/mysql.js');

router.post('/getVoice', function (req, res, next) {
    var path = req.body.path
    modelList = req.body.modelList.split(',')
    wordList = req.body.wordList.split(',')
    sceneList = req.body.sceneList.split(',')
    var sql = '('
    modelList.forEach(element => {
        sql += `imeiCode='${element}' or `
    })
    sql = sql.substring(0, sql.length - 3)
    sql += ")and("
    wordList.forEach(element => {
        sql += `wakeUpWord='${element}' or `
    })
    sql = sql.substring(0, sql.length - 3)
    sql += ")and("
    sceneList.forEach(element => {
        sql += `scene='${element}' or `
    })
    sql = sql.substring(0, sql.length - 3)
    sql += ")"
    let sqlite = new sqlite3.Database(path, (err) => {
        if (err) {
            console.error(err.message);
            res.json({
                status: -1,
                msg: '查询失败',
                result: err
            })
        } else {
            sqlite.all(`select wakeUpWord,imeiCode,scene,actor from sceneCase where ` + sql, function (err, result) {
                if (err) {
                    res.json({
                        status: -1,
                        msg: '查询失败',
                        result: err
                    })
                }
                else {
                    var results = new Array
                    result.forEach(element => {
                        var tmp = element.wakeUpWord + '_' + element.imeiCode + '_' + element.scene + '_' + element.actor
                        results.push({ voice: tmp })
                    });
                    res.json({
                        status: 0,
                        msg: '查询成功',
                        result: results
                    })
                }
            })
        }
    });
})

router.post('/getAllVoice', function (req, res, next) {
    var path = req.body.path
    let sqlite = new sqlite3.Database(path, (err) => {
        if (err) {
            console.error(err.message);
            res.json({
                status: -1,
                msg: '查询失败',
                result: err
            })
        } else {
            var sql = `select wakeUpWord,imeiCode,scene,actor from sceneCase where scene!='train'`
            sqlite.all(sql, function (err, result) {
                if (err) {
                    res.json({
                        status: -1,
                        msg: '查询失败',
                        result: err
                    })
                }
                else {
                    var results = new Array
                    result.forEach(element => {
                        var tmp = element.wakeUpWord + '_' + element.imeiCode + '_' + element.scene + '_' + element.actor
                        results.push({ voice: tmp })
                    });
                    res.json({
                        status: 0,
                        msg: '查询成功',
                        result: results
                    })
                }
            })
        }
    });
})

router.post('/addVoice', function (req, res, next) {
    var voice = req.body.voice.split(',')
    var task = "'"+req.body.task+"'"
    sql = `insert into tbl_voice(voice,task) values (`
    voice.forEach(item => {
        sql += `'${item}',${task}),(`
    })
    sql = sql.substring(0,sql.length - 2)
    dbmysql.query(sql, (error, results, fields) => {
            if (error) {
                res.json({
                    status: -1,
                    msg: '新增失败',
                    result: error
                })
            } else {
                res.json({
                    status: 0,
                    msg: '新增成功',
                    result: results
                })
            }
        })
})

router.post('/getTaskVoice', function (req, res, next) {
    var task = "'"+req.body.task+"'"
    dbmysql.query(`select voice from tbl_voice where task=${task}`, (error, results, fields) => {
            if (error) {
                res.json({
                    status: -1,
                    msg: '查询失败',
                    result: error
                })
            } else {
                res.json({
                    status: 0,
                    msg: '新增成功',
                    result: results
                })
            }
        })
})

module.exports = router;