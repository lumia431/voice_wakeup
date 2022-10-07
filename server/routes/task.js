var express = require('express');
var router = express.Router();
var dbmysql = require('../models/mysql.js');
const guid = require('../utils/uuid.js')

router.post('/getTaskList', function (req, res, next) {
    var user = "'" + req.body.user + "'"
    dbmysql.query(`select count(*) from tbl_task where user_email=${user}`
        , (error, results, fields) => {
            if (error) {
                res.json({
                    status: -1,
                    msg: '查询失败',
                    result: error
                })
            } else {
                var total = results[0][`count(*)`]
                dbmysql.query(`select * from tbl_task where user_email=${user} order by id limit ${(req.body.pagenum - 1)*req.body.pagesize},${req.body.pagesize}`, (error, results, fields) => {
                    if (error) {
                        res.json({
                            status: -1,
                            msg: '查询失败',
                            result: error
                        })
                    } else {
                        
                        results.forEach(element => {
                            console.log(element.modelList.split(','))
                            element.modelList = element.modelList.split(',')
                            element.projectList = element.projectList.split(',')
                            element.wordList = element.wordList.split(',')
                        })
                        res.json({
                            status: 0,
                            msg: '查询成功',
                            result: {
                                total: total,
                                data: results
                            }
                        })
                    }
                })
            }
        })
})

router.post('/addTask', function (req, res, next) {
    
    var taskname = "'" + req.body.taskname + "'"
    var voiceFile = "'" + req.body.voiceFile + "'"
    var noiseFile = "'" + req.body.noiseFile + "'"
    var uuid = "'" + guid() + "'"
    var createtime = "'" + new Date().toLocaleString() + "'"
    var threadNum = req.body.threadNum
    var modelList = "'" + req.body.modelList + "'"
    var projectList = "'" + req.body.projectList + "'"
    var wordList = "'" + req.body.wordList + "'"
    var dbPath = "'" + req.body.dbPath + "'"
    var user_email = "'" + req.body.user_email + "'"

    dbmysql.query(`insert into tbl_task(taskname,voiceFile,noiseFile,uuid,createtime,threadNum,modelList,projectList,wordList,dbPath,user_email)
    values (${taskname},${voiceFile},${noiseFile},${uuid},${createtime},${threadNum},${modelList},${projectList},${wordList},${dbPath},${user_email})`
        , (error, results, fields) => {
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

module.exports = router;