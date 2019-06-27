const app = require('./util/app');
const mongoose = require('mongoose');
const UserSchema = require('../models/user');

const mongoDB = process.env.URI_DB;
mongoose.connect(mongoDB, { useFindAndModify: false });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error la conexion a la base de datos fallo'));


app.post('*', async (req, res) => {
  const { id, img } = req.body;
  const isOk = await UserSchema.findByIdAndUpdate(id, { perfilImg: img });
  if (isOk) {
    res.status.send(id);
  } else {
    res.status(501).send(id);
  }
});

module.exports = app;
