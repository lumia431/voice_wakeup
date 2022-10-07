var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.post('/getReport', function (req, res, next) {
    var path = req.body.path
    var voiceList = req.body.voiceList.split(',')
    var sql = ''
    modelList.forEach(element => {
        sql += `imeiCode='${element}' or `
    })
    sql = sql.substring(0, sql.length - 3)
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
module.exports = router;