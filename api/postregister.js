const app = require('./util/app');
const mongooseConnect = require('./api/util/mongoose');
const UserSchema = require('./models/user');

[...mongooseConnect];

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
