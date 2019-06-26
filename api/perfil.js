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

app.get('*', async (req, res) => {
  const id = req.params.id;
  const data = await UserSchema.findById(id);
  res.status(200).json(data[0]);
});

module.exports = app;
