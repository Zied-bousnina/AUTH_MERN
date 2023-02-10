var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config()
 const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

//passport 
const passport = require('passport')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport
app.use(passport.initialize())
require('./security/passport')(passport)
// Connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true, //make this true
    autoIndex: true, //make this also true
})
.then(()=>{
    console.log("Connected to db")
}
)
.catch(err=>{
    console.log(err)
})
app.use('/api', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
