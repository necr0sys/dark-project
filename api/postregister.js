const app = require('./util/app');
const mongoose = require('./util/mongoose');

[...mongoose];

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
