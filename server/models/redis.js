var redis = require('redis')
var redisClient = redis.createClient(6379,"127.0.0.1")
module.exports = redisClient
