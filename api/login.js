const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserSchema = require('../models/user');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();

const mongoDB = process.env.URI_DB;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error la conexion a la base de datos fallo'));

app.post('*', async (req, res) => {
  const user = req.body;
  const validateUser = await UserSchema.findOne({ mail: user.mail, pass: user.pass });
  if (validateUser) {
    res.status(200).send(validateUser.id);
  } else {
    res.status(501).send();
  }

});

module.exports = app;
