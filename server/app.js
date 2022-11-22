var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const checkToken = require('./middleware/checkToken')
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var fileRouter = require('./routes/file');
var taskRouter = require('./routes/task');
var voiceRouter = require('./routes/voice');
var reportRouter = require('./routes/report');
var progressRouter = require('./routes/progress');

var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});
app.use(checkToken)
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 100000 }))
app.use(bodyParser.json({ limit: '100mb' }))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/file', fileRouter);
app.use('/task', taskRouter);
app.use('/voice', voiceRouter);
app.use('/report', reportRouter);
app.use('/progress', progressRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
console.log('success listen at port: 3000')
module.exports = app;