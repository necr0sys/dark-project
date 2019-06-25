const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('*', (req, res) => {
  const data = req.body;
  const checkMail = users.find((user) => {
    return user.mail === data.mail && user.pass === data.pass;
  })
  setTimeout(() => {
    if (checkMail) {
      res.status(200).send();
    } else {
      res.status(501).send();
    }
  },3000)
});

module.exports = app;
