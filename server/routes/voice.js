var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
var dbmysql = require('../models/mysql.js');

router.post('/addTaskVoice', function (req, res, next) {
    var voice = req.body.voice.split(',')
    var task = "'" + req.body.task + "'"
    sql = `insert into tbl_voice(voice,task) values (`
    voice.forEach(item => {
        sql += `'${item}',${task}),(`
    })
    sql = sql.substring(0, sql.length - 2)
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

router.post('/editTaskVoice', function (req, res, next) {
    var voice = req.body.voice.split(',')
    var task = "'" + req.body.task + "'"
    sql = `insert into tbl_voice(voice,task) values (`
    voice.forEach(item => {
        sql += `'${item}',${task}),(`
    })
    sql = sql.substring(0, sql.length - 2)

    dbmysql.query(`delete from tbl_voice where task=${task}`, (error, results, fields) => {
        if (error) {
            res.json({
                status: -1,
                msg: '编辑失败',
                result: error
            })
        } else {
            dbmysql.query(sql, (error, results, fields) => {
                if (error) {
                    res.json({
                        status: -1,
                        msg: '编辑失败',
                        result: error
                    })
                } else {
                    res.json({
                        status: 0,
                        msg: '编辑成功',
                        result: results
                    })
                }
            })
        }
    })
})

router.post('/getTaskVoice', function (req, res, next) {
    var task = "'" + req.body.task + "'"
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

router.post('/deleteTaskVoice', function (req, res, next) {
    var task = "'" + req.body.task + "'"
    dbmysql.query(`delete from tbl_voice where task=${task}`, (error, results, fields) => {
        if (error) {
            res.json({
                status: -1,
                msg: '删除失败',
                result: error
            })
        } else {
            res.json({
                status: 0,
                msg: '删除成功',
                result: results
            })
        }
    })
})

module.exports = router;