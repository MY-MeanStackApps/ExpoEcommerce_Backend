var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')
var compression = require('compression');
const mongoose = require('mongoose')
mongoose.connect(
        'mongodb://localhost:27017/expo', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
    )
    // Express Start
var app = express();


app.use(compression({
    level: 6,
    threshold: 0,
}));

app.use(cors());


app.use(express.static(__dirname + '/uploads'));

app.use(bodyParser.json({ limit: '1024mb' }));
app.use(bodyParser.urlencoded({
    limit: '1024mb',
    extended: true,
    parameterLimit: 50000
}));


// Header For Access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Token");
    next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/individual', require('./routes/individual'));
app.use('/bussiness', require('./routes/bussiness'));
app.use('/filesave', require('./routes/SaveFile'));
app.use('/category', require('./routes/category'));
app.use('/codedomain', require('./routes/code_domain'));
app.use('/codedomain/values/', require('./routes/code_domainValues'));
app.use('/relaited/codedomain/', require('./routes/related_domain'));
// app.use('/sendemail', require('./routes/EmailSend'));


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

module.exports = app;