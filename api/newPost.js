const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
  const id = req.body.id;
  const newPost = req.body.newPost;
  const resp = await UserSchema.findByIdAndUpdate(id, { $push: { posts: newPost } });
  if (resp) {
    res.status(200).json(newPost);
  } else {
    res.status(501).send();
  }
});

module.exports = app;
