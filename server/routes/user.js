var express = require('express');
var router = express.Router();
var dbmysql = require('../models/mysql.js');
const createToken = require('../middleware/createToken.js')
const guid = require('../utils/uuid.js')
const sendMail = require('../middleware/sendMail.js')
const sha1 = require('sha1')
var entity = require('../entity/entity.js');
const url = require('../config/env')
/* 注册 */
router.post('/register', function (req, res, next) {
    var user = entity.user
    var uuid = guid()
    user.email = "'" + req.body.email + "'"
    user.password = "'" + sha1(req.body.password) + "'"
    user.uuid = "'" + uuid + "'"
    user.token = "'" + createToken(user.email) + "'"
    dbmysql.query("select * from tbl_user where email = " + user.email, (error, results, fields) => {
        if (error) {
            res.json({
                status: -1,
                msg: '注册失败',
                result: error
            })
        }
        else {
            if (results == 0) {
                sendMail(req.body.email, uuid)
                dbmysql.query(`insert into tbl_user(uuid,password,email,token) values (${user.uuid},${user.password},${user.email},${user.token})`
                    , (error, results, fields) => {
                        if (error) {
                            res.json({
                                status: -1,
                                msg: '注册失败',
                                result: error
                            })
                        } else {
                            res.json({
                                status: 0,
                                msg: '注册成功',
                                result: results
                            })
                        }
                    })
            } else {
                res.json({
                    status: -1,
                    msg: '注册失败,用户名已经存在',
                    result: results
                })
            }
        }
    })
});

/* 登录 */
router.post('/login', function (req, res, next) {
    var user = entity.user
    var password = sha1(req.body.password)
    var token = createToken(req.body.email)
    user.email = "'" + req.body.email + "'"
    dbmysql.query(`select password,email_validated from tbl_user where email = ${user.email}`, (error, results, fields) => {
       if (error) {
            res.json({
                status: -1,
                msg: '登录失败',
                result: error
            })
        } else if (results == 0) {
            res.json({
                status: -1,
                msg: '账号不存在',
                result: results
            })
        } else if (results[0].email_validated == 0) {
            res.json({
                status: -1,
                msg: '账号未激活',
                result: results
            })
        } else {
            if (password == results[0].password) {
                res.json({
                    status: 0,
                    msg: '登录成功',
                    result: {
                        email:req.body.email,
                        password:password,
                        token:token
                    }
                })
            } else {
                res.json({
                    status: -1,
                    msg: '密码错误',
                    result: results
                })
            }
        }
    })

});

/* 验证用户 */
router.get('/checkCode', function (req, res, next) {
    var email = "'" + req.query.email + "'"
    var uuid = "'" + req.query.code + "'"
    dbmysql.query(`select * from tbl_user where email = ${email} and uuid = ${uuid}`, (error, results, fields) => {
        if (error) {
            res.json({
                status: -1,
                msg: '校验失败',
                result: error
            })
        } else {
            if (results == 0) {
                res.json({
                    status: -1,
                    msg: '校验失败',
                    result: results
                })
            } else {
                dbmysql.query(`update tbl_user set email_validated=1`, () =>{

                })
                res.redirect(`${url.baseUrl}login`)
            }
        }
    })
});

/* 验证用户 */
router.get('/exit', function (req, res, next) {

    console.log('exit')
});


module.exports = router;