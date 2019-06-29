const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
  const { id, text, date } = req.body;
  const newPost = {
    text,
    date,
  };
  const resp = await UserSchema.findByIdAndUpdate(id, { $push: { posts: newPost } });
  if (resp) {
    res.status(200).send();
  } else {
    res.status(501).send();
  }
});

module.exports = app;
