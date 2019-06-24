var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();
app.use(helmet());
app.use(cors());
app.use(compression())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.post('/login', (req, res) => {
  const data = req.body;
  const checkMail = users.find((user) => {
    return user.mail === data.mail;
  })
  setTimeout(() => {
    if (checkMail) {
      res.status(501).send(data.mail);
    } else {
      res.status(200).send(data.mail);
    }
  },3000)
})

module.exports = app;
