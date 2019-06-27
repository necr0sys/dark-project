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
  const res = await UserSchema.findByIdAndUpdate(id, { perfilImg: img }, (err, info) => {
    if (err) console.error(err);
    return info;
  });
  if (res) {
    res.status.send(id);
  } else {
    res.status(501).send("error en la base de datos");
  }
});

module.exports = app;
